import { combineReducers } from "redux";
import handleCart from "./handleCart";
import handleUser from "./handleUser"; // 👈 Importamos el reducer del usuario

const rootReducers = combineReducers({
  handleCart,
  handleUser, // 👈 Lo agregamos al estado global
});

export default rootReducers;
