/* Goal:
  get average of top 5 scores of each student & arrange in order of each id

eg: 
  Input: [[1,91],[1,92],[2,93],[2,97],[1,60],[2,77],[1,65],[1,87],[1,100],[2,100],[2,76]]
  Output: [[1,87],[2,88]]
  Explanation: 
    The average of the student with id = 1 is 87.
    The average of the student with id = 2 is 88.6. But with integer division their average converts to 88.
*/

const highFive = (data) => {
  /* create a hash table, id as key, all scores as values eg: 
    hash = {
        1: [91,92,60,65,87,100]
        2: [93,97,77,76,100]
    } */
  let hash = {};

  for (let i = 0; i < data.length; i++) {
    if (!hash[data[i][0]]) hash[data[i][0]] = [data[i][1]];
    else hash[data[i][0]].push(data[i][1]);
  }

  // get each student's most top5 scores then average scores: update hash table
  for (let key in hash) {
    if (hash[key].length > 5) {
      hash[key] = hash[key].sort((a, b) => b - a).slice(0, 5);
    }
    hash[key] = Math.floor(hash[key].reduce((acc, cur) => acc + cur) / 5);
  }

  // return Object.entries directly
  return Object.entries(hash);
};

const data = [
  [1, 91],
  [1, 92],
  [2, 93],
  [2, 97],
  [1, 60],
  [2, 77],
  [1, 65],
  [1, 87],
  [1, 100],
  [2, 100],
  [2, 76]
];
console.log(highFive(data)); //[[1,87],[2,88]]
