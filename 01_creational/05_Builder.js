'use strict';

// Викристовується для створення обєктів зі складними станами, може бути додатково використаний слой абстракцій - директор
// який керує декількома будівельниками (тут цього немає)

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

  addParktronic(parktronic) {
    this.car.parktronic = parktronic;
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
  .addSignaling(true)
  .updateEngine('V8')
  .build();

console.log(myNewCar);

/***
 * Car {
      autoPilot: false,
      parktronic: false,
      signaling: true,
      autopilot: true,
      engine: 'V8'
    }
 *
 */
