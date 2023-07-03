import Component from '../src/js/bs/Component';

describe("Component", () => {
    before
    test("explanation", () => {
        const ipt = "";
        const val = "";
        const component = new Component(ipt);
        expect(component.property).toBe(val);
    })
})