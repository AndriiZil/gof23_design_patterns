'use strict';

// Адаптує несумісний з чимось обєкт і робить його сувмістимим

class Engine2 {
    simpleInterface() {
        console.log('Engine 2.0 - tr-tr-tr')
    }
}

class EngineV8 {
    complecatedInterface() {
        console.log('Engine V8! - wroom wroom!')
    }
}

class EngineV8Adapter {
    constructor(engine) {
        this.engine = engine;
    }

    simpleInterface() {
        this.engine.complecatedInterface();
    }
}

class Auto {
    startEngine(engine) {
        engine.simpleInterface()
    }
}

// Engine 2.0
const myCar = new Auto();
const oldEngine = new Engine2();

console.log(myCar.startEngine(oldEngine)); // Engine 2.0 - tr-tr-tr

// Engine V8 with adapter
const myCar2 = new Auto();
const engineAdapter = new EngineV8Adapter(new EngineV8());

console.log(myCar2.startEngine(engineAdapter));

// Engine V8 without adapter
const myCar3 = new Auto();
const engineAdapter2 = new EngineV8();

console.log(myCar3.startEngine(engineAdapter2));
