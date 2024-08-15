import React, { useState } from "react";
import {
  SettingLoadContainer,
  RadioGroup,
  RadioButton
} from "@public/style/Project.styles";

const SettingLoad = () => {
  const [selectedOption, setSelectedOption] = useState("userDefined");

  const savedSettings = [
    "내가 저장한 설정 이름 1",
    "내가 저장한 설정 이름 2",
    "내가 저장한 설정 이름 3",
    "내가 저장한 설정 이름 4",
    "내가 저장한 설정 이름 5",
    "내가 저장한 설정 이름 6",
    "내가 저장한 설정 이름 7",
    "내가 저장한 설정 이름 8",
    "내가 저장한 설정 이름 9",
    "내가 저장한 설정 이름 10",
    "내가 저장한 설정 이름 11",
    "내가 저장한 설정 이름 12",
    "내가 저장한 설정 이름 13"
  ];

  const handleChange = e => {
    setSelectedOption(e.target.value);
  };

  return (
    <SettingLoadContainer>
      <RadioGroup>
        <label>
          <RadioButton
            id="userDefined"
            name="setting"
            value="userDefined"
            checked={selectedOption === "userDefined"}
            onChange={handleChange}
          />
          <span>사용자 정의</span>
        </label>
      </RadioGroup>
      <RadioGroup>
        <RadioGroup>
          {savedSettings.map((setting, index) => (
            <label key={index}>
              <RadioButton
                id={`savedSetting-${index}`}
                name="setting"
                value={setting}
                checked={selectedOption === setting}
                onChange={handleChange}
              />
              <span>{setting}</span>
            </label>
          ))}
        </RadioGroup>
      </RadioGroup>
    </SettingLoadContainer>
  );
};

export default SettingLoad;
