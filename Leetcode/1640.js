/**
 * @param {number[]} arr
 * @param {number[][]} pieces
 * @return {boolean}
 */

/*
思路： 因为arr中的整数互不相同，pieces中的整数也互不相同。所以我们只需要遍历arr数组，并找到pieces中的数组第一个值与之相同，就能找到pieces中的那个需要遍历的数组，并且将该数组在pieces中删除。
最后遍历完arr数组，判断如果pieces数组为空，那么两者数字相同
 */
var canFormArray = function(arr, pieces) {
    
};
