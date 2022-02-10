import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
// import logger from "redux-logger";

import { contactsApi } from "./contacts/contacts-actions/fetchContacts";
import filterSlice from "./contacts/contacts-reducers";

const middleware = [...getDefaultMiddleware(), contactsApi.middleware];

const store = configureStore({
  reducer: {
    contacts: filterSlice,
    [contactsApi.reducerPath]: contactsApi.reducer,
  },
  middleware,
  devTools: process.env.NODE_ENV === "development",
});

export default store;
