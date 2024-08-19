import { useState } from "react";
import { SettingLoadContainer, RadioGroup } from "@public/style/Project.styles";
import RadioBox from "@components/common/RadioBox";
import mockData from "@utils/mockData.json";

const SettingLoad = () => {
  const [selectedOption, setSelectedOption] = useState("userDefined");

  const savedSettings = mockData.savedSettings;

  const handleChange = e => {
    setSelectedOption(e.target.value);
  };

  return (
    <SettingLoadContainer>
      <RadioGroup>
        <RadioBox
          id="userDefined"
          name="setting"
          value="userDefined"
          checked={selectedOption === "userDefined"}
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
            checked={selectedOption === setting}
            onChange={handleChange}
            label={setting}
          />
        ))}
      </RadioGroup>
    </SettingLoadContainer>
  );
};

export default SettingLoad;
