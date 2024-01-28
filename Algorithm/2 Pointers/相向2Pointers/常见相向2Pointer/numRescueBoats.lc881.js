/**
 * @param {number[]} people
 * @param {number} limit
 * @return {number}
 */
/**************************Solution1: Two-pointer ************************************/
var numRescueBoats = function (people, limit) {
  let boats = 0;

  //对人群从体重大到小去排序
  people.sort((a, b) => b - a);
  let left = 0;
  let right = people.length - 1;

  while (left <= right) {
    let weightSum = people[left] + people[right];
    // 当最重的人和最轻的人能共享一个船时：
    if (weightSum <= limit) {
      left++;
      right--;
    } else {
      //当最重的人和最轻的人不能共享一个船时：
      left++;
    }
    boats += 1;
  }

  return boats;
};
