// Remember to treat Heap when i == 0
// When i == 0, leftChild will be 0 as (2 * i) == 0
function maxHeapify(heap, i) {
  l = i == 0 ? 1 : i * 2; // Left Child
  r = i == 0 ? 2 : i * 2 + 1; // Right Child
  m = i; // Bigger Node

  if (l < heap.length && heap[m] < heap[l]) {
    m = l;
  }
  if (r < heap.length && heap[m] < heap[r]) {
    m = r;
  }

  if (m != i) {
    // Swap Bigger Node with Root
    [heap[i], heap[m]] = [heap[m], heap[i]];
    maxHeapify(heap, m);
  }
}

// Apply MaxHeapify from leaves to root
function heapify(arr) {
  for (let i = Math.floor(arr.length / 2); i > 0; --i) {
    maxHeapify(arr, Math.floor(i / 2));
  }
}

function heapsort(heap) {
  let result = [];

  while (heap.length > 0) {
    // Swap Biggest Node with the last
    [heap[0], heap[heap.length - 1]] = [heap[heap.length - 1], heap[0]];

    // Remove biggest node from heap and add to result
    result.push(heap.pop());

    // Heapify it again
    heapify(heap);
  }

  return result;
}

a = [22, 54, 12, 1, 98, 41, 58, 45, 3, 5, 4, 7, 841];
console.log("Original Array");
console.log(a);
console.log("\n");

console.log("Heap");
heapify(a);
console.log(a);
console.log("\n");

console.log("Ordered Array");
console.log(heapsort(a));
