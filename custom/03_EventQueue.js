'use strict';

class EventQueue {
  constructor() {
    this.events = [];
    this.index = -1;
  }

  dispatch({ type, value }) {
    switch (type) {
      case 'ADD':
        this.addEvent(type, value);
        break;
      case 'UNDO':
        this.prev();
        break;
      default:
        throw new Error(`No such event ${type}`);
    }
  }

  addEvent(type, value) {
    this.events.push({
      type,
      value,
    });
    this.index += 1;
  }

  hasNext() {
    return this.index !== -1 && this.index - 1 <= this.events.length;
  }

  hasPrev() {
    return this.index >= 0;
  }

  next() {
    if (this.hasNext()) {
      return this.events[this.index + 1];
    }
  }

  prev() {
    let event = null;
    if (this.hasPrev()) {
      event = this.events[this.index];
      this.index -= 1;
    }
    console.log({ event });
    return event;
  }
}
const events = new EventQueue();

events.dispatch({
  type: 'ADD',
  value: 1,
});

events.dispatch({
  type: 'ADD',
  value: 2,
});

events.dispatch({
  type: 'UNDO',
});

events.dispatch({
  type: 'UNDO',
});

events.dispatch({
  type: 'UNDO',
});

events.dispatch({
  type: 'UNDO',
});

/**
 * { event: { type: 'ADD', value: 2 } }
 * { event: { type: 'ADD', value: 1 } }
 */
