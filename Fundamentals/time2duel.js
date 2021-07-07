class Card {

    constructor(name,cost) {
        this.name = name;
        this.cost = cost;
    }

}

class Unit extends Card {

    constructor(name, cost, power, res) {
        super(name, cost);
        this.power = power;
        this.res = res;
    }

    attack (target) {
        // reduce target res by power
        target.res -= this.power;
        return target.text;
    }
}

class Effect extends Card {
    constructor(name,cost, text, stat, magnitude) {
        super(name, cost);
        this.text = text;
        this.stat = stat;
        this.magnitude = magnitude;
    }

    play(target) {
        if (target instanceof Unit) {
            if(this.name == "Hard Algorithm") {
                target.res +=3;
                target.power -= 2;
                return this.text;
            } else if (this.name == "Unhandled Promise Rejection") {
                target.res -= 2;
                target.power -= 1;
                return this.text;
            } else {
                target.power +=2;
                target.power -= 2;
                return this.text;
            }
        } else {
            throw new Error("Target must be a Unit!");
        }
    }
}

const redBeltNinja = new Unit("Red Belt Ninja", 3, 3, 4);
const hardAlgo = new Effect ("Hard Algorithm", 2, "increase target's resilience by 3", "resilience", 3);
console.log(hardAlgo.play(redBeltNinja));
const blackBeltNinja = new Unit("Black Belt Ninja", 3, 3, 4);
const unhandled = new Effect ("Unhandled Promise Rejection", 1, "reduce target's resilience by 2", "resilience", -2);
console.log(unhandled.play(redBeltNinja));
const pairPro = new Effect ("Pair Programming", 3, "increase target's power by 2", "power", 2);
console.log(pairPro.play(redBeltNinja));
console.log(redBeltNinja.attack(blackBeltNinja));
