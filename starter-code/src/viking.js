// Soldier
class Soldier {
    constructor(health, strength) {

        this.health = health
        this.strength = strength
    }
    attack() {

        return this.strength;
    }
    receiveDamage(damage) {
        this.health -= damage
    }
}
// Viking
class Viking extends Soldier {
    constructor(name, health, strength) {
        super(health, strength)
        this.name = name
        this.health = health
        this.strength = strength
    }
    receiveDamage(damage) {
        this.health -= damage

        if (this.health <= 0) {
            return `${this.name} has died in act of combat`
        } else {
            return `${this.name} has received ${damage} points of damage`
        }
    }
    battleCry() {
        return "Odin Owns You All!"
    }
}

// Saxon
class Saxon extends Soldier {
    constructor(health, strength, name) {
        super(health, strength)
        this.name = name
        this.health = health
        this.strength = strength
    }
    receiveDamage(damage) {
        this.health -= damage

        if (this.health <= 0) {
            return `A Saxon has died in combat`
        } else {
            return `A Saxon has received ${damage} points of damage`
        }
    }
}

// War
class War {
    vikingArmy = [];
    saxonArmy = [];
    addViking(vikingObject) {
        this.vikingArmy.push(vikingObject)
    }
    addSaxon(saxonObject) {
        this.saxonArmy.push(saxonObject)
    }
    vikingAttack() {
        let saxonReceivedAttack = this.saxonArmy[Math.floor(Math.random() * Math.floor(this.saxonArmy.length))].receiveDamage(this.vikingArmy[Math.floor(Math.random() * Math.floor(this.vikingArmy.length))].strength)
        this.saxonArmy = this.saxonArmy.filter(x => x.health > 0)
        console.log("Viking Attack!");
        return saxonReceivedAttack
    }
    saxonAttack() {
        let vikingReceivedAttack = this.vikingArmy[Math.floor(Math.random() * Math.floor(this.vikingArmy.length))].receiveDamage(this.saxonArmy[Math.floor(Math.random() * Math.floor(this.saxonArmy.length))].strength)
        this.vikingArmy = this.vikingArmy.filter(x => x.health > 0)
        console.log(" Saxon Attack!");
        return vikingReceivedAttack
    }
    showStatus() {
        if (this.saxonArmy.length === 0) {
            return `Vikings have won the war of the century!`;
        } else if (this.vikingArmy.length === 0) {
            return `Saxons have fought for their lives and survived another day...`;
        } else {
            return `Vikings and Saxons are still in the thick of battle.`;
        }
    }
}
    // EMULACION DE UNA GUERRA CON DOS VIKINGOS Y DOS SAXONES
let war1 = new War;
let saxon1 = new Saxon('Hed',100,123), saxon2 = new Saxon('Holl',150,23) ;
let viking1 = new Viking('Hurrdy',100,123),viking2 = new Viking('rrum',30,93);
war1.addSaxon(saxon1)
war1.addViking(viking1)
war1.addSaxon(saxon2)
war1.addViking(viking2)
console.log(war1.showStatus());