import { useNavigate, useLocation } from "react-router-dom";
import {
  ModalBackground,
  ModalContainer,
  NoShadowButtonBox
} from "@public/style/Modal.styles";

const ErrorModal = ({ message, onClose }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleClose = () => {
    onClose();

    if (location.pathname !== "/project/project-list") {
      navigate("/project/project-list");
    } else {
      navigate(-1);
    }
  };

  return (
    <ModalBackground onClick={handleClose}>
      <ModalContainer className="small" onClick={e => e.stopPropagation()}>
        <p className="error-message">{message}</p>
        <NoShadowButtonBox variant="default" onClick={handleClose}>
          Close
        </NoShadowButtonBox>
      </ModalContainer>
    </ModalBackground>
  );
};

export default ErrorModal;
