export const baseURL = 'http://localhost:3001/'
export const users = 'http://localhost:3001/users'
export const loginURL = 'http://localhost:3001/auth/login'
export const checkLogin = 'http://localhost:3001/login_check'
// Near events
export const nearEventsURL = 'http://localhost:3001/near_events'

// Join group / games / tournaments
export const joinGroup = 'http://localhost:3001/applies'
export const joinGame = 'http://localhost:3001/events/join'

// User Profile Page Routes
export const profile = 'http://localhost:3001/user/profile'
// User past||upcomming events
export const userTimeEvents = time => `http://localhost:3001/user/${time}_events`
// User upcomming events
// export const upcommingEvents = 'http://localhost:3001/user/upcomming_events'

// Games
export const gamesURL = 'http://localhost:3001/games'

// Tournaments
export const tournamentsURL = 'http://localhost:3001/tournaments'

// Groups
export const groupsURL = 'http://localhost:3001/groups'
export const leaveGroup = id => `http://localhost:3001/user/groups/${id}/leave`

// Groups for a user
export const userGroups = 'http://localhost:3001/user/groups'

// Log out

export const logoutURL = 'http://localhost:3001/logout'