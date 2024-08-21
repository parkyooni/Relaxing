import { useEffect } from "react";
import Checkbox from "@components/common/CheckBox";
import {
  SelectorContainer,
  SelectorItem,
  ControlContainer,
  TextContainer
} from "@public/style/Project.styles";
import useProjectStore from "@/store/projectStore";
import mockData from "@utils/mockData.json";

const DependenciesSelector = () => {
  const {
    selectedDependenciesIndex,
    setSelectedDependenciesIndex,
    setDependenciesSelected
  } = useProjectStore(
    ({
      selectedDependenciesIndex,
      setSelectedDependenciesIndex,
      setDependenciesSelected
    }) => ({
      selectedDependenciesIndex,
      setSelectedDependenciesIndex,
      setDependenciesSelected
    })
  );

  const dependencies = mockData.dependenciesSelector;

  const handleCheckboxChange = index => {
    const newSelectedIndex = selectedDependenciesIndex.includes(index)
      ? selectedDependenciesIndex.filter(i => i !== index)
      : [...selectedDependenciesIndex, index];

    setSelectedDependenciesIndex(newSelectedIndex);
  };

  useEffect(() => {
    setDependenciesSelected(selectedDependenciesIndex.length > 0);
  }, [selectedDependenciesIndex, setDependenciesSelected]);

  return (
    <SelectorContainer>
      <div className="layout">
        {dependencies.map((dependency, index) => (
          <SelectorItem key={index}>
            <TextContainer>
              <span>{dependency.name}</span>
            </TextContainer>
            <ControlContainer>
              <Checkbox
                checked={selectedDependenciesIndex.includes(index)}
                onChange={() => handleCheckboxChange(index)}
                id={`checkbox-${index}`}
              />
            </ControlContainer>
          </SelectorItem>
        ))}
      </div>
    </SelectorContainer>
  );
};

export default DependenciesSelector;
