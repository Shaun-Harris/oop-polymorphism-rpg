import { Character } from "../src/index.js"

//Test for Character Class 
it('Character should take damage correctly', () => {
    const char1 = new Character('Char1', 100, 10)
    const char2 = new Character('Char2', 100, 25)

    char1.takeDamage(char2)
    expect(char1.currentHitPoints).toBe(75)
})