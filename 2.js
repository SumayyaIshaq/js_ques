function findSum(arr, input) {
  let result = [];
  
  for(let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (arr[i] + arr[j] === input) {
        result = [arr[i], arr[j]]
      }
    }
  }
  
  return result;
}
