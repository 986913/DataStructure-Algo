/**
 * @param {number[][]} coordinates
 * @return {boolean}
 */
var checkStraightLine = function (coordinates) {
  if (coordinates.length === 2) return true;

  const [x1, y1] = coordinates[0];
  const [x2, y2] = coordinates[1];

  for (let i = 2; i < coordinates.length; i++) {
    const [x, y] = coordinates[i];
    // ((x2-x1)/(y2-y1)) = ((x-x2)/(y-y2))
    if ((x2 - x1) * (y - y2) !== (x - x2) * (y2 - y1)) return false;
  }

  return true;
};
