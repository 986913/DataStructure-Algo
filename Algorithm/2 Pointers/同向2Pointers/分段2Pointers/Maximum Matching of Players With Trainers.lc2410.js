/**
 * @param {number[]} players
 * @param {number[]} trainers
 * @return {number}
 */

/************************** 👍👍👍 2 pointer 分段双指针 + Sort ************************************/
var matchPlayersAndTrainers = function (players, trainers) {
  players.sort((a, b) => a - b);
  trainers.sort((a, b) => a - b);

  let matched = 0;
  let i = 0; // i is for players
  let j = 0; // j is for trainers
  while (i < players.length && j < trainers.length) {
    if (players[i] > trainers[j]) {
      j++;
    } else {
      // players[i] <= trainers[j]
      i++;
      j++; // 别忘了，j++， 因为题目要求the jth trainer can be matched with at most one player.
      matched += 1;
    }
  }

  return matched;
};
