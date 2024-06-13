'use strict';

// Like Music player plays sounds
// The main idea of this pattern is cut collection and separate manipulating logic
// Суть паттерна - це розумний перебір колекції без розкриття внутрішнього представлення елементів (без можливості будь-яких змін)

class ArrayIterator {
  constructor(el) {
    this.index = 0;
    this.element = el;
  }

  next() {
    return this.element[this.index++];
  }

  prev() {
    return this.element[--this.index - 1];
  }

  hasNext() {
    return this.index < this.element.length;
  }
}

class ObjectIterator {
  constructor(el) {
    this.index = 0;
    this.keys = Object.keys(el);
    this.element = el;
  }

  next() {
    return this.element[this.keys[this.index++]];
  }

  prev() {
    return this.element[this.keys[--this.index - 1]];
  }

  hasNext() {
    return this.index < this.keys.length;
  }
}

//--------------------- Realization -------------------------
const music = [
  { id: 1, name: 'Sound1' },
  { id: 2, name: 'Sound2' },
  { id: 3, name: 'Sound3' },
];

const collection1 = new ArrayIterator(music);

while (collection1.hasNext()) {
  console.log(collection1.next());
}

//----------------------------------------------------------
const autos = {
  audi: { id: 1, model: 'Audi', color: 'black', price: '20000' },
  bmw: { id: 2, model: 'BMW', color: 'white', price: '30000' },
  tesla: { id: 3, model: 'Tesla', color: 'gray', price: '40000' },
};

const collection2 = new ObjectIterator(autos);

while (collection2.hasNext()) {
  console.log(collection2.next());
}

/**
 *   { model: 'Audi', color: 'black', price: '20000' }
 { model: 'BMW', color: 'white', price: '30000' }
 { model: 'Tesla', color: 'gray', price: '40000' }
 *
 */
