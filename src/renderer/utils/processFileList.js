export const processFileList = (fileList, topFolderPath) => {
  const filesArray = [];

  fileList.forEach(file => {
    const relativePath = file.path
      ? file.path.replace(`${topFolderPath}/`, "")
      : "";
    const pathSegments = relativePath.split("/");

    const isFolder = file.type === "folder";

    if (pathSegments.length === 1 || isFolder) {
      filesArray.push({
        name: file.name,
        type: isFolder ? "folder" : "file",
        path: file.path
      });
    }
  });

  return filesArray.sort((a, b) => {
    if (a.type === b.type) {
      return a.name.localeCompare(b.name);
    }
    return a.type === "folder" ? -1 : 1;
  });
};
