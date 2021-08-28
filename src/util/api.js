import axios from "axios";

export default function api() {
    let options = {}
    
    options = {
        Authorization: `Bearer 3|bJYPKpl0C8bvGChMkx84V9gzJIr7Ep0IyvtXNdVU`
    }

    let baseUrl = "http://127.0.0.1:8000";

    const api = axios.create({
        baseURL: baseUrl,
        withCredentials: true,
        headers: options
    });

    api.interceptors.response.use(function (response) {
        return response;
    }, function (error) {
        return Promise.reject(error);
    });

    return api;
}