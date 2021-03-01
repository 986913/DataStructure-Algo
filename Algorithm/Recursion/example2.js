const sumRange = n => {
  if(n===1) return 1;
  return n+sumRange(n-1);
}


sumRange(3);   // 6
sumRange(4);   // 10