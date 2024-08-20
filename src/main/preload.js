const { contextBridge, ipcRenderer } = require("electron");

contextBridge.exposeInMainWorld("api", {
  loadProjectList: path => ipcRenderer.invoke("get-project-list", path),
  deleteProjectList: (path, projectName) =>
    ipcRenderer.invoke("delete-project-list", { path, projectName })
});
