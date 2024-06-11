class Character {
    constructor(name, maxHitPoints, damage) {
        this.name = name
        this.maxHitPoints= maxHitPoints
        this.currentHitPoints = maxHitPoints
        this.damage = damage
    }

    takeDamage(attacker) {
        this.currentHitPoints -= attacker.damage
        if(this.currentHitPoints < 0) {
            this.currentHitPoints = 0 
        }
    }
}

class Player extends Character {
    constructor(name, maxHitPoints, damage) {
        super(name, maxHitPoints, damage)
    }
}

class Enemy1 extends Character {
    constructor(name, maxHitPoints, damage){
        super(name, maxHitPoints, damage)
    }
}

class Enemy2 extends Character {
    constructor(name, maxHitPoints, damage){
        super(name, maxHitPoints, damage)
    }
}

class Enemy3 extends Character {
    constructor(name, maxHitPoints, damage){
        super(name, maxHitPoints, damage)
    }
}

class BattleScene {
    fight(player, enemy) {
        while (player.currentHitPoints > 0 && enemy.currentHitPoints > 0) {
            enemy.takeDamage(player)
            if (enemy.currentHitPoints > 0) {
                player.takeDamage(enemy)
            }
        }

        if (player.currentHitPoints > 0) {
            return player.name
        } else {
            return enemy.name
        }
    }
}

export { Character, Player, Enemy1, Enemy2, Enemy3, BattleScene }