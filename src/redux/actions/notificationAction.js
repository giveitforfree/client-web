import { fetchNotifications, readNotification, unReadNotification } from "../../services/NotificationApi";

export const fetchNotificationsAction = (profileId, params) => dispatch => {
    let query = "?";
    Object.keys(params).forEach(key => {
        query += key + "=" + params[key] + "&"
    })

    return fetchNotifications(profileId, query).then(response => response.data).then(response => {

        return response
    })
}

export const readNotificationAction = (notificationId) => dispatch => {
    return readNotification(notificationId).then(response => response.data).then(response => {

        return response
    })
}
export const unReadNotificationAction = (notificationId) => dispatch => {
    return unReadNotification(notificationId).then(response => response.data).then(response => {

        return response
    })
}