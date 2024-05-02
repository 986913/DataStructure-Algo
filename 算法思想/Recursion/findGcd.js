/**
 * Implement a function that takes two numbers, testVariable1 and testVariable2 and returns their greatest common divisor.
 */

function gcd(testVariable1, testVariable2) {
  if (testVariable1 === testVariable2) return testVariable1; // 终止条件

  // 单层递归逻辑
  if (testVariable1 > testVariable2) {
    return gcd(testVariable1 - testVariable2, testVariable2);
  } else {
    return gcd(testVariable2 - testVariable1, testVariable1);
  }
}

/**
 * gcd(56, 42)	-->  14
 * gcd(6, 9)	  -->  3
 * gcd(14, 30)	-->  2
 **/
