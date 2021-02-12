/**
 *
 * write a function called sameFrequency. Given two positive interger
 * find out if the two numbers have the same frequency of digits.
 *
 * required Time complexities: O(N)
 *
 * eg:
 * sameFrequency(182,281)             true
 * sameFrequency(34,14)               false
 * sameFrequency(3589578, 5879385)    true
 * sameFrequency(22,222)              false
 */

const sameFrequency = (n1, n2) => {
  const str1 = n1.toString();
  const str2 = n2.toString();

  if (str1.length !== str2.length) return false;

  const lookUp = {};

  for (let val of str1) {
    lookUp[val] = (lookUp[val] || 0) + 1;
  }

  for (let val of str2) {
    if (!lookUp[val]) return false;
    else lookUp[val] -= 1;
  }

  return true;
};

console.log(sameFrequency(182, 281));
