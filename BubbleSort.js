export default class BubbleSort {
  sort(arr){
    // Goes over array again and again until all elements smaller than elements to their right 
    let originalArr = [...arr];
    let swapped = false; 
    for (let i = 0; i < arr.length; i ++) {
      swapped = false
      if (arr[i] > arr[i + 1]) {
        swapped = false; 
        let temp = arr[i];
        arr[i + 1] = temp;
        arr[i] = arr[i + 1]
      } else {
        swapped = true;
      }
    }
  }
}