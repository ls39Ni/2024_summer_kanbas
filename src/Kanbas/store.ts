import { configureStore } from "@reduxjs/toolkit";
import modulesReducer from "../Kanbas/Courses/Modules/reducer";
import assignmentsReducer from "../Kanbas/Courses/Assignments/reducer";

export interface KanbasState {
  modulesReducer: {
    modules: any[];
    module: any;
  };
}

export interface AssignmentsState {
  assignmentsReducer: {
    assignments: any[];
    assignment: any;
  };
}

const store = configureStore({
  reducer: {
    modulesReducer,
    assignmentsReducer,
  },
});

export default store;