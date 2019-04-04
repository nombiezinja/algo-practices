import LinkedListNode from './LinkedListNode';

export default class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  append(value){
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

  prepend(value){
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
    while (current)  {
      str = str + current.value;
      current = current.next; 
    } 
    return str.split('').join(',');
  }

  delete(value) {
    var current = this.head; 
    var previous
    var deleted
    if (current) {
      if (current.value === value) {
        // if the node to be deleted is the head, return
        if (current === this.head) {
          this.head = current.next; 
          // return current ; 
        }
        previous.next = current.next; 
        // return current; 
        deleted = true; 
      }
        previous = current; 
        current = current.next; 
      console.log("if statement")
    } else {
      console.log("deleted", deleted)
      return deleted ? value : null; 
    }
  }
}

var l = new LinkedList()
l.append(1)
l.append(2)
console.log(l.toString())