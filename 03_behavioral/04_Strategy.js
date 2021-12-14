'use strict';

// Обєднує складні алгоримти в класи, а потім в залежності від умови викликає той чи інший клас

function baseStrategy(amount) {
    return amount;
}

function premiumStrategy(amount) {
    return amount * 0.85;
}

function platinumStrategy(amount) {
    return amount * 0.65;
}

class AutoCart {
    constructor(discount) {
        this.discount = discount;
        this.amount = 0;
    }

    checkout() {
        return this.discount(this.amount);
    }

    setAmount(amount) {
        this.amount = amount;
    }
}

// --------------------- Realization -------------------

const baseCustomer = new AutoCart(baseStrategy);
const premiumCustomer = new AutoCart(premiumStrategy);
const platinumCustomer = new AutoCart(platinumStrategy);

baseCustomer.setAmount(50000);
console.log(baseCustomer.checkout()); // 50 000

premiumCustomer.setAmount(50000);
console.log(premiumCustomer.checkout()); // 42 500

platinumCustomer.setAmount(50000);
console.log(platinumCustomer.checkout()); // 32 500
