/**
 * @param {number[]} salary
 * @return {number}
 */

var average = function (salary) {
  const sorted = salary.sort((a, b) => a - b);
  sorted.pop();
  sorted.shift();

  const sum = sorted.reduce((acc, cur) => acc + cur);

  return sum / sorted.length;
};

console.log(average([[4000, 3000, 1000, 2000]])); //2500.00000
