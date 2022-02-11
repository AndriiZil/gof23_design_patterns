'use strict';

// Several objects with the same structure
// Ціль даного шаблона створення класа, який буде допомагати створювати обєкти на основі вхідних данних
// Даний клас можна назвати суперклассом
// Коли потрібно створювати обєкти з одинаковою структурою, але різними даними

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

const factory = new BmwFactory();

const x5 = factory.create('X5');
const x6 = factory.create('X6');

console.log(x5); // Bmw { model: 'X5', price: 108000, maxSpeed: 300 }
console.log(x6); // Bmw { model: 'X6', price: 111000, maxSpeed: 320 }
