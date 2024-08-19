import { Select, SelectWrapper } from "@public/style/Project.styles";

const OptionVersionSelect = ({ value, options, onChange }) => {
  return (
    <SelectWrapper>
      <Select value={value} onChange={onChange}>
        <option value="">Select</option>
        {options.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </Select>
    </SelectWrapper>
  );
};

export default OptionVersionSelect;
