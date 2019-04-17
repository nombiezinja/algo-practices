import HashTable from './HashTable';

export default class TrieNode {

  constructor(value, isCompleteWord = false) {
    this.character = value;
    this.isCompleteWord = isCompleteWord;
    this.children = new HashTable();
  }

  addChild(character, isCompleteWord = false) {
    if (!this.children.has(character)) {
      let childNode = new TrieNode(character, isCompleteWord);
      this.children.set(character, childNode);
    }

    const childNode = this.children.get(character);

    childNode.isCompleteWord = childNode.isCompleteWord || isCompleteWord;
    return childNode;
  }

  getChild(character) {
    return this.children.get(character);
  }

  hasChildren() {
    return this.children.getKeys().length !== 0;
  }

  hasChild(character){
    return this.children.has(character);
  }

  suggestChildren() {
    return [... this.children.getKeys()];
  }

  removeChild(character) {
    if (!this.hasChild(character)){
      return;
    }
    let child = this.getChild(character);
    if (!child.hasChildren() && !child.isCompleteWord){
      this.children.delete(character);
    }
    return this;
  }

  toString() {
    let childrenAsString = this.suggestChildren().toString();
    let isCompleteWord = this.isCompleteWord ? '*' : '';
    let character = childrenAsString ? this.character + ':' : this.character;
    return character + childrenAsString + isCompleteWord;
  }

}