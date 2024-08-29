import React from "react";
import {
  ModalBackground,
  ModalContainer,
  NoShadowButtonBox
} from "@public/style/Modal.styles";

const DeleteModal = ({ message, onConfirm, onClose }) => {
  const handleConfirm = () => {
    if (onConfirm) {
      onConfirm();
    }
    onClose();
  };

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
