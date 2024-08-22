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
import optionConfig from "@utils/option.config";
import { processFileList } from "@utils/processFileList";
import useProjectStore from "@/store/projectStore";
import useUIStore from "@/store/uiStore";

const ProjectStarter = () => {
  const { errorMessage, setErrorMessage } = useUIStore();
  const {
    path,
    setPath,
    selectedPackageManager,
    setSelectedPackageManager,
    projectName,
    setProjectName,
    files,
    setFiles
  } = useProjectStore(state => ({
    path: state.path,
    setPath: state.setPath,
    selectedPackageManager: state.selectedPackageManager,
    setSelectedPackageManager: state.setSelectedPackageManager,
    projectName: state.projectName,
    setProjectName: state.setProjectName,
    files: state.files,
    setFiles: state.setFiles
  }));

  const packageManagers = optionConfig.packageManagers;

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
    const inputValue = event.target.value;
    const validInput = inputValue.replace(/[^a-z0-9_-]/g, "");
    const startsWithNumber = /^[0-9]/.test(validInput);
    const maxLength = 214;
    let errorMessage = "";

    if (inputValue !== validInput) {
      errorMessage = "영문 소문자, 숫자, -, _만 입력 가능합니다.";
    } else if (startsWithNumber) {
      errorMessage = "숫자로 시작할 수 없습니다.";
    } else if (validInput.length > maxLength) {
      errorMessage = `최대 ${maxLength}자까지 가능합니다.`;
    }

    setErrorMessage(errorMessage);

    if (!errorMessage) {
      setProjectName(validInput);
    }
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
      {errorMessage && (
        <span className="error-message-text">{errorMessage}</span>
      )}
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
