import axios from "axios";

const API = axios.create({
    baseURL: "https://trackify-vpr1.onrender.com/api/v1",
});

API.interceptors.request.use((config) => {

    const token = localStorage.getItem("token");

    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
});

export default API;