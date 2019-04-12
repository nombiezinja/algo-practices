export default class InsertionSort {
  sort(arr){
    const origArr = [...arr];
    for (let i = 1; i < arr.length; i++) {
      for (let j = i ; j > 0; j--) {
        if ( arr[j] < arr[j - 1]){
          [arr[j], arr[j - 1]] = [arr[j - 1], arr[j]];
        }
      }
    }
    console.log(arr)
    return arr
  } 
}

