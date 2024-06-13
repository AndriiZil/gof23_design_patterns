'use strict';

// For hard logic under the hud
// Задача, сховати складну логіку за складним фасадом і назовні віддавати зручний інтерфейс

class Conveyor {
  setBody() {
    console.log('Body set!');
  }

  getEngine() {
    console.log('Dismantle Engine!');
  }

  setEngine() {
    console.log('Engine set!');
  }

  setInterior() {
    console.log('Exterior added!');
  }

  getInterior() {
    console.log('Update interior!');
  }

  setExterior() {
    console.log('Added interior!');
  }

  setWheels() {
    console.log('Wheels!');
  }

  addElectronics() {
    console.log('Added electronics!');
  }

  paint() {
    console.log('Car painted!');
  }
}

class ConveyorFacade {
  constructor(car) {
    this.car = car;
  }

  assembleCar() {
    this.car.setBody();
    this.car.setEngine();
    this.car.setInterior();
    this.car.setExterior();
    this.car.setWheels();
    this.car.addElectronics();
    this.car.paint();
  }

  changeEngine() {
    this.car.getEngine();
    this.car.setEngine();
  }

  changeInterior() {
    this.car.getInterior();
    this.car.setInterior();
  }
}

const conveyor = new ConveyorFacade(new Conveyor());

let car = conveyor.assembleCar();

console.log(car);
/**
 *   Body set!
 Engine set!
 Exterior added!
 Added interior!
 Wheels!
 Added electronics!
 Car painted!
 *
 */

car = conveyor.changeEngine();
car = conveyor.changeInterior();

console.log(car);
/**
 *   Dismantle Engine!
 Engine set!
 Update interior!
 Exterior added!
 */
