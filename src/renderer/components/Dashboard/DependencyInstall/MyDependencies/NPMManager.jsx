import { useRef, useEffect } from "react";
import {
  NPMManagerContainer,
  InputContainer,
  PackageListContainer,
  PackageListItem,
  ButtonContainer
} from "@public/style/DependencyInstall.styles";
import ButtonBox from "@components/common/ButtonBox";
import Loading from "@components/common/Loading";
import useUIStore from "@/store/uiStore";
import useDashboardStore from "@/store/dashboardStore";

const NPMManager = ({ showModal }) => {
  const {
    searchQuery,
    setSearchQuery,
    packageItems,
    setPackageItems,
    selectedPackageItem,
    setSelectedPackageItem,
    uiFlags: { isDropdownVisible, isEnterPressed },
    setUIFlag,
    isLoading,
    setActiveLoading
  } = useUIStore();
  const projectPath = useDashboardStore(state => state.projectPath);
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

  const searchPackages = async query => {
    try {
      if (!query) {
        return [];
      }
      const response = await fetch(
        `https://registry.npmjs.org/-/v1/search?text=${query}`
      );
      const responseData = await response.json();
      return responseData.objects.map(packages => ({
        name: packages.package.name,
        version: packages.package.version
      }));
    } catch (error) {
      console.error(error);
      showModal("패키지 검색 중 오류가 발생했습니다.");
    }
  };

  const handleSearch = async () => {
    if (searchQuery) {
      const searchDependencyKeyword = await searchPackages(searchQuery);
      const searchData = searchDependencyKeyword.map(
        packages => `${packages.name} ${packages.version || ""}`
      );

      setPackageItems(searchData);
      setSelectedPackageItem(null);
      setUIFlag("isDropdownVisible", true);
      setUIFlag("isEnterPressed", true);
    }
  };

  const handleInstall = async () => {
    try {
      if (!selectedPackageItem) {
        return;
      }

      setActiveLoading(true);

      const [packageName, packageVersion] = selectedPackageItem.split(" ");
      const packageToInstall = packageVersion
        ? `${packageName}@${packageVersion}`
        : packageName;
      await window.api.addInstallDependencies({
        path: projectPath,
        dependencies: [packageToInstall]
      });

      setActiveLoading(false);
    } catch (error) {
      console.error(error);
      setActiveLoading(false);
      showModal("패키지 설치 중 오류가 발생했습니다.");
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

  if (isLoading) {
    return <Loading />;
  }

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
              onClick={handleInstall}
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
