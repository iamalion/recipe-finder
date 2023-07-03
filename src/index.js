import RecipeFinder from './js/bs/recipeFinder'

export async function recipeFinder (ingredient){
    const response = await RecipeFinder.getRecipe(ingredient);
    console.log(response);
    return response;
}

