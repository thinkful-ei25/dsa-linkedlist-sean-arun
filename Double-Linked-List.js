'use strict';

class Node {
  constructor(item, next = null, prev = null) {
    this.item = item;
    this.next = next;
    this.prev = prev;
  }
}

class DoubleLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  insertFirst(item) {
    const insertedNode = new Node(item, this.head);
    if (this.head) {
      this.head.prev = insertedNode;
    }
    this.head = insertedNode;
  }

  insertLast(item) {
    const instertedNode = new Node(item, null, this.tail);
    if (this.tail) {
      this.tail.next = instertedNode;
    }
    this.tail = instertedNode;
  }

  find(item) {
    let curr = this.head;

    while (curr && curr.value !== item) {
      curr = curr.next;
    }

    return curr;
  }

  insertBefore(item, key) {
    const position = this.find(key);

    if (!position) {
      throw new Error(`Could not find ${key}`);
    }

    const insertedNode = new Node(item, position, position.prev);

    /*
            <- A <-> B <-> C <-> D <-> E ->
                           p
                           f.n 
                        F
                    f.p                              
        */
    if (position.prev) {
      position.prev.next = insertedNode;
    }

    position.prev = insertedNode;
  }

  insertAfter(item, key) {
    const position = this.find(key);

    if (!position) {
      throw new Error(`Could not find ${key}`);
    }

    const instertedNode = new Node(item, position.next, position);

    /*
            <- A <-> B <-> C <-> D <-> E -> 
                           p  F
                           F.p   F.n
        */

    if (position.next) {
      position.next.prev = instertedNode;
    }
    position.next = instertedNode;
  }

  remove(item) {
    const position = this.find(item);

    if (!position) {
      throw new Error(`Could not find ${item}`);
    }
    /*
            <- A <-> B <-> C <-> D <-> E -> 
                                 p
                           p.p.n = p.n
                           p.n.p = p.p      
        */

    if (position.prev) {
      position.prev.next = position.next;
    }
    if (position.next) {
      position.next.prev = position.prev;
    }
  }
}
