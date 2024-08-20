const { app, BrowserWindow, ipcMain } = require("electron");
const path = require("node:path");
const fs = require("fs");

if (require("electron-squirrel-startup")) {
  app.quit();
}

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

ipcMain.handle("get-project-list", async (_, path) => {
  try {
    const data = fs.readFileSync(path, "utf-8");
    const projectData = JSON.parse(data);
    return projectData;
  } catch (error) {
    console.error(error);
  }
});

ipcMain.handle("delete-project-list", async (_, { path, projectName }) => {
  try {
    const data = fs.readFileSync(path, "utf-8");
    let projectData = JSON.parse(data);

    projectData = projectData.filter(
      project => project.projectName !== projectName
    );

    fs.writeFileSync(path, JSON.stringify(projectData, null, 2), "utf-8");

    return { updatedProjects: projectData };
  } catch (error) {
    console.error(error);
  }
});
