import { Character, Enemy1, Player } from "../src/index.js"

//Test for Character Class 
it('Character should take damage correctly', () => {
    const char1 = new Character('Char1', 100, 10)
    const char2 = new Character('Char2', 100,25)

    char1.takeDamage(char2)
    expect(char1.currentHitPoints).toBe(75)
})

//Test for Player Class

it('Player should inherit from Character and take damage', () => {
    const player = new Player('Player', 100, 20)
    const ememy = new Character('Enemy', 100 , 15)

    player.takeDamage(ememy)
    expect(player.currentHitPoints).toBe(85)
})


//Test for Enemy 1 

it('Enemy1 should inherit from Character and take damage', () => {
    const enemy1 = new Enemy1('Enemy1', 80, 10)
    const player = new Player('Player', 100, 20)

    enemy1.takeDamage(player)
    expect(enemy1.currentHitPoints).toBe(90)
})