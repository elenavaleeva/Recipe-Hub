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



// social share links:

// WhatsApp:
// https://wa.me/text=[post-title]=[post-url]

// Facebook:
// https://www.facebook.com/sharer.php?u=[post-url]

// Twitter:
// https://twitter.com/share?url=[post-url]&text=[post-title]

// LinkedIn:
// https://www.linkedin.com/shareArticle?mini=true&url=[post-url]&title=[post-title]

// LinkedIn:
// https://www.linkedin.com/shareArticle?mini=true&url=[post-url]&title=[post-title]


const facebookBtn = document.querySelector(".facebook-btn");
const twitterBtn = document.querySelector(".twitter-btn");
const linkedinBtn = document.querySelector(".linkedin-btn");
const whatsAppBtn = document.querySelector(".whatsApp-btn");
const pinterestBtn = document.querySelector(".pinterest-btn");

function init() {
    // const pinterestImg = document.querySelector(".pinterest-img");

    // let postUrl = encodeURL(window.location.href);
    // let postTitle = encodeURL("Hi everyone, please check out this awesome post!");
    // let postImg = encodeURL("pinterestImg.src");

    facebookBtn.setAttribute(
        href =
        ` https://www.facebook.com/login/`
    );

    twitterBtn.setAttribute(
        "href",
        ` https://twitter.com/share?url=[post-url]&text=[post-title]`
    );

    linkedinBtn.setAttribute(
        "href",
        ` https://www.linkedin.com/shareArticle?mini=true&url=[post-url]&title=[post-title]`
    );

    whatsAppBtn.setAttribute(
        "href",
        ` https://wa.me/text=[post-title] [post-url]`
    );

    pinterestBtn.setAttribute(
        "href",
        ` https://www.pinterest.com/pin/create/button/?url=[post-url]&media=[post-img]&description=[post-title]`
    );
}

init();
