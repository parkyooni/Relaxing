import { useEffect, useRef } from "react";
import styled, { keyframes } from "styled-components";
import useUIStore from "@/store/uiStore";

const spin = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

const LoadingContainer = styled.div.withConfig({
  shouldForwardProp: prop => prop !== "customStyles"
})`
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: ${({ theme }) => theme.colors.opacity};
  z-index: 100;

  ${({ customStyles }) =>
    customStyles &&
    `
    top:  25%;
    left: 25%;
    width: 50%;
    height: 50%;
    background: none;
  `}
`;

const Spinner = styled.div.withConfig({
  shouldForwardProp: prop => prop !== "noSpinner" && prop !== "changeSpinner"
})`
  width: 12.5rem;
  height: 12.5rem;
  border: 1.25rem solid rgba(255, 255, 255, 0.3);
  border-top: 1.25rem solid ${({ theme }) => theme.colors.white};
  border-radius: 50%;
  animation: ${spin} 1s linear infinite;

  ${({ noSpinner }) =>
    noSpinner &&
    `
      border: none;
      border-top: none;
      animation: none;
    `}

  ${({ changeSpinner }) =>
    changeSpinner &&
    `
      border-color: rgba(0,0,0,0.2);
      border-top-color:rgba(255, 222, 90, 0.8);
    `}
`;

const LoadingText = styled.div.withConfig({
  shouldForwardProp: prop => prop !== "textLoading"
})`
  margin-top: 1.875rem;
  color: ${({ theme }) => theme.colors.white};

  ${({ textLoading, theme }) =>
    textLoading &&
    `
      color: ${theme.colors.action};
    `}
`;

const Loading = ({
  loadingMessages: externalLoadingMessages,
  customStyles = {},
  noSpinner = false,
  changeSpinner = false,
  textLoading = false
}) => {
  const {
    loading: { currentLoadingMessageIndex },
    updateLoadingMessageIndex,
    resetLoadingMessageIndex,
    setLoadingMessages
  } = useUIStore();

  const hasSetMessages = useRef(false);

  useEffect(() => {
    if (!hasSetMessages.current) {
      if (externalLoadingMessages && externalLoadingMessages.length > 0) {
        setLoadingMessages(externalLoadingMessages);
        hasSetMessages.current = true;
      }
    }

    const intervalId = setInterval(() => {
      updateLoadingMessageIndex();
    }, 2000);

    return () => {
      clearInterval(intervalId);
      resetLoadingMessageIndex();
    };
  }, []);

  return (
    <LoadingContainer customStyles={customStyles}>
      <Spinner noSpinner={noSpinner} changeSpinner={changeSpinner} />
      <LoadingText textLoading={textLoading}>
        {externalLoadingMessages?.[currentLoadingMessageIndex] || ""}
      </LoadingText>
    </LoadingContainer>
  );
};

export default Loading;
