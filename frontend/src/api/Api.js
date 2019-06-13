import axios from "axios"
import { LUKE_API } from "../appConfig"

const axiosInstance = axios.create({
  baseURL: LUKE_API
})

const authorizeHttp = (token) => axiosInstance.defaults.headers["authorization"] = `Bearer ${token}`

export default {
  authorizeHttp,
  axiosInstance
}