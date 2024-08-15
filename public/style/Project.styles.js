import styled from "styled-components";
import { media } from "./theme";
import { FlexContainer } from "./utils.styles";

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
			margin: 20px 0;
			padding: 0 20px;
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
