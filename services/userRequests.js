import User from "../Models/User.js";
import {BASE_URL_API} from "../constants.js"

export const getUserRequest = (id) => {
    return fetch(`${BASE_URL_API}/users/${id}`, {
        method: 'GET',
        headers: {
            "Content-Type": "application/json",
        },
    })
}

export const getAllUsersRequest = () => {
    return fetch(`${BASE_URL_API}/users`, {
        method: 'GET',
        headers: {
            "Content-Type": "application/json",
        }
    })
}

export const createUserRequest = (data) => {
    const user = new User(data.email, data.password, data.name, data.age)
    
    return fetch(`${BASE_URL_API}/users`, {
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(user)
    })
}

export const updateUserRequest = (id, data) => {
    const user = new User(data.email, data.password, data.name, data.age, id)

    return fetch(`${BASE_URL_API}/users/${id}`, {
        method: 'PUT',
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(user)
    })
}

export const deleteUserRequest = (id) => {
    return fetch(`${BASE_URL_API}/users/${id}`, {
        method: 'DELETE',
        headers: {
            "Content-Type": "application/json",
        }
    })
}