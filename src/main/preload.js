const { contextBridge, ipcRenderer } = require("electron");

contextBridge.exposeInMainWorld("api", {
  loadProjectList: path => ipcRenderer.invoke("get-project-list", path)
});
