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
    - url: "/api/auth/recipes/:id" (where id === recipe.id)
    - body: {
        name: 'string',
        type_of_meal: 'string',
        original_author: 'string'
    }
    - success response will be a 1 to confirm the recipe has been updated
 - DELETE a recipe
    - url: "/api/auth/recipes/:id" (where id ===recipe.id)
    - success response : {"response": 1, "message": "Recipe successfully deleted"}

### Ingredients (all require token to be passed through header)
  - GET all ingredients
    - url: "/api/auth/ingredients"
    - success response will have an array of all ingredients by all users
 - GET ingredients by recipe_id
    - url: "/api/auth/recipes/:id" (where id === recipe.id)
    - successful response will give all ingredients back which belong to the recipe whose id is passed in the url
 - POST new ingredient
    - url: "/api/auth/ingredients"
    - body: {
        name: 'string',
        quantity: 'string',
        measurement: 'string',
        recipe_id: integer (which needs to match the recipe.id of the recipe it will belong to)
    }
    - success response will be the automatically created "ingredient.id" of that ingredient.
 - PUT update an ingredient
    - url: "/api/auth/ingredients/:id (where id === ingredient.id)
    - body: {
        name: 'string',
        quantity: 'string',
        measurement: 'string',
        recipe_id: integer (which needs to match the recipe.id of the recipe it will belong to)
    }
    - success response will be a 1 to confirm the ingredient has been updated
 - DELETE an ingredient
    - url: "/api/auth/ingredients/:id (where id === ingredient.id)
    - success response : {"response": 1, "message": "Ingredient successfully deleted"}

### Instructions (all require token to be passed through header)
  - GET all instructions
    - url: "/api/auth/instructions"
    - success response will have an array of all instructions by all users
 - GET ingredients by recipe_id
    - url: "/api/auth/instructions/:id" (where id === recipe.id)
    - successful response will give all instructions back which belong to the recipe whose id is passed in the url
 - POST new instruction
    - url: "/api/auth/instructions"
    - body: {
        "recipe_id": integer (which needs to match recipe.id of recipe it belongs to),
        "step_number":  integer,
        "instruction": 'string'
    }
    - success response will be the automatically created "instruction.id" of that instruction.
 - PUT update an instruction
    - url: "/api/auth/instructions/:id (where id === instruction.id)
    - body: {
        "recipe_id": integer (which needs to match recipe.id of recipe it belongs to),
        "step_number":  integer,
        "instruction": 'string'
    }
    - success response will be a 1 to confirm the instruction has been updated
 - DELETE an instruction
    - url: "/api/auth/instructions/:id (where id === instruction.id)
    - success response : {"response": 1, "message": "Instruction successfully deleted"}
