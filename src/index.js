class Sorter {
  constructor() {
    this.array = [];
    this.comparator = (left, right) => left - right;
  }

  add(element) {
    this.array.push(element);
  }

  at(index) {
    return this.array[index];
  }

  get length() {
    return this.array.length;
  }

  toArray() {
    return this.array;
  }

  sort(indices) {
    indices.sort((left, right) => left - right)

    let sortElements = [];
    for(let i = 0; i < indices.length; i++) {
      let indexOfSortElement = indices[i];
      let sortElement = this.array[indexOfSortElement];

      sortElements.push(sortElement);
    }

    sortElements.sort(this.comparator);

    for(let i = 0; i < indices.length; i++) {
      let indexOfSortElement = indices[i];

      this.array[indexOfSortElement] = sortElements[i];
    }
  }

  setComparator(compareFunction) {
    this.comparator = compareFunction;
  }
}

module.exports = Sorter;