import { useRef, useEffect } from "react";
import {
  NPMManagerContainer,
  InputContainer,
  PackageListContainer,
  PackageListItem,
  ButtonContainer
} from "@public/style/DependencyInstall.styles";
import ButtonBox from "@components/common/ButtonBox";
import optionConfig from "@utils/option.config";
import useUIStore from "@/store/uiStore";

const NPMManager = () => {
  const {
    searchQuery,
    setSearchQuery,
    packageItems,
    setPackageItems,
    selectedPackageItem,
    setSelectedPackageItem,
    uiFlags: { isDropdownVisible, isEnterPressed },
    setUIFlag
  } = useUIStore();

  const containerRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = event => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target)
      ) {
        setUIFlag("isDropdownVisible", false);
        setUIFlag("isEnterPressed", false);
      }
    };

    window.addEventListener("click", handleClickOutside);
    return () => {
      window.removeEventListener("click", handleClickOutside);
    };
  }, [setUIFlag]);

  const handleInputChange = e => {
    setSearchQuery(e.target.value);
    setUIFlag("isEnterPressed", false);
    setUIFlag("isDropdownVisible", false);
  };

  const handleSearch = () => {
    if (searchQuery) {
      const filtered = optionConfig.frameworkSelector
        .filter(pkg =>
          pkg.name.toLowerCase().includes(searchQuery.toLowerCase())
        )
        .map(pkg => `${pkg.name} ${pkg.version || ""}`);

      setPackageItems(filtered);
      setSelectedPackageItem(null);
      setUIFlag("isDropdownVisible", true);
      setUIFlag("isEnterPressed", true);
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

  const handleClickOutside = () => {
    setUIFlag("isDropdownVisible", false);
  };

  return (
    <div onClick={handleClickOutside}>
      <NPMManagerContainer
        className="npm-manager-container"
        ref={containerRef}
        onClick={e => e.stopPropagation()}
      >
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
            isNotFound={packageItems.length === 0}
          >
            {!packageItems.length ? (
              <span className="not-found">찾을 수 없습니다.</span>
            ) : (
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
    </div>
  );
};

export default NPMManager;
