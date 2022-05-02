import { useState } from 'react';
import AddNewCardModal from '../../components/modals/addNewCard';
import EditAndDeleteModal from '../../components/modals/editAndDelete';
import Popup from '../../components/modals/popup';

import { ModalContextProps } from '../../types/character';
import ModalContext from './Context';

const ModalProvider = ({ children }: ModalContextProps) => {
  const [isOpenFormModal, setIsOpenFormModal] = useState(false);
  const [isOpenDeleteModal, setIsOpenDeleteModal] = useState(false);
  const [isOpenPopup, setIsOpenPopup] = useState(false);

  function handleFormModal() {
    setIsOpenFormModal((prev) => !prev);
  }

  function handleDeleteModal() {
    setIsOpenDeleteModal((prev) => !prev);
  }

  function handlePopup() {
    setIsOpenPopup((prev) => !prev);
  }

  return (
    <ModalContext.Provider
      value={{
        handleFormModal,
        handleDeleteModal,
        handlePopup,
      }}
    >
      {children}
      {isOpenFormModal && <AddNewCardModal />}
      {isOpenDeleteModal && <EditAndDeleteModal />}
      {isOpenPopup && <Popup />}
    </ModalContext.Provider>
  );
};

export default ModalProvider;
