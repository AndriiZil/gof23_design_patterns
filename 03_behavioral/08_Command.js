'use strict';

// Помагає інкапсулювати деякі дії і таким чином дозволяє розділити клієнта від отримувача, перетворює запити в обєкти і в методи
// MVC / MVM
// Між інтерфейсом і бізнес логікою появляється прослойка патерн команда в якому інкапсульована унікальна логіка

class Driver {
    constructor(command) {
        this.command = command;
    }

    execute() {
        this.command.execute();
    }
}

class Engine {
    constructor() {
        this.state = false;
    }

    on() {
        this.state = true;
    }

    off() {
        this.state = false;
    }
}

class OnStartCommand {
    constructor(engine) {
        this.engine = engine;
    }

    execute() {
        this.engine.on();
    }
}

class onSwitchOffCommand {
    constructor(engine) {
        this.engine = engine;
    }

    execute() {
        this.engine.off();
    }
}

// ---------------- Implementation ----------------------

const engine = new Engine();

console.log(engine); // Engine { state: false }

const onStartCommand = new OnStartCommand(engine);
const driver = new Driver(onStartCommand);

driver.execute();

console.log(engine); // Engine { state: true }
