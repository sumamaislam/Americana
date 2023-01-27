import { combineReducers } from "@reduxjs/toolkit";
import home from "./home";
import product from "./product";
import global from "./global";

export const combinedReducer = () =>
  combineReducers({
    home,
    global,
    product
  });
