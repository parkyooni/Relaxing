import { useState } from "react";
import ButtonBox from "@components/common/ButtonBox";
import { ModalBackground, ModalContainer } from "@public/style/Modal.styles";

const SaveModal = ({ onSave, onCreate, onCancel }) => {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = e => {
    setInputValue(e.target.value);
  };

  return (
    <ModalBackground onClick={onCancel}>
      <ModalContainer className="large" onClick={e => e.stopPropagation()}>
        <div className="user-title">
          <p className="user-title">사용자 설정 저장</p>
          <div className="input-container">
            <input
              type="text"
              placeholder="프로젝트 설정이름"
              value={inputValue}
              onChange={handleInputChange}
            />
            <div className="info-text">
              의존성 설치 및 설정에 대한 정보가 저장됩니다.
              <br />
              생성으로 선택할 경우 사용자 설정은 저장되지 않고, 프로젝트가
              만들어집니다.
            </div>
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
