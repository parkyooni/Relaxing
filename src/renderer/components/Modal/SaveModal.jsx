import React from "react";
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
  justify-content: space-around;
  width: 31.25rem;
  height: 18.75rem;
  padding: 1.25rem;
  border-radius: ${({ theme }) => theme.borderRadius.main};
  text-align: center;
  background: ${({ theme }) => theme.colors.white};
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);

  .user-title {
    height: 9.375rem;
    display: flex;
    flex-direction: column;
    justify-content: space-around;

    p {
      height: 1.5625rem;
      text-align: left;
      font-size: ${({ theme }) => theme.fontSizes.largePlus};
      color: ${({ theme }) => theme.colors.basic};
    }

    .input-container {
      width: 100%;
      color: ${({ theme }) => theme.colors.gray};

      input {
        width: 100%;
        height: 3.125rem;
        padding: 0.9375rem;
        border-radius: ${({ theme }) => theme.borderRadius.sub};
        color: ${({ theme }) => theme.colors.gray};
        font-size: ${({ theme }) => theme.fontSizes.normal};
        box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.25);
      }

      .info-text {
        height: 1.875rem;
        margin: 0.5rem 0 0 0.5rem;
        font-size: ${({ theme }) => theme.fontSizes.small};
        text-align: left;
        cursor: default;
      }
    }
  }

  .button-group {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;

    button {
      flex: 1;
      margin: 0 0.5rem;
      max-width: 7rem;
      height: 3rem;
    }
    .save-button {
      display: flex;
      justify-content: flex-end;
      width: 17.5rem;

      button {
        flex: 1;
        width: inherit;

        &:last-child {
          margin: 0;
        }
      }
    }
  }
`;

const SaveModal = ({ onSave, onCreate, onCancel }) => {
  return (
    <ModalBackground onClick={onCancel}>
      <ModalContainer onClick={e => e.stopPropagation()}>
        <div className="user-title">
          <p>사용자 설정 저장</p>

          <div className="input-container">
            <input type="text" placeholder="프로젝트 설정이름" />
            <div className="info-text">
              의존성 설치 및 설정에 대한 정보가 저장됩니다.
              <br />
              생성으로 선택할 경우 사용자 설정은 저장되지 않고, 프로젝트가
              만들어집니다.
            </div>
          </div>
        </div>

        <div className="button-group">
          <ButtonBox variant="default" onClick={onCancel}>
            취소
          </ButtonBox>
          <div className="save-button">
            <ButtonBox variant="active" onClick={onCreate}>
              생성
            </ButtonBox>
            <ButtonBox variant="default" onClick={onSave}>
              저장
            </ButtonBox>
          </div>
        </div>
      </ModalContainer>
    </ModalBackground>
  );
};

export default SaveModal;
