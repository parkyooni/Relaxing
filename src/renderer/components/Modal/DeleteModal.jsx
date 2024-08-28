import React from "react";
import { ModalBackground, ModalContainer } from "@public/style/Modal.styles";
import ButtonBox from "@components/common/ButtonBox";

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
          <ButtonBox variant="default" onClick={onClose}>
            취소
          </ButtonBox>
          <ButtonBox variant="active" onClick={handleConfirm}>
            확인
          </ButtonBox>
        </div>
      </ModalContainer>
    </ModalBackground>
  );
};

export default DeleteModal;
