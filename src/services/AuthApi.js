import axios from "axios";

const authURL = "http://localhost:8099/api/auth"

export const login = payload => axios.post(authURL + "/login", payload)
export const register = payload => axios.post(authURL + "/register", payload)

 