function Article(type, name) {
    this.type = type;
    this.name = name;

    this.describe = () => {
        console.log(`This is the description of the article : ${type} - ${name}`);
    }

    Object.seal(this);
    
    // type;
    // #price;
    // #description;

    // static nb = 5;
}

export default Article;