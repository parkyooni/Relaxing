import { useEffect } from "react";
import { SettingLoadContainer, RadioGroup } from "@public/style/Project.styles";
import RadioBox from "@components/common/RadioBox";
import useProjectStore from "@/store/projectStore";

const SettingLoad = () => {
  const {
    customNames,
    setCustomNames,
    selectedSettingOption,
    setSelectedSettingOption
  } = useProjectStore(state => ({
    customNames: state.customNames,
    setCustomNames: state.setCustomNames,
    selectedSettingOption: state.selectedSettingOption,
    setSelectedSettingOption: state.setSelectedSettingOption
  }));

  const extractUniqueCustomNames = projectData => {
    if (!projectData?.length) return [];
    return [
      ...new Set(
        projectData
          .filter(
            project =>
              typeof project.custom?.customName === "string" &&
              project.custom.customName.trim() !== "" &&
              project.custom.customName !== "undefined"
          )
          .map(project => project.custom.customName)
      )
    ];
  };

  const loadProjectLists = async () => {
    try {
      const projectData = await window.api.loadProjectList();
      const uniqueCustomNames = extractUniqueCustomNames(projectData);
      setCustomNames(uniqueCustomNames);
    } catch (error) {
      console.error(
        "프로젝트 리스트를 불러오는 중 오류가 발생했습니다:",
        error
      );
    }
  };

  useEffect(() => {
    loadProjectLists();
  }, [setCustomNames]);

  const handleChange = e => {
    setSelectedSettingOption(e.target.value);
  };

  const renderRadioBox = (id, value, label) => (
    <RadioBox
      key={id}
      id={id}
      name="setting"
      value={value}
      checked={selectedSettingOption === value}
      onChange={handleChange}
      label={label}
    />
  );

  return (
    <SettingLoadContainer>
      <RadioGroup>
        {renderRadioBox(
          "userDefined",
          "userDefined",
          "프로젝트 생성 사용자 정의"
        )}
        {customNames.map((name, index) =>
          renderRadioBox(`customProject-${index}`, name, name)
        )}
      </RadioGroup>
    </SettingLoadContainer>
  );
};

export default SettingLoad;
