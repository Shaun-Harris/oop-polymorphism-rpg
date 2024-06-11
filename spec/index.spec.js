import { BattleScene, Character, Enemy1, Enemy2, Enemy3, Player } from "../src/index.js"

//Test for Character Class 

it('Character should take damage correctly', () => {
    const char1 = new Character('Char1', 100, 10)
    const char2 = new Character('Char2', 100, 25)

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
    expect(enemy1.currentHitPoints).toBe(60)
})

//Test for Enemy 2 

it('Enemy2 should inherit from Character and take damage', () => {
    const enemy2 = new Enemy2('Enemy2', 85, 14)
    const player = new Player('Player', 100, 20)

    enemy2.takeDamage(player)
    expect(enemy2.currentHitPoints).toBe(65)
})

//Test for Enemy 3

it('Enemy3 should inherit from Character and take damage', () => {
    const enemy3 = new Enemy3('Enemy3', 90, 12)
    const player = new Player('Player', 100, 20)

    enemy3.takeDamage(player)
    expect(enemy3.currentHitPoints).toBe(70)
})

//Test for BattleScene 

it('BattleScene should simulate a figth and return the winner', () => {
    const enemy = new Enemy1('Enemy1', 80, 10)
    const player = new Player('Player', 100, 20)

    const battle = new BattleScene()
    const winner = battle.fight(player, enemy)

    expect(winner).toBe('Player')
})