import { configureStore } from "@reduxjs/toolkit";
import {tasksSlice} from "./states";

export default configureStore({
  reducer: {
    task: tasksSlice.reducer,
  }
});
// const store = configureStore({});
// export default store;
