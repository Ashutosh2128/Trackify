import API from "./api";

export const getTasks = (
    search = "",
    status = "",
    priority = ""
) => {
    return API.get(
        `/task?search=${search}&status=${status}&priority=${priority}`
    );
};

export const createTask = (data) => {
    return API.post("/task/create", data);
};

export const updateTask = (id, data) => {
    return API.put(`/task/update/${id}`, data);
};

export const deleteTask = (id) => {
    return API.delete(`/task/delete/${id}`);
};