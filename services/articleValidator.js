const articleValidator = (article) => {
    if(!article.type || !article.name) {
        return false;
    }

    // Check type related to all types defined
    
    return true;
}

export default articleValidator;