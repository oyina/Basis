import http from '../setupAxios';

//create
const create = data => {
    return http.patch("/projects.json", data);
};

//retrieve
const getAll = () => {
    return http.get("/projects.json");
};

const get = id => {
    return http.get(`/projects/${id}.json`);
};


//update
const update = (id, data) => {
    return http.put(`/projects/${id}.json`, data);
};

//delete
const remove = id => {
    return http.delete(`/projects/${id}.json`);
};

const removeAll = () => {
    return http.delete(`/projects`);
};

//search
const findByName = name => {
    return http.get(`/projects?title=${name}`);
};

const ProjectsCRUD = {
    getAll,
    get,
    create,
    update,
    remove,
    removeAll,
    findByName
};

export default ProjectsCRUD;