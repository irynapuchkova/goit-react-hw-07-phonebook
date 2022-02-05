import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
  filter: "",
};

const contactsSlice = createSlice({
  name: "contacts",
  initialState,
  reducers: {
    submitForm: ({ items, filter }, { payload }) => {
      return { filter, items: [...items, payload] };
    },
    deleteContact({ items, filter }, { payload }) {
      items = items.filter((item) => item.id !== payload);
      return { filter, items };
    },
    filter({ items, filter }, { payload }) {
      return { filter: payload, items };
    },
  },
});

export default contactsSlice.reducer;
export const { submitForm, deleteContact, filter } = contactsSlice.actions;
