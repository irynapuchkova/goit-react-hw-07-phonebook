import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import logger from "redux-logger";

import contactsSlice from "./contacts/contacts-reducer";

const middleware = [...getDefaultMiddleware(), logger];

const store = configureStore({
  reducer: {
    contacts: contactsSlice,
  },
  devTools: process.env.NODE_ENV === "development",
  middleware,
});

export default store;
