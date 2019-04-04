class LinkedListNode {
  constructor(value, next){
    this.value = value; 
    this.next = next ? next : null;
  }

  toString(callback){
    return callback? callback(this.value) : `${this.value}`;
  }
}
class LinkedList {
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

  toString() {
    var current = this.head;
    var str = ''
    while (current)  {
      console.log("current is", current)
      str = str + current.value;
      current = this.next; 
      console.log("current is now", current)
    } 
    return str;
  }
}

var l = new LinkedList()
l.append(1)
l.append(2)
console.log(l.toString())