'use strict';

class Singleton {
  constructor(db) {
    if (!Singleton.instance) {
      Singleton.instance = this;
      this.db = db;
    }
    return Singleton.instance;
  }
  getInstance() {
    return this.db;
  }
}

class Bmw {
  constructor() {
    this.model = model;
    this.name = name
  }
}
