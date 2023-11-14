/**
 * @param {string[]} ops
 * @return {number}
 */

// number ---> push
// C---> cancel   ---> pop
// D---> double previous item  ---> arr[arr.length-1]*2, then push it
// +---> Plus previous two items  ---> arr[arr.length-1]+arr[arr.length-2], then push it

var calPoints = function (ops) {
  let stack = [];

  ops.forEach((item) => {
    switch (item) {
      case 'C':
        stack.pop();
        break;
      case 'D':
        stack.push(stack[stack.length - 1] * 2);
        break;
      case '+':
        stack.push(stack[stack.length - 1] + stack[stack.length - 2]);
        break;
      default:
        stack.push(parseInt(item));
    }
  });

  return stack.reduce((acc, cur) => acc + cur);
};
