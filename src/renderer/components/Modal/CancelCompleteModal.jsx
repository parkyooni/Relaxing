import {
  ModalBackground,
  ModalContainer,
  NoShadowButtonBox
} from "@public/style/Modal.styles";

const CancelCompleteModal = ({ onSave, onCancel, message, subMessage }) => {
  return (
    <ModalBackground onClick={onCancel}>
      <ModalContainer className="large" onClick={e => e.stopPropagation()}>
        <div className="title">
          <div dangerouslySetInnerHTML={{ __html: message }} />
          <span>{subMessage}</span>
        </div>
        <div className="button-group">
          <NoShadowButtonBox variant="default" onClick={onCancel}>
            취소
          </NoShadowButtonBox>
          <NoShadowButtonBox variant="active" onClick={onSave}>
            확인
          </NoShadowButtonBox>
        </div>
      </ModalContainer>
    </ModalBackground>
  );
};

export default CancelCompleteModal;
