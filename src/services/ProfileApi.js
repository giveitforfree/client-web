import axios from '../utils/axios'

const authURL = "http://localhost:8099/api/profiles"
 

export const fetchProfiles = query => axios.get(authURL + query)

