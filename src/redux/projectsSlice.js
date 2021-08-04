import { createSlice } from '@reduxjs/toolkit';

const initialProjectsState = {
    projects : {
        
    }
}

const projectsSlice = createSlice({
    name: 'projects',
    initialState: initialProjectsState,
    reducers: {
        createProject: (state, action) => {
            state.projects = {...action.payload,...state.projects};
        },
        retrieveProjects: (state, action) => {
            state.projects = {...action.payload};
        },
        updateProject: (state, action) => {
            state.projects[action.payload.id] = {...action.payload}
        },
        deleteProject: (state, action) => {
            const id = action.payload;
            const { [id]: value, ...newState } = state.projects;
            state.projects = newState;
        },
        deleteAllProjects: (state, action) => {
            state.projects = {}
        }
    }
});

//selector the returns the topics object
export const selectProjects = (state) => state.projects.projects;
//export actions
export const { createProject, retrieveProjects, updateProject, deleteProject, deleteAllProjects } = projectsSlice.actions;
//export reducer
export default projectsSlice.reducer;