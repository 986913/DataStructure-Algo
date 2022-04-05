/* force -brute:
   //注意：牵扯到数组里面 “循环”和“删除元素”时候， 最好倒着循环！！！
*/
var moveZeroes = function(nums) {
  for(let i=nums.length; i>=0; i--){
      if(nums[i]===0){
          nums.push(0);
          nums.splice(i,1);
      }
  }
};