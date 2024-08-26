import { app, BrowserWindow, ipcMain, dialog } from "electron";
import { exec } from "node:child_process";
import { promisify } from "node:util";
import path from "node:path";
import fs from "fs";
import os from "os";

const fsPromise = fs.promises;

if (require("electron-squirrel-startup")) {
  app.quit();
}

const buildTree = flatList => {
  const root = { name: "/", children: [], path: "/", type: "folder" };
  const pathMap = { "/": root };

  const createNode = (name, path, type) => ({
    name,
    path,
    type,
    children: []
  });

  flatList.forEach(item => {
    const normalizedPath = path.normalize(item.path);
    const parts = normalizedPath.split(path.sep).filter(Boolean);

    let currentPath = path.sep;
    let parent = root;

    parts.forEach((part, index) => {
      currentPath = path.join(currentPath, part);
      const isFile = index === parts.length - 1 && item.type !== "folder";
      const nodeType = isFile ? "file" : "folder";

      if (!pathMap[currentPath]) {
        const node = createNode(part, currentPath, nodeType);
        pathMap[currentPath] = node;
        parent.children.push(node);
      }

      parent = pathMap[currentPath];
    });
  });

  return root.children;
};

const getNextProjectId = projectData => {
  if (projectData.length === 0) return 0;
  return Math.max(...projectData.map(project => project.id)) + 1;
};

const addProjectToJson = async (
  projectJsonPath,
  projectId,
  projectName,
  framework,
  variant,
  customName,
  projectPath,
  dependencies = []
) => {
  try {
    let projectData = [];
    if (fs.existsSync(projectJsonPath)) {
      const data = await fsPromise.readFile(projectJsonPath, "utf-8");
      projectData = JSON.parse(data);
    }

    const newProject = {
      id: projectId,
      projectName: projectName,
      framework: framework,
      variant: variant || "undefined",
      path: projectPath,
      custom: {
        customName: customName || "undefined",
        dependencies: dependencies
      },
      createdAt: new Date().toISOString()
    };

    projectData.push(newProject);

    fs.writeFileSync(
      projectJsonPath,
      JSON.stringify(projectData, null, 2),
      "utf-8"
    );
  } catch (error) {
    console.error("Error adding project to JSON file:", error);
  }
};

const initializeProjectDirectories = () => {
  const homeDirectory = os.homedir();
  let basePath = "";

  switch (os.platform()) {
    case "win32":
      basePath = path.join(homeDirectory, ".relaxing");
      break;
    case "darwin":
      basePath = path.join(homeDirectory, ".relaxing");
      break;
    default:
      console.error("Unsupported platform");
  }

  if (!fs.existsSync(basePath)) {
    fs.mkdirSync(basePath, { recursive: true });
  }

  const savePath = path.join(basePath, "save");
  if (!fs.existsSync(savePath)) {
    fs.mkdirSync(savePath);
  }

  const projectPath = path.join(savePath, "rlxproject.json");
  return projectPath;
};

const projectPath = initializeProjectDirectories();

const createWindow = () => {
  const mainWindow = new BrowserWindow({
    minWidth: 700,
    height: 600,
    webPreferences: {
      preload: path.join(__dirname, "preload.js")
    },
    contextIsolation: true,
    nodeIntegration: false
  });

  if (MAIN_WINDOW_VITE_DEV_SERVER_URL) {
    mainWindow.loadURL(MAIN_WINDOW_VITE_DEV_SERVER_URL);
  } else {
    mainWindow.loadFile(
      path.join(__dirname, `../renderer/${MAIN_WINDOW_VITE_NAME}/index.html`)
    );
  }

  mainWindow.webContents.openDevTools();
};

app.whenReady().then(() => {
  createWindow();

  app.on("activate", () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow();
    }
  });
});

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});

ipcMain.handle("joined-project-path", (_, basePath, projectName) => {
  return basePath.endsWith(projectName)
    ? basePath
    : path.join(basePath, projectName);
});

ipcMain.handle("get-project-list", async () => {
  try {
    const data = await fsPromise.readFile(projectPath, "utf-8");
    const projectData = JSON.parse(data);
    return projectData;
  } catch (error) {
    console.error(error);
  }
});

ipcMain.handle("delete-project-list", async (_, projectName) => {
  try {
    const data = await fsPromise.readFile(projectPath, "utf-8");
    let projectData = JSON.parse(data);

    projectData = projectData.filter(
      project => project.projectName !== projectName
    );

    fs.writeFileSync(
      projectPath,
      JSON.stringify(projectData, null, 2),
      "utf-8"
    );

    return projectData;
  } catch (error) {
    console.error(error);
  }
});

ipcMain.handle("check-project-path", async (_, projectPath) => {
  try {
    await fsPromise.access(projectPath);
    return true;
  } catch (error) {
    console.error("Error checking project path:", error);
    return false;
  }
});

ipcMain.handle("setting-path", async () => {
  const path = await dialog.showOpenDialog({
    properties: ["openDirectory"]
  });

  if (path.filePaths && path.filePaths.length > 0) {
    return path.filePaths.shift();
  }

  return undefined;
});

ipcMain.handle("read-directory", async (_, folderPath) => {
  try {
    const files = await fsPromise.readdir(folderPath, { withFileTypes: true });

    return files.map(file => ({
      name: file.name,
      type: file.isDirectory() ? "folder" : "file",
      path: path.join(folderPath, file.name)
    }));
  } catch (error) {
    console.error(error);
  }
});

ipcMain.handle("read-all-directory", async (_, folderPath) => {
  try {
    let fileLists = [];

    const list = async currentPath => {
      const files = await fsPromise.readdir(currentPath, {
        withFileTypes: true
      });

      for (const file of files) {
        const fullPath = path.join(currentPath, file.name);

        if (file.name === "node_modules") {
          continue;
        }

        fileLists.push({
          name: file.name,
          type: file.isDirectory() ? "folder" : "file",
          path: fullPath
        });

        if (file.isDirectory()) {
          await list(fullPath);
        }
      }
    };

    await list(folderPath);
    const treeStructure = buildTree(fileLists);
    return treeStructure;
  } catch (error) {
    console.error(error);
  }
});

const execAsync = promisify(exec);
ipcMain.handle(
  "install-project",
  async (
    _,
    { path: basePath, projectName, framework, variant, customName }
  ) => {
    try {
      const projectPath = path.join(basePath, projectName);

      const command = `npm create vite@latest ${projectName} -- --template ${framework}`;
      const { stdout } = await execAsync(command, { cwd: basePath });

      const projectJsonPath = initializeProjectDirectories();

      let projectData = [];
      if (fs.existsSync(projectJsonPath)) {
        const data = await fsPromise.readFile(projectJsonPath, "utf-8");
        projectData = JSON.parse(data);
      }

      const projectId = getNextProjectId(projectData);
      addProjectToJson(
        projectJsonPath,
        projectId,
        projectName,
        framework,
        variant,
        customName,
        projectPath
      );

      return stdout;
    } catch (error) {
      console.error("Error installing project:", error);
    }
  }
);

ipcMain.handle(
  "install-dependencies",
  async (_, { path: basePath, projectName, dependencies }) => {
    try {
      const projectPath = path.join(basePath, projectName);

      const command = `npm install ${dependencies.join(" ")}`;
      const { stdout } = await execAsync(command, { cwd: projectPath });

      const projectJsonPath = initializeProjectDirectories();

      let projectData = [];
      if (fs.existsSync(projectJsonPath)) {
        const data = await fsPromise.readFile(projectJsonPath, "utf-8");
        projectData = JSON.parse(data);
      }

      const projectIndex = projectData.findIndex(
        project => project.projectName === projectName
      );
      if (projectIndex !== -1) {
        projectData[projectIndex].custom.dependencies = dependencies;
      } else {
        console.error("Project not found");
      }

      fs.writeFileSync(
        projectJsonPath,
        JSON.stringify(projectData, null, 2),
        "utf-8"
      );

      return stdout;
    } catch (error) {
      console.error(error);
    }
  }
);

ipcMain.handle(
  "add-install-dependencies",
  async (_, { path: basePath, dependencies }) => {
    try {
      const projectPath = basePath;

      const command = `npm install ${dependencies.join(" ")}`;

      const { stdout } = await execAsync(command, { cwd: projectPath });

      return stdout;
    } catch (error) {
      console.error(error);
    }
  }
);

const getLatestVersion = async packageName => {
  try {
    const { stdout } = await execAsync(`npm view ${packageName} version`);
    return stdout.trim();
  } catch (error) {
    console.error(error);
  }
};

const fetchDependencies = async dependency => {
  return await Promise.all(
    Object.entries(dependency).map(async ([name, version]) => ({
      name,
      currentVersion: version,
      latestVersion: await getLatestVersion(name)
    }))
  );
};

ipcMain.handle("get-packageJson-data", async (_, projectPath) => {
  try {
    const packageJsonPath = path.join(projectPath, "package.json");
    const packageJsonData = await fsPromise.readFile(packageJsonPath, "utf-8");
    const packageJson = JSON.parse(packageJsonData);

    const dependencies = packageJson.dependencies || {};
    const devDependencies = packageJson.devDependencies || {};

    const [myDependencies, myDevDependencies] = await Promise.all([
      fetchDependencies(dependencies),
      fetchDependencies(devDependencies)
    ]);

    return {
      dependencies: myDependencies,
      devDependencies: myDevDependencies
    };
  } catch (error) {
    console.error;
  }
});

ipcMain.handle(
  "uninstall-dependencies",
  async (_, { projectPath, packageName }) => {
    try {
      const command = `npm uninstall ${packageName}`;
      const { stdout } = await execAsync(command, { cwd: projectPath });

      return stdout;
    } catch (error) {
      console.error(error);
    }
  }
);
