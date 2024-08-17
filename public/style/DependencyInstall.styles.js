import styled from "styled-components";
import { media } from "./theme";

export const DependencyInstallContentContainer = styled.div`
  display: flex;
  flex-grow: 1;
  padding: 3rem;
  cursor: default;
  padding-left: 15rem;
  margin-bottom: 3rem;
  transition: padding 0.1s ease-in-out;

  .my-dependencies {
    width: 75%;

    p {
      padding-bottom: 10px;
      font-size: ${({ theme }) => theme.fontSizes.xlarge};
      color: ${({ theme }) => theme.colors.white};
    }
  }
`;

export const MyDependenciesContainer = styled.div`
  .tabs {
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-bottom: 1rem;
  }

  .tab-menu {
    font-size: 1.2rem;
    display: flex;
    justify-content: space-around;
    margin-bottom: 1rem;
    width: 60%;
  }

  .tab-link {
    flex: 1;
    padding: 1rem;
    text-align: center;
    font-size: ${({ theme }) => theme.fontSizes.largePlus};
    font-weight: bold;
    color: ${({ theme }) => theme.colors.basic};
    background-color: ${({ theme }) => theme.colors.background};
    border: none;
    cursor: pointer;
    transition: background-color 0.3s ease-in-out;

    &:last-child {
      position: relative;

      &::before {
        content: "";
        position: absolute;
        width: 0.0625rem;
        height: 25px;
        left: 0;
        background-color: ${({ theme }) => theme.colors.white};
      }
    }
  }

  .tab-link.active {
    color: ${({ theme }) => theme.colors.white};
  }

  .dependencies-list-container {
    max-height: 70vh;
    overflow-x: hidden;
    overflow-y: auto;
    padding: 10px;
    background-color: ${({ theme }) => theme.colors.background};
    border-radius: ${({ theme }) => theme.borderRadius.main};
  }

  .package {
    display: flex;
    justify-content: space-between;
    background-color: ${({ theme }) => theme.colors.white};
    align-items: center;
    padding: 10px;
    border-radius: ${({ theme }) => theme.borderRadius.minSmall};
    border-bottom: 1px solid ${({ theme }) => theme.colors.border};
    font-size: ${({ theme }) => theme.fontSizes.normal};
    margin-bottom: 10px;
  }

  .package:last-child {
    border-bottom: none;
  }

  .version-container {
    display: flex;
    gap: 2rem;
    color: ${({ theme }) => theme.colors.textColor};
    font-size: ${({ theme }) => theme.fontSizes.small};
  }

  .package-name,
  .package-current-version,
  .package-latest-version {
    flex: 1;
  }

  .package-name {
    text-align: left;
    width: 20%;
  }

  .package-current-version,
  .package-latest-version {
    flex: 1;
    text-align: left;
    font-weight: normal;
    text-align: left;
  }

  button {
    background: none;
    border: none;
    cursor: pointer;
  }
`;

export const NPMManagerContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
`;

export const InputContainer = styled.div`
  width: 300px;
  margin-top: 1rem;
  align-self: flex-end;

  input {
    width: 100%;
    padding: 0.5rem;
    font-size: ${({ theme }) => theme.fontSizes.medium};
    background-color: ${({ theme }) => theme.colors.white};
    border-radius: ${({ theme }) => theme.borderRadius.small}
      ${({ theme }) => theme.borderRadius.small} 0 0;
    border: 1px solid ${({ theme }) => theme.colors.border};
  }
`;

export const PackageListContainer = styled.div`
  width: 300px;
  border: 1px solid ${({ theme }) => theme.colors.border};
  overflow: hidden;
  border-bottom: none;
  border-top: none;
`;

export const PackageListItem = styled.div`
  padding: 0.5rem;
  background-color: ${({ isSelected, theme }) =>
    isSelected ? theme.colors.action : theme.colors.white};
  cursor: pointer;
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};

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
  background-color: ${({ theme }) => theme.colors.white};
  border-left: 1px solid ${({ theme }) => theme.colors.border};
  border-right: 1px solid ${({ theme }) => theme.colors.border};
  border-top: none;
  border-radius: 0 0 ${({ theme }) => theme.borderRadius.small}
    ${({ theme }) => theme.borderRadius.small};
  padding: 0.5rem;
`;

export const SearchButton = styled.button`
  background-color: ${({ theme }) => theme.colors.action};
  border: none;
  border-radius: ${({ theme }) => theme.borderRadius.small};
  padding: 0.5rem 1rem;
  font-size: ${({ theme }) => theme.fontSizes.medium};
  cursor: pointer;
  color: ${({ theme }) => theme.colors.basic};
`;

export const InstallButton = styled.button`
  background-color: ${({ disabled, theme }) =>
    disabled ? theme.colors.gray : theme.colors.main};
  border: none;
  border-radius: ${({ theme }) => theme.borderRadius.small};
  padding: 0.5rem 1rem;
  font-size: ${({ theme }) => theme.fontSizes.medium};
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};
  color: ${({ disabled, theme }) =>
    disabled ? theme.colors.basic : theme.colors.white};
`;
