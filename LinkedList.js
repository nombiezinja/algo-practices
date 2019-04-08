import LinkedListNode from './LinkedListNode';
import Comparator from './Comparator';

export default class LinkedList {
  constructor(comparator) {
    this.head = null;
    this.tail = null;
    this.compare = new Comparator(comparator);
  }

  append(value) {
    var node = new LinkedListNode(value);
    if (!this.head) {
      this.head = node;
      this.tail = node;
      return this;
    }
    this.tail.next = node;
    this.tail = node;
    return this;
  }

  prepend(value) {
    var node = new LinkedListNode(value);
    if (!this.head) {
      this.tail = node;
    }
    node.next = this.head;
    this.head = node;
    return this;
  }

  toString(callback) {
    return this.toArray().map(node => node.toString(callback)).toString();
  }

  toArray() {
    let current = this.head; 
    let arr = [];
    while (current) {
      arr.push(current);
      current = current.next;
    }
    return arr; 
  }
  
  deleteTail() {
    if (!this.head) {
      return null;
    }
    if (this.compare.equal(this.head, this.tail)) {
      var deletedNode = this.head;
      this.head = null;
      this.tail = null;
      return deletedNode;
    }

    var current = this.head;
    while (current.next) {
      // if current.next is the tail, delete it
      if (!current.next.next){
        var deletedNode = current.next;
        this.tail = current;
        current.next = null;
        return deletedNode; 
      }
      current = current.next; 
    }
  }

  deleteHead() {
    // list is empty
    if (!this.head) {
      return null; 
    }
    let deletedNode = this.head;
    if (!this.head.next) {
      this.tail = null;
      this.head = null; 
      return deletedNode;
    }
    this.head = this.head.next; 
    return deletedNode; 
    // list only has one node
    // none edge cases
  }

  delete(value) {

    // iterate through list, go from head to tail
    if (!this.head) {
      return null; 
    }
    let current = this.head;
    let previous = null;

    const nodeToDelete = new LinkedListNode(value)
    let deleted = false;

    while (current) {
      // if current.value === value, delete current 
      if (this.compare.equal(current.value, value)) {
        deleted = true;
        // current node is head: 
        // make next node head 
        if (this.compare.equal(this.head,current)) {
          this.head = this.head.next
        } else if (this.compare.equal(this.tail, current)) {
          // currentnode is tail: 
          // make prev node.next null, make prev node tail 
          previous.next = null;
          this.tail = previous;
        } else {
          // if current node in mid of list:
          // remove node from list
          // the node before the deleted node - make its next the deletednode.next
          // but only if deletednode.next is not the same as deletednode value
          let tmp = current.next;
          while (this.compare.equal(tmp.value, value)){
            tmp = tmp.next;
          }
          previous.next = tmp; 
        }
      }
      previous = current;
      current = current.next;
    }
    return deleted ? nodeToDelete : null;
  }

  find ({value = undefined, callback = undefined}) {
    if (!this.head){
      return null; 
    }

    const valueComparer = (currentValue) => {
      return this.compare.equal(value, currentValue);
    }

    let current = this.head; 
    while (current) {
      let found = value ? valueComparer(current.value) : callback(current.value);
      if (found) {
        return current; 
      }
      current = current.next; 
    }
    return null;
  }

  fromArray(arr) {
    arr.forEach((item) => {
      this.append(item);
    })
    return this; 
  }

  reverse() {
    let curr = this.head;
    let prev = null; 
    let next = null;
    this.tail = this.head;
    this.head = this.tail;
    while (curr.next) {
      next = curr.next;
      next.next = curr; 
      curr.next = prev; 

      prev = curr; 
      curr = curr.next;
    }
    return this;
  }
}
