// Insertion Sort
function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let key = arr[i];

    // Running Sorted Region Backwards
    // The array will be shifted and
    // space will be filled with the Key at the correct position
    let j = i - 1;
    while (j >= 0 && arr[j] > key) {
      arr[j + 1] = arr[j];
      j -= 1;
    }

    arr[j + 1] = key;
  }

  return arr;
}

const disorderedArr = [1, 8, 4, 5, 9, 0, 2, 3, 7, 6];

console.log(`Disordered Array: ${disorderedArr}`);
console.log(`Ordered Array: ${insertionSort(disorderedArr)}`);
