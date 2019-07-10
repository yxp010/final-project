export function setNotifications(notifications) {
    return {
        type: 'SET_NOTIFICATIONS',
        notifications
    }
}

export function acceptNotification(notifications, numberOfUnreadNotifications) {
    return {
        type: 'ACCEPT_NOTIFICATION',
        notifications,
        numberOfUnreadNotifications
    }
}

export function setNotificationNumber(numberOfUnreadNotifications) {
    return {
        type: 'SET_UNREAD_NOTIFICATION_NUMBER',
        numberOfUnreadNotifications
    }
}

export function unreadNotification(notifications) {
    return {
        type: 'UNREAD_NOTIFICATION',
        notifications
    }
}

export function readNotification(notifications) {
    return {
        type: 'READ_NOTIFICATION',
        notifications
    }
}