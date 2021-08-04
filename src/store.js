import { configureStore } from "@reduxjs/toolkit";
import projectsReducer from './redux/projectsSlice';



const reducer = {
  projects: projectsReducer
}

//add reducer to store
const store = configureStore({
  reducer
});

export default store;