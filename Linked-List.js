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

  throwIfEmpty(item) {
    if (!this.head) {
      const message = item ? `List is empty, cannot find ${item}` : 'List is empty';
      throw new Error(message);
    }
  }

  remove(item) {
    this.throwIfEmpty(item);

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

  insertBefore(item, key) {
    this.throwIfEmpty(key);

    let curr = this.head;
    let prev;

    while (curr && curr.value !== key) {
      prev = curr;
      curr = curr.next;
    }

    if (!curr) {
      throw new Error(`Could not find ${item}`);
    }

    const instertNode = new Node(item, curr);
    if (prev) {
      prev.next = instertNode;
    }
  }

  insertAfter(item, key) {
    this.throwIfEmpty(key);

    const curr = this.find(key);

    if (!curr) {
      throw new Error(`Could not find ${key}`);
    }

    const insertedNode = new Node(item, curr.next);
    curr.next = insertedNode;
  }

  insertAt(item, position) {
    let curr = this.head;

    for (let i = 0; i < position - 1; i += 1) {
      if (!curr) {
        throw new Error(`List length is less than ${position}`);
      }

      curr = curr.next;
    }

    const insertedNode = new Node(item, curr.next);
    curr.next = insertedNode;
  }

  display() {
    for (let curr = this.head; curr; curr = curr.next) {
      // eslint-disable-next-line no-console
      console.log(curr.value);
    }
  }

  size() {
    let count = 0;
    for (let curr = this.head; curr; curr = curr.next) {
      count++;
    }
    return count;
  }

  isEmpty() {
    return !this.head;
  }

  findPrevious(item) {
    this.throwIfEmpty();

    if (this.head.value === item) {
      throw new Error(`There is nothing before ${item}`);
    }
    let curr = this.head;
    let prev = null;

    while (curr && curr.value !== item) {
      prev = curr;
      curr = curr.next;
    }

    if (!curr) {
      throw new Error(`Could not find ${item}`);
    }

    return prev;
  }

  findLast() {
    // Use a while loop to iterate through, return last
    this.throwIfEmpty();

    let curr = this.head;
    let lastItem;
    while (curr) {
      lastItem = curr;
      curr = curr.next;
    }

    return lastItem;
  }

  reverse() {
    this.throwIfEmpty();

    if (this.head.next === null) {
      throw new Error('You cannot reverse a list that only has one item!');
    }

    let prev = null;
    let curr = this.head;
    let following;

    while (curr !== null) {
      following = curr.next;
      curr.next = prev;
      prev = curr;
      curr = following;
    }

    this.head = prev;
  }

  thirdFromEnd() {
    this.throwIfEmpty();

    if (this.head.next === null || this.head.next.next === null) {
      throw new Error(
        'Cannot get the third from last item when there are less than three items'
      );
    }

    let curr = this.head;

    while (curr.next.next.next !== null) {
      curr = curr.next;
    }

    return curr;
  }

  middle() {
    this.throwIfEmpty();

    let curr = this.head;
    let middle = curr;

    while (curr.next && curr.next.next) {
      curr = curr.next.next;
      middle = middle.next;
    }

    return middle;
  }
  hasCycle(){ 
    this.throwIfEmpty(); 

    let visited = []; 
    let curr = this.head; 

    while(curr){ 
      if (visited.includes(curr)){ 
        return true; 
      }

      visited.push(curr); 
      curr = curr.next; 
    }
    return false; 
  } 
}

module.exports = LinkedList;
