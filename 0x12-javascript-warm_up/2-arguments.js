#!/usr/bin/node
const count = process.argv.length;
console.log(count < 3 ? 'No argument' : count == 3 ? 'Argument found' : 'Arguments found');
