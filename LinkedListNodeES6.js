class LinkedListNode {
  constructor(value, next){
    this.value = value; 
    this.next = next ? next : null;
  }

  toString(callback){
    return callback? callback(this.value) : `${this.value}`;
  }
}