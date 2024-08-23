import icons from "@public/images";

const DependencyList = ({ dependencies, onDelete }) => {
  const dependenciesData = dependencies.map(
    ([index, dependency]) => dependency
  );

  return (
    <ul>
      {dependenciesData.map(dependency => (
        <li key={dependency.name}>
          <span>{dependency.name}</span>
          <div className="version-container">
            <span>현재 버전 {dependency.currentVersion}</span>
            <span>최신 버전 {dependency.latestVersion}</span>
          </div>
          <button onClick={e => e.stopPropagation()}>
            <img
              src={icons.closeIcon}
              alt="Close Icon"
              onClick={() => onDelete(dependency)}
            />
          </button>
        </li>
      ))}
    </ul>
  );
};

export default DependencyList;
