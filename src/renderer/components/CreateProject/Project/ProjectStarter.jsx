import {
  useEffect,
  useRef,
  useCallback
} from "react";
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

  const { errorMessage, setErrorMessage } = useUIStore();
  const packageManagers = optionConfig.packageManagers;

  const debounceRef = useRef(null);

  const handlePathUpload = useCallback(async () => {
    if (debounceRef.current) {
      clearTimeout(debounceRef.current);
    }

    debounceRef.current = setTimeout(async () => {
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
    }, 300);
  }, [setPath, setFiles]);

  useEffect(() => {
    if (!selectedPackageManager && packageManagers.length > 0) {
      setSelectedPackageManager(packageManagers[0]);
    }
  }, [selectedPackageManager, packageManagers, setSelectedPackageManager]);

  const handleProjectNameChange = event => {
    const inputValue = event.target.value;
    const sanitizedInputValue = inputValue.replace(/[^a-z0-9_-]/g, "");
    const maxLength = 214;

    const containsInvalidChars = inputValue !== sanitizedInputValue;
    const isStartsWithNumber = /^[0-9]/.test(sanitizedInputValue);
    const isOverMaxLength = sanitizedInputValue.length > maxLength;
    const isNameTaken = files.some(
      file => file.type === "folder" && file.name === sanitizedInputValue
    );

    let errorMessage = "";

    if (containsInvalidChars) {
      errorMessage = "영문 소문자, 숫자, -, _만 입력 가능합니다.";
    } else if (isStartsWithNumber) {
      errorMessage = "숫자로 시작할 수 없습니다.";
    } else if (isOverMaxLength) {
      errorMessage = `최대 ${maxLength}자까지 가능합니다.`;
    } else if (isNameTaken) {
      errorMessage = "이미 존재하는 폴더 이름입니다.";
    }

    setErrorMessage(errorMessage);

    if (!errorMessage) {
      setProjectName(sanitizedInputValue);
    }
  };

  return (
    <ProjectStarterContainer>
      <PathInputContainer>
        <PathInput
          type="text"
          value={path}
          readOnly
          placeholder="/root/folder/path... click the upload button... "
        />
        <UploadButton variant="active" onClick={handlePathUpload}>
          업로드
        </UploadButton>
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
        placeholder="Please enter the project name..."
        value={projectName}
        onChange={handleProjectNameChange}
      />
      {errorMessage && (
        <span className="error-message-text">{errorMessage}</span>
      )}
      <SelectWrapper>
        <ProjectNameSelect
          value={selectedPackageManager}
          onChange={e => setSelectedPackageManager(e.target.value)}
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
