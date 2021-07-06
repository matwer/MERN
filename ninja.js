class Ninja {

    constructor(name) {
        this.name = name;
        this.health = 100;
        this.speed = 3;
        this.strength = 3;
    }

    sayName() {
        console.log("The ninja's name is " + this.name);
    }
    
    showStats() {
        console.log("Name: " + this.name + "\tStrength: " 
        + this.strength + "\tSpeed: " + this.speed + "\tHealth: " + this.health);
    }

    drinkSake() {
        console.log("drinking sake!");
        this.health += 10;
        this.speed -= 1;
    }

}

const ninja1 = new Ninja("Hyabusa");
ninja1.sayName();
ninja1.showStats();
ninja1.drinkSake();
ninja1.showStats();
