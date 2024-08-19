import { useState } from "react";
import OptionCheckbox from "@components/common/OptionCheckbox";
import OptionVersionSelect from "@components/common/OptionVersionSelect";
import {
  DevedpendenciesContainer,
  DependencyList,
  DependencyItems,
  TextContainers,
  ControlContainers,
  Devedpendencies,
  DisabledCheckbox
} from "@public/style/Project.styles";
import mockData from "@utils/mockData.json";
import { toggleCheckboxState, updateSelectedVersions } from "@utils/common";

const DetailDependencies = () => {
  const dependencies = mockData.dependenciesSelector;

  const [checkedState, setCheckedState] = useState({});
  const [devCheckedState, setDevCheckedState] = useState({});
  const [selectedVersions, setSelectedVersions] = useState(
    new Array(dependencies.length).fill("")
  );

  const handleCheckboxChange = (index, isDev = false) => {
    const stateUpdater = isDev ? setDevCheckedState : setCheckedState;
    toggleCheckboxState(index, stateUpdater);
  };

  const handleSelectChange = (index, event) => {
    updateSelectedVersions(index, event, selectedVersions, setSelectedVersions);
  };

  const getDependencyControl = (
    dependency,
    index,
    checkedState,
    selectedVersions,
    handleCheckboxChange,
    handleSelectChange
  ) => {
    if (dependency.type === "boolean") {
      return (
        <OptionCheckbox
          id={`checkbox-on-off-${index}`}
          checked={!!checkedState[index]}
          onChange={() => handleCheckboxChange(index)}
          label=""
        />
      );
    } else if (dependency.versionOptions) {
      return (
        <OptionVersionSelect
          value={selectedVersions[index]}
          options={dependency.versionOptions}
          onChange={e => handleSelectChange(index, e)}
        />
      );
    } else if (dependency.texts) {
      return dependency.texts.map((item, subIndex) => (
        <OptionCheckbox
          key={`${index}-${subIndex}`}
          id={`checkbox-on-off-${index}-${subIndex}`}
          checked={!!checkedState[`${index}-${subIndex}`]}
          onChange={() => handleCheckboxChange(`${index}-${subIndex}`)}
          label={item.text}
        />
      ));
    } else {
      return (
        <OptionCheckbox
          id={`checkbox-on-off-${index}`}
          checked={!!checkedState[index]}
          onChange={() => handleCheckboxChange(index)}
          label=""
        />
      );
    }
  };

  return (
    <DevedpendenciesContainer>
      <span>Dependencies</span>
      <DependencyList>
        {dependencies.map((dependency, index) => (
          <DependencyItems key={index}>
            <div className="dependency-list">
              <TextContainers>
                <span>{dependency.name}</span>
                <span>{dependency.text || "Select version"}</span>
              </TextContainers>
              <ControlContainers>
                {getDependencyControl(
                  dependency,
                  index,
                  checkedState,
                  selectedVersions,
                  handleCheckboxChange,
                  handleSelectChange
                )}
              </ControlContainers>
            </div>
            <Devedpendencies>
              <DisabledCheckbox
                checked={!!devCheckedState[index]}
                onChange={() => handleCheckboxChange(index, true)}
                id={`checkbox-dev-${index}`}
                disabled={!dependency.texts && !dependency.versionOptions}
              />
            </Devedpendencies>
          </DependencyItems>
        ))}
      </DependencyList>
    </DevedpendenciesContainer>
  );
};

export default DetailDependencies;
