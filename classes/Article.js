const Article = class {
    type;
    #price;
    #description;

    constructor(type, price, description="") {
        this.type = type;
        this.#price = price;
        this.#description = description;

        Object.seal(this);
    }

    static nb = 5;
}

export default Article;