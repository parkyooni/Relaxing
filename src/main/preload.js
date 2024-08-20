const { contextBridge, ipcRenderer } = require("electron");

contextBridge.exposeInMainWorld("api", {
  loadProjectList: () => ipcRenderer.invoke("get-project-list"),
  deleteProjectList: projectName =>
    ipcRenderer.invoke("delete-project-list", projectName)
});
