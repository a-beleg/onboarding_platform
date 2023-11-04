import axios from "axios";

axios.defaults.headers.post["Content-Type"] = "application/json";

const defaultBaseURL = "http://localhost:3030/";

const baseURL = process.env.REACT_APP_BACKEND_API_HOST || defaultBaseURL;

export const api = axios.create({
    baseURL,
});
