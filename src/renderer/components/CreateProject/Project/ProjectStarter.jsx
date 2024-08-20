import { useEffect } from "react";
import { useRef } from "react";
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
import useProjectStore from "@/store/projectStore";

const ProjectStarter = () => {
  const fileInputRef = useRef(null);
  const {
    path,
    setPath,
    selectedPackageManager,
    setSelectedPackageManager,
    projectName,
    setProjectName,
    files,
    setFiles,
    validateProjectStarter,
    isProjectStarterValid
  } = useProjectStore();

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

      validateProjectStarter();
    }
  };

  const packageManagers = mockData.packageManagers;

  useEffect(() => {
    if (!selectedPackageManager && packageManagers.length > 0) {
      setSelectedPackageManager(packageManagers[0]);
    }
  }, [selectedPackageManager, setSelectedPackageManager, packageManagers]);

  const handleProjectNameChange = event => {
    setProjectName(event.target.value);
    validateProjectStarter();
  };

  const handlePackageManagerChange = event => {
    const selectedManager = event.target.value;
    setSelectedPackageManager(selectedManager);
    validateProjectStarter();
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
      <ProjectNameInput
        placeholder="프로젝트 이름을 적어주세요..."
        value={projectName}
        onChange={handleProjectNameChange}
      />
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
      {isProjectStarterValid && <p>프로젝트 정보가 유효합니다.</p>}
    </ProjectStarterContainer>
  );
};

export default ProjectStarter;
