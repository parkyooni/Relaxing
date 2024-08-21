import SectionTitle from "@components/common/SectionTitle";
import icons from "@public/images";

const ToggleSection = ({ title, isActive, onToggle, disabled, children }) => {
  return (
    <>
      <SectionTitle
        isActive={isActive}
        onClick={!disabled ? onToggle : null}
        disabled={disabled}
      >
        <span>{title}</span>
        <img src={icons.arrowIcon} alt="Arrow Icon" />
      </SectionTitle>
      {isActive && children}
    </>
  );
};

export default ToggleSection;
