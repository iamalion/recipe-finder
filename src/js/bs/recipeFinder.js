export default class RecipeFinder {
    constructor(ingredient){
        this.ingredient = ingredient;
        //this.recipeName = recipeName;
    }
    static async getRecipe(ingredient) {
        try {
            const response = await fetch(
                `https://tasty.p.rapidapi.com/recipes/list?q=${ingredient}&from=0&size=5`, {
                    headers: {
                        'X-RapidAPI-Key': `${process.env.API_KEY}`
                    }
                }
            );
            const jsonifiedResponse = await response.json();
            if (!response.ok) {
                throw new Error("No recipes found");
            }
            return jsonifiedResponse;
        } catch (error) {
            throw new Error(`Error accessing the data: ${error}`);
        }
    }
}




// response.results.forEach(recipe => {
//     output += recipe.name + ', ';
//   });