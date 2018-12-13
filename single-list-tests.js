'use strict';

const LinkedList = require('./Linked-List');

function main() {
  const sll = new LinkedList();
  sll.insertLast('Apollo');
  sll.insertLast('Boomer');
  sll.insertLast('Helo');
  sll.insertLast('Husker');
  sll.insertLast('Starbuck');
  sll.insertLast('Tauhida');

  try {
    sll.remove('squirrel');
  } catch (e) {
    console.error(e.message);
  }

  try {
    console.log(sll.find('Apollo').value);
    console.log(sll.find('Boomer').value);
    console.log(sll.find('Helo').value);
    console.log(sll.find('Husker').value);
    console.log(sll.find('Starbuck').value);
    console.log(sll.find('Tauhida').value);
  } catch (e) {
    console.error(e.message);
  }
}

main();
