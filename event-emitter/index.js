import { logEvents } from "./logEvents.js";
import {EventEmitter} from 'node:events'

class MyEmitter extends EventEmitter {}

const myEmitter = new MyEmitter();
myEmitter.on('log', (msg) => {
  logEvents(msg)
});
myEmitter.emit('log','Log event emitted');