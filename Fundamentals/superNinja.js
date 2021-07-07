class Ninja {

    constructor(name) {
        this.name = name;
        this.health = 100;
        this.speed = 3;
        this.strength = 3;
    }

    sayName() {
        return "The ninja's name is " + this.name;
    }
    
    showStats() {
        return "Name: " + this.name + "\nStrength: " 
        + this.strength + "\nSpeed: " + this.speed + "\nHealth: " + this.health;
    }

    drinkSake() {
        return "drinking sake!";
        this.health += 10;
        this.speed -= 1;
    }
    
}

class Sensei extends Ninja {
    constructor(name) {
        super(name);
        this.wisdom = 10;
    }

    showStats() {
        return super.showStats() + "\nWisdom: " + this.wisdom;
    }

    speakWisdom() {
        this.health += 10;
        this.wisdom -= 1;
        return super.drinkSake() + "\nWhat 1 programmer can do in 1 month, 2 programmers can do in 2 months..."
        + this.showStats();
    }

}

const ninja1 = new Ninja("Hyabusa");
console.log(ninja1.sayName());
console.log(ninja1.showStats());
console.log(ninja1.drinkSake());
console.log(ninja1.showStats());

const superSensei = new Sensei("Master Splinter");
console.log(superSensei.sayName());
console.log(superSensei.showStats());
console.log(superSensei.speakWisdom());


