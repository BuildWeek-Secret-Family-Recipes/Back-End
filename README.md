# Secret-Recipes Documentation

## Base URL =


### Users
- POST register a new user
    - url: "/api/user/register
    - body: {
        username: 'string',
        password: 'string',
        email: 'string'
    }
    - success response will include all user info, and a token so the user can immediately be logged in.
- POST login existing user
    - url: "/api/user/login"
    - body: {
        username: 'string',
        password: 'string',
    }
    - success response will include token 

### Recipes (all require token to be passed through header)
  - GET all recipes
    - url: "/api/auth/recipes"
    - success response will have an array of all recipes by all users
 - GET recipes by user_id
    - url: "/api/auth/recipes/user"
    - successful response will give all recipes back which belong to the user whose token is passed in the header
 - POST new recipe
    - url: "/api/auth/recipes"
    - body: {
        name: 'string',
        type_of_meal: 'string',
        original_author: 'string'
    }
    - success response will be the automatically created "recipe.id" of that recipe. the database will also automatically add a "recipe.user_id" to the recipe based on the token of the user who is creating the recipe
 - PUT update recipe
    - url: "/api/auth/recipes/:id (where id === recipe.id)
    - body: {
        name: 'string',
        type_of_meal: 'string',
        original_author: 'string'
    }
    - success response will be a 1 to confirm the recipe has been updated
 - DELETE delete a recipe
    - url: "/api/auth/recipes/:id (where id ===recipe.id)
    - success response : {"response": 1, "message": "Recipe successfully deleted"}
