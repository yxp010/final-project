export const baseURL = 'http://localhost:3001/'
export const users = 'http://localhost:3001/users'
export const loginURL = 'http://localhost:3001/auth/login'
export const checkLogin = 'http://localhost:3001/login_check'
// Near events
export const nearEventsURL = 'http://localhost:3001/near_events'
export const initialDiscoverURL = 'http://localhost:3001/discover_games_or_groups'
export const fetchEventsURL = 'http://localhost:3001/fetch_events_on_discover'

// Join group / games / tournaments
export const joinGroup = 'http://localhost:3001/applies'
export const joinGame = 'http://localhost:3001/events/join'

// User Profile Page Routes
export const profile = 'http://localhost:3001/user/profile'
// User past||upcomming events
export const userTimeEvents = time => `http://localhost:3001/user/${time}_events`

// User notification
export const userNotification = 'http://localhost:3001/user/notifications'
export const acceptToGroup = (id) => `http://localhost:3001/notifications/${id}/accept_user`
export const hasReadNotifications = 'http://localhost:3001/user/notifications_read'
export const unreadNotifications = 'http://localhost:3001/user/notifications_unread'
export const readNotificationURL = id => `http://localhost:3001/user/notifications/${id}/read`
export const unreadNotificationURL = id => `http://localhost:3001/user/notifications/${id}/unread`
export const deleteNotificationURL = id => `http://localhost:3001/notifications/${id}`

// Games
export const gamesURL = 'http://localhost:3001/games'
export const fetchGameUsers = id => `http://localhost:3001/events/${id}/users`

// Tournaments
export const tournamentsURL = 'http://localhost:3001/tournaments'

// Groups
export const groupsURL = 'http://localhost:3001/groups'
export const fetchGroupUsers = id => `http://localhost:3001/groups/${id}/users`
export const leaveGroup = id => `http://localhost:3001/user/groups/${id}/leave`

// Groups for a user
export const userGroups = 'http://localhost:3001/user/groups'

// Log out

export const logoutURL = 'http://localhost:3001/logout'