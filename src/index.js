// import 'bootstrap';
// import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import RecipeFinder from './js/bs/recipeFinder';

// Business Logic

export async function recipeFinder (ingredient, tags, cuisine){
    let response = await RecipeFinder.getRecipe(ingredient, tags, cuisine);
    if (response.results) {
        printElements(response, ingredient, tags);
    } else {
        printError(response, ingredient, tags);
    }
}

// UI Logic
async function printElements(response) {
    let displayOutput = document.querySelector("div#recipe-output");
    displayOutput.innerText = null;
    const ul = document.createElement("ul");
    Object.keys(response.results).forEach(function(key) {
        const recipeName = response.results[key];
        const li = document.createElement('li');
        li.append(recipeName.name);
        li.addEventListener("click", function () {
            printIngredients(response, recipeName.name);
            printInstructions(response, recipeName.name);
        });
        ul.append(li);
    });
    displayOutput.append(ul);
}

async function printIngredients(response, recipeName) {
    const selectedRecipe = response.results.find(recipe => recipe.name === recipeName);
    const sections = await selectedRecipe.sections;
    const ul = document.createElement("ul");
    sections.forEach(function (section) {
        const components = section.components;
        components.forEach(function (component) {
            const ingredient = component.raw_text;
            let li = document.createElement("li");
            li.append(ingredient);
            ul.append(li);
        });
    });
    document.getElementById("ingredients").innerHTML = `<h3><strong>Ingredients:</strong></h3>`;
    document.getElementById("ingredients").appendChild(ul);
    document.getElementById("ingred-instruct").removeAttribute("class", "hidden");
    document.getElementById("ingredients").removeAttribute("class", "hidden");        
}

async function printInstructions(response, recipeName) {
    const selectedRecipe = response.results.find(recipe => recipe.name === recipeName);
    const instructions = await selectedRecipe.instructions;
    const ol = document.createElement("ol");
    instructions.forEach(function (instruction) {
        const step = instruction.display_text;
        let li = document.createElement("li");
        li.append(step);
        ol.append(li);
    });
    document.getElementById("instructions").innerHTML = `<h3><strong>Instructions:</strong></h3>`;
    document.getElementById("instructions").appendChild(ol);
    document.getElementById("instructions").removeAttribute("class", "hidden");         
}

function printError(response, ingredient) {
    document.getElementById("recipe-output").innerHTML = `There was an error finding recipes for ${ingredient}, ${response.status}`;
}



function formSubmission(event) {
    event.preventDefault();
    document.getElementById("recipe-output").removeAttribute("class", "hidden"); 
    let ingredient = document.getElementById("ingredient1").value;
    let checkedTags = [];
    let tags = document.querySelectorAll("input[name=diet]:checked");
    let cuisine = document.getElementById("cuisine").value;
    
    tags.forEach(function(tag) {
        checkedTags.push(tag.value);
    });
    
    recipeFinder(ingredient, checkedTags, cuisine);
    document.getElementById("ingredient1").value = "";
    document.getElementById("ingredients").innerHTML = null;
    document.getElementById("instructions").innerHTML = null;
    document.getElementById("cuisine").value = null;
    document.querySelector("form").reset();
}

window.addEventListener("load", function() {
    document.querySelector("form").addEventListener("submit", formSubmission);
  
    const darkModeButton = document.getElementById("dark-mode-button");
    const lightModeButton = document.getElementById("light-mode-button");
    const body = document.querySelector("body");
  
    darkModeButton.addEventListener("click", function() {
        body.classList.add("dark-mode");
        body.classList.remove("light-mode");
    });
  
    lightModeButton.addEventListener("click", function() {
        body.classList.remove("dark-mode");
        body.classList.add("light-mode");
    });

});