/**
 * @param {number[]} nums
 * @return {number[]}
 */

// easy understand solution:
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


// 2 pointer solution
const swap = (arr, i, j) => {
  let tmp = arr[i];
  arr[i]=arr[j];
  arr[j]=tmp;
}

var sortArrayByParityII = function(nums) {
  let i = 0;
  let j = 1;
  let len = nums.length;
  
  while(i<len && j<len){
      while(i<len && nums[i]%2===0) i+=2;
      while(j<len && nums[j]%2===1) j+=2;
      if(i<len && j<len) swap(nums,i,j)
  }
  
  return nums;
};
console.log(sortArrayByParityII([3,1,4,2]))  //[2,1,4,3]