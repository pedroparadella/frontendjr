import { createStore } from "redux";
import actions from "./actions";

const INITIAL_STATE = {
  isDeleting: false,
  isEditing: false,
  creatingOrEditing: "",
  productsList: [],
  cardIndex: 0,
  thumbAndTitle: {},
};

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actions.TOGGLE_DELETING:
      return {
        ...state,
        isDeleting: !state.isDeleting,
      };

    case actions.TOGGLE_EDITING:
      return {
        ...state,
        isEditing: !state.isEditing,
      };

    case actions.CREATING_OR_EDITING:
      return {
        ...state,
        creatingOrEditing: action.creatingOrEditing,
      };

    case actions.SEND_THUMB_AND_TITLE:
      return {
        ...state,
        thumbAndTitle: action.thumbAndTitle,
      };

    case actions.UPDATE_CARD_INDEX:
      return {
        ...state,
        cardIndex: action.cardIndex,
      };

    case actions.UPDATE_PRODUCTS_LIST:
      return {
        ...state,
        productsList: action.productsList,
      };

    case actions.ADD_PRODUCTS_LIST:
      return {
        ...state,
        productsList: state.productsList.splice(0, 0, action.newProduct),
      };

    case actions.REMOVE_PRODUCT:
      state.productsList.splice(state.cardIndex, 1);
      return {
        ...state,
        productsList: state.productsList,
      };

    case actions.EDIT_PRODUCT:
      return {
        ...state,
        productsList: state.productsList.splice(
          state.cardIndex,
          1,
          action.newProduct
        ),
      };

    default:
      return state;
  }
};

const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
export default store;
