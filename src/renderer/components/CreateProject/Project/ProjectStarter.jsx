import { useState, useRef } from "react";
import {
  ProjectStarterContainer,
  PathInputContainer,
  PathInput,
  UploadButton,
  DirectoryListContainer,
  DirectoryItem,
  ProjectNameInput,
  SelectWrapper,
  ProjectNameSelect
} from "@public/style/Project.styles";

const ProjectStarter = () => {
  const [path, setPath] = useState("");
  const [selectedPackageManager, setSelectedPackageManager] = useState("npm");
  const [files, setFiles] = useState([]);
  const fileInputRef = useRef(null);

  const handleUploadClick = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = event => {
    const fileList = event.target.files;
    if (fileList.length > 0) {
      const fullPath = fileList[0].webkitRelativePath;
      const topFolderPath = fullPath.substring(0, fullPath.indexOf("/"));
      setPath(topFolderPath);

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

      const sortedFilesArray = filesArray.sort((a, b) => {
        if (a.type === b.type) {
          return a.name.localeCompare(b.name);
        }
        return a.type === "folder" ? -1 : 1;
      });

      setFiles(sortedFilesArray);
    }
  };

  const packageManagers = ["npm"];
  const handlePackageManagerChange = event => {
    setSelectedPackageManager(event.target.value);
  };

  return (
    <ProjectStarterContainer>
      <PathInputContainer>
        <PathInput type="text" value={path} readOnly />
        <UploadButton onClick={handleUploadClick}>업로드</UploadButton>
        <input
          type="file"
          style={{ display: "none" }}
          ref={fileInputRef}
          onChange={handleFileChange}
          webkitdirectory="true"
        />
      </PathInputContainer>
      <DirectoryListContainer>
        {files.map((item, index) => (
          <DirectoryItem key={index} isFolder={item.type === "folder"}>
            {item.name}
          </DirectoryItem>
        ))}
      </DirectoryListContainer>
      <ProjectNameInput placeholder="프로젝트 이름을 적어주세요..." />
      <SelectWrapper>
        <ProjectNameSelect
          value={selectedPackageManager}
          onChange={handlePackageManagerChange}
        >
          {packageManagers.map((manager, index) => (
            <option key={index} value={manager}>
              {manager}
            </option>
          ))}
        </ProjectNameSelect>
      </SelectWrapper>
    </ProjectStarterContainer>
  );
};

export default ProjectStarter;
