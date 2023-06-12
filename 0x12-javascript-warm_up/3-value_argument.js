#!/usr/bin/node
let arg = process.argv;
console.log(typeof arg[1] === 'undefined' ? 'No argument' : arg[1]);

