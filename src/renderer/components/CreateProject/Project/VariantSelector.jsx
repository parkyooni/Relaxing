import Checkbox from "@components/common/CheckBox";
import {
  SelectorContainer,
  SelectorItem,
  ControlContainer,
  TextContainer
} from "@public/style/Project.styles";
import useProjectStore from "@/store/projectStore";
import optionConfig from "@utils/option.config";

const VariantSelector = () => {
  const {
    selectedFrameworkIndex,
    selectedOptionIndex,
    setSelectedOptionIndex,
    setVariantName
  } = useProjectStore(state => ({
    selectedFrameworkIndex: state.selectedFrameworkIndex,
    selectedOptionIndex: state.selectedOptionIndex,
    setSelectedOptionIndex: state.setSelectedOptionIndex,
    setVariantName: state.setVariantName
  }));

  const frameworks = optionConfig.frameworkSelector;

  if (selectedFrameworkIndex === null) {
    return <div>Please select a framework first.</div>;
  }

  const selectedFramework = frameworks[selectedFrameworkIndex];

  const handleCheckboxChange = optionIndex => {
    const newIndex = optionIndex === selectedOptionIndex ? null : optionIndex;
    setSelectedOptionIndex(newIndex);

    newIndex !== null
      ? setVariantName(selectedFramework.option[newIndex].value)
      : setVariantName("");
  };

  return (
    <SelectorContainer>
      <div className="layout">
        {selectedFramework.option.map((option, optionIndex) => (
          <SelectorItem key={`${selectedFrameworkIndex}-${optionIndex}`}>
            <TextContainer>
              <span>{option.name}</span>
            </TextContainer>
            <ControlContainer>
              <Checkbox
                id={`checkbox-on-${selectedFrameworkIndex}-${optionIndex}`}
                checked={selectedOptionIndex === optionIndex}
                onChange={() => handleCheckboxChange(optionIndex)}
              />
            </ControlContainer>
          </SelectorItem>
        ))}
      </div>
    </SelectorContainer>
  );
};

export default VariantSelector;
