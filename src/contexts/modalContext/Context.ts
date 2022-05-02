import { createContext } from 'react';

type ModalContextType = {
  isOpenModal?: boolean;
  setIsOpenModal?: (newState: boolean) => void;
  isOpenFormModal?: boolean;
  setIsOpenFormModal?: (newState: boolean) => void;
  handleFormModal: () => void;
  handleDeleteModal: () => void;
  handlePopup: () => void;
};

const initialValues = {
  isOpenModal: false,
  setIsOpenModal: () => {},
  isOpenFormModal: false,
  setIsOpenFormModal: () => {},
  handleFormModal: () => {},
  handleDeleteModal: () => {},
  handlePopup: () => {},
};

const ModalContext = createContext<ModalContextType>(initialValues);

export default ModalContext;
