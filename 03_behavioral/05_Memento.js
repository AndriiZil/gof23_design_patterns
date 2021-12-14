'use strict';

// Фото, Самий простий приклад текстовий редактор, який дозволяє зберігати і востановлювати із памяті попередній стан, навіть після його зміни

class Memento {
    constructor(value) {
        this.value = value;
    }
}

const creator = {
    save: val => new Memento(val),
    restore: memento => memento.value,
}

class Caretaker {
    constructor() {
        this.values = [];
    }

    addMemento(memento) {
        this.values.push(memento);
    }

    getMemento(index) {
        return this.values[index];
    }
}

// ----------------------------- Check Implementation -----------------------

const careTaker = new Caretaker();

careTaker.addMemento(creator.save('hello'));
careTaker.addMemento(creator.save('hello world'));
careTaker.addMemento(creator.save('hello world !!!'));

console.log(creator.restore(careTaker.getMemento(1))); // hello world
console.log(creator.restore(careTaker.getMemento(0))); // hello
console.log(creator.restore(careTaker.getMemento(2))); // hello world !!!
