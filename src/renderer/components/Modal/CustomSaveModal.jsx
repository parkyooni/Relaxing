import ButtonBox from "@components/common/ButtonBox";
import { ModalBackground, ModalContainer } from "@public/style/Modal.styles";

const CustomSaveModal = ({ onConfirm, onCancel, selectedOption }) => {
  return (
    <ModalBackground onClick={onCancel}>
      <ModalContainer className="large" onClick={e => e.stopPropagation()}>
        <p>
          <span>{selectedOption}</span>
          <span> 프로젝트를 생성 하시겠습니까?</span>
        </p>
        <div className="button-group">
          <ButtonBox variant="default" onClick={onCancel}>
            취소
          </ButtonBox>
          <ButtonBox variant="active" onClick={onConfirm}>
            확인
          </ButtonBox>
        </div>
      </ModalContainer>
    </ModalBackground>
  );
};

export default CustomSaveModal;
