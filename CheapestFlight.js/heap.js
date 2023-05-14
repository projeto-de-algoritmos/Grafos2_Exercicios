class BinaryHeap {
    constructor(compare) {
      this.heap = [];
      this.compare = compare;
    }
  
    get size() {
      return this.heap.length;
    }
  
    getRoot() {
      return this.heap[0];
    }
  
    insert(value) {
      this.heap.push(value);
      this.heapifyUp();
    }
  
    extractRoot() {
      const root = this.getRoot();
      const lastNode = this.heap.pop();
      if (this.heap.length > 0) {
        this.heap[0] = lastNode;
        this.heapifyDown();
      }
      return root;
    }
  
    heapifyUp() {
      let index = this.heap.length - 1;
      while (index > 0) {
        const parentIndex = Math.floor((index - 1) / 2);
        if (this.compare(this.heap[index], this.heap[parentIndex]) >= 0) {
          break;
        }
        this.swap(index, parentIndex);
        index = parentIndex;
      }
    }
  
    heapifyDown() {
      let index = 0;
      const lastIndex = this.heap.length - 1;
      while (true) {
        let smallestChildIndex = 2 * index + 1;
        if (smallestChildIndex > lastIndex) {
          break;
        }
        const rightChildIndex = smallestChildIndex + 1;
        if (
          rightChildIndex <= lastIndex &&
          this.compare(this.heap[rightChildIndex], this.heap[smallestChildIndex]) < 0
        ) {
          smallestChildIndex = rightChildIndex;
        }
        if (this.compare(this.heap[index], this.heap[smallestChildIndex]) <= 0) {
          break;
        }
        this.swap(index, smallestChildIndex);
        index = smallestChildIndex;
      }
    }
  
    swap(i, j) {
      [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]];
    }
  }
  
 
  