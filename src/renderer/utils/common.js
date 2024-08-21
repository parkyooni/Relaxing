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
