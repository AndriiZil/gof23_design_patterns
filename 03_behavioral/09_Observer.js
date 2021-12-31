'use strict';

// Механізм підписки дозволяє одним обєктам слідкувати за іншими Один до багатьох
// Приклад це будь яка підписка на новини ресурсу
// Механізм слідкування одного обєкта за змінами іншого
// Store

class AutoNews {

    constructor() {
        this.news = '';
        this.actions = [];
    }

    setNews(text) {
        this.news = text;
        this.notifyAll();
    }

    notifyAll() {
        return this.actions.forEach(subs => subs.inform(this)); // In order to send link for news
    }

    register(observer) {
        this.actions.push(observer);
    }

    unregister(observer) {
        this.actions = this.actions.filter(el => !(el instanceof observer));
    }
}

class Jack {
    inform(message) {
        console.log(`Jack has been informed about: ${message.news}`);
    }
}

class Max {
    inform(message) {
        console.log(`Max has been informed about: ${message.news}`);
    }
}

// ------------------------ Realization ---------------------------

const autoNews = new AutoNews();

autoNews.register(new Jack());
autoNews.register(new Max());

autoNews.setNews('New Tesla price is 40 000');

/**
 *  Jack has been informed about: New Tesla price is 40 000
    Max has been informed about: New Tesla price is 40 000
 */
