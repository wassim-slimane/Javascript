import User from "../../Models/User.js";

const handleUserForm = {
    apiUrl: "http://localhost:3000/users",
    optionsPost: {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
    },

    validator(data) {
        return data ? true : false;
    },

    storeData(data) {
        const user = new User(data.email, data.password, data.name, data.age);
        this.optionsPost.body = JSON.stringify(user);
        
        return fetch(this.apiUrl, this.optionsPost);
    }
}

export default handleUserForm;

// Faire le traitement des données (required, email password) => send error message


// Voir si c'est possible de mettre en place des tests (avec un outil)

// Ajouter tailwind pour le css

// Faire un fichier .env avec les bases_url 
// Faire un fichier ./services/userRequests.js => function userRequests() => avec toutes les fonctions CRUD pour le user
// Faire un fichier à part pour le validator avec la gestion des formulaires