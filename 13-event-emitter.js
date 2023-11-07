// get back the class
// if want custom extend from class
// otherwise just for emitting and handling events create instance
const EventEmitter = require('events')

const customEmitter = new EventEmitter()

// on and emit methods
// keep track of the order
// additional arguments
// built-in modules utilize it

customEmitter.on('response', (name, id) => {
  console.log(`data recieved user ${name} with id:${id}`)
})

customEmitter.on('response', () => {
  console.log('some other logic here')
})

customEmitter.emit('response', 'john', 34)

// Event Driven Programming
// Used heavily in Node.js
// We listen for specific events, register functionsn that execute in response to those events.
// Built in modules use events in Node.js

// const EventEmitter = require('events');

// const customEmitter = new EventEmitter();

// // EvenetEmitter.on('response', () => {}) EventEmitter.Emit('')

// // First listen for the event, and then emit it! The order matters.
// customEmitter.on('response', (name, id) => {
//     console.log(`data received user ${name} with id: ${id}`)
// })
// customEmitter.on('response', () => {
//     console.log('some other logic here')
// })

// customEmitter.emit('response', 'john', 34)