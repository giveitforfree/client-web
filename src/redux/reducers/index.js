import authReducer from "./authReducer";
import categoryReducer from "./categoryReducer";
import donationReducer from "./donationReducer";
import errorReducer from "./errorReducer";
import notificationReducer from "./notificationReducer";

const rootReducer = {
    auth: authReducer,
    category: categoryReducer,
    donation:donationReducer,
    notification: notificationReducer,
    error: errorReducer,
}

export default rootReducer;