import styled from "styled-components";
import ButtonBox from "@/components/common/ButtonBox";
import {
  media,
  FlexContainer,
  commonBoxShadow,
  commonBorderRadius
} from "./utils.styles";
import icons from "../images";

export const Container = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
  overflow-y: auto;
  transition: transform 0.1s ease-in-out;

  .root-path {
    display: inline-block;
    width: 100%;
    padding-bottom: 0.1875rem;
    margin-bottom: 0.3125rem;
    color: ${({ theme }) => theme.colors.white};
    cursor: default;
    position: relative;

    &::after {
      content: "";
      position: absolute;
      bottom: 0;
      left: 0;
      width: inherit;
      height: 1px;
      opacity: 0.5;
      border-bottom: 1px dashed ${({ theme }) => theme.colors.white};
    }
  }

  .error-message-text {
    display: inline-block;
    padding: 0 0 0.3125rem 0.625rem;
    font-size: ${({ theme }) => theme.fontSizes.normal};
    color: ${({ theme }) => theme.colors.white};
    cursor: default;
  }

  .not-found {
    display: inline-block;
    padding: 3.125rem;
    width: 100%;
    text-align: center;
    cursor: default;
    font-size: ${({ theme }) => theme.fontSizes.largePlus};
    color: ${({ theme }) => theme.colors.white};
  }

  ${media.smallToMedium`
    background: url("../images/smallToMedium.png") no-repeat 100%;
  `}

  ${media.mediumToLarge`
    background: url("../images/mediumToLarge.png") no-repeat 100%;
  `}
`;

export const Navigation = styled.nav.withConfig({
  shouldForwardProp: prop => prop !== "isCreateProjectPage"
})`
  position: fixed;
  display: flex;
  height: 93vh;
  width: 6.25rem;
  margin: 1.875rem;
  padding: 1.875rem 0;
  border-radius: ${({ theme }) => theme.borderRadius.main};
  background-color: ${({ theme, isCreateProjectPage }) =>
    isCreateProjectPage ? "transparent" : theme.colors.white};
  transition: background-color 0.1s ease-in-out;

  ul {
    width: 100%;

    li {
      &:first-child {
        text-align: center;
        cursor: default;
      }

      a {
        display: flex;
        align-items: center;
        color: ${({ theme }) => theme.colors.text};

        img {
          margin-right: 0.5rem;
        }

        span {
          display: none;
          margin-top: 0.3125rem;
          color: ${({ theme }) => theme.colors.border};
          letter-spacing: -0.2px;
        }
      }
    }
  }

  ${media.smallToMedium`
    ul {
      ${FlexContainer}
      flex-direction: column;
      align-items: center;

      li {
        margin: 1rem 0;

        a {
          flex-direction: column;
          text-align: center;
        }
      }
    }
  `}

  ${media.mediumToLarge`
    width: 10rem;
    flex-direction: column;
    justify-content: flex-start;

    ul {
      ${FlexContainer}
      flex-direction: column;
      align-items: center;

      li {
        margin: 1rem 0;
        cursor: pointer;

        a {
          flex-direction: column;
          text-align: center;
          justify-content: space-between;

          span {
          display: inline-block;
          }
        }
      }
    }
  `}
`;

export const PageContentContainer = styled.div`
  flex-grow: 1;
  padding: 3rem;
  padding-left: 15rem;
  margin-bottom: 3rem;
  transition: padding 0.1s ease-in-out;

  h1 {
    padding-bottom: 0.625rem;
    font-size: ${({ theme }) => theme.fontSizes.xlarge};
    color: ${({ theme }) => theme.colors.white};
  }

  .project-title {
    padding-bottom: 0.3125rem;
    font-size: ${({ theme }) => theme.fontSizes.xlarge};
  }

  ul {
    li {
      display: flex;
      align-items: center;
      justify-content: space-between;
      height: 4.375rem;
      margin: 1.25rem 0;
      padding: 0 1.25rem;
      border-radius: ${({ theme }) => theme.borderRadius.sub};
      background-color: ${({ theme }) => theme.colors.white};
      ${commonBoxShadow}
      cursor: pointer;
      transition: all 0.1s ease-in-out;

      .project-title {
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 100%;
        transition: all 0.1s ease-in-out;

        span {
          display: inline-block;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;

          &:first-child {
            width: 40%;
          }

          &:nth-child(2) {
            width: 20%;
            font-size: ${({ theme }) => theme.fontSizes.largePlus};
            color: ${({ theme }) => theme.colors.gray};
            text-align: center;
          }

          &:last-child {
            min-width: 50%;
            max-width: 100%;
            text-align: center;
            font-size: ${({ theme }) => theme.fontSizes.largePlus};
            color: ${({ theme }) => theme.colors.sub};
          }
        }
      }

      button {
        width: 3.125rem;
        height: 3.125rem;
      }
    }
  }

  ${media.smallToMedium`
    padding: 2rem;
    padding-left: 10rem;

    ul {
      li {
        width: 70vw;

        .project-title{
          display: block;
          padding: .3125rem 0;
        }
      }
    }
  `}

  .toggle-layout {
    display: flex;
    flex-direction: column;
    margin-bottom: 1.875rem;

    h1 {
      padding-bottom: 0.625rem;
      font-size: ${({ theme }) => theme.fontSizes.xlarge};
      color: ${({ theme }) => theme.colors.white};

      .toggle-status {
        display: inline-flex;
        max-width: 6.25rem;
        text-align: center;
        font-size: ${({ theme }) => theme.fontSizes.largePlus};

        span {
          min-width: 1.875rem;
          font-weight: bolder;

          &:first-child {
            color: ${({ theme }) => theme.colors.lighAction};
          }
        }
      }
    }
  }
`;

export const ButtonContainer = styled.div`
  position: absolute;
  top: 1.25rem;
  right: 4.5%;
  display: flex;
  gap: 1rem;
  z-index: 10;
`;

export const SettingLoadContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: ${({ theme }) => theme.spacing.calc_5rem};
  margin: 0 auto 1.875rem;
  padding: 1rem;
  border-radius: ${({ theme }) => theme.borderRadius.sub};
  background-color: ${({ theme }) => theme.colors.white};
`;

export const RadioGroup = styled.ul`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  gap: 0.5rem;
  width: 100%;
  max-height: 18.75rem;
  overflow-y: auto;

  label {
    display: flex;
    align-items: center;
    cursor: pointer;

    span {
      font-size: ${({ theme }) => theme.fontSizes.normal};
      color: ${({ theme }) => theme.colors.basic};
      padding-left: 0.3125rem;
    }
  }
`;

export const ProjectStarterContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: ${({ theme }) => theme.spacing.calc_5rem};
  max-height: 28.125rem;
  margin: 0 auto 1.875rem;
`;

export const PathInputContainer = styled.div`
  display: flex;
  height: 3.125rem;
  margin-bottom: 1.25rem;
`;

export const PathInput = styled.input`
  flex-grow: 1;
  padding: 1.25rem;
  margin-right: 0.625rem;
  ${commonBorderRadius}
  font-size: ${({ theme }) => theme.fontSizes.normal};
  color: ${({ theme }) => theme.colors.sub};
  background-color: ${({ theme }) => theme.colors.white};
  cursor: default;
`;
export const UploadButton = styled(ButtonBox)`
  padding: 0.625rem 1.25rem;
  box-shadow: none;
`;

export const DirectoryListContainer = styled.div`
  width: 100%;
  height: 15.625rem;
  padding: 1.25rem;
  margin-bottom: 1.25rem;
  ${commonBorderRadius}
  background-color: ${({ theme }) => theme.colors.white};

  .layout {
    height: 12.5rem;
    overflow-y: auto;

    &::-webkit-scrollbar-track {
      background: ${({ theme }) => theme.colors.mainScroll};
    }

    &::-webkit-scrollbar-thumb {
      background-color: ${({ theme }) => theme.colors.border};
    }
  }
`;

export const DirectoryItem = styled.div.withConfig({
  shouldForwardProp: prop => prop !== "isFolder"
})`
  display: flex;
  align-items: center;
  padding: 0.3125rem 0;
  font-size: ${({ theme }) => theme.fontSizes.normal};
  color: ${({ theme }) => theme.colors.basic};

  &::before {
    content: "";
    display: inline-block;
    width: 1rem;
    height: 1rem;
    margin-right: 0.625rem;
    background: ${({ isFolder }) =>
      isFolder
        ? `url(${icons.folderLineIcon}) no-repeat center`
        : `url(${icons.fileIcon}) no-repeat center`};
    background-size: contain;
  }
`;

export const ProjectNameInput = styled.input`
  height: 3.125rem;
  padding: 0.625rem;
  margin-bottom: 0.625rem;
  ${commonBorderRadius}
  border: 1px solid ${({ theme }) => theme.colors.gray};
  font-size: ${({ theme }) => theme.fontSizes.normal};
  background-color: ${({ theme }) => theme.colors.white};
`;

export const SelectWrapper = styled.div`
  position: relative;
  margin-bottom: 0.625rem;

  &::after {
    content: "";
    position: absolute;
    top: 50%;
    right: 0.75rem;
    width: 1rem;
    height: 1rem;
    background: url(${icons.arrowIcon}) no-repeat;
    background-size: contain;
    pointer-events: none;
    transform: translateY(-50%) rotate(180deg);
    transition: transform 0.3s ease;
  }

  select:focus + &::after {
    transform: translateY(-50%) rotate(0deg);
  }
`;

export const ProjectNameSelect = styled.select`
  appearance: none;
  width: 100%;
  height: 3.125rem;
  padding: 0.625rem;
  padding-right: 2rem;
  border: 1px solid ${({ theme }) => theme.colors.gray};
  ${commonBorderRadius}
  font-size: ${({ theme }) => theme.fontSizes.normal};
  background-color: ${({ theme }) => theme.colors.white};
`;

export const SelectorContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: ${({ theme }) => theme.spacing.calc_5rem};
  margin: 0 auto 1.875rem;
  padding: 1.25rem;
  border-radius: ${({ theme }) => theme.borderRadius.main};
  background-color: ${({ theme }) => theme.colors.white};

  .layout {
    max-height: 15.625rem;
    overflow-y: auto;
    overflow-x: hidden;

    &::-webkit-scrollbar {
      width: 0.5rem;
    }

    &::-webkit-scrollbar-track {
      background: ${({ theme }) => theme.colors.mainScroll};
    }

    &::-webkit-scrollbar-thumb {
      background-color: ${({ theme }) => theme.colors.border};
    }
  }
`;

export const SelectorItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.3125rem 0.3125rem 0.3125rem 0;
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;

  span {
    font-size: ${({ theme }) => theme.fontSizes.largePlus};
    color: ${({ theme }) => theme.colors.basic};
  }
`;

export const ControlContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const Select = styled.select`
  appearance: none;
  max-width: 12.5rem;
  padding: 0.3125rem 1.1875rem;
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.borderRadius.small};
  font-size: ${({ theme }) => theme.fontSizes.normal};
  color: ${({ theme }) => theme.colors.border};
  letter-spacing: -0.0313rem;
  text-align: center;
  cursor: pointer;
`;
