import styled from "styled-components";

const CheckboxWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const HiddenCheckbox = styled.input.attrs({ type: "checkbox" })`
  display: none;
`;

const StyledCheckbox = styled.label`
  position: relative;
  display: inline-block;
  width: 1.875rem;
  height: 1.875rem;
  border: 2px solid
    ${({ theme, disabled }) =>
      disabled ? theme.colors.gray : theme.colors.border};
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};
  background-color: ${({ theme, disabled }) =>
    disabled ? theme.colors.gray : "transparent"};

  &::after {
    content: ${({ checked }) => (checked ? "'✔'" : "")};
    position: absolute;
    left: 0;
    top: 0;
    width: 1.875rem;
    height: 1.875rem;
    text-align: center;
    font-size: 25px;
    color: ${({ theme, disabled }) =>
      disabled ? theme.colors.lightGray : theme.colors.border};
  }
`;

const Checkbox = ({ checked, id, disabled, ...props }) => {
  return (
    <CheckboxWrapper>
      <HiddenCheckbox
        checked={checked}
        id={id}
        disabled={disabled}
        {...props}
      />
      <StyledCheckbox checked={checked} htmlFor={id} disabled={disabled} />
    </CheckboxWrapper>
  );
};

export default Checkbox;
