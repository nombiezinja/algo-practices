import LinkedList from './LinkedList';

export default class HashTable {
  
  constructor(length = 32) {
    this.buckets = Array(length).fill(null).map(() =>{new LinkedList()})
  }

  hash(key) {
     hash = Array.from(key).reduce((accumulator, value) => {accumulator + value.charCodeAt(0)}, 0)
     let hash = Array.from(key).reduce(
      (hashAccumulator, keySymbol) => (hashAccumulator + keySymbol.charCodeAt(0)),
      0,
    );

    return hash % this.buckets.length 
  }

}