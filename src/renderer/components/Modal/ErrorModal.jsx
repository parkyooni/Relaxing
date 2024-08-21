import { useNavigate } from "react-router-dom";
import ButtonBox from "@components/common/ButtonBox";
import { ModalBackground, ModalContainer } from "@public/style/Modal.styles";

const ErrorModal = ({ message, onClose }) => {
  const navigate = useNavigate();

  const handleClose = () => {
    onClose();
    navigate(-1);
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
