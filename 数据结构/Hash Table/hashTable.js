class HashTable {
  constructor(size = 10) {
    this.keyMap = new Array(size);
  }

  _hash(key) {
    let total = 0;
    let WEIRD_PRIME = 31;

    for (let i = 0; i < Math.min(key.length, 100); i++) {
      //map "a" to 1, "b" to 2, "c" to 3 etc.
      const rank = key.charCodeAt(i) - 96;
      total = (total * WEIRD_PRIME + rank) % this.keyMap.length;
    }
    return total;
  }

  set(key, value) {
    const index = this._hash(key);
    if (!this.keyMap[index]) {
      this.keyMap[index] = [];
    }
    this.keyMap[index].push([key, value]);
  }

  get(key) {
    const index = this._hash(key);
    if (this.keyMap[index]) {
      for (let i = 0; i < this.keyMap[index].length; i++) {
        if (key === this.keyMap[index][i][0]) {
          return this.keyMap[index][i];
        }
      }
    }
    return undefined;
  }

  keys() {
    let keyArr = [];
    for (let i = 0; i < this.keyMap.length; i++) {
      if (this.keyMap[i]) {
        for (let j = 0; j < this.keyMap[i].length; j++) {
          if (!keyArr.includes(this.keyMap[i][j][0]))
            keyArr.push(this.keyMap[i][j][0]);
        }
      }
    }
    return keyArr;
  }

  values() {
    let valueArr = [];
    for (let i = 0; i < this.keyMap.length; i++) {
      if (this.keyMap[i]) {
        for (let j = 0; j < this.keyMap[i].length; j++) {
          if (!valueArr.includes(this.keyMap[i][j][1]))
            valueArr.push(this.keyMap[i][j][1]);
        }
      }
    }
    return valueArr;
  }
}

const hashtable = new HashTable();
hashtable.set("pink", "#343256");
hashtable.set("red", "#1235442");
hashtable.set("black", "#000000");
hashtable.set("white", "#ffffff");
hashtable.set("orange", "#ffffff");
console.log(hashtable);
console.log(hashtable.get("red"));
console.log(hashtable.values());
console.log(hashtable.keys());
