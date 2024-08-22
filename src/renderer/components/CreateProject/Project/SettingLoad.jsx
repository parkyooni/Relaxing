import { SettingLoadContainer, RadioGroup } from "@public/style/Project.styles";
import RadioBox from "@components/common/RadioBox";
import optionConfig from "@utils/option.config";
import useProjectStore from "@/store/projectStore";

const SettingLoad = () => {
  const { selectedSettingOption, setSelectedSettingOption } = useProjectStore(
    state => ({
      selectedSettingOption: state.selectedSettingOption,
      setSelectedSettingOption: state.setSelectedSettingOption
    })
  );

  const savedSettings = optionConfig.savedSettings;

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
        {renderRadioBox("userDefined", "userDefined", "사용자 정의")}
      </RadioGroup>
      <RadioGroup>
        {savedSettings.map((setting, index) =>
          renderRadioBox(`savedSetting-${setting}-${index}`, setting, setting)
        )}
      </RadioGroup>
    </SettingLoadContainer>
  );
};

export default SettingLoad;
