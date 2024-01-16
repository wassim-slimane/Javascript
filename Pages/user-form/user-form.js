import User from "../../classes/User.js";

const handleUserForm = {
    validator(data) {
        return data ? true : false;
    },
    storeData(data) {
        const user = new User(data.email, data.password, data.name, data.age);
        console.log(user);
    }
}

export default handleUserForm;
