/**
 * Implement a function that takes a number testVariable and returns that row of the Pascal’s triangle.
 *
 * https://www.educative.io/module/lesson/recursion-in-javascript/B6pQ4G2EoNX
 */

function printPascal(testVariable) {
  if (testVariable === 0) return [1]; //终止条件

  //单层递归逻辑
  let line = [1];
  let previousLine = printPascal(testVariable - 1); // Recursive case
  for (let i = 0; i < previousLine.length - 1; i++) {
    line.push(previousLine[i] + previousLine[i + 1]);
  }
  line.push(1);

  return line;
}

/**
 * printPascal(5)  --> 	[1,5,10,10,5,1]
 * printPascal(1)	 -->  [1,1]
 * printPascal(0)  -->  [1]
 * printPascal(2)  -->  [1,2,1]
 */
