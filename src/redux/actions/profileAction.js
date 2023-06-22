import { fetchProfiles } from "../../services/ProfileApi";
import ava01 from "../../assets/images/ava-01.png";


export const fetchProfilesAction = (params = {}) => dispatch => {
    let query = "?";
    Object.keys(params).forEach(key => {
        query += key + "=" + params[key] + "&"
    })

    return fetchProfiles(query).then(response => response.data).then(response => {
        // const { content = [], numberOfElements = 0, size = 0, totalElements = 0, totalPages = 0, first = false, last = false, } = response;
        const avatar = ava01;
        return { ...response,avatar: avatar }
    })
} 