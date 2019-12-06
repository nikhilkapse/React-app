const initialState = {
  favourite: {},
  added: false,
  adding: false,
  added: false
};
export const AddQuoteFavouriteReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_FAVORITE_QUOTES_PENDING:
      return {
        ...state,
        favorite: {},
        added: false,
        adding: true,
        failed: false
      };
    case ADD_TO_FAVORITE_QUOTES_FULFILLED:
      return {
        ...state,
        favorite: action.payload,
        added: true,
        adding: false,
        failed: false
      };
    case ADD_TO_FAVORITE_QUOTES_REJECTED:
      return {
        ...state,
        favorite: {},
        added: false,
        adding: false,
        failed: true
      };
    default:
      return state;
  }
};
