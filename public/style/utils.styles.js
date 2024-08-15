import styled from "styled-components";

export const FlexContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: ${({ direction }) => direction || "row"};
  width: ${({ width }) => width || "100%"};
  height: ${({ height }) => height || "auto"};
`;

export const FlexCenterBetween = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
