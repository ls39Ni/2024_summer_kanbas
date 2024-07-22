import { configureStore } from "@reduxjs/toolkit";
import modules from "./Courses/Modules/reducer";
import assignmentsReducer from "./Courses/Assignments/reducer";
import accountReducer from "./Account/reducer";
const store = configureStore({
  reducer: {
    modules,
    assignments: assignmentsReducer,
    accountReducer,
  },
});
export default store;