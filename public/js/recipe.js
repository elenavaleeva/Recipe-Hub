class Recipe {
    constructor(title, description, ingredients, directions) {
        this.title = title;
        this.description = description;
        this.ingredients = ingredients;
        this.directions = directions;
    }

    printRecipe() {
        console.log(`Recipe: ${this.title}`);
        console.log(`Description: ${this.description}`);
        console.log(`Ingredients: ${this.ingredients}`);
        console.log(`directions: ${this.directions}`);
    }
};


const recipeContainer = document.querySelector('.recipe-list');
const searchForm = document.querySelector('#search-form input[type="submit"]');

searchForm.addEventListener('click', (e) => {

    e.preventDefault();
    const searchTerm = document.querySelector('#search-input').value
    console.log('Search form clicked', "searchTerm", searchTerm);
    try {
        const recipeData = await Recipe.findbypk
    }
});


async function getRecipes() {
    const response = await fetch("/api/recipe");
    const recipes = await response.json();
    console.log(recipes);
    response.forEach(recipe => {
        const newRecipe = new Recipe(recipe.title, recipe.description, recipe.ingredients, recipe.directions);
        recipeContainer.innerHTML += newRecipe.toHTML();
    });
}
getRecipes();

// recipeContainer.innerHTML = recipes;

recipeContainer.innerHTML = printRecipe.toHTML();

printRecipe = (recipe) => {
    recipe.printRecipe();
};




const facebookBtn = document.querySelector(".facebook-btn");
const twitterBtn = document.querySelector(".twitter-btn");
const linkedinBtn = document.querySelector(".linkedin-btn");
const whatsAppBtn = document.querySelector(".whatsApp-btn");
const pinterestBtn = document.querySelector(".pinterest-btn");
