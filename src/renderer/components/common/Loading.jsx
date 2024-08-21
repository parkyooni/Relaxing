import { useState, useEffect } from "react";
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
const LoadingContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  background: ${({ theme }) => theme.colors.opacity};
  z-index: 30;
`;

const Spinner = styled.div`
  width: 12.5rem;
  height: 12.5rem;
  border: 1.25rem solid rgba(255, 255, 255, 0.3);
  border-top: 1.25rem solid ${({ theme }) => theme.colors.white};
  border-radius: 50%;
  animation: ${spin} 1s linear infinite;
`;

const LoadingText = styled.div`
  margin-top: 1.875rem;
  color: ${({ theme }) => theme.colors.white};
`;
``;
const Loading = () => {
  const {
    loading: { loadingMessages, currentLoadingMessageIndex },
    updateLoadingMessageIndex,
    resetLoadingMessageIndex
  } = useUIStore();

  useEffect(() => {
    const intervalId = setInterval(() => {
      updateLoadingMessageIndex();
    }, 2000);

    return () => {
      clearInterval(intervalId);
      resetLoadingMessageIndex();
    };
  }, [updateLoadingMessageIndex, resetLoadingMessageIndex]);

  return (
    <LoadingContainer>
      <Spinner />
      <LoadingText>{loadingMessages[currentLoadingMessageIndex]}</LoadingText>
    </LoadingContainer>
  );
};

export default Loading;
