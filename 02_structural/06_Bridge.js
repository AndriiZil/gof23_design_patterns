// Bridge - міст / Abstraction Implementor

class Model {
    constructor(color) {
        this.color = color;
    }
}

class Color {
    constructor(type) {
        this.type = type;
    }

    get() {
        return this.type;
    }
}

class BlackColor extends Color {
    constructor() {
        super('dark-black');
    }
}

class SilbrigColor extends Color {
    constructor() {
        super('Silbermetallic');
    }
}

class Audi extends Model {
    constructor(color) {
        super(color);
    }

    paint() {
        return `Auto: Audi, Color: ${this.color.get()}`;
    }
}

class Bmw extends Model {
    constructor(color) {
        super(color);
    }

    paint() {
        return `Auto: Bmw. Color: ${this.color.get()}`;
    }
}

// We can add one layer of abstraction for separating pain();

const blackBmw = new Bmw(new BlackColor());

console.log(blackBmw.paint()); // Auto: Bmw. Color: dark-black
