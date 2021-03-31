/**
 * @param {number[]} nums
 * @return {number[]}
 */

var sortArrayByParityII = function (nums) {
  let result = [];

  const oddArr = nums.filter((n) => n % 2 !== 0);
  const evenArr = nums.filter((n) => n % 2 === 0);

  for (let i = 0; i < nums.length; i++) {
    if (i % 2 === 0) {
      result.push(evenArr.pop());
    } else {
      result.push(oddArr.pop());
    }
  }

  return result;
};


console.log(sortArrayByParityII([3,1,4,2]))  //[2,1,4,3]