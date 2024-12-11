/**
 * @param {number[]} nums
 * @return {number[]}
 */

/******************************** Counting Sort  ********************************************
  O(n+max−min) -其中n是待排序数组长度, max−min是待排序数组的元素范围
*/

/******************************** Shell     Sorting  O(n)  ********************************/

/******************************** Insertion Sorting  O(n²) ********************************/

/******************************** Bubble    Sorting  O(n²) ********************************/

/******************************** Selection Sorting  O(n²) ********************************/
const sortArray = (nums) => {
  for (let i = 0; i < nums.length; i++) {
    let sortedIdx = i;
    let smallestNumberIdx = i; //注意：初始化为i

    for (let j = i + 1; j < nums.length; j++) {
      if (nums[j] < nums[smallestNumberIdx]) {
        smallestNumberIdx = j;
      }
    }
    // swap 当前index(已排序部分最后一个元素) 和 smallestNumberIdx(未排序部分中最小元素的index)
    [nums[sortedIdx], nums[smallestNumberIdx]] = [
      nums[smallestNumberIdx],
      nums[sortedIdx],
    ];
  }

  return nums;
};
