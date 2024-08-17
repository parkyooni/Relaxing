import { useState } from "react";
import Checkbox from "@components/common/CheckBox";
import {
  DevedpendenciesContainer,
  DependencyList,
  DependencyItems,
  TextContainers,
  ControlContainers,
  Devedpendencies,
  Select,
  DisabledCheckbox,
  SelectWrapper
} from "@public/style/Project.styles";

const DetailDependencies = () => {
  const dependencies = [
    {
      name: "Use class-style component syntax? ",
      text: "Use the @Component decorator on classes.",
      type: "boolean"
    },
    {
      name: "Use Babel alongside TypeScript (required for modern mode, auto-detected polyfills, transpiling JSX)?",
      text: "It sill output ES2015 and delegate the rest to Babel for auto polyfill based on browser targets.",
      type: "boolean"
    },
    {
      name: "Use history mode for router? (Requires proper server setup for index fallback in production)",
      text: "By using the HTML5 History API, the URLs don't need the '#' character anymore.",
      type: "boolean"
    },
    {
      name: "Pick a CSS pre-processor: ",
      text: "PostCSS, Autoprefixer and CSS Modules are supported by default.",
      versionOptions: [
        "ESLint with error prevention only",
        "ESLint + Airbnb config",
        "ESLint + Standard config",
        "ESLint + Prettier"
      ]
    },
    {
      name: "Pick additional lint features: ",
      texts: [
        {
          text: "Lint on save",
          type: "boolean"
        },
        {
          text: "Lint and fix on commit",
          type: "boolean"
        }
      ]
    }
  ];

  const [checkedState, setCheckedState] = useState({});
  const [devCheckedState, setDevCheckedState] = useState({});
  const [selectedVersions, setSelectedVersions] = useState(
    new Array(dependencies.length).fill("")
  );

  const handleCheckboxChange = (index, isDev = false) => {
    if (isDev) {
      setDevCheckedState(prevState => ({
        ...prevState,
        [index]: !prevState[index]
      }));
    } else {
      setCheckedState(prevState => ({
        ...prevState,
        [index]: !prevState[index]
      }));
    }
  };

  const handleSelectChange = (index, event) => {
    const updatedSelectedVersions = selectedVersions.map((item, i) =>
      i === index ? event.target.value : item
    );
    setSelectedVersions(updatedSelectedVersions);
  };

  return (
    <DevedpendenciesContainer>
      <span>Devedpendencies</span>
      <DependencyList>
        {dependencies.map((dependency, index) => (
          <DependencyItems key={index}>
            <div className="dependency-list">
              <TextContainers>
                <span>{dependency.name}</span>
                <span>{dependency.text || "Select version"}</span>
              </TextContainers>
              <ControlContainers>
                {dependency.type === "boolean" ? (
                  <Checkbox
                    checked={!!checkedState[index]}
                    onChange={() => handleCheckboxChange(index)}
                    id={`checkbox-on-off-${index}`}
                  />
                ) : dependency.versionOptions ? (
                  <SelectWrapper>
                    <Select
                      value={selectedVersions[index]}
                      onChange={e => handleSelectChange(index, e)}
                    >
                      <option value="">Select</option>
                      {dependency.versionOptions.map((version, vIndex) => (
                        <option key={vIndex} value={version}>
                          {version}
                        </option>
                      ))}
                    </Select>
                  </SelectWrapper>
                ) : dependency.texts ? (
                  dependency.texts.map((item, subIndex) => (
                    <div className="sub-text" key={`${index}-${subIndex}`}>
                      <span>{item.text}</span>
                      <Checkbox
                        checked={!!checkedState[`${index}-${subIndex}`]}
                        onChange={() =>
                          handleCheckboxChange(`${index}-${subIndex}`)
                        }
                        id={`checkbox-on-off-${index}-${subIndex}`}
                      />
                    </div>
                  ))
                ) : (
                  <Checkbox
                    checked={!!checkedState[index]}
                    onChange={() => handleCheckboxChange(index)}
                    id={`checkbox-on-off-${index}`}
                  />
                )}
              </ControlContainers>
            </div>
            <Devedpendencies>
              <DisabledCheckbox
                checked={!!devCheckedState[index]}
                onChange={() => handleCheckboxChange(index, true)}
                id={`checkbox-dev-${index}`}
                disabled={!dependency.texts && !dependency.versionOptions}
                // 데이터 통신했을때, 외부 API에 대한 devedpendencie의 체크 해야함
              />
            </Devedpendencies>
          </DependencyItems>
        ))}
      </DependencyList>
    </DevedpendenciesContainer>
  );
};

export default DetailDependencies;
