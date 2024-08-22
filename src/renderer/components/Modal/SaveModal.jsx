import { useState } from "react";
import ButtonBox from "@components/common/ButtonBox";
import { ModalBackground, ModalContainer } from "@public/style/Modal.styles";

const SaveModal = ({ onSave, onCreate, onCancel, title, description }) => {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = e => {
    setInputValue(e.target.value);
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
              value={inputValue}
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
              variant={inputValue.trim() ? "disabled" : "active"}
              onClick={onCreate}
              disabled={!!inputValue.trim()}
            >
              생성
            </ButtonBox>
            <ButtonBox
              variant={inputValue.trim() ? "active" : "default"}
              onClick={onSave}
              disabled={!inputValue.trim()}
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
