import ButtonBox from "@components/common/ButtonBox";
import { ModalBackground, ModalContainer } from "@public/style/Modal.styles";
import useProjectStore from "@/store/projectStore";

const SaveModal = ({ onSave, onCreate, onCancel, title, description }) => {
  const { customName, setCustomName } = useProjectStore(state => ({
    customName: state.customName,
    setCustomName: state.setCustomName
  }));

  const handleInputChange = e => {
    setCustomName(e.target.value);
  };

  const handleSaveClick = () => {
    onSave(customName);
  };

  const handleCreateClick = () => {
    onCreate(customName.trim() ? customName : "undefined");
  };

  return (
    <ModalBackground onClick={onCancel}>
      <ModalContainer className="large" onClick={e => e.stopPropagation()}>
        <div className="user-title">
          <p className="user-title">{title}</p>
          <div className="input-container">
            <input
              type="text"
              placeholder="프로젝트 설정이름"
              value={customName}
              onChange={handleInputChange}
            />
            <div className="info-text">{description}</div>
          </div>
        </div>
        <div className="button-group">
          <ButtonBox variant="default" onClick={onCancel}>
            취소
          </ButtonBox>
          <div className="save-button">
            <ButtonBox
              variant={customName.trim() ? "disabled" : "active"}
              onClick={handleCreateClick}
            >
              생성
            </ButtonBox>
            <ButtonBox
              variant={customName.trim() ? "active" : "disabled"}
              onClick={handleSaveClick}
              disabled={!customName.trim()}
            >
              저장
            </ButtonBox>
          </div>
        </div>
      </ModalContainer>
    </ModalBackground>
  );
};

export default SaveModal;
