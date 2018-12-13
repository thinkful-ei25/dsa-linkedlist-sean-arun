'use strict';

class Node {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  insertFirst(item) {
    this.head = new Node(item, this.head);
  }

  insertLast(item) {
    if (!this.head) {
      this.head = new Node(item);
      return;
    }

    let curr = this.head;
    while (curr.next) {
      curr = curr.next;
    }
    curr.next = new Node(item);
  }

  find(item) {
    let currNode = this.head;

    while (currNode && currNode.value !== item) {
      currNode = currNode.next;
    }

    return currNode;
  }

  remove(item) {
    if (!this.head) {
      throw new Error(`List is empty, cannot remove ${item}`);
    }

    if (this.head.value === item) {
      this.head = this.head.next;
      return;
    }

    let curr = this.head;
    let prev;
    while (curr && curr.value !== item) {
      prev = curr;
      curr = curr.next;
    }

    if (!curr) {
      throw new Error(`Value ${item} not found`);
    }

    prev.next = curr.next;
  }
}

module.exports = LinkedList;
