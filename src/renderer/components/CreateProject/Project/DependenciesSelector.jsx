import { useState, useEffect } from "react";
import Checkbox from "@components/common/CheckBox";
import {
  DependenciesSelectorContainer,
  DependencyItem,
  TextContainer,
  ControlContainer
} from "@public/style/Project.styles";
import useProjectStore from "@/store/projectStore";
import mockData from "@utils/mockData.json";

const DependenciesSelector = () => {
  const { setDependenciesSelected } = useProjectStore();
  const dependencies = mockData.dependenciesSelector;

  const [checkedState, setCheckedState] = useState(
    new Array(dependencies.length).fill(false)
  );

  const handleCheckboxChange = index => {
    const updatedCheckedState = checkedState.map((item, i) =>
      i === index ? !item : item
    );
    setCheckedState(updatedCheckedState);
  };

  useEffect(() => {
    const hasCheckedItem = checkedState.some(item => item === true);
    setDependenciesSelected(hasCheckedItem);
  }, [checkedState, setDependenciesSelected]);

  return (
    <DependenciesSelectorContainer>
      {dependencies.map((dependency, index) => (
        <DependencyItem key={index}>
          <TextContainer>
            <span>{dependency.name}</span>
            <span>{dependency.version}</span>
          </TextContainer>
          <ControlContainer>
            <Checkbox
              checked={checkedState[index]}
              onChange={() => handleCheckboxChange(index)}
              id={`checkbox-${index}`}
            />
          </ControlContainer>
        </DependencyItem>
      ))}
    </DependenciesSelectorContainer>
  );
};

export default DependenciesSelector;
