import React, {useState, Suspense} from "react";
import LoadingSpinner from "./components/ui/loading-spinner/LoadingSpinner";

const PokemonProvider = React.lazy(() => import("./store/pokemon-contex"))
const Header = React.lazy(() => import("./components/header/Header"))
const SearchBar = React.lazy(() => import("./components/searchbar/SearchBar"))
const ResultsList = React.lazy(() => import("./components/results list/ResultsList"))
const Backdrop = React.lazy(() => import("./components/backdrop/Backdrop"))
const Modal = React.lazy(() => import("./components/modal/Modal"))
const UserMessage = React.lazy(() => import("./components/user-message/UserMessage"))

function App() {
  const [displayModal, setDisplayModal] = useState({
    value: null,
    show: false,
    showMessage: false,
    itemToDelete: null,
  });

  function HandleModal(obj) {
    setDisplayModal(obj);
  }

  const { value, show, showMessage, itemToDelete } = displayModal;

  return (
    <Suspense fallback = {<LoadingSpinner/>}>
    <PokemonProvider>
      {show && (
        <Backdrop value={value}>
          {!showMessage && (
            <Modal
              onHandleModal={HandleModal}
              value={value}
              deleteId={itemToDelete}
            />
          )}
          {showMessage && <UserMessage onHandleModal = {HandleModal}/>}
        </Backdrop>
      )}
      <Header />
      <SearchBar />
      <ResultsList onHandleModal={HandleModal} />
    </PokemonProvider>
    </Suspense>
  );
}

export default App;
