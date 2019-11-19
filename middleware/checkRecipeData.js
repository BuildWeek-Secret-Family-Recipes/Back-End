
module.exports = (req, res, next) => {
    console.log('inside the recipe required data check');

    if(req.body) {
        const recipe = req.body;
        if(!recipe.name) {
            res.status(400).json("Please Provide name");
        } else if(!recipe.type_of_meal) {
            res.status(400).json("Please Provide recipe.type_of_meal");  
        } else if(!recipe.original_author) {
            res.status(400).json("Please Provide recipe.original_author");  
        } else {
            next();
        }
    } else {
        res.status(400).json("Please provide the required data. there is currently no body being passed in.");
    }
}