'use strict';

// Він добавляє нову функціональність вже до існуючих класів і причому робить це не змінюючи початкову реалізацію

class Auto {
  accept(visitor) {
    visitor(this);
  }
}

class Tesla extends Auto {
  info() {
    return 'It is a Tesla car!';
  }
}

class Bmw extends Auto {
  info() {
    return 'It is a BMW car!';
  }
}

class Audi extends Auto {
  info() {
    return 'It is an Audi car!';
  }
}

function exportVisitor(auto) {
  if (auto instanceof Tesla) {
    auto.export = () => console.log(`Exported data: ${auto.info()}`);
  } else if (auto instanceof Bmw) {
    auto.export = () => console.log(`Exported data: ${auto.info()}`);
  } else if (auto instanceof Audi) {
    auto.export = () => console.log(`Exported data: ${auto.info()}`);
  }
}

const tesla = new Tesla();
const bmw = new Bmw();
const audi = new Audi();

tesla.accept(exportVisitor);
bmw.accept(exportVisitor);
audi.accept(exportVisitor);

tesla.export(); // Exported data: It is a Tesla car!
bmw.export(); // Exported data: It is a BMW car!
audi.export(); // Exported data: It is an Audi car!
