import styled from "styled-components";
import { media } from "./theme";
import ButtonBox from "@components/common/ButtonBox";

export const DependencyInstallContentContainer = styled.div`
  display: flex;
  flex-grow: 1;
  margin-bottom: 3rem;
  padding: 3rem;
  padding-left: 15rem;
  transition: padding 0.1s ease-in-out;
  cursor: default;

  .my-dependencies {
    width: 75%;

    h1 {
      padding-bottom: 10px;
      font-size: ${({ theme }) => theme.fontSizes.xlarge};
      color: ${({ theme }) => theme.colors.white};
    }
  }

  ${media.smallToMedium`
		padding: 2rem;
		padding-left: 10rem;

		.my-dependencies {
			width: 100%;
		}
	`}
`;

export const MyDependenciesContainer = styled.div`
  ul {
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-bottom: 1rem;

    > li {
      flex: 1;
      display: flex;
      justify-content: space-around;
      min-width: 60%;
      padding: 1rem 0;
      font-size: ${({ theme }) => theme.fontSizes.largePlus};
      text-align: center;
      color: ${({ theme }) => theme.colors.basic};
      background-color: ${({ theme }) => theme.colors.background};
      transition: background-color 0.3s ease-in-out;
      cursor: pointer;

      > button {
        width: 100%;

        &:first-child {
          position: relative;

          &::after {
            content: "";
            position: absolute;
            right: 0;
            top: 0;
            width: 0.0625rem;
            height: 1.5625rem;
            background-color: ${({ theme }) => theme.colors.white};
          }
        }

        &.active {
          color: ${({ theme }) => theme.colors.white};
        }
      }

      ul {
        display: flex;
        justify-content: flex-start;
        width: 100%;
        height: 43.75rem;
        padding-right: 1.25rem;
        overflow-y: auto;

        &::-webkit-scrollbar {
          width: 0.625rem;
        }

        &::-webkit-scrollbar-track {
          background: ${({ theme }) => theme.colors.subScroll};
          border-radius: 0.625rem;
        }

        &::-webkit-scrollbar-thumb {
          background-color: ${({ theme }) => theme.colors.white};
          border-radius: 0.625rem;
        }

        li {
          align-items: center;
          max-height: 4.375rem;
          min-height: 4.375rem;
          height: 4.375rem;
          margin: 0.625rem 0;
          padding: 0 1.25rem;
          border-radius: ${({ theme }) => theme.borderRadius.sub};
          background-color: ${({ theme }) => theme.colors.white};
          box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.25);
          transition: all 0.1s ease-in-out;
          cursor: pointer;

          span {
            width: 100%;
            text-align: left;
          }

          .version-container {
            display: flex;
            width: 100%;
            transition: all 0.1s ease-in-out;
          }

          button {
            width: 10%;
            min-width: 1.875rem;
          }
        }
      }
    }
  }

  ${media.smallToMedium`
		width: 100%;
	`}
`;

export const NPMManagerContainer = styled.div`
  position: fixed;
  right: 1.25rem;
  top: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const InputContainer = styled.div`
  width: 18.75rem;
  margin-top: 1rem;

  input {
    width: 100%;
    height: 1.875rem;
    padding: 0.9375rem;
    font-size: ${({ theme }) => theme.fontSizes.medium};
    border-radius: ${({ theme }) => theme.borderRadius.small};
    box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.25);
    background-color: ${({ theme }) => theme.colors.white};
  }
`;

export const PackageListContainer = styled.div`
  width: 18.75rem;
  height: 18.75rem;
  padding: 0.9375rem;
  border-top: 1px dashed ${({ theme }) => theme.colors.lightMain};
  background-color: ${({ theme }) => theme.colors.white};
  overflow-y: auto;
  border-radius: ${({ theme }) => theme.borderRadius.small}
    ${({ theme }) => theme.borderRadius.small} 0 0;
`;

export const PackageListItem = styled.div.withConfig({
  shouldForwardProp: prop => prop !== "isSelected"
})`
  padding: 0.9375rem;
  border-bottom: 1px dashed ${({ theme }) => theme.colors.lightMain};
  background-color: ${({ isSelected, theme }) =>
    isSelected ? theme.colors.action : theme.colors.white};
  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme.colors.action};
  }

  &:last-child {
    border-bottom: none;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 0.625rem;
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 0 0 ${({ theme }) => theme.borderRadius.small}
    ${({ theme }) => theme.borderRadius.small};
  box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.25);

  ${ButtonBox} {
    width: 6.25rem;
    height: 3.125rem;
    font-size: ${({ theme }) => theme.fontSizes.medium};
    border-radius: ${({ theme }) => theme.borderRadius.small};

    &:first-child {
      background-color: ${({ theme }) => theme.colors.action};
      color: ${({ theme }) => theme.colors.basic};
    }

    &:last-child {
      background-color: ${({ disabled, theme }) =>
        disabled ? theme.colors.gray : theme.colors.main};
      color: ${({ disabled, theme }) =>
        disabled ? theme.colors.basic : theme.colors.white};
      cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};
    }
  }
`;
