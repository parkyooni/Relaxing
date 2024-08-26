import ButtonBox from "@components/common/ButtonBox";
import { ModalBackground, ModalContainer } from "@public/style/Modal.styles";

const ErrorModal = ({ message, onClose }) => {
  const handleClose = () => {
    onClose();
  };

  return (
    <ModalBackground onClick={handleClose}>
      <ModalContainer className="small" onClick={e => e.stopPropagation()}>
        <p className="error-message">{message}</p>
        <ButtonBox variant="default" onClick={handleClose}>
          Close
        </ButtonBox>
      </ModalContainer>
    </ModalBackground>
  );
};

export default ErrorModal;
