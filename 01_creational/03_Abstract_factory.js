// Interface for grouping for Factory

function bmwProducer(kind) {
    return kind === 'sport' ? sportCarFactory : familyCarFactory;
}

// Factories
function sportCarFactory() {
    return new Z4();
}

function familyCarFactory() {
    return new I3();
}

class Z4 {
    info() {
        return 'Z4 is a Sport car!';
    }
}

class I3 {
    info() {
        return 'Z3 is a Family car!';
    }
}

// Initializing Abstract factory of sport cars
const produce = bmwProducer('sport');

// Car producing (Factory)
const myCar = produce();

console.log(myCar.info()); // Z4 is a Sport car!
