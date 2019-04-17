import TrieNode from './TrieNode.js'

const HEAD_CHARACTER = '*';

export default class Trie {

  constructor() {
    this.head = new TrieNode(HEAD_CHARACTER);
  }

  addWord(word) {
    let arr = [...word];
    let current = this.head;
    for (let i = 0; i < arr.length; i ++) {
      let isCompleteWord = i === arr.length - 1;
      current = current.addChild(arr[i], isCompleteWord);
    }
    return this;
  }

  doesWordExist(word) {
    const lastNode = this.getLastCharacterNode(word);
    if (lastNode && lastNode.isCompleteWord) {
      return true;
    } else {
      return false;
    }
  }

  getLastCharacterNode(word) {
    let arr = [...word];
    let current = this.head;
    for (let i=0; i <arr.length; i ++) {
      let childNode = current.getChild(arr[i]);
      if(!childNode) {
        return null;
      }
      current = childNode;
    }
    return current;
  }
  
  deleteWord(word){
    // define a depth delete function that is to be called on root
    // it recursively calls itself
    // returns if being called more times than word's length
    // returns if being called with a character that is not a child of a current node
    const depthFirstDelete = (current, i = 0) =>{
      if (i >= word.length) {
        return;
      }

      const character = word[i];
      const next = current.getChild(character);

      if (!next) {
        return;
      }
      
      depthFirstDelete(next, i + 1);

      if (i === (word.length - 1)) {
        next.isCompleteWord = false; 
      }

      current.removeChild(character);
    }

    depthFirstDelete(this.head);
    return this;
  }
}