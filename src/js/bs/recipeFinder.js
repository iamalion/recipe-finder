export default class RecipeFinder {
    constructor(ingredients, tags, cuisine){
        this.ingredients = ingredients;
        this.tags = tags;
        this.cuisine = cuisine;
    }
    static async getRecipe(ingredient, tags, cuisine) {
        try {
            const response = await fetch(
                `https://tasty.p.rapidapi.com/recipes/list?q=${ingredient}&from=0&size=5&tags=${cuisine},${tags}`, {
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