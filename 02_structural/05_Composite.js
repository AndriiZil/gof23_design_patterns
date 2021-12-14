'use strict';

// Tree / Компоновщик / Hard
// Дозволяє згрупувати багато обєктів в деревовидну структуру. Сам комопнент мало що знає про вложені в нього структури
// Передає виклики всім вложеним компонентам, а ті в свою чергу передають у власні вложені структури
// Всі вклаені компоненти можна назвати листками а звязки - гілками
// Єдиний інтерфейс виклику

class Equipment {
    getPrice() {
        return this.price || 0;
    }

    getName() {
        return this.name;
    }

    setName(name) {
        this.name = name;
    }

    setPrice(price) {
        this.price = price;
    }

}

class Engine extends Equipment {
    constructor() {
        super();
        this.setName('Engine');
        this.setPrice(800);
    }
}

class Body extends Equipment {
    constructor() {
        super();
        this.setName('Engine');
        this.setPrice(3000);
    }
}

class Tools extends Equipment {
    constructor() {
        super();
        this.setName('Engine');
        this.setPrice(4000);
    }
}

class Composite extends Equipment {
    constructor() {
        super();
        this.equipments = [];
    }

    add(equipment) {
        this.equipments.push(equipment);
    }

    getPrice() {
        return this.equipments.map(e => e.getPrice()).reduce((acc, val) => acc + val);
    }
}

class Car extends Composite {
    constructor() {
        super();
        this.setName('Audi');
    }
}

const myCar = new Car();

myCar.add(new Engine());
myCar.add(new Body());
myCar.add(new Tools());

console.log(`${myCar.getName()} price is ${myCar.getPrice()}$`); // Audi price is 7800$
