// Only one instance, for example Basket, DBConnection, musicPlayer

class Singleton {
    constructor(db) {
        if (!Singleton.instance) {
            Singleton.instance = this;
            this.db = db;
        }

        return Singleton.instance;
    }

    getInstance() {
        return this.db;
    }
}

console.log(new Singleton('Mongo')); // Singleton { db: 'Mongo' }
console.log(new Singleton('MySQL')); // Singleton { db: 'Mongo' }

console.log(new Singleton().getInstance()); // Mongo
console.log(new Singleton().getInstance()); // Mongo

class Counter {
    constructor() {
        if (typeof Counter.instance === 'object') {
            return Counter.instance;
        }
        this.count = 0;
        Counter.instance = this;

        return this;
    }

    getCounter() {
        return this.count;
    }

    increaseCounter() {
        return this.count++;
    }
}

const counter1 = new Counter();
const counter2 = new Counter();

console.log(counter1.increaseCounter()); // 0
console.log(counter1.getCounter()); // 1

console.log(counter2.increaseCounter()); // 1
console.log(counter2.getCounter()); // 2
