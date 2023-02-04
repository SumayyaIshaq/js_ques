function longestCommon(x, y) {
  const arr = [x, y].concat().sort()
  const a1 = arr[0];
  const a2 = arr[arr.length - 1];
  const len = a1.length;
  
  let i = 0;
  while (i<len && a1.charAt(i) === a2.charAt(i)) {
    i++;
  }
  
  return a1.substring(0, i);
}
