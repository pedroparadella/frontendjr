const TV_SHOW_UPDATE_VALUE = "TV_SHOW_UPDATE_VALUE";

export const initialState = {
  tvShow: [],
};

export default function Reducer(state = initialState, action) {
  switch (action.type) {
    case TV_SHOW_UPDATE_VALUE:
      return {
        ...state,
        tvShow: action.info.tvShow,
      };
    default:
      return state;
  }
}

export const actionTvShow = (info) => ({
  type: TV_SHOW_UPDATE_VALUE,
  info,
});
