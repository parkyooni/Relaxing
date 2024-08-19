export const getTopFolderPath = fullPath => {
  return fullPath.substring(0, fullPath.indexOf("/"));
};

export const processFileList = (fileList, topFolderPath) => {
  const foldersSet = new Set();
  const filesArray = [];

  Array.from(fileList).forEach(file => {
    const relativePath = file.webkitRelativePath.replace(
      `${topFolderPath}/`,
      ""
    );
    const pathSegments = relativePath.split("/");

    if (pathSegments.length === 1) {
      filesArray.push({
        name: file.name,
        type: "file",
        path: file.webkitRelativePath
      });
    } else if (pathSegments.length > 1) {
      foldersSet.add(pathSegments[0]);
    }
  });

  foldersSet.forEach(folderName => {
    filesArray.push({
      name: folderName,
      type: "folder",
      path: `${topFolderPath}/${folderName}`
    });
  });

  return filesArray.sort((a, b) => {
    if (a.type === b.type) {
      return a.name.localeCompare(b.name);
    }
    return a.type === "folder" ? -1 : 1;
  });
};
