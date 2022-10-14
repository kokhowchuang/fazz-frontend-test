import { createSlice } from "@reduxjs/toolkit";

export const bankDataSlice = createSlice({
  name: "bankData",
  initialState: {
    list: [],
    error: false,
    total: 0,
    page: 1,
  },
  reducers: {
    add: (state, action) => {
      state.list.push(action.payload);
    },
    remove: (state, action) => {
      const removedIds = action.payload;
      state.list = state.list.filter((item) => {
        return !removedIds.includes(item._id);
      });
    },
    update: (state, action) => {
      state.list = state.list.map((item) => {
        if (item._id === action.payload._id) {
          return action.payload;
        }
        return item;
      });
    },
    fetch: (state, action) => {
      state.list = [...action.payload.data];
      console.log(state.list);
    },
    throwError: (state, action) => {
      state.error = action.payload;
    },
    get: (state, action) => {
      state.selected = { ...state.selected, ...action.payload };
    },
    setUpdating: (state, action) => {
      state.updating = action.payload;
    },
    setUpdated: (state, action) => {
      state.updated = action.payload;
    },
    changePage: (state, action) => {
      state.page = action.payload;
    },
    clearList: (state, action) => {
      state.list = [];
    },
  },
});

export const {
  add,
  remove,
  update,
  fetch,
  get,
  throwError,
  setUpdating,
  setUpdated,
  changePage,
  clearList,
} = bankDataSlice.actions;

export const selectBankData = (state) => state.bankData.list;

export default bankDataSlice.reducer;
