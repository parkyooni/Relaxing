import { SettingLoadContainer, RadioGroup } from "@public/style/Project.styles";
import RadioBox from "@components/common/RadioBox";
import mockData from "@utils/mockData.json";
import useProjectStore from "@/store/projectStore";

const SettingLoad = () => {
  const { selectedSettingOption, setSelectedSettingOption } = useProjectStore();
  const savedSettings = mockData.savedSettings;

  const handleChange = e => {
    const settingValue = e.target.value;
    setSelectedSettingOption(settingValue);
  };

  return (
    <SettingLoadContainer>
      <RadioGroup>
        <RadioBox
          id="userDefined"
          name="setting"
          value="userDefined"
          checked={selectedSettingOption === "userDefined"}
          onChange={handleChange}
          label="사용자 정의"
        />
      </RadioGroup>
      <RadioGroup>
        {savedSettings.map((setting, index) => (
          <RadioBox
            key={index}
            id={`savedSetting-${index}`}
            name="setting"
            value={setting}
            checked={selectedSettingOption === setting}
            onChange={handleChange}
            label={setting}
          />
        ))}
      </RadioGroup>
    </SettingLoadContainer>
  );
};

export default SettingLoad;
