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
    npmLoading,
    setLoadingState,
    uiFlags: { isDropdownVisible, isEnterPressed },
    searchQuery,
    setSearchQuery,
    packageItems,
    setPackageItems,
    selectedPackageItem,
    setSelectedPackageItem,
    setUIFlag
  } = useUIStore(state => ({
    npmLoading: state.npmLoading,
    setLoadingState: state.setLoadingState,
    uiFlags: state.uiFlags,
    searchQuery: state.searchQuery,
    setSearchQuery: state.setSearchQuery,
    packageItems: state.packageItems,
    setPackageItems: state.setPackageItems,
    selectedPackageItem: state.selectedPackageItem,
    setSelectedPackageItem: state.setSelectedPackageItem,
    setUIFlag: state.setUIFlag
  }));

  const { projectPath, setDependencies, setDevDependencies } =
    useDashboardStore(state => ({
      projectPath: state.projectPath,
      setDependencies: state.setDependencies,
      setDevDependencies: state.setDevDependencies
    }));

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
    return () => window.removeEventListener("click", handleClickOutside);
  }, [setUIFlag]);

  useEffect(() => {
    if (!npmLoading.isLoading) {
      setUIFlag("isDropdownVisible", false);
      setUIFlag("isEnterPressed", false);
    }
  }, [npmLoading.isLoading, setUIFlag]);

  const handleInputChange = e => {
    setSearchQuery(e.target.value);
    setUIFlag("isEnterPressed", false);
    setUIFlag("isDropdownVisible", false);
  };

  const searchPackages = async query => {
    try {
      if (!query) return [];

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
      return [];
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
    if (!selectedPackageItem) return;

    try {
      setLoadingState("npmLoading", true);

      const [packageName, packageVersion] = selectedPackageItem.split(" ");
      const packageToInstall = packageVersion
        ? `${packageName}@${packageVersion}`
        : packageName;

      await window.api.addInstallDependencies({
        path: projectPath,
        dependencies: [packageToInstall]
      });

      const updatedPackageJsonData =
        await window.api.loadPackageJsonData(projectPath);

      setDependencies(updatedPackageJsonData.dependencies);
      setDevDependencies(updatedPackageJsonData.devDependencies);
    } catch (error) {
      console.error(error);
      showModal("패키지 설치 중 오류가 발생했습니다.");
    } finally {
      setLoadingState("npmLoading", false);
    }
  };

  const handleSearchKeywordClick = packageItem => {
    setSelectedPackageItem(packageItem);
  };

  const handleKeyUp = e => {
    if (e.key === "Enter") handleSearch();
  };

  const handleClickOutside = () => {
    setUIFlag("isDropdownVisible", false);
  };

  if (npmLoading.isLoading) {
    return (
      <Loading
        noSpinner={false}
        changeSpinner={true}
        customStyles={true}
        textLoading={true}
        loadingMessages={[
          "패키지를 설치 하고 있습니다 ...",
          "Install packages..."
        ]}
      />
    );
  }

  return (
    <div onClick={handleClickOutside}>
      <NPMManagerContainer
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
                  key={packageItem}
                  onClick={() => handleSearchKeywordClick(packageItem)}
                  className={
                    packageItem === selectedPackageItem ? "selected" : ""
                  }
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
