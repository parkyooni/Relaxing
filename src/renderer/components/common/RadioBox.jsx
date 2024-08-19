import styled from "styled-components";

const StyledRadioButton = styled.input.attrs({ type: "radio" })`
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

const Label = styled.label`
  display: flex;
  align-items: center;
  cursor: pointer;

  span {
    font-size: ${({ theme }) => theme.fontSizes.normal};
    color: ${({ theme }) => theme.colors.basic};
    padding-left: 0.3125rem;
  }
`;

const RadioBox = ({ id, name, value, checked, onChange, label }) => {
  return (
    <Label>
      <StyledRadioButton
        id={id}
        name={name}
        value={value}
        checked={checked}
        onChange={onChange}
      />
      <span>{label}</span>
    </Label>
  );
};

export default RadioBox;
