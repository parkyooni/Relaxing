import styled from "styled-components";

const InputButton = styled.div`
  height: 3.125rem;
  box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.25);
`;

const InputBox = () => {
  return (
    <InputButton>
      <input type="text" placeholder="Enter text" />
    </InputButton>
  );
};

export default InputBox;
