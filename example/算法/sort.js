// function quickSort(arr, left, right) {
//   left = typeof left !== 'number' ? 0 : left;
//   right = typeof right !== 'number' ? arr.length - 1 : right;
//   if (left > right) {
//     return arr;
//   }
//   let temp = arr[left],
//     i = left,
//     j = right;
//   while (i != j) {
//     while (arr[j] >= temp && j > i) {
//       j--;
//     }
//     while (arr[i] <= temp && j > i) {
//       i++;
//     }
//     if (j > i) {
//       [arr[i], arr[j]] = [arr[j], arr[i]];
//     }
//   }
//   [arr[left], arr[i]] = [arr[i], temp];
//   quickSort(arr, left, i - 1);
//   quickSort(arr, i + 1, right);
//   return arr;
// }

function quickSort(arr, left, right) {
  let len = arr.length;
  left = typeof left !== 'number' ? 0 : left;
  right = typeof right !== 'number' ? len - 1 : right;
  if (left > right) {
    return arr;
  }
  let i = left,
    j = right,
    temp = arr[left];
  while (i !== j) {
    while (arr[j] >= temp && j > i) {
      j--;
    }
    while (arr[i] <= temp && j > i) {
      i++;
    }
    if (j > i) {
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
  }
  [arr[i], arr[left]] = [temp, arr[i]];
  quickSort(arr, left, i - 1);
  quickSort(arr, i + 1, right);
}

function insertSort(arr) {
  const len = arr.length;
  let preIndex;
  for (let i = 1; i < len; i++) {
    preIndex = i - 1;
    const current = arr[i];
    while (preIndex >= 0 && arr[preIndex] > current) {
      arr[preIndex + 1] = arr[preIndex];
      preIndex--;
    }
    arr[preIndex + 1] = current;
  }
  return arr;
}
