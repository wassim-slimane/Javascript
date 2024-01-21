import Article from "../Models/Article.js";
import {BASE_URL_API} from "../constants.js"

export const getArticleRequest = (id) => {
    return fetch(`${BASE_URL_API}/articles/${id}`, {
        method: 'GET',
        headers: {
            "Content-Type": "application/json",
        },
    })
}

export const getAllArticlesRequest = () => {
    return fetch(`${BASE_URL_API}/articles`, {
        method: 'GET',
        headers: {
            "Content-Type": "application/json",
        }
    })
}

export const createArticleRequest = (data) => {
    const article = new Article(data.type, data.name);
    
    return fetch(`${BASE_URL_API}/articles`, {
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(article)
    })
}

export const updateArticleRequest = (id, data) => {
    const article = new Article(data.type, data.name, id);

    return fetch(`${BASE_URL_API}/articles/${id}`, {
        method: 'PUT',
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(article)
    })
}

export const deleteArticleRequest = (id) => {
    return fetch(`${BASE_URL_API}/articles/${id}`, {
        method: 'DELETE',
        headers: {
            "Content-Type": "application/json",
        }
    })
}