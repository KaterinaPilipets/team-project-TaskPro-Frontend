import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isOpen: false,
  showAddBoardModal: false,
};

const sidebarSlice = createSlice({
  name: 'sidebar',
  initialState,

  reducers: {
    toggleSidebar: state => {
      state.isOpen = !state.isOpen;
    },
    openAddBoardModal: state => {
      state.showAddBoardModal = true;
    },
    closeAddBoardModal: state => {
      state.showAddBoardModal = false;
    },
  },
});

export const { toggleSidebar, openAddBoardModal, closeAddBoardModal } =
  sidebarSlice.actions;

export default sidebarSlice.reducer;
