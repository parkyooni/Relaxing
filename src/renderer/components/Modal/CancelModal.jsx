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
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 31.25rem;
  height: 18.75rem;
  padding: 2rem;
  border-radius: ${({ theme }) => theme.borderRadius.main};
  text-align: center;
  background: ${({ theme }) => theme.colors.white};
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);

  > p {
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;
    height: 9.375rem;

    span {
      display: flex;
      justify-content: center;
      align-items: center;

      &:first-child {
        font-size: ${({ theme }) => theme.fontSizes.largePlus};
        color: ${({ theme }) => theme.colors.basic};
        height: 3.125rem;
      }

      &:last-child {
        font-size: ${({ theme }) => theme.fontSizes.normal};
        color: ${({ theme }) => theme.colors.sub};
      }
    }
  }

  .button-group {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    padding-top: 3.125rem;

    button {
      flex: 1;
      max-width: 6.25rem;
      height: 3.125rem;
      margin: 0 0.25rem;
    }
  }
`;

const CancelModal = ({ onConfirm, onCancel }) => {
  return (
    <ModalBackground onClick={onCancel}>
      <ModalContainer onClick={e => e.stopPropagation()}>
        <p>
          <span>프로젝트 생성을 취소 하시겠습니까?</span>
          <span>입력한 정보는 복구 할 수 없습니다.</span>
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

export default CancelModal;
