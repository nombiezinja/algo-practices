import TrieNode from './AutoCompleteTrieNode'

const HEAD_CHARACTER = '*';

export default class Trie {
  constructor() {
    this.head = new TrieNode(HEAD_CHARACTER);
  }

  addWord(word) {
    let arr = [...word];
    let current = this.head; 
    for (let i = 0; i < arr.length; i ++) {
      let isCompleteWord = false;
      if (i === arr.length - 1) {
        isCompleteWord = true; 
      }
      current = current.addChild(arr[i], isCompleteWord);
    }
    return this;
  }

  deleteWord(word) {
    const depthFirstDelete = (current, i = 0) => {
      if (i >= word.length) {
        return;
      }

      let next = current.getChild(word[i]);

      if (!next) {
        return;
      }
      
      depthFirstDelete(next, i + 1);

      if (i ===(word.length - 1)) {
        next.isCompleteWord = false;
      }
      current.removeChild(word[i]);
    }

    depthFirstDelete(this.head);
    return this;
  }

  doesWordExist(word) {
    const lastNode = this.getLastCharacterOfWord(word);
    // return lastNode && lastNode.isCompleteWord;
    if (lastNode && lastNode.isCompleteWord) {
      return true;
    } else {
      return false;
    }
  }

  getLastCharacterOfWord(word) {
    let arr = [...word];
    let current = this.head;
    for (let i = 0; i < arr.length; i ++) {
      let childNode = current.getChild(arr[i]);
      if (!childNode) {
        return null;
      }
      current = childNode;
    }
    return current
  }

  suggestNextCharacters(word) {
    const lastCharacterNode = this.getLastCharacterOfWord(word);
    if (!lastCharacterNode) {
      return null;
    }
    return lastCharacterNode.suggestChildren();
  }
}