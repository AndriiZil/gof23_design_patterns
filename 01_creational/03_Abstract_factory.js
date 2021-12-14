'use strict';

// Interface for grouping for Factory
// Інтерфейс який групує інші фабрики, які логічно звязані одна з одною, Абстракція для фабрики і фабричного метода
// Створюємо суперклас і в ньому описуємо логіку створення інших автомобілей в яких описати логіку тих чи інших моделей
// Іншими словами це додаткова надстройка над іншими фабриками
// У підфабрик має бути одинаковий інтерфейс створення обєктів, щоб ним можна було керувати із абстрактної фабрики

// Abstract factory
function bmwProducer(kind) {
    return kind === 'sport' ? sportCarFactory : familyCarFactory;
}

// Factories
function sportCarFactory() {
    return new Z4();
}

function familyCarFactory() {
    return new I3();
}

class Z4 {
    info() {
        return 'Z4 is a Sport car!';
    }
}

class I3 {
    info() {
        return 'Z3 is a Family car!';
    }
}

// Initializing Abstract factory of sport cars
const produce = bmwProducer('sport');

// Car producing (Factory)
const myCar = produce();

console.log(myCar.info()); // Z4 is a Sport car!
