export default class BubbleSort {
  sort(arr) {
    let swapped;
    for (let i = 0; i < arr.length; i ++) {
      for (let j = 0; j < arr.length - i; j ++) {
        if (arr[j] > arr[j + 1]){
          swapped = false;
          let temp = arr[j];
          arr[j] = arr[j + 1];
          arr [j + 1] = temp;
        } else {
          swapped = true;
        }
      }
    }
    return arr
  }
}