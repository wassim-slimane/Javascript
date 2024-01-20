class User {
    static dateCreation;

    constructor(email="", mdp="", name="", age="", id=undefined) {
        this.id = id
        this.email = email;
        this.mdp   = mdp;
        this.name  = name;
        this.age   = age;

        Object.seal(this);

        this.setDateCreation;
    }

    // Getters
    get getEmail() {
        return this.email;
    }
    get getMdp() {
        return this.mdp;
    }
    get getName() {
        return this.name;
    }
    get getAge() {
        return this.age;
    }

    //Setters
    set setEmail(email) {
        this.email = email;
    }
    set setMdp(mdp) {
        this.mdp = mdp;
    }
    set setName(name) {
        this.name = name;
    }
    set setAge(age) {
        this.age = age;
    }

    static setDateCreation() {
        this.dateCreation = new Date();
    }
}

export default User;