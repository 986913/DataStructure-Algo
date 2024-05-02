/**
 * @param {string} moves
 * @return {boolean}
 */
var judgeCircle = function (moves) {
  let x = 0;
  let y = 0;

  moves.split('').forEach((m) => {
    switch (m) {
      case 'U':
        y += 1;
        break;
      case 'R':
        x += 1;
        break;
      case 'D':
        y -= 1;
        break;
      case 'L':
        x -= 1;
        break;
    }
  });

  return x === 0 && y === 0;
};
