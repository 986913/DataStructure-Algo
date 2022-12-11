// isPalindrome('awesome') // false
// isPalindrome('foobar') // false
// isPalindrome('tacocat') // true
// isPalindrome('amanaplanacanalpanama') // true
// isPalindrome('amanaplanacanalpandemonium') // false

function isPalindrome(str) {
  if (str.length <= 1) return true;

  if (str[0] === str[str.length - 1])
    return isPalindrome(str.slice(1, str.length - 1));
  else return false;
}

//  --------------------------- 2 pointer -------------------------------------
const isPalindrome = (s, left, right) => {
  while (left < right) {
    if (s[left] !== s[right]) {
      return false;
    }
    left++;
    right--;
  }

  return true;
};
