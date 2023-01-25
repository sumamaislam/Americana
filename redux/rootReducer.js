import { combineReducers } from "@reduxjs/toolkit";
import home from "./home";
import product from "./product";

export const combinedReducer = () =>
  combineReducers({
    home,
    product
  });
