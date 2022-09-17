const EventEmitter = require('events');

const myEvent = new EventEmitter();
myEvent.addListener('event1', () => {
  console.log('event1');
});
myEvent.on('event2', () => {
  console.log('event2');
});
myEvent.on('event2', () => {
  console.log('event2 추가');
});
myEvent.once('event3', () => {
  console.log('event3');
});

myEvent.emit('event1');
myEvent.emit('event2');

myEvent.emit('event3');
myEvent.emit('event3');

myEvent.on('event3', () => {
  console.log('event4');
});

myEvent.removeAllListeners('event4');
myEvent.emit('event4');

const listener = () => {
  console.log('event5');
};

myEvent.on('event5', listener);
myEvent.removeListener('event5', listener);
myEvent.emit('event5');

console.log(myEvent.listenerCount('event2'));
