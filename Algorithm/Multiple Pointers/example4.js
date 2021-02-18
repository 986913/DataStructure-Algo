/*
write a function called isSubsequence which takes in two string and checks whether the characters in the first string from a subsequence of the characters in the second string.
in other words, the function should check whether the characters in the first string appear somewhere in the second string. without their order changing.

eg:
isSubsequence('hello','hello world');        //true
isSubsequence('sing','sting');               //true
isSubsequence('abc','abracadabra');          //true
isSubsequence('abc','acb');                  //false  (order matters)

 */

const isSubsequence = (str1, str2) => {
  let pointer1 = 0;
  let pointer2 = 0;

  while (pointer1 < str1.length) {
    if (pointer2 >= str2.length) return false;
    if (str1.charAt(pointer1) === str2.charAt(pointer2)) {
      pointer1++;
      pointer2++;
    } else {
      pointer2++;
    }
  }
  return true;
};

console.log(isSubsequence("abc", "abracadabra"));
