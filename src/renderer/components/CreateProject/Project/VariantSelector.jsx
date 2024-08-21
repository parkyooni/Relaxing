import Checkbox from "@components/common/CheckBox";
import {
  SelectorContainer,
  SelectorItem,
  ControlContainer,
  TextContainer
} from "@public/style/Project.styles";
import useProjectStore from "@/store/projectStore";
import mockData from "@utils/mockData.json";

const VariantSelector = () => {
  const {
    selectedFrameworkIndex,
    selectedOptionIndex,
    setSelectedOptionIndex
  } = useProjectStore(
    ({
      selectedFrameworkIndex,
      selectedOptionIndex,
      setSelectedOptionIndex
    }) => ({
      selectedFrameworkIndex,
      selectedOptionIndex,
      setSelectedOptionIndex
    })
  );

  const frameworks = mockData.frameworkSelector;

  if (selectedFrameworkIndex === null) {
    return <div>Please select a framework first.</div>;
  }

  const selectedFramework = frameworks[selectedFrameworkIndex];

  const handleCheckboxChange = optionIndex => {
    const newIndex = optionIndex === selectedOptionIndex ? null : optionIndex;
    setSelectedOptionIndex(newIndex);
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
