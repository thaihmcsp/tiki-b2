import { configureStore } from "@reduxjs/toolkit";
import { countCartSliceReducer } from "./redux/countCartSlice";
import { userReducer } from "./redux/userSlice";

const store = configureStore({
  reducer: {
    user: userReducer,
    countCart: countCartSliceReducer,
  },
});

export default store;
