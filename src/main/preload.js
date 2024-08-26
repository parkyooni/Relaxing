import { contextBridge, ipcRenderer } from "electron";

contextBridge.exposeInMainWorld("api", {
  joinProjectPath: (path, projectName) =>
    ipcRenderer.invoke("joined-project-path", path, projectName),
  loadProjectList: () => ipcRenderer.invoke("get-project-list"),
  deleteProjectList: projectName =>
    ipcRenderer.invoke("delete-project-list", projectName),
  checkProjectPath: projectPath =>
    ipcRenderer.invoke("check-project-path", projectPath),
  selectFolder: () => ipcRenderer.invoke("setting-path"),
  readDirectory: folderPath => ipcRenderer.invoke("read-directory", folderPath),
  readAllDirectory: folderPath =>
    ipcRenderer.invoke("read-all-directory", folderPath),
  installProject: projectData =>
    ipcRenderer.invoke("install-project", projectData),
  installDependencies: dependencyData =>
    ipcRenderer.invoke("install-dependencies", dependencyData),
  loadPackageJsonData: projectPath =>
    ipcRenderer.invoke("get-packageJson-data", projectPath),
  addInstallDependencies: dependencyData =>
    ipcRenderer.invoke("add-install-dependencies", dependencyData),
  uninstallDependencies: dependencyData =>
    ipcRenderer.invoke("uninstall-dependencies", dependencyData)
});
