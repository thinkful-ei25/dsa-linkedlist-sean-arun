/* eslint-disable no-console */

'use strict';

const DoubleLinkedList = require('./Double-Linked-List');

function main() {
  const dll = new DoubleLinkedList();
  dll.insertLast('Aquaria');
  dll.insertLast('Caprica');
  dll.insertLast('Gemeon');
  dll.insertLast('Picon');
  dll.insertLast('Sagittaron');
  dll.display();
  console.log();

  dll.insertAfter('Tauron', 'Picon');
  dll.display();
  console.log();

  dll.remove('Picon');
  dll.display();
  console.log();

  dll.reverse();
  dll.display();
  console.log();
}

main();
