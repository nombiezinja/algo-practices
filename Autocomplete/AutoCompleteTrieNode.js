// Implementation of Trie without Hashtable
export default class TrieNode {
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
