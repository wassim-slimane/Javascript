function Article(type, name) {
    this.type = type;
    this.name = name;

    this.describe = () => {
        console.log(`This is the description of the article : ${type} - ${name}`);
    }
    
    // type;
    // #price;
    // #description;

    // constructor(type, price, description="") {
    //     this.type = type;
    //     this.#price = price;
    //     this.#description = description;

    //     Object.seal(this);
    // }

    // static nb = 5;
}

export default Article;