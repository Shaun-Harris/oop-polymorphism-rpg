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
export { Character, Player, Enemy1 }