import React, { useState } from "react";
import Checkbox from "@components/common/CheckBox";
import {
  DependenciesSelectorContainer,
  DependencyItem,
  TextContainer,
  ControlContainer
} from "@public/style/Project.styles";

const DependenciesSelector = () => {
  const dependencies = [
    { name: "eslint", version: "^9.9.0" },
    { name: "Webpack", version: "^18.3.1" },
    { name: "react", version: "^18.3.1" },
    { name: "react-dom", version: "^18.3.1" },
    { name: "husky", version: "^9.1.4" }
  ];

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
