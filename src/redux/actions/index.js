import { authAction, logoutAction, getCurrentUser } from './authAction'
import { createCategoryAction, fetchCategoriesAction, fetchCategoryAction } from './categoryAction'
import { createCommentAction, createDonationAction, deleteCommentAction, deleteDonationAction, fetchCommentsAction, fetchDonationAction, fetchDonationsAction, fetchDonationsByProfileAction, likesDonationAction, pickProfileAction, updateCommentAction, updateDonationAction } from './donationAction'
import { fetchProfilesAction } from "./profileAction"
import { fetchNotificationsAction, readNotificationAction, unReadNotificationAction } from "./notificationAction"
export default {
    fetchProfilesAction,
    authAction, logoutAction, getCurrentUser,
    createCategoryAction, fetchCategoriesAction, fetchCategoryAction,
    createCommentAction, deleteCommentAction, fetchCommentsAction, likesDonationAction, updateCommentAction,
    createDonationAction, deleteDonationAction, fetchDonationAction, fetchDonationsAction, fetchDonationsByProfileAction, pickProfileAction, updateDonationAction,
    fetchNotificationsAction, readNotificationAction, unReadNotificationAction,
}