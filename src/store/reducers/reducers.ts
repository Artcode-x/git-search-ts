import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  user: {},
  search: {},
  flag: false,
  filter: true,
  pageNumber: 1,
  searchUserName: {},
  totalPagesFound: {},
  textInInputSearch: {},
}

const reducers = createSlice({
  name: "reducers",
  initialState,
  reducers: {
    userUpdate: (state, actions) => {
      state.user = actions.payload
      sessionStorage.setItem("user", JSON.stringify(actions.payload))
    },
    searchUpdate: (state, action) => {
      state.search = action.payload
    },
    flagUpdate: (state, action) => {
      state.flag = action.payload
    },
    filterUpdate: (state, action) => {
      state.filter = action.payload
    },
    pageNumberUpdate: (state, action) => {
      state.pageNumber = action.payload
    },
    searchUserNameUpdate: (state, action) => {
      state.searchUserName = action.payload
    },
    totalPagesFoundUpdate: (state, action) => {
      state.totalPagesFound = action.payload
    },
    textInInputSearchUpdate: (state, action) => {
      state.textInInputSearch = action.payload
    },
    sessionStorageUpdate: (state) => {
      const user = sessionStorage.getItem("user")
      if (user) state.user = JSON.parse(user)
    },
  },
})

export const {
  userUpdate,
  searchUpdate,
  flagUpdate,
  filterUpdate,
  pageNumberUpdate,
  searchUserNameUpdate,
  totalPagesFoundUpdate,
  textInInputSearchUpdate,
  sessionStorageUpdate,
} = reducers.actions
export default reducers
