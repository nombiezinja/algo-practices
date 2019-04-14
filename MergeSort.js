export default class MergeSort {

  sort(arr){
    if (arr.length <= 1) {
      return arr;
    }

    let midPoint = Math.floor(arr.length / 2);
    let left = arr.slice(0, midPoint);
    let right = arr.slice(midPoint);

    return this.merge(this.sort(left), this.sort(right));
  }
  
  merge(a, b) {
    let c = [];
    while (a.length && b.length) {
      if (a[0] < b[0]) {
        c.push(a.shift(a[0]));
      } else {
        c.push(b.shift(b[0]));
      }
    }
    return [...c, ...a, ...b];
  }
}




























const mergeSort = (arr) => {
  if (arr.length <= 1) {
    return arr;
  }

  let midPoint = Math.floor(arr.length / 2)
  let left = arr.slice(0, midPoint);
  let right = arr.slice(midPoint);

  return merge(mergeSort(left), mergeSort(right));
}

const merge = (arrA, arrB) => {
  let arrC = [];
  while (arrA.length && arrB.length) {
    if (arrA[0] < arrB[0]) {
      arrC.push(arrA.shift(arrA[0]));
    } else {
      arrC.push(arrB.shift(arrB[0]));
    }
  }
  return [...arrC, ...arrA, ...arrB];
}

console.log(mergeSort([3, 5, 1, 2, 9, 10]))