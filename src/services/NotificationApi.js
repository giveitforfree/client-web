import axios from '../utils/axios'

const URL = "http://localhost:8099/api/notifications"


export const fetchNotifications = (profileId, params) => axios.get(`${URL}/${profileId}${params}`)
export const readNotification = (notificationId) => axios.get(`${URL}/${notificationId}`)
export const unReadNotification = (notificationId) => axios.get(`${URL}/${notificationId}`)