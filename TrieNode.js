export default class TrieNode {

  constructor(value, isCompleteWord) {
    this.character = value;
    this.IsCompleteWord = isCompleteWord;
  }

  toString() {
    return `${this.character}*`
  }

}