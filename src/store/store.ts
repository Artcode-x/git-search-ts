import { configureStore } from "@reduxjs/toolkit"
import reducers from "./reducers/reducers"

const store = configureStore({
  reducer: {
    store: reducers.reducer,
  },
})

export default store
