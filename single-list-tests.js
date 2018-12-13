/* eslint-disable no-console */

'use strict';

const LinkedList = require('./Linked-List');

function main() {
  const sll = new LinkedList();
  console.log(sll.isEmpty());
  try {
    console.log(sll.findLast());
  } catch (e) {
    console.error(e.message);
  }

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

  // try {
  //   console.log(sll.find('Apollo').value);
  //   console.log(sll.find('Boomer').value);
  //   console.log(sll.find('Helo').value);
  //   console.log(sll.find('Husker').value);
  //   console.log(sll.find('Starbuck').value);
  //   console.log(sll.find('Tauhida').value);
  // } catch (e) {
  //   console.error(e.message);
  // }

  try {
    sll.insertBefore('Athena', 'Boomer');
    sll.insertAfter('Hotdog', 'Helo');
    sll.insertAt('Kat', 3);
    sll.remove('Tauhida');
  } catch (e) {
    console.error(e.message);
  }

  sll.display();
  console.log(sll.size());
  console.log(sll.isEmpty());
  console.log(sll.findPrevious('Starbuck'));

  try {
    console.log(sll.findPrevious('Apollo'));
  } catch (e) {
    console.error(e.message);
  }

  try {
    console.log(sll.findPrevious('Arun'));
  } catch (e) {
    console.error(e.message);
  }

  console.log(sll.findLast());
  sll.reverse();
  sll.display();
  console.log(sll.thirdFromEnd());
}

main();
