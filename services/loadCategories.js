import {BASE_URL_API} from "../constants.js"

// Add all necessary categories for the articles to the DB
const loadCategories = async () => {
    const data = await getCategories();
    if(Object.values(data).length === 0) {
        const categories = [
            {
                name: "Book" 
            },
            {
                name: "Toy" 
            },
            {
                name: "Furniture" 
            },
            {
                name: "Food" 
            },
        ];

        createCategories(categories)
    }
}

function getCategories() {
    return fetch(`${BASE_URL_API}/categories`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        }
    })
    .then(response => response.json())
    .catch(error => {
        throw new Error(error)
    });
}

function createCategories(categories) {
    categories.forEach(category => {
        fetch(`${BASE_URL_API}/categories`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(category)
        }).then(response => response.json())
        .then(result => console.log(result))
        .catch(error => {
            throw new Error(error);
        })
    });
}

loadCategories();