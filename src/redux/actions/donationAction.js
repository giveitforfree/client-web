import {
    createComment, createDonation, deleteComment, fetchComments, fetchDonations, updateComment, fetchDonation, fetchDonationsByProfile, likesDonation, pickProfile, updateDonation, deleteDonation,
} from "../../services/DonationApi";
import { FETCH_MY_DONATIONS_SUCCESS, POST_DONATION_FAILURE, POST_DONATION_SUCCESS } from "./types";

export const createDonationAction = (payload) => dispatch => {
    try {
        return createDonation(payload).then(response => response.data).then(response => {
            if (response.status === 'success' && response['data']) {
                dispatch({ type: POST_DONATION_SUCCESS, payload: response['data'] || null })
            }
            return response
        })
    } catch (error) {
        dispatch({ type: POST_DONATION_FAILURE, payload: null })
        return null
    }
}


export const fetchDonationsAction = (params = {}) => dispatch => {
    let query = "?";
    Object.keys(params).forEach(key => {
        query += key + "=" + params[key] + "&"
    })

    return fetchDonations(query).then(response => response.data).then(response => {
        // const { content = [], numberOfElements = 0, size = 0, totalElements = 0, totalPages = 0, first = false, last = false, } = response;
        dispatch({ type: FETCH_MY_DONATIONS_SUCCESS, payload: response['content'] })
        return response
    })
}

export const fetchDonationAction = (donationId) => dispatch => {
    return fetchDonation(donationId).then(response => response.data).then(response => {

        return response;
    })
}
export const fetchDonationsByProfileAction = (profileId) => dispatch => {
    return fetchDonationsByProfile(profileId).then(response => response.data).then(response => {

        return response;
    })
}
export const likesDonationAction = (donationId, likerId) => dispatch => {
    return likesDonation(donationId, likerId).then(response => response.data).then(response => {

        return response;
    })
}
export const pickProfileAction = (donationId, commentId) => dispatch => {
    return pickProfile(donationId, commentId).then(response => response.data).then(response => {

        return response;
    })
}
export const updateDonationAction = dispatch => {
    return updateDonation(donationId).then(response => response.data).then(response => {

        return response;
    })
}
export const deleteDonationAction = (donationId) => dispatch => {
    return deleteDonation(donationId).then(response => response.data).then(response => {

        return response;
    })
}

// COMMENT SECTION
export const fetchCommentsAction = (donationId) => dispatch => {
    return fetchComments(donationId).then(response => response.data).then(response => {
        return response
    })
}

export const createCommentAction = (donationId, comment) => dispatch => {
    return createComment(donationId, comment).then(response => response.data).then(response => {

        return response;
    })
}
export const updateCommentAction = (donationId, comment) => dispatch => {
    return updateComment(donationId, comment).then(response => response.data).then(response => {

        return response;
    })
}
export const deleteCommentAction = (donationId) => dispatch => {
    return deleteComment(donationId).then(response => response.data).then(response => {

        return response;
    })

}