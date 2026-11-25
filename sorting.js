// Bubble Sort
function bubbleSort(input) {
  const arr = [...input];
  for (let end = arr.length - 1; end > 0; end--) {
    let swapped = false;
    for (let i = 0; i < end; i++) {
      if (arr[i] > arr[i + 1]) {
        [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
        swapped = true;
      }
    }
    if (!swapped) break;
  }
  return arr;
}

// Insertion Sort
function insertionSort(input) {
  const arr = [...input];
  for (let i = 1; i < arr.length; i++) {
    const current = arr[i];
    let j = i - 1;
    while (j >= 0 && arr[j] > current) {
      arr[j + 1] = arr[j];
      j--;
    }
    arr[j + 1] = current;
  }
  return arr;
}

// Selection Sort
function selectionSort(input) {
  const arr = [...input];
  for (let i = 0; i < arr.length - 1; i++) {
    let minIndex = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[minIndex]) minIndex = j;
    }
    if (minIndex !== i) {
      [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
    }
  }
  return arr;
}

const values = [64, 25, 12, 22, 11];
console.log("Bubble:", bubbleSort(values));
console.log("Insertion:", insertionSort(values));
console.log("Selection:", selectionSort(values));
