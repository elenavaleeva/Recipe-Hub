const express = require('express');

const app = express();
// const recipeRouter = require('./routes/recipe');

app.use(express.json());


class Recipe {
    constructor(name, ingredients, instructions) {
        this.name = name;
        this.ingredients = ingredients;
        this.instructions = instructions;
    }

    printRecipe() {
        console.log(`Recipe: ${this.name}`);
        console.log(`Ingredients: ${this.ingredients}`);
        console.log(`Instructions: ${this.instructions}`);
    }
}

// Example usage
const myRecipe = new Recipe(
    "Spaghetti Bolognese",
    ["spaghetti", "ground beef", "tomato sauce", "onion", "garlic", "olive oil"],
    "1. Cook spaghetti according to package instructions. \n2. Brown the ground beef in a large pan. \n3. Add onion and garlic, cook until softened. \n4. Add tomato sauce and bring to a simmer. \n5. Serve over spaghetti."
);

const recipeContainer = document.querySelector('.recipe-container');
recipeContainer.innerHTML = myRecipe.toHTML();

// document
//   .querySelector('.recipe')
//   .addEventListener('submit', newFormHandler);

// document
//   .querySelector('.recipe')
//   .addEventListener('click', delButtonHandler);


// myRecipe.printRecipe();
