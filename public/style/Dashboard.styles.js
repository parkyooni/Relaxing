import styled from "styled-components";
import { media } from "./theme";

export const DashboardContentContainer = styled.div`
  flex-grow: 1;
  padding: 3rem;
  cursor: default;
  padding-left: 15rem;
  margin-bottom: 3rem;
  transition: padding 0.1s ease-in-out;

  p {
    padding-bottom: 10px;
    font-size: ${({ theme }) => theme.fontSizes.xlarge};
    color: ${({ theme }) => theme.colors.white};
  }

  .layer {
    height: 100%;
    display: flex;
    justify-content: space-between;
  }
`;

export const MyProjectContentContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: ${({ theme }) => theme.borderRadius.main};
  box-shadow: ${({ theme }) => theme.colors.opacity};
  width: 18.75rem;
  height: 70%;
`;

export const ProjectControllerContainer = styled.div.withConfig({
  shouldForwardProp: prop => prop !== "isStartChecked"
})`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: ${({ theme }) => theme.borderRadius.sub};
  box-shadow: ${({ theme }) => theme.colors.opacity};
  width: 18.75rem;
  height: 15%;

  h1 {
    font-size: 1.875rem;
    color: ${({ isStartChecked, theme }) =>
      isStartChecked ? theme.colors.basic : theme.colors.sub};
  }

  .project-controller {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    width: 90%;

    label {
      display: flex;
      align-items: flex-end;
      justify-content: space-around;
      width: 9rem;
      height: 3rem;
      font-size: ${({ theme }) => theme.fontSizes.xsmall};
    }

    span {
      display: flex;
      width: 0.5rem;
    }

    .project-controller-button {
      appearance: none;
      width: 4.5rem;
      height: 2rem;
      border-radius: ${({ theme }) => theme.borderRadius.largest};
      background-color: ${({ isStartChecked, theme }) =>
        isStartChecked ? theme.colors.activeButton : theme.colors.gray};
      position: relative;
      cursor: pointer;
      transition: background-color 0.3s ease-in-out;
      border: 2px solid ${({ theme }) => theme.colors.border};

      &:checked {
        background-color: ${({ theme }) => theme.colors.sub};
      }

      &:before {
        content: "";
        position: absolute;
        width: 1.5rem;
        height: 1.5rem;
        border-radius: 50%;
        background-color: ${({ theme }) => theme.colors.white};
        top: 0.125rem;
        left: 0.125rem;
        transition: left 0.3s ease-in-out;
      }

      &:checked:before {
        transform: translateX(2rem);
      }
    }
  }
`;
