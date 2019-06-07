import axios from "axios"
import { LUKE_API } from "../config/appConfig"

const axiosInstance = axios.create({
  baseURL: LUKE_API
})

const authorizeAxiosInstance = (token) => axiosInstance.defaults.headers["authorization"] = `Bearer ${token}`

const post = (url, body) => axiosInstance.post(url, body)

const get = (url) => axiosInstance.get(url)

const put = (url, body) => axiosInstance.put(url, body)

const deleteFunction = (url) => axiosInstance.delete(url)

export default {
  authorizeAxiosInstance,
  post: post,
  get: get,
  put: put,
  delete: deleteFunction
}