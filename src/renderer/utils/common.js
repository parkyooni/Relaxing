import { useNavigate } from "react-router-dom";

export const useNavigation = () => {
  const navigate = useNavigate();

  const navigateToPath = path => {
    navigate(path);
  };

  return { navigateToPath };
};

export const toggleCheckboxState = (index, setState) => {
  setState(prevState => ({
    ...prevState,
    [index]: !prevState[index]
  }));
};

export const updateSelectedVersions = (
  index,
  event,
  selectedVersions,
  setSelectedVersions
) => {
  const updatedSelectedVersions = selectedVersions.map((item, i) =>
    i === index ? event.target.value : item
  );
  setSelectedVersions(updatedSelectedVersions);
};
