import { useState } from "react";
import {
  NPMManagerContainer,
  InputContainer,
  PackageListContainer,
  PackageListItem,
  ButtonContainer
} from "@public/style/DependencyInstall.styles";
import ButtonBox from "@components/common/ButtonBox";

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
        .filter(pkg =>
          pkg.name.toLowerCase().includes(searchQuery.toLowerCase())
        )
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
        <>
          <PackageListContainer>
            {packageItems.map(packageItem => (
              <PackageListItem
                onClick={() => handleSearchKeywordClick(packageItem)}
                className={
                  packageItem === selectedPackageItem ? "selected" : ""
                }
                key={packageItem}
              >
                {packageItem}
              </PackageListItem>
            ))}
          </PackageListContainer>

          <ButtonContainer>
            <ButtonBox variant="active" onClick={handleSearch}>
              검색
            </ButtonBox>
            <ButtonBox
              variant={selectedPackageItem ? "active" : "disabled"}
              disabled={!selectedPackageItem}
            >
              Install
            </ButtonBox>
          </ButtonContainer>
        </>
      )}
    </NPMManagerContainer>
  );
};

export default NPMManager;
