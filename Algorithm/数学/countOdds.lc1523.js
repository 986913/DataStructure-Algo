/******** Solution 1 : Bitwise NOT(~) || Right shift (>>) ********/
let countOdds = (low, high) => (high - (low & ~1) + 1) >> 1;

/************************** Solution 2  **************************/
const countOdds = (low, high) => {
  if (low % 2 === 1) {
    low--;
  }
  if (high % 2 === 1) {
    high++;
  }
  return (high - low) / 2;
};

/************************** Solution 3  **************************/
const countOdds = (low, high) =>
  Math.floor((high - low) / 2) + (high % 2 || low % 2);
