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
import mockData from "@utils/mockData.json";
import { getTopFolderPath, processFileList } from "@utils/fileUtils.cjs";

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
      const topFolderPath = getTopFolderPath(fullPath);
      setPath(topFolderPath);

      const sortedFilesArray = processFileList(fileList, topFolderPath);
      setFiles(sortedFilesArray);
    }
  };

  const packageManagers = mockData.packageManagers;

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
