// Problem:
// on Num pad, each time user presses a number, suggest the possible words 
// Effectively: each time user presses a number, it becomes an array of words, try and retrieve these words from the trie, suggest children for the last character if the word exists in the dictionary trie
// OR each time user presses a number a word is added to a trie?

const HEAD_CHARACTER = '*';

class TrieNode {
  constructor(character, isCompleteWord = false) {
    this.character = character; 
    this.isCompleteWord = isCompleteWord; 
    this.children = new Map();
  }

  addChild(character, isCompleteWord = false){
    if (!this.hasChild(character)) {
      this.children.set(character, new TrieNode(character, isCompleteWord))
    }

    const childNode = this.getChild(character);
    childNode.isCompleteWord = childNode.isCompleteWord || isCompleteWord;
    return childNode;
  }

  getChild(character){
    return this.children.get(character);
  }
  
  hasChild(character){
    return this.children.has(character);
  }

  suggestChildren() {
    return [...this.children.keys()];
  }

  hasChildren() {
    return !!this.children.size;
  }

  removeChild(character) {
    let toDelete = this.getChild(character);
    if (!toDelete) {
      return this;
    }
    if (!toDelete.hasChildren() && !toDelete.isCompleteWord) {
      this.children.delete(character);
    }
    return this; 
  }

  toString() {
    const strFromChildren = this.suggestChildren().toString();
    const character = this.hasChildren() ? this.character + ':' : this.character;
    const isCompleteString = this.isCompleteWord ? '*' : '';
    return character + strFromChildren + isCompleteString;
  }
}

class Trie {
  constructor() {
    this.head = new TrieNode(HEAD_CHARACTER);
  }

  addWord(word) {
    let arr = [...word];
    let current = this.head;
    for (let i = 0; i < arr.length; i++) {
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

      if (i === (word.length - 1)) {
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
    for (let i = 0; i < arr.length; i++) {
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

  suggestNextFullWord(word) {
    const lastCharacterNode = this.getLastCharacterOfWord(word);
    if (!lastCharacterNode) {
      return null; 
    } 

    let current = lastCharacterNode;
    let words = []; 

    const depthFirstSearch = (current, word) => {
      if (!current.hasChildren()){
        return;
      }
      const children = current.suggestChildren();
      children.forEach((key) => {
        const node = current.getChild(key);
        if (node.isCompleteWord) {
          words.push(word + key);
        }
        depthFirstSearch(node, word + key);
      })
    }
    
    depthFirstSearch(current, word);
    // while (current.hasChildren()) {
    // }
    return words;
  }
}


let dictionary = new Trie();
let words = ['a', 'an', 'and', 'abs', 'atom',  'be', 'bench', 'bet', 'chair', 'chairman', 'check', 'cat', 'cats', 'cab', 'cabs', 'car', 'cars', 'carry']

let input = {
  2: ["a", "b", "c"], 
  3: ["d", "e", "f"],
  4: ["g", "h", "i"], 
  5: ["j", "k", "l"], 
  6: ["m", "n", "o"], 
  7: ["p", "q", "r", "s"], 
  8: ["t", "u", "v"], 
  9: ["w", "x", "y","z"]
}

words.forEach((word) => {
  dictionary.addWord(word);
})

words.forEach((word) => {
  console.log(dictionary.doesWordExist(word));
})

// console.log(dictionary.suggestNextFullWord('an'))
console.log(dictionary.suggestNextFullWord('ca'))