import { useEffect } from "react";
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
import { processFileList } from "@utils/fileUtils.cjs";
import useProjectStore from "@/store/projectStore";

const ProjectStarter = () => {
  const {
    path,
    setPath,
    selectedPackageManager,
    setSelectedPackageManager,
    projectName,
    setProjectName,
    files,
    setFiles,
    isProjectStarterValid
  } = useProjectStore(state => ({
    path: state.path,
    setPath: state.setPath,
    selectedPackageManager: state.selectedPackageManager,
    setSelectedPackageManager: state.setSelectedPackageManager,
    projectName: state.projectName,
    setProjectName: state.setProjectName,
    files: state.files,
    setFiles: state.setFiles,
    isProjectStarterValid: state.isProjectStarterValid
  }));

  const packageManagers = mockData.packageManagers;

  const handleUploadClick = async () => {
    try {
      const selectedPath = await window.api.selectFolder();
      if (selectedPath) {
        setPath(selectedPath);

        const fileList = await window.api.readDirectory(selectedPath);
        if (fileList) {
          const processedFiles = processFileList(fileList, selectedPath);
          setFiles(processedFiles);
        }
      }
    } catch (error) {
      console.error("파일 업로드 중 오류 발생:", error);
    }
  };

  useEffect(() => {
    if (!selectedPackageManager && packageManagers.length > 0) {
      setSelectedPackageManager(packageManagers[0]);
    }
  }, [selectedPackageManager, setSelectedPackageManager, packageManagers]);

  const handleProjectNameChange = event => {
    setProjectName(event.target.value);
  };

  const handlePackageManagerChange = event => {
    setSelectedPackageManager(event.target.value);
  };

  return (
    <ProjectStarterContainer>
      <PathInputContainer>
        <PathInput type="text" value={path} readOnly />
        <UploadButton onClick={handleUploadClick}>업로드</UploadButton>
      </PathInputContainer>
      <DirectoryListContainer>
        <div className="layout">
          {files.map((item, index) => (
            <DirectoryItem key={index} isFolder={item.type === "folder"}>
              {item.name}
            </DirectoryItem>
          ))}
        </div>
      </DirectoryListContainer>
      <ProjectNameInput
        placeholder="프로젝트 이름을 입력하세요..."
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
      {isProjectStarterValid && <span>프로젝트 정보가 유효합니다.</span>}
    </ProjectStarterContainer>
  );
};

export default ProjectStarter;
