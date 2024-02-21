/**
 * @param {number} x
 * @param {number} y
 * @param {number[][]} points
 * @return {number}
 */

const calcDistance = (x, y, point) =>
  Math.abs(x - point[0]) + Math.abs(y - point[1]);
