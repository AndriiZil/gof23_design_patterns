'use strict';

// Шаблонний метод чи Шаблон, який оприділяє базові кроки виконання алгоритма і виконання кожного з цих кроків делегуючи
// на відповідні методи чи підкласи
// Приклад коли ми хочемо зібрати машину по різних шаблонах, з різною внутрішньою імплементацією

class Builder {
    build() {
        this.addEngine();
        this.installChassis();
        this.addElectronic();
        this.collectAccessories();
    }
}

class TeslaBuilder extends Builder {
    addEngine() {
        console.log('Add Electronic Engine');
    }

    installChassis() {
        console.log('Install Tesla chassis');
    }

    addElectronic() {
        console.log('Add special electronic');
    }

    collectAccessories() {
        console.log('Collect Accessories');
    }
}

class BmwBuilder extends Builder {
    addEngine() {
        console.log('Add BMW Engine');
    }

    installChassis() {
        console.log('Install BMW chassis');
    }

    addElectronic() {
        console.log('Add electronic');
    }

    collectAccessories() {
        console.log('Collect Accessories');
    }
}

// -------------------- Realization -----------------------

const teslaBuilder = new TeslaBuilder();
const bmwBuilder = new BmwBuilder();

teslaBuilder.build();
/**
 *   Add Electronic Engine
     Install Tesla chassis
     Add special electronic
     Collect Accessories
 */

bmwBuilder.build();
/**
 *   Add BMW Engine
     Install BMW chassis
     Add electronic
     Collect Accessories
 */
