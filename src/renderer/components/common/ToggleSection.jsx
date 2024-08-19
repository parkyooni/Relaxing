import SectionTitle from "@components/common/SectionTitle";
import icons from "@public/images";

const ToggleSection = ({ title, isActive, onToggle, children }) => {
  return (
    <>
      <SectionTitle isActive={isActive} onClick={onToggle}>
        <span>{title}</span>
        <img src={icons.arrowIcon} alt="Arrow Icon" />
      </SectionTitle>
      {isActive && children}
    </>
  );
};

export default ToggleSection;
