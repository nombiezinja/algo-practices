import LinkedList from './LinkedList';

export default class Stack {
  constructor() {
    this.LinkedList = new LinkedList();
  }

  push(value) {
    this.LinkedList.prepend(value);
  }

  peek() {
    return this.LinkedList.head ? this.LinkedList.head.value : null;
  }

  toString(callback) {
    return this.LinkedList.toString(callback);
  }

  isEmpty() {
    return this.LinkedList.head ? false : true 
  }

  pop() {
    let deleted = this.LinkedList.deleteHead();
    return deleted ? deleted.value : null;
  }

  toArray() {
    return this.LinkedList.toArray().map(item => item.value);
  }
}