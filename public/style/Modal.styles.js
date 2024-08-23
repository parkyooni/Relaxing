import styled from "styled-components";

export const ModalBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  background: ${({ theme }) => theme.colors.opacity};
  z-index: 20;
`;

export const ModalContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 31.25rem;
  padding: 2rem;
  border-radius: ${({ theme }) => theme.borderRadius.sub};
  background: ${({ theme }) => theme.colors.white};
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  text-align: center;

  &.small {
    width: 25rem;
    height: 15rem;
    padding: 1.5rem;
  }

  &.large {
    width: 31.25rem;
    height: 18.75rem;
    padding: 1.25rem;

    div.user-title,
    div.title {
      display: flex;
      flex-direction: column;
      justify-content: center;
      width: 100%;
      height: 18.75rem;

      &.title {
        div {
          cursor: default;
          color: ${({ theme }) => theme.colors.gray};

          p {
            font-size: ${({ theme }) => theme.fontSizes.largePlus};
          }
        }

        > span {
          display: flex;
          align-items: center;
          justify-content: center;
          height: 3.125rem;
          font-size: ${({ theme }) => theme.fontSizes.normal};
          color: ${({ theme }) => theme.colors.sub};
        }
      }
    }

    > p {
      width: 100%;
      height: 18.75rem;
    }
  }

  p {
    display: flex;
    flex-direction: column;
    justify-content: center;
    font-size: ${({ theme }) => theme.fontSizes.normal};
    color: ${({ theme }) => theme.colors.basic};
    cursor: default;

    &.user-title {
      text-align: left;
      font-size: ${({ theme }) => theme.fontSizes.largePlus};
      color: ${({ theme }) => theme.colors.basic};
    }

    &.error-message {
      width: 100%;
      height: 18.75rem;
      margin-bottom: 1.5rem;
      text-align: center;
      font-size: ${({ theme }) => theme.fontSizes.normal};
      color: ${({ theme }) => theme.colors.error};
    }

    span {
      display: flex;
      align-items: center;
      justify-content: center;

      &:first-child {
        height: 3.125rem;
        font-size: ${({ theme }) => theme.fontSizes.largePlus};
        color: ${({ theme }) => theme.colors.basic};
      }

      &:last-child {
        font-size: ${({ theme }) => theme.fontSizes.normal};
        color: ${({ theme }) => theme.colors.sub};
      }
    }
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

  .button-group {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    padding-top: 2rem;

    button {
      flex: 1;
      max-width: 6.25rem;
      height: 3.125rem;
      margin: 0 0.25rem;
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
