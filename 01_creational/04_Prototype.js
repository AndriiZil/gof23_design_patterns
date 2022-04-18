'use strict';

// Copy object (clone) without knowing realization
// Дозволяє копіювати обєкти не вдаваючись в подробиці їх реалізації, для того щоб у випадку необхідності змінити їх структуру
// і заточити під виконання певних задач

class TeslaCar {

  constructor(model, price, interior, autopilot) {
    this.model = model;
    this.price = price;
    this.interior = interior;
    this.autopilot = autopilot;
  }

  produce() {
    return new TeslaCar(this.model, this.price, this.interior, this.autopilot);
  }

}

// Produce base auto
const prototypeCar = new TeslaCar('S', 80000, 'black', false);

// Cloning of base auto
const car1 = prototypeCar.produce();
const car2 = prototypeCar.produce();

// Changes for particular auto
car1.interior = 'white';
car1.autopilot = true;

car2.interior = 'yellow';
car2.autopilot = false;

console.log(car1);
/**
 * TeslaCar {
      model: 'S',
      price: 80000,
      interior: 'white',
      autopilot: true
    }
 */

console.log(car2);
/**
 * TeslaCar {
      model: 'S',
      price: 80000,
      interior: 'black',
      autopilot: false
    }
 *
 */
