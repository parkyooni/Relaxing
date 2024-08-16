import styled from "styled-components";
import ButtonBox from "@components/common/ButtonBox";

const ModalBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  background: ${({ theme }) => theme.colors.opacity};
`;

const ModalContainer = styled.div`
  background: ${({ theme }) => theme.colors.white};
  padding: 2rem;
  border-radius: ${({ theme }) => theme.borderRadius.main};
  width: 400px;
  text-align: center;

  p {
    margin-bottom: 1.5rem;
    font-size: ${({ theme }) => theme.fontSizes.normal};
    color: ${({ theme }) => theme.colors.basic};
  }
`;

const ErrorModal = ({ message, onClose }) => {
  return (
    <ModalBackground onClick={onClose}>
      <ModalContainer onClick={e => e.stopPropagation()}>
        <p>{message}</p>
        <ButtonBox onClick={onClose}>Close</ButtonBox>
      </ModalContainer>
    </ModalBackground>
  );
};

export default ErrorModal;
