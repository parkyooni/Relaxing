import { app, BrowserWindow, ipcMain, dialog } from "electron";
import path from "node:path";
import fs from "fs";
import os from "os";

if (require("electron-squirrel-startup")) {
  app.quit();
}

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

  const commandPath = path.join(basePath, "command");
  if (!fs.existsSync(commandPath)) {
    fs.mkdirSync(commandPath);
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

ipcMain.handle("get-project-list", async () => {
  try {
    const data = fs.readFileSync(projectPath, "utf-8");
    const projectData = JSON.parse(data);
    return projectData;
  } catch (error) {
    console.error(error);
  }
});

ipcMain.handle("delete-project-list", async (_, projectName) => {
  try {
    const data = fs.readFileSync(projectPath, "utf-8");
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
    const files = fs.readdirSync(folderPath, { withFileTypes: true });

    return files.map(file => ({
      name: file.name,
      type: file.isDirectory() ? "folder" : "file",
      path: path.join(folderPath, file.name)
    }));
  } catch (error) {
    console.error(error);
  }
});
