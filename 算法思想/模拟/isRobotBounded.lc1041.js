/* ---------------------------- Turtle 变形题 -------------------------------- */

const NORTH = 0;
const EAST = 1;
const SOUTH = 2;
const WEST = 3;
const NUMBER_OF_DIRECTION = 4;

/**
 * @param {string} instructions
 * @return {boolean}
 */
const isRobotBounded = (instructions) => {
  let x = 0;
  let y = 0;
  let direction = NORTH;

  for (let char of instructions) {
    switch (char) {
      case 'G':
        move();
        break;
      case 'L':
        left();
        break;
      case 'R':
        right();
        break;
    }
  }

  // helper function:
  function move() {
    switch (direction) {
      case NORTH:
        y += 1;
        break;
      case EAST:
        x += 1;
        break;
      case SOUTH:
        y -= 1;
        break;
      case WEST:
        x -= 1;
        break;
    }
  }
  // helper function:
  function left() {
    direction = (direction - 1 + NUMBER_OF_DIRECTION) % NUMBER_OF_DIRECTION;
  }
  // helper function:
  function right() {
    direction = (direction + 1 + NUMBER_OF_DIRECTION) % NUMBER_OF_DIRECTION;
  }

  return direction !== NORTH || (x === 0 && y === 0);
};
