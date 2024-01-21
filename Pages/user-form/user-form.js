import User from "../../Models/User.js";

const handleUserForm = {
    apiUrl: "http://localhost:4000/users",
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