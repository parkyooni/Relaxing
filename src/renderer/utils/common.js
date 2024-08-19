import { useNavigate } from "react-router-dom";
import { useState } from "react";

export const useNavigation = () => {
  const navigate = useNavigate();

  const navigateToPath = path => {
    navigate(path);
  };

  return { navigateToPath };
};

export const useModal = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  return {
    isModalOpen,
    openModal,
    closeModal
  };
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
