import RecipeFinder from './js/bs/recipeFinder'

// Business logic

export async function recipeFinder (ingredient){
    const response = await RecipeFinder.getRecipe(ingredient);
    if (response.results) {
        printElements(response, ingredient);
    } else {
        printError(response, ingredient)
    }
}

// UI Logic

function printElements(response, ingredient) {
    document.getElementById("output").innerHTML = `Here are some recipes using ${ingredient}: ${response}`;
}

function printError(response, ingredient) {
    document,getElementById("output").innerHTML = `There was an error finding recipes for ${ingredient}, ${response.status}`;
}

function formSubmission(event) {
    event.preventDefault();
    const ingredient = document.getElementById("ingredient1").value;
    recipeFinder(ingredient);
    ingredient = null;
}

window.addEventListener("load", function() {
    this.document.querySelector("form").addEventListener("submit", formSubmission);
})