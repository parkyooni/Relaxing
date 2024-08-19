import Checkbox from "@components/common/CheckBox";

const OptionCheckbox = ({ id, checked, onChange, label }) => {
  return (
    <div className="option-check-box">
      <label htmlFor={id}>{label}</label>
      <Checkbox id={id} checked={checked} onChange={onChange} />
    </div>
  );
};

export default OptionCheckbox;
