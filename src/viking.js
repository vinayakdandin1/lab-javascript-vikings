// Soldier
class Soldier {
    constructor(health, strength) {
        this.health = health
        this.strength = strength
    }
    attack() {
        return this.strength
    }
    receiveDamage(damage) {
        
       this.health = this.health - damage;
    }
}

// Viking
class Viking extends Soldier {
    constructor(name, health, strength) {
        super(health, strength)
        this.name = name
    }
    // attack() {
    //     this.receiveDamage()
    //     return this.strength
    // }
    receiveDamage(vDamage) {
        this.health = this.health - vDamage;
        if(this.health > 0) {
            return `${this.name} has received ${vDamage} points of damage`
        }
        return `${this.name} has died in act of combat`
    }
    battleCry() {
        return "Odin Owns You All!";
    }
    
}

// Saxon
class Saxon extends Soldier {
    receiveDamage(damage) {
        this.health = this.health - damage
        if(this.health > 0) {
            return `A Saxon has received ${damage} points of damage`
        } return "A Saxon has died in combat"
    }
}

// War
class War {
    constructor() {
        this.vikingArmy = []
        this.saxonArmy = []
    }
    addViking(viking) {
        this.vikingArmy.push(viking)
    }
    addSaxon(saxon) {
        this.saxonArmy.push(saxon)
    }
    vikingAttack() {
        let someSaxon = this.saxonArmy[Math.floor(Math.random()* this.saxonArmy.length)]
        let someViking = this.vikingArmy[Math.floor(Math.random()* this.vikingArmy.length)]

        let sDamage = someSaxon.receiveDamage(someViking.strength);

        for(let i = 0; i < this.saxonArmy.length; i++) {
            
            if(this.saxonArmy[i].health <= 0) {
                this.saxonArmy.splice(i, 1);
            }   
        }

        return sDamage

    }
    saxonAttack() {
        let someSaxon = this.saxonArmy[Math.floor(Math.random()* this.saxonArmy.length)]
        let someViking = this.vikingArmy[Math.floor(Math.random()* this.vikingArmy.length)]

        let vDamage = someViking.receiveDamage(someSaxon.strength);

        for(let i = 0; i < this.saxonArmy.length; i++) {
            
            if(this.vikingArmy[i].health <= 0) {
                this.vikingArmy.splice(i, 1);
            }   
        }

        return vDamage
    }
    showStatus() {
        if(this.saxonArmy.length === 0) {
            return "Vikings have won the war of the century!"
        } else if(this.vikingArmy.length === 0 ) {
            return "Saxons have fought for their lives and survived another day..."
        } else {
            return "Vikings and Saxons are still in the thick of battle."
        }
    }
}
