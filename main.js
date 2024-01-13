import User from "./classes/User.js";
import Article from "./classes/Article.js";

const main = () => {
    const user = new User("wslimane21@gmail.com", "password", "wassim", 23);
    const article = new Article("book", 34, "");
    
    console.log(typeof user);
    console.log(typeof article);

    console.log(user);
    console.log(article);

    console.log(Object.isSealed(user));
    
    user.name = "slimane"; 
    console.log(user);

    // Getters
    console.log(user.email);
    console.log(user.getEmail);
    console.log(user.age);
    console.log(user.getAge);

    // Setters
    user.setAge = 24
    console.log(user.getAge);
    user.age = 32;
    console.log(user.age);

    // Static
    User.setDateCreation();
    console.log(User.dateCreation);
    console.log(user.dateCreation);
}

main();

