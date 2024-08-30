import { useEffect } from "react";
import {
  ModalBackground,
  ModalContainer,
  NoShadowButtonBox
} from "@public/style/Modal.styles";
import useProjectStore from "@/store/projectStore";
import useUIStore from "@/store/uiStore";
import { DUPLICATE_NAME_ERROR } from "@utils/constants";

const SaveModal = ({
  onSave,
  onCreate,
  onCancel,
  title,
  description,
  existingProjectNames = []
}) => {
  const { customName, setCustomName } = useProjectStore(state => ({
    customName: state.customName,
    setCustomName: state.setCustomName
  }));

  const { errorMessage, setErrorMessage } = useUIStore(state => ({
    errorMessage: state.errorMessage,
    setErrorMessage: state.setErrorMessage
  }));

  const trimmedName = customName.trim();
  const isDuplicateName = existingProjectNames.includes(trimmedName);

  useEffect(() => {
    const newErrorMessage = isDuplicateName ? DUPLICATE_NAME_ERROR : "";
    if (errorMessage !== newErrorMessage) {
      setErrorMessage(newErrorMessage);
    }
  }, [trimmedName, isDuplicateName, errorMessage, setErrorMessage]);

  const handleInputChange = e => {
    setCustomName(e.target.value);
  };

  const handleSaveClick = () => {
    if (!errorMessage) {
      onSave(trimmedName);
    }
  };

  const handleCreateClick = () => {
    if (!errorMessage) {
      onCreate(trimmedName || "undefined");
    }
  };

  const isSaveButtonEnabled = trimmedName && !isDuplicateName;
  const isCreateButtonEnabled = !trimmedName && !isDuplicateName;

  return (
    <ModalBackground onClick={onCancel}>
      <ModalContainer className="large" onClick={e => e.stopPropagation()}>
        <div className="user-title">
          <p className="user-title">{title}</p>
          <div className="input-container">
            <input
              type="text"
              placeholder="프로젝트 설정 이름을 적어주세요..."
              value={customName}
              onChange={handleInputChange}
            />
            {errorMessage && (
              <span className="error-message-text">{errorMessage}</span>
            )}
            <div className="info-text">{description}</div>
          </div>
        </div>
        <div className="button-group">
          <NoShadowButtonBox variant="default" onClick={onCancel}>
            취소
          </NoShadowButtonBox>
          <div className="save-button">
            <NoShadowButtonBox
              variant={isCreateButtonEnabled ? "active" : "disabled"}
              onClick={handleCreateClick}
              disabled={!isCreateButtonEnabled}
            >
              생성
            </NoShadowButtonBox>
            <NoShadowButtonBox
              variant={isSaveButtonEnabled ? "active" : "disabled"}
              onClick={handleSaveClick}
              disabled={!isSaveButtonEnabled}
            >
              저장
            </NoShadowButtonBox>
          </div>
        </div>
      </ModalContainer>
    </ModalBackground>
  );
};

export default SaveModal;
