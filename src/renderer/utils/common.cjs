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
