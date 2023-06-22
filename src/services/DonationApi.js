import axios from '../utils/axios'

const URL = "http://localhost:8099/api/donations"


export const fetchDonations = (params) => axios.get(URL + params);
export const fetchDonation = (donationId) => axios.get(`${URL}/${donationId}`);
export const fetchDonationsByProfile = (profileId) => axios.get(`${URL}/profile/${profileId}`);
export const createDonation = (payload) => axios.post(URL, payload);
export const likesDonation = (donationId, likerId) => axios.get(`${URL}/likes/${donationId}?likerId=${likerId}`);
export const pickProfile = (donationId, commentId) => axios.get(`${URL}/pick/${donationId}?commentId=${commentId}`);
export const updateDonation = (donation) => axios.delete(`${URL}`, donation);
export const deleteDonation = (donationId) => axios.delete(`${URL}/${donationId}`);

// COMMNENT SECTION
export const fetchComments = (donationId) => axios.get(`${URL}/${donationId}/comments`);
export const createComment = (donationId, comment) => axios.post(`${URL}/${donationId}/comments`, comment);
export const updateComment = (donationId, comment) => axios.put(`${URL}/${donationId}/comments`, comment);
export const deleteComment = (donationId) => axios.delete(`${URL}/${donationId}/comments`);