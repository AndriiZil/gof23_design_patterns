'use strict';

// Mediator / Посредник
// Паттерн який виносить міжкласові зв'язки в інший клас (посередник) Клас посередник нічого не знає як реалізована
// логіка всередині OfficialDealer

class OfficialDealer {
    constructor() {
        this.customers = [];
    }

    orderAuto(customer, auto, info) {
        const name = customer.getName();

        console.log(`Order name:: ${name}. Order auto is ${auto}`);
        console.log(`Additional info: ${info}`);
        this.addToCustomersList(name);
    }

    addToCustomersList(name) {
        this.customers.push(name);
    }

    getCustomerList() {
        return this.customers;
    }
}

class Customer {
    constructor(name, dealerMediator) {
        this.name = name;
        this.dealerMediator = dealerMediator;
    }

    getName() {
        return this.name;
    }

    makeOrder(auto, info) {
        this.dealerMediator.orderAuto(this, auto, info);
    }
}

// ------------------------- Implementation -------------------------

const mediator = new OfficialDealer();

const yauhen = new Customer('Yauhen', mediator);
const valera = new Customer('Valera', mediator);

yauhen.makeOrder('Tesla', 'With autopilot!');
valera.makeOrder('Audi', 'With parktronik!');

console.log(mediator.getCustomerList());
/**
 *
 *   Order name:: Yauhen. Order auto is Tesla
     Additional info: With autopilot!
     Order name:: Valera. Order auto is Audi
     Additional info: With parktronik!
     [ 'Yauhen', 'Valera' ]
 *
 */
