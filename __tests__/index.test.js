import { recipeFinder } from '../src/index.js'
import RecipeFinder from '../src/js/bs/recipeFinder'

describe("RecipeFinder", () => {
    let recipeFinderObject;
    let ingredient;

    beforeEach(() => {
    ingredient = "chicken";
    recipeFinderObject = new RecipeFinder(ingredient);
    })
    
    test("Should create a Recipe Finder object with one ingredient", () => {
        expect(recipeFinderObject.ingredient).toBe("chicken");
    })
});

describe("recipeFinder", () => {
    
})
