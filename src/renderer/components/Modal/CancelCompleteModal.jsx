import ButtonBox from "@components/common/ButtonBox";
import { ModalBackground, ModalContainer } from "@public/style/Modal.styles";

const CancelCompleteModal = ({ onSave, onCancel, message, subMessage }) => {
  return (
    <ModalBackground onClick={onCancel}>
      <ModalContainer className="large" onClick={e => e.stopPropagation()}>
        <div className="title">
          <div dangerouslySetInnerHTML={{ __html: message }} />
          <span>{subMessage}</span>
        </div>
        <div className="button-group">
          <ButtonBox variant="default" onClick={onCancel}>
            취소
          </ButtonBox>
          <ButtonBox variant="active" onClick={onSave}>
            확인
          </ButtonBox>
        </div>
      </ModalContainer>
    </ModalBackground>
  );
};

export default CancelCompleteModal;
