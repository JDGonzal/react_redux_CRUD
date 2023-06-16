import { configureStore } from "@reduxjs/toolkit";
import { tasksSlice } from "./states";
import { TaskInterface } from "@/models";

export interface AppStore {
  tasks: TaskInterface[];
}

export default configureStore<AppStore>({
  reducer: {
    tasks: tasksSlice.reducer,
  }
});
// const store = configureStore({});
// export default store;
