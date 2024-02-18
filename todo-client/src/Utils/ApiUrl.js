import axios from "axios";

export const BASR_URL = "http://localhost:8080"
export const api = axios.create({
    baseURL: BASR_URL,
    headers: {
        "Content-Type": "application/json"
    }
})

export const setAuthHeader = (token, api) => {
    if (token) api.defaults.headers.common["Authorization"] = `Bearer ${token}`
    else {
        delete api.defaults.headers.common["Authorization"];
    }
}