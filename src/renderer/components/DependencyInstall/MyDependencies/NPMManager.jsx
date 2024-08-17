import React, { useState, version } from "react";
import {
  NPMManagerContainer,
  InputContainer,
  PackageListContainer,
  PackageListItem,
  ButtonContainer,
  SearchButton,
  InstallButton
} from "@public/style/DependencyInstall.styles";

const dummyKeyword = [
  { name: "eslint", version: "9.9.0" },
  { name: "eslint", version: "3.1.8" },
  { name: "eslint-scope", version: "9.8.7" },
  { name: "eslint-scope", version: "9.9.0" },
  { name: "Welcome-Vanilla-Coding" },
  { name: "React", version: "18.2" }
];

const NPMManager = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [packageItems, setPackageItems] = useState([]);
  const [selectedPackageItem, setSelectedPackageItem] = useState(null);

  const handleInputChange = e => {
    setSearchQuery(e.target.value);
  };

  const handleSearch = () => {
    if (searchQuery) {
      const filtered = dummyKeyword
        .filter(pkg => pkg.name.includes(searchQuery))
        .map(pkg => `${pkg.name} ${pkg.version || ""}`);

      setPackageItems(filtered);
      setSelectedPackageItem(null);
    }
  };

  const handleSearchKeywordClick = packageItem => {
    setSelectedPackageItem(packageItem);
  };

  return (
    <NPMManagerContainer>
      <InputContainer>
        <input
          type="text"
          value={searchQuery}
          onChange={handleInputChange}
          placeholder="search..."
          onKeyUp={e => e.key === "Enter" && handleSearch()}
        />
      </InputContainer>

      {packageItems.length > 0 && (
        <div className="search-list">
          <PackageListContainer>
            {packageItems.map(packageItem => (
              <PackageListItem
                onClick={() => handleSearchKeywordClick(packageItem)}
                isSelected={packageItem === selectedPackageItem}
              >
                {packageItem}
              </PackageListItem>
            ))}
          </PackageListContainer>

          <ButtonContainer>
            <SearchButton onClick={handleSearch}>검색</SearchButton>
            <InstallButton disabled={!selectedPackageItem}>
              Install
            </InstallButton>
          </ButtonContainer>
        </div>
      )}
    </NPMManagerContainer>
  );
};

export default NPMManager;
