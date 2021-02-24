/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */


//暴力法 :
var intersection = function(nums1, nums2) {
  let result = [];
  for(let i=0; i<nums1.length; i++){
    for(let j=0;  j<nums2.length; j++){
      if(nums1[i]===nums2[j] && result.indexOf(nums2[j])==-1 ){
        result.push(nums2[j])
      }
    }
  }
  return result;
};