/**
 * @param {number[]} tokens
 * @param {number} power
 * @return {number}
 */
/**************************Solution: Two-pointer ************************************/
var bagOfTokensScore = function (tokens, power) {
  let score = 0;
  let maxScore = 0;

  tokens.sort((a, b) => a - b);
  let left = 0;
  let right = tokens.length - 1;

  while (left <= right) {
    if (power >= tokens[left]) {
      power -= tokens[left];
      score++;
      left++;

      maxScore = Math.max(maxScore, score); // Update maxScore
    } else if (score >= 1) {
      power += tokens[right];
      score--;
      right--;
    } else {
      break;
    }
  }

  return maxScore;
};
