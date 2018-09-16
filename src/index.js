class Sorter {
  constructor() {
    this.array = []
    this.chosenMethod = function(left, right){return left - right}
  }

  add(element) {
    this.array.push(element)
  }

  at(index) {
    return this.array[index]
  }

  get length() {
    return this.array.length
  }

  toArray() {
    return this.array
  }

  sort(indices) {
    indices.sort()
    var sortElements = [];
    for(var i = 0; i < indices.length; i++){
      sortElements.push(this.array[indices[i]])
    }    
    sortElements.sort(this.chosenMethod)
    for(var j = 0; j < sortElements.length; j++){
      this.array.splice(indices[j], 1, sortElements[j])
    }
  }

  setComparator(compareFunction) {
    this.chosenMethod = compareFunction    
  }
}

module.exports = Sorter;