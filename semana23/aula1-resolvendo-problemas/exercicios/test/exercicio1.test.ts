import { oneEdit } from '../src/exercicio1'

describe("Testing oneEdit function", () => {
    it("Return true for inputs 'casa' and 'casaa' ", () => {
        expect(oneEdit("casa", "casaa")).toEqual(true);
    })
})