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
  } = useProjectStore(state => ({
    selectedDependenciesIndex: state.selectedDependenciesIndex,
    setSelectedDependenciesIndex: state.setSelectedDependenciesIndex,
    setDependenciesSelected: state.setDependenciesSelected
  }));

  const dependencies = mockData.dependenciesSelector;

  const handleCheckboxChange = index => {
    let newSelectedIndex;

    if (selectedDependenciesIndex.includes(index)) {
      newSelectedIndex = selectedDependenciesIndex.filter(i => i !== index);
    } else {
      newSelectedIndex = [...selectedDependenciesIndex, index];
    }

    setSelectedDependenciesIndex(newSelectedIndex);
  };

  useEffect(() => {
    setDependenciesSelected(selectedDependenciesIndex.length > 0);
  }, [selectedDependenciesIndex, setDependenciesSelected]);

  return (
    <SelectorContainer>
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
    </SelectorContainer>
  );
};

export default DependenciesSelector;
