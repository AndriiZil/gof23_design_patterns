'use strict';

class EventBus {
  constructor() {
    this.channels = {};
  }

  subscribe(channelName, listener) {
    if (!this.channels[channelName]) {
      this.channels[channelName] = []
    }
    this.channels[channelName].push(listener)
  }

  publish(channelName, data) {
    const channel = this.channels[channelName];

    if (!channel || !channel.length) {
      return
    }

    channel.forEach(listener => listener(data))
  }
}

const eventBus = new EventBus();

eventBus.subscribe('foo', () => console.log('foo fired'));
eventBus.subscribe('foo', (data) => console.log(data));
eventBus.publish('foo', 'Hello World');

/**
 * foo fired
 * Hello World
 */
