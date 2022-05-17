import { combineReducers } from "redux";
import { sanPhamReducer } from "./sanPhamReducer";

export const rootReducer = combineReducers({
  sanPham: sanPhamReducer,
});
