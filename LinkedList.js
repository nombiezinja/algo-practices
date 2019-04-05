import LinkedListNode from './LinkedListNode';

export default class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
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

  toString() {
    var current = this.head;
    var str = ''
    while (current) {
      console.log("current in to string is", current)
      str = str + current.value;
      current = current.next;
    }
    return str.split('').join(',');
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

    while (current.next) {
      // if current.value === value, delete current 
      if (current.value === value) {
        console.log("1")
        deleted = true;
        // current node is head: 
        // make next node head 
        if (this.head === current) {
          console.log("2")
          this.head = this.head.next
        } else if (this.tail === current) {
          console.log("3")
          // currentnode is tail: 
          // make prev node.next null, make prev node tail 
          previous.next = null;
          this.tail = previous;
        } else {
          console.log(4)
          // if current node in mid of list:
          // remove node from list
          // the node before the deleted node - make its next the deletednode.next
          console.log("CURRENT IS", current)
          console.log("previous", previous)
          console.log("next", current.next)
          console.log("replacing previous.next with current.next:", previous.next, current.next);
          previous.next = current.next; 

          console.log("previous", previous)
          console.log("next", current.next)

          console.log(this.toString())
        }
      }
      previous = current;
      current = current.next;
    }
    return deleted ? nodeToDelete : null;
  }
}

var l = new LinkedList()
l.append(1)
l.append(2)
console.log(l.toString())