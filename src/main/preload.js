const { contextBridge, ipcRenderer } = require("electron");

contextBridge.exposeInMainWorld("api", {
  loadProjectList: () => ipcRenderer.invoke("get-project-list"),
  deleteProjectList: projectName =>
    ipcRenderer.invoke("delete-project-list", projectName),
  selectFolder: () => ipcRenderer.invoke("setting-path"),
  readDirectory: folderPath => ipcRenderer.invoke("read-directory", folderPath)
});
