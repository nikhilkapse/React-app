import { combineReducers } from "redux";
import { AddQuoteFavouriteReducer } from "./addQuoteFavouriteReducer";

export const AppReducer = combineReducers({
  favouriteQuote: AddQuoteFavouriteReducer
});
