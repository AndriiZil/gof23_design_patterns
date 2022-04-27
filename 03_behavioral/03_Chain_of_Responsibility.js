'use strict';

// JQuery, Transaction, Bank with many pay systems
// Паттерн який дозволяє передавати запити по цепочці обовязків, і на кожному етапі перевіряється чи логіка може
// бути виконана на даному етапі чи буде передаватись далі по цепочці


class Account {
  pay(orderPrice) {
    if (this.canPay(orderPrice)) {
      console.log(`Paid ${orderPrice} using ${this.name}`);
    } else if (this.incomer) {
      console.log(`Cannot pay using ${this.name}`);
      this.incomer.pay(orderPrice)
    } else {
      console.log('Unfortunately, not enough money');
    }
  }

  canPay(amount) {
    return this.balance >= amount;
  }

  setNext(account) {
    this.incomer = account;
  }

  show() {
    console.log(this);
  }
}

class Master extends Account {
  constructor(balance) {
    super();
    this.name = 'Master Card';
    this.balance = balance;
  }
}

class Paypal extends Account {
  constructor(balance) {
    super();
    this.name = 'Paypal';
    this.balance = balance;
  }
}

class Qiwi extends Account {
  constructor(balance) {
    super();
    this.name = 'Qiwi';
    this.balance = balance;
  }
}

const master = new Master(100);
const payPal = new Paypal(200);
const qiwi = new Qiwi(500);

// Define chain
master.setNext(payPal);
payPal.setNext(qiwi);
master.show();

// Start pay
master.pay(438);
/**
 * Master {
 *   name: 'Master Card',
 *   balance: 100,
 *   incomer: Paypal {
 *     name: 'Paypal',
 *     balance: 200,
 *     incomer: Qiwi { name: 'Qiwi', balance: 500 }
 *   }
 * }
 */
/**
 *   Cannot pay using Master Card
 Cannot pay using Paypal
 Paid 438 using Qiwi
 */
