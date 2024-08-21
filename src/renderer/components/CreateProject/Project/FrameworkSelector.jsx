import { useEffect } from "react";
import Checkbox from "@components/common/CheckBox";
import {
  SelectorContainer,
  SelectorItem,
  TextContainer,
  ControlContainer
} from "@public/style/Project.styles";
import useProjectStore from "@/store/projectStore";
import mockData from "@utils/mockData.json";

const FrameworkSelector = () => {
  const {
    selectedFrameworkIndex,
    setSelectedFrameworkIndex,
    setFrameworksSelected
  } = useProjectStore(state => ({
    selectedFrameworkIndex: state.selectedFrameworkIndex,
    setSelectedFrameworkIndex: state.setSelectedFrameworkIndex,
    setFrameworksSelected: state.setFrameworksSelected
  }));

  const dependencies = mockData.frameworkSelector;

  const handleCheckboxChange = index => {
    const newSelectedIndex = index === selectedFrameworkIndex ? null : index;
    setSelectedFrameworkIndex(newSelectedIndex);
  };

  useEffect(() => {
    setFrameworksSelected(selectedFrameworkIndex !== null);
  }, [selectedFrameworkIndex, setFrameworksSelected]);

  return (
    <SelectorContainer>
      {dependencies.map((dependency, index) => (
        <SelectorItem key={index}>
          <TextContainer>
            <span>{dependency.name}</span>
          </TextContainer>
          <ControlContainer>
            <Checkbox
              checked={selectedFrameworkIndex === index}
              onChange={() => handleCheckboxChange(index)}
              id={`checkbox-framework-${index}`}
            />
          </ControlContainer>
        </SelectorItem>
      ))}
    </SelectorContainer>
  );
};

export default FrameworkSelector;
