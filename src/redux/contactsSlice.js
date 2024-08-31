import { createSlice } from "@reduxjs/toolkit";

const contactsSlice = createSlice({
  name: "contacts",
  initialState: {
    items: [
      { id: 1, name: "Frodo Hopkins", number: "911-11-11" },
      { id: 2, name: "Gandalf", number: "333-33-33" },
    ],
  },
  reducers: {
    addContact: (state, action) => {
      return { ...state, items: [...state.items, action.payload] };
    },
    deleteContact: (state, action) => {
      return {
        ...state,
        items: state.items.filter((contact) => contact.id !== action.payload),
      };
    },
  },
});

export const selectContacts = (state) => state.contacts.items;

export const { addContact, deleteContact } = contactsSlice.actions;

export default contactsSlice.reducer;
