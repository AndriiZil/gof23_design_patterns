'use strict';

// Several objects with the same structure
// Ціль даного шаблона створення класа, який буде допомагати створювати обєкти на основі вхідних данних
// Даний клас можна назвати суперклассом
// Коли потрібно створювати обєкти з одинаковою структурою, але різними даними

class Car {
  constructor(name, year, price) {
    this.name = name;
    this.year = year;
    this.price = price;
  }
}

class Bmw {
  constructor(model, price, maxSpeed) {
    this.model = model;
    this.price = price;
    this.maxSpeed = maxSpeed;
  }
}

class BmwFactory {
  create(type) {
    if (type === 'X5') {
      return new Bmw(type, 108000, 300);
    } else if (type === 'X6') {
      return new Bmw(type, 111000, 320);
    }
  }
}

class Factory {
  constructor() {
    this.types = {
      bmw: new Car('BMW', 2020, 45000),
      audi: new Car('AUDI', 2019, 29000),
      opel: new Car('OPEL', 2018, 19000),
    }
  }
  create(type) {
    return this.types[type];
  }
}

const factory = new BmwFactory();

const x5 = factory.create('X5');
const x6 = factory.create('X6');

console.log(x5); // Bmw { model: 'X5', price: 108000, maxSpeed: 300 }
console.log(x6); // Bmw { model: 'X6', price: 111000, maxSpeed: 320 }

const superFactory = new Factory();
console.log(superFactory.create('bmw')); // Car { name: 'BMW', year: 2020, price: 45000 }
console.log(superFactory.create('audi')); // Car { name: 'AUDI', year: 2019, price: 29000 }
console.log(superFactory.create('opel')); // Car { name: 'OPEL', year: 2018, price: 19000 }
