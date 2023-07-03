import RecipeFinder from './js/bs/recipeFinder';

// Business logic

export async function recipeFinder (ingredient){
    let response = await RecipeFinder.getRecipe(ingredient);
    if (response.results) {
        printElements(response, ingredient);
    } else {
        printError(response, ingredient);
    }
}

// UI Logic
// function printElements(response, ingredient) {
//     let output = `Here are some recipes using ${ingredient}: </br>`;
//     response.results.forEach(recipe => {
//         output += `<li><a href="#" onclick="printIngredients('${recipe.name}', '${recipe.ingredients}')">${recipe.name}</a></li>`;
//     });
//     output += '</ul>';
//     document.getElementById("output").innerHTML = output;
// }

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
//     let output = `Ingredients list: `;
//     response.results[0].sections[0].components[0].forEach(recipe => {
//         output += `<li> ${recipe.raw_text}</li>`
//     });
//     output += '<ol> </ol>';
//     document.getElementById("ingredients").innerHTML = output;
// }

// function displayContactDetails(event) {
//     const contact = addressBook.findContact(event.target.id);
//     document.querySelector(".first-name").innerText = contact.firstName;
//     document.querySelector(".last-name").innerText = contact.lastName;
//     document.querySelector(".phone-number").innerText = contact.phoneNumber;
//     document.querySelector("button.delete").setAttribute("id", contact.id);
//     document.querySelector("div#contact-details").removeAttribute("class");
//   }


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
    this.document.querySelector("form").addEventListener("submit", formSubmission);
});
