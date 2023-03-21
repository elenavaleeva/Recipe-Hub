const searchBtn = document.getElementById('search-btn');
const mealList = document.getElementById('meal');
const mealDetailsContent = document.querySelector('meal-details-content');
const recipeCloseBtn = document.getElementById('recipe-close-btn');

searchBtn.addEventListener('click', getMealList);

mealList.addEventListener('click', getMealRecipe);

recipeCloseBtn.addEventListener('click', () => {
    mealDetailsContent.parentElement.classList.remove('showRecipe');

});

function getMealList() {
    let searchInputTxt = document.getElementById('search-input').value.trim();
    fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${searchInputTxt}`)
        .then(response => response.json())
        .then(data => {

            let html = '';
            if (data.meals) {
                data.meals.forEach(meal => {
                    html += `
                    <div class="meal-item-" data-id = "${meal.idMeal}" >
                    <div class="meal-img">
                        <img src="${meal.strMealThumb}" alt="food">
                    </div>
                    <div class="meal-name">
                        <h3 class="">${meal.strMeal}</h3>
                        <a href="#" class="recipe-btn">Get Recipe</a>
                    </div>
                </div>`

                });
                mealList.classList.remove('notfound');
            } else {
                html = "Sorry, no meals found";
                mealList.classList.add('notFound');
            }

            mealList.innerHTML = html;
        });
};

function getMealRecipe(e) {
    e.preventDefault();
    if (e.target.classList.contains('recipe-btn')) {
        let mealId = e.target.parentElement;
        fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId.dataset.id}`)
            .then(response => response.json())
        // .then(data => getMealRecipeModal(data.meals))
    }
};


function getMealRecipeModal(meal) {
    meal = meal[''];
    let html = ` <h2 class="recipe-title">${meal.strMeal}</h2>
    <p class="recipe-category">${meal.strCategory}</p>
    <h3>Instructions</h3>
    <p>${meal.strInstructions}</p>
</div>

<div class="recipe-meal-img">
    <img src="${meal.strMealThumb}" alt="">
</div>
<div class="recipe-link">
    <a href="${meal.strYouTube}" target="_blank">Watch Video</a>
</div>`;

    function buttonClicked() {
        console.log("Button clicked");
    }

    var btn = document.getElementById("recipe-btn");
    btn.addEventListener("click", buttonClicked, true)




    mealDetailsContent.innerHTML = html;
    mealDetailsContent.parentElement.classList.add('showRecipe');
    const recipeBtn = document.querySelector('.recipe-btn').value;
    const getRecipe = recipeBtn.addEventListener('click', () => {
        recipeBtn.addEventListener('click', getMealRecipe);
        i.preventDefault();

        console.log(r);
        fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${r}`)
            .then(response => response.json())


    });
}
getRecipe(recipe);









