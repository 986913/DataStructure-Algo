/**
 * @param {number[][]} people
 * @return {number[][]}
 */
var reconstructQueue = function (people) {
  let queue = [];
  //身高从大到小排 （若身高相同，则k小的拍前面）
  people.sort((a, b) => {
    if (b[0] !== a[0]) return b[0] - a[0];
    else return a[1] - b[1];
  });

  //优先按身高高的people的k来插入
  for (let i = 0; i < people.length; i++) {
    queue.splice(people[i][1], 0, people[i]);
  }
  return queue;
};
