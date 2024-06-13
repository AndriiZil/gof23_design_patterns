'use strict';

// Дозволяє міняти поведінку обєктам в залежності від стану, що зі сторони виглядає ніби в роботу включився інший клас
// программа може находитися в одному зі станів і реагувати на подію по різному, перехід від станів може бути як ручний так і автоматичний
// Приклад це заказ і доставка товару // Оплата / В дорозі / Доставлено
// State шаблон помагає змінювати поведінку класа в залежності від його стану, тим самим створюючи разні реакції на одні і тіж дані одного і того ж класу

class OrderStatus {
  constructor(name, nextStatus) {
    this.name = name;
    this.nextStatus = nextStatus;
  }

  next() {
    return new this.nextStatus();
  }
}

class WaitingForPayment extends OrderStatus {
  constructor() {
    super('waitingForPayment', Shipping);
  }
}

class Shipping extends OrderStatus {
  constructor() {
    super('shipping', Delivered);
  }
}

class Delivered extends OrderStatus {
  constructor() {
    super('delivered', Shipping);
  }
}

class Order {
  constructor() {
    this.state = new WaitingForPayment();
  }

  nextState() {
    this.state = this.state.next();
  }

  cancelOrder() {
    if (this.state.name === 'waitingForPayment') {
      console.log('Order is canceled!');
    } else {
      console.log('Order cannot be canceled!');
    }
  }
}

// ----------------------- Realization -----------------------

const myOrder = new Order();

console.log(myOrder.state.name); // waitingForPayment

myOrder.nextState();
console.log(myOrder.state.name); // shipping

myOrder.cancelOrder(); // Order cannot be canceled!

myOrder.nextState();
console.log(myOrder.state.name); // delivered
