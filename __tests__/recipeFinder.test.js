import { recipeFinder } from '../src/index.js'

describe("recipeFinder", () => {
    test("Should create a Recipe Finder object with one ingredient", () => {
        const ingredient = "chicken";
        expect(recipeFinder.ingredient).toBe("chicken");
    })
})