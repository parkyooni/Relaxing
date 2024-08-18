import styled from "styled-components";
import { media } from "./theme";
import { FlexContainer } from "./utils.styles";
import Checkbox from "@components/common/CheckBox";
import icons from "../images";

export const Container = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
  overflow-y: auto;
  transition: transform 0.1s ease-in-out;

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
						color: ${({ theme }) => theme.colors.border};
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
    padding-bottom: 10px;
    font-size: ${({ theme }) => theme.fontSizes.xlarge};
    color: ${({ theme }) => theme.colors.white};
  }

  .project-title {
    padding-bottom: 5px;
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
      box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.25);
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

          &:last-child {
            min-width: 50%;
            max-width: 100%;
            font-size: ${({ theme }) => theme.fontSizes.largePlus};
            color: ${({ theme }) => theme.colors.sub};
          }
        }
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

					span {
					&:last-child {
						min-width: 50%;
						font-size: ${({ theme }) => theme.fontSizes.small};
					}
				}
				}
			}
		}
	`}

  .toggle-layout {
    h1 {
      padding-bottom: 10px;
      font-size: ${({ theme }) => theme.fontSizes.xlarge};
      color: ${({ theme }) => theme.colors.white};
    }
  }
`;

export const SettingLoadContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1rem;
  border-radius: ${({ theme }) => theme.borderRadius.main};
  box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.25);
  background-color: ${({ theme }) => theme.colors.white};
  overflow-y: auto;
`;

export const RadioGroup = styled.ul`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  gap: 0.5rem;
  width: 100%;

  &:last-child {
    height: 18.75rem;
    overflow-y: auto;
  }

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

export const RadioButton = styled.input.attrs({ type: "radio" })`
  appearance: none;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 1.5rem;
  height: 1.5rem;
  border: 2px solid ${({ theme }) => theme.colors.action};
  border-radius: 50%;
  cursor: pointer;

  &:checked::before {
    content: "";
    width: 1rem;
    height: 1rem;
    border-radius: 50%;
    background-color: ${({ theme }) => theme.colors.action};
  }
`;

export const ProjectStarterContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 28.125rem;
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
  border-radius: ${({ theme }) => theme.borderRadius.minSmall};
  font-size: ${({ theme }) => theme.fontSizes.normal};
  color: ${({ theme }) => theme.colors.sub};
  background-color: ${({ theme }) => theme.colors.white};
  box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.25);
  cursor: default;
`;

export const UploadButton = styled.button`
  padding: 0.625rem 1.25rem;
  border-radius: ${({ theme }) => theme.borderRadius.minSmall};
  color: ${({ theme }) => theme.colors.basic};
  font-weight: 700;
  box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.25);
  background-color: ${({ theme }) => theme.colors.action};
  cursor: pointer;
`;

export const DirectoryListContainer = styled.div`
  width: 100%;
  height: 15.625rem;
  padding: 1.25rem;
  margin-bottom: 1.25rem;
  border-radius: ${({ theme }) => theme.borderRadius.minSmall};
  box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.25);
  background-color: ${({ theme }) => theme.colors.white};
  overflow-y: auto;
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
  border-radius: ${({ theme }) => theme.borderRadius.minSmall};
  border: 1px solid ${({ theme }) => theme.colors.gray};
  font-size: ${({ theme }) => theme.fontSizes.normal};
  box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.25);
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
  border-radius: ${({ theme }) => theme.borderRadius.minSmall};
  font-size: ${({ theme }) => theme.fontSizes.normal};
  box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.25);
  background-color: ${({ theme }) => theme.colors.white};
`;

export const DependenciesSelectorContainer = styled.div`
  height: 18.75rem;
  padding: 1.25rem;
  border-radius: ${({ theme }) => theme.borderRadius.main};
  background-color: ${({ theme }) => theme.colors.white};
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  overflow-y: auto;
`;

export const DependencyItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1.25rem;
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;

  span {
    &:first-child {
      font-size: ${({ theme }) => theme.fontSizes.largePlus};
      color: ${({ theme }) => theme.colors.basic};
    }
    &:last-child {
      font-size: ${({ theme }) => theme.fontSizes.normal};
      color: ${({ theme }) => theme.colors.sub};
    }
  }
`;

export const ControlContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const DevedpendenciesContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1.25rem;
  margin: 1.25rem auto;
  border-radius: ${({ theme }) => theme.borderRadius.main};
  background-color: ${({ theme }) => theme.colors.white};
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);

  > span {
    text-align: right;
    font-size: ${({ theme }) => theme.fontSizes.sub};
    color: ${({ theme }) => theme.colors.border};
    cursor: default;
  }
`;

export const DependencyList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.9375rem;
`;

export const DependencyItems = styled.div`
  display: flex;
  padding: 0.625rem 0;

  .dependency-list {
    width: 100%;
    display: flex;
    justify-content: space-between;
    padding-right: 1.875rem;
  }
`;

export const TextContainers = styled.div`
  display: flex;
  flex-direction: column;
  cursor: default;

  span {
    display: inline-block;
    font-size: ${({ theme }) => theme.fontSizes.normal};
    color: ${({ theme }) => theme.colors.basic};

    &:last-child {
      color: ${({ theme }) => theme.colors.sub};
    }
  }
`;

export const ControlContainers = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  .sub-text {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;

    &:first-child {
      padding-bottom: 0.125rem;
    }

    span {
      width: 100%;
      padding-right: 0.3125rem;
      text-align: right;
      font-size: ${({ theme }) => theme.fontSizes.normal};
      color: ${({ theme }) => theme.colors.basic};
    }
  }
`;

// export const SelectWrapper = styled.div`
// 	position: relative;
// 	margin-bottom: 0.625rem;
// 	color: ${({ theme }) => theme.colors.border};

// 	&::after {
// 		content: "";
// 		position: absolute;
// 		top: 50%;
// 		right: 0.75rem;
// 		width: 1rem;
// 		height: 1rem;
// 		background: url(${icons.arrowIcon}) no-repeat;
// 		background-size: contain;
// 		pointer-events: none;
// 		transform: translateY(-50%) rotate(180deg);
// 		transition: transform 0.3s ease;
// 	}
// `;

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

export const Devedpendencies = styled.div`
  display: flex;
  align-items: center;
  margin-left: auto;
  padding-left: 1.25rem;
  border-left: 1px dashed ${({ theme }) => theme.colors.gray};
`;

export const DisabledCheckbox = styled(Checkbox)`
  label {
    border-color: ${({ theme }) => theme.colors.gray};
    background-color: ${({ theme }) => theme.colors.gray};
    cursor: not-allowed;
  }
`;
