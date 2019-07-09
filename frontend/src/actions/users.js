

export function login(username) {
    return {
        type: 'LOGIN',
        loggedIn: true,
        username
    }
}

export function logout() {
    return {
        type: 'LOGOUT',
        loggedIn: false
    }
}

