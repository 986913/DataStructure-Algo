/**
 * Counts how many apples and oranges fall on Sam's house.
 *
 * Sam's house is located between points `s` and `t` (inclusive) on a number line.
 * An apple tree is located at point `a`, and an orange tree is located at point `b`.
 * The `apples` and `oranges` arrays contain distances each fruit falls from their tree.
 * Positive distance means falling to the right, negative to the left.
 *
 * @param {number} s - Starting point of Sam's house.
 * @param {number} t - Ending point of Sam's house.
 * @param {number} a - Location of the apple tree.
 * @param {number} b - Location of the orange tree.
 * @param {number[]} apples - Distances each apple falls from the tree.
 * @param {number[]} oranges - Distances each orange falls from the tree.
 *
 * @returns {number[]} - Array with two elements:
 *                       [number of apples on the house, number of oranges on the house].
 *
 * @example
 * const s = 7, t = 11;
 * const a = 5, b = 15;
 * const apples = [-2, 2, 1];
 * const oranges = [5, -6];
 * const result = countApplesAndOranges(s, t, a, b, apples, oranges);
 * // result => [1, 1]
 */

function countApplesAndOranges(s, t, a, b, apples, oranges) {
  let applesPostions = apples.map((aDistance) => aDistance + a);
  let orangesPostions = oranges.map((oDistance) => oDistance + b);

  let fallAppleCounts = 0;
  let fallOrangeCounts = 0;
  applesPostions.forEach((postion) => {
    if (postion >= s && postion <= t) fallAppleCounts++;
  });
  orangesPostions.forEach((postion) => {
    if (postion >= s && postion <= t) fallOrangeCounts++;
  });

  // console.log(fallAppleCounts);
  // console.log(fallOrangeCounts);
  return [fallAppleCounts, fallAppleCounts];
}
