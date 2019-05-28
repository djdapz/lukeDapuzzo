import axios from 'axios';
import {LUKE_API} from "../config/appConfig";

let axiosInstance = axios.create({
    baseURL: LUKE_API
});

export function postNoCredentials(url, body) {
    return axiosInstance.post(url, body);
}

export function getNoCredentials(url) {
    return axiosInstance.get(url);
}

export function postSecure(url, body) {
    return axiosInstance.post(url, body, {
        auth: {
            username: localStorage.getItem("username"),
            password: localStorage.getItem("password")
        }
    })
}

export function putSecure(url, body) {
    return axiosInstance.put(url, body, {
        auth: {
            username: localStorage.getItem("username"),
            password: localStorage.getItem("password")
        }
    })
}


export function deleteSecure(url) {
    return axiosInstance.delete(url, {
        auth: {
            username: localStorage.getItem("username"),
            password: localStorage.getItem("password")
        }
    })
}