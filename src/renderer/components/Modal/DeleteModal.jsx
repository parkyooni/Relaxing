import { useEffect, useCallback } from "react";
import {
  ModalBackground,
  ModalContainer,
  NoShadowButtonBox
} from "@public/style/Modal.styles";

const DeleteModal = ({ message, onConfirm, onClose }) => {
  const handleConfirm = useCallback(() => {
    if (onConfirm) {
      onConfirm();
    }
    onClose();
  }, [onConfirm, onClose]);

  useEffect(() => {
    const handleKeyDown = event => {
      if (event.key === "Enter") {
        event.preventDefault();
        handleConfirm();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [handleConfirm]);

  return (
    <ModalBackground onClick={onClose}>
      <ModalContainer className="large" onClick={e => e.stopPropagation()}>
        <div className="title">
          <span>{message}</span>
        </div>
        <div className="button-group">
          <NoShadowButtonBox variant="default" onClick={onClose}>
            취소
          </NoShadowButtonBox>
          <NoShadowButtonBox variant="active" onClick={handleConfirm}>
            확인
          </NoShadowButtonBox>
        </div>
      </ModalContainer>
    </ModalBackground>
  );
};

export default DeleteModal;
