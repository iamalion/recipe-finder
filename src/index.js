import RecipeFinder from './js/bs/recipeFinder';

// Business logic

export async function recipeFinder (ingredient){
    let response = await RecipeFinder.getRecipe(ingredient);
    if (response.results) {
        printElements(response, ingredient);
        printIngredients(response, ingredient);
    } else {
        printError(response, ingredient);
    }
}

function printElements(response) {
    let displayOutput = document.querySelector("div#output");
    displayOutput.innerText = null;
    const ul = document.createElement("ul");
    Object.keys(response.results).forEach(function(key) {
        const recipeName = response.results[key];
        const li = document.createElement('li');
        li.append(recipeName.name);
        ul.append(li);
    });
    displayOutput.append(ul);
}

// function printIngredients(response) {
//     const components = response.results[0].sections[0].components;
//     const ul = document.createElement("ul");
//     document.querySelector("li").addEventListener("click", components.forEach(function(component) {
//         Object.keys(component).forEach(function(key) {
//             const items = component[key];
//             const li = document.createElement('li');
//             li.append(items.raw_text);
//             ul.append(li);
//         });
//         document.getElementById("ingredients").innerText = components.raw_text;
//     })); 
// }

function printIngredients(response) {
    const sections = response.results[0].sections;
    const ul = document.createElement("ul");
    document.querySelector("li").addEventListener("click", function () {
        sections.forEach(function (section) {
            const components = section.components;
  
            components.forEach(function (component) {
                const ingredient = component.raw_text;
                const li = document.createElement("li");
                li.append(ingredient);
                ul.append(li);
            });         
        });
    });
  
    document.getElementById("ingredients").innerText = "";
    document.getElementById("ingredients").append(ul);

    // Append the <ul> element to the "ingredients" element
    document.getElementById("ingredients").appendChild(ul);
}


function printError(response, ingredient) {
    document.getElementById("output").innerHTML = `There was an error finding recipes for ${ingredient}, ${response.status}`;
}

function formSubmission(event) {
    event.preventDefault();
    let ingredient = document.getElementById("ingredient1").value;
    recipeFinder(ingredient);
    ingredient = null;
}

window.addEventListener("load", function() {
    document.querySelector("form").addEventListener("submit", formSubmission);
});
