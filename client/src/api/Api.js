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