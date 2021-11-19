class Car {
    constructor() {
        this.autoPilot = false;
        this.parktronic = false;
        this.signaling = false;
    }
}

class CarBuilder {
    constructor() {
        this.car = new Car();
    }

    addAutoPilot(autopilot) {
        this.car.autopilot = autopilot;
        return this;
    }

    addParktronic(autopilot) {
        this.car.autopilot = autopilot;
        return this;
    }

    addSignaling(signaling) {
        this.car.signaling = signaling;
        return this;
    }

    updateEngine(engine) {
        this.car.engine = engine;
        return this;
    }

    build() {
        return this.car;
    }

}

const myCar = new CarBuilder()
    .addAutoPilot(true)
    .addParktronic(true)
    .updateEngine('V4')
    .build();

console.log(myCar);

/**
 * Car {
      autoPilot: false,
      parktronic: false,
      signaling: false,
      autopilot: true,
      engine: 'V4'
    }
 *
 */

const myNewCar = new CarBuilder()
    .addAutoPilot(false)
    .addParktronic(true)
    .updateEngine('V8')
    .build();

console.log(myNewCar);

/***
 * Car {
      autoPilot: false,
      parktronic: false,
      signaling: false,
      autopilot: true,
      engine: 'V8'
    }
 *
 */
