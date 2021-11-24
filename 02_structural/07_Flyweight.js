// Cache / Легковес

class Auto {
    constructor(model) {
        this.model = model;
    }
}

class AutoFactory {
    constructor() {
        this.models = {};
    }

    create(name) {
        let model = this.models[name];
        if (model) {
            return model;
        }
        this.models[name] = new Auto(name);

        return this.models[name];
    }

    getModels() {
        console.table(this.models);
    }
}

const factory = new AutoFactory();

const bmw = factory.create('BMW');
const audi = factory.create('Audi');
const tesla = factory.create('Tesla');
const blackTesla = factory.create('Tesla'); // Returned from Cache

factory.getModels();
/**
 *   ┌─────────┬─────────┐
     │ (index) │  model  │
     ├─────────┼─────────┤
     │   BMW   │  'BMW'  │
     │  Audi   │ 'Audi'  │
     │  Tesla  │ 'Tesla' │
     └─────────┴─────────┘
 *
 */
