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
  } = useProjectStore(
    ({
      selectedFrameworkIndex,
      setSelectedFrameworkIndex,
      setFrameworksSelected
    }) => ({
      selectedFrameworkIndex,
      setSelectedFrameworkIndex,
      setFrameworksSelected
    })
  );

  const frameworks = mockData.frameworkSelector;

  const handleCheckboxChange = index => {
    const newIndex = index === selectedFrameworkIndex ? null : index;
    setSelectedFrameworkIndex(newIndex);
  };

  useEffect(() => {
    setFrameworksSelected(selectedFrameworkIndex !== null);
  }, [selectedFrameworkIndex, setFrameworksSelected]);

  return (
    <SelectorContainer>
      <div className="layout">
        {frameworks.map((framework, index) => (
          <SelectorItem key={index}>
            <TextContainer>
              <span>{framework.name}</span>
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
      </div>
    </SelectorContainer>
  );
};

export default FrameworkSelector;
