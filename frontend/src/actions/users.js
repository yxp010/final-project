

export function login() {
    return {
        type: 'LOGIN',
        loggedIn: true
    }
}

export function logout() {
    return {
        type: 'LOGOUT',
        loggedIn: false
    }
}

