
module.exports = (req, res, next) => {
    console.log('inside the recipe required data check');

    if(req.body) {
        console.log(req.body);
        if(!REQUIRED_CATEGORY_HERE) {
            res.status(400).json("Please Provide REQUIRED_CATEGORY_HERE");
        } else if(!REQUIRED_CATEGORY_HERE) {
            res.status(400).json("Please Provide REQUIRED_CATEGORY_HERE");  
        } else if(!REQUIRED_CATEGORY_HERE) {
            res.status(400).json("Please Provide REQUIRED_CATEGORY_HERE");  
        } else if(!REQUIRED_CATEGORY_HERE) {
            res.status(400).json("Please Provide REQUIRED_CATEGORY_HERE");  
        } else if(!REQUIRED_CATEGORY_HERE) {
            res.status(400).json("Please Provide REQUIRED_CATEGORY_HERE");  
        } else {
            next();
        }
    } else {
        res.status(400).json("Please provide the required data. there is currently no body being passed in.");
    }
}