import { useState } from "react";
import Checkbox from "@components/common/CheckBox";
import {
  DependenciesSelectorContainer,
  DependencyItem,
  TextContainer,
  ControlContainer
} from "@public/style/Project.styles";
import mockData from "@utils/mockData.json";

const DependenciesSelector = () => {
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
