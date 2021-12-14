'use strict';

// Wrap already existing Class and extends his functional
// Як одним класом можна розширити функціонал іншого класу

class Car {
    constructor() {
        this.price = 10000;
        this.model = 'Car';
    }

    getPrice() {
        return this.price;
    }

    getDescription() {
        return this.model;
    }
}

class Tesla extends Car {
    constructor() {
        super();
        this.price = 25000;
        this.model = 'Tesla';
    }
}

class Audi extends Car {
    constructor() {
        super();
        this.price = 20000;
        this.model = 'Audi';
    }
}

class Autopilot {
    constructor(car) {
        this.car = car;
    }

    getPrice() {
        return this.car.getPrice() + 5000;
    }

    getDescription() {
        return `${this.car.getDescription()} with Autopilot`;
    }
}

class Parktronic {
    constructor(car) {
        this.car = car;
    }

    getPrice() {
        return this.car.getPrice() + 3000;
    }

    getDescription() {
        return `${this.car.getDescription()} with Parktronic`;
    }
}

// Tesla Version with autopilot and parktronic
let tesla = new Tesla();

tesla = new Autopilot(tesla);
tesla = new Parktronic(tesla);
console.log(tesla.getPrice(), tesla.getDescription()); // 33000 Tesla with Autopilot with Parktronic

// Tesla Version with autopilot only
let testa2 = new Tesla();
testa2 = new Autopilot(testa2);

console.log(testa2.getPrice(), testa2.getDescription()); // 30000 Tesla with Autopilot

// Audi Version with autopilot
let audi = new Audi();
audi = new Autopilot(audi);

console.log(audi.getPrice(), audi.getDescription()); // 25000 Audi with Autopilot
