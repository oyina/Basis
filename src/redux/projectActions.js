import ProjectsCRUD from "./projectCRUD";
import { 
    createProject, 
    retrieveProjects, 
    updateProject, 
    deleteProject, 
    deleteAllProjects } from './projectsSlice';


export const CreateProject = (project) => async (dispatch) => {
  try {
    const res = await ProjectsCRUD.create(project);

    dispatch(createProject(res.data));

    return Promise.resolve(res.data);
  } catch (err) {
    return Promise.reject(err);
  }
};

export const RetrieveProjects = () => async (dispatch) => {
  try {
    const res = await ProjectsCRUD.getAll();

    dispatch(retrieveProjects(res.data));
  } catch (err) {
    console.log(err);
  }
};

export const UpdateProject = (id, data) => async (dispatch) => {
  try {
    const res = await ProjectsCRUD.update(id, data);

    dispatch(updateProject(res.data));

    return Promise.resolve(res.data);
  } catch (err) {
    return Promise.reject(err);
  }
};

export const DeleteProject = (id) => async (dispatch) => {
  try {
    const res = await ProjectsCRUD.remove(id);

    dispatch(deleteProject(id));
  } catch (err) {
    console.log(err);
  }
};

export const DeleteAllProjectss = () => async (dispatch) => {
  try {
    const res = await ProjectsCRUD.removeAll();

    dispatch(deleteAllProjects(res.data));

    return Promise.resolve(res.data);
  } catch (err) {
    return Promise.reject(err);
  }
};

export const FindProjectsByName = (title) => async (dispatch) => {
  try {
    const res = await ProjectsCRUD.findByName(title);

    dispatch(retrieveProjects(res.data));
  } catch (err) {
    console.log(err);
  }
};