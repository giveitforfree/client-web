import Axios from "axios";

// Default config options
const defaultOptions = {
    baseURL: 'http://localhost:8099/api',
    headers: {
        'Content-Type': 'application/json',
    },
};

// Create instance
let axios = Axios.create(defaultOptions);

// Set the AUTH token for any request
axios.interceptors.request.use(function (config) {
    const token = localStorage.getItem('token');
    if (token) {
        config.headers['Authorization'] = token;
    }
    return config;
});

export default axios;