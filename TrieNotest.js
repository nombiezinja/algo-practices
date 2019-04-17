import HashTable from './HashTable';

class Trie {
  constructor() {

  }
}

class TrieNode {
  constructor(character, isCompleteWord = false){
    this.character = character; 
    this.isCompleteWord = isCompleteWord; 
    this.children = new HashTable();
  }

  getChild(character) {
    this.children.get(character);
  }

  addChild(character, isCompleteWord = false ) {
    if(!this.children.has(character)) {
      this.children.set(character, new TrieNode(character, isCompleteWord));
    }

    const childNode = this.children.get(character);
    childNode.isCompleteWord = childNode.isCompleteWord || isCompleteWord; 

    return childNode; 
  }

  removeChild(character) {

  }
}