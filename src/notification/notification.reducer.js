import { initialState } from "../initialState";
import { SET_NOTIFICATION, CLEAR_NOTIFICATION } from "./notification.action";

export const notificationReducer = (notifications = initialState.notifications, action) => {
    switch(true) {
        case action.type.includes(SET_NOTIFICATION):
            return [action.payload];

        case action.type.includes(CLEAR_NOTIFICATION):
            return notifications;
        
        default:
            return notifications;
    }
}