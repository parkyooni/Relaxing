import { useState, useEffect } from "react";
import {
  NPMManagerContainer,
  InputContainer,
  PackageListContainer,
  PackageListItem,
  ButtonContainer
} from "@public/style/DependencyInstall.styles";
import ButtonBox from "@components/common/ButtonBox";
import mockData from "@utils/mockData.json";

const NPMManager = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [packageItems, setPackageItems] = useState([]);
  const [selectedPackageItem, setSelectedPackageItem] = useState(null);
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);
  const [isEnterPressed, setIsEnterPressed] = useState(false);

  const isNotFound = packageItems.length === 0;

  useEffect(() => {
    const handleClickOutside = e => {
      if (!e.target.closest(".npm-manager-container")) {
        setIsDropdownVisible(false);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  const handleInputChange = e => {
    setSearchQuery(e.target.value);
    setIsEnterPressed(false);
    setIsDropdownVisible(false);
  };

  const handleSearch = () => {
    if (searchQuery) {
      const filtered = mockData.dependenciesSelector
        .filter(pkg =>
          pkg.name.toLowerCase().includes(searchQuery.toLowerCase())
        )
        .map(pkg => `${pkg.name} ${pkg.version || ""}`);

      setPackageItems(filtered);
      setSelectedPackageItem(null);
      setIsDropdownVisible(true);
      setIsEnterPressed(true);
    }
  };

  const handleSearchKeywordClick = packageItem => {
    setSelectedPackageItem(packageItem);
  };

  const handleKeyUp = e => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <NPMManagerContainer className="npm-manager-container">
      <InputContainer isEnterPressed={isEnterPressed}>
        <input
          type="text"
          value={searchQuery}
          onChange={handleInputChange}
          placeholder="search..."
          onKeyUp={handleKeyUp}
        />
      </InputContainer>

      {isDropdownVisible && (
        <PackageListContainer
          isEnterPressed={isEnterPressed}
          isNotFound={isNotFound}
        >
          {!isNotFound ? (
            packageItems.map(packageItem => (
              <PackageListItem
                onClick={() => handleSearchKeywordClick(packageItem)}
                className={
                  packageItem === selectedPackageItem ? "selected" : ""
                }
                key={packageItem}
              >
                {packageItem}
              </PackageListItem>
            ))
          ) : (
            <span className="not-found">찾을 수 없습니다.</span>
          )}
        </PackageListContainer>
      )}

      {isDropdownVisible && packageItems.length > 0 && (
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
      )}
    </NPMManagerContainer>
  );
};

export default NPMManager;
