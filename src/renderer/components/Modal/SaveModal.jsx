import {
  ModalBackground,
  ModalContainer,
  NoShadowButtonBox
} from "@public/style/Modal.styles";
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
          <NoShadowButtonBox variant="default" onClick={onCancel}>
            취소
          </NoShadowButtonBox>
          <div className="save-button">
            <NoShadowButtonBox
              variant={customName.trim() ? "disabled" : "active"}
              onClick={handleCreateClick}
              disabled={customName.trim()}
            >
              생성
            </NoShadowButtonBox>
            <NoShadowButtonBox
              variant={customName.trim() ? "active" : "disabled"}
              onClick={handleSaveClick}
              disabled={!customName.trim()}
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
