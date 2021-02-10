/*
  Anagrams:
  
  given 2 strings, write a function to determine if the second string is an anagram of the first.
  an anagram is a word, phrase or name formed by rearranding the letters of anothers,
  such as cinema, formed from iceman.

  eg:
  validaAnagram('', '')                             true
  validaAnagram('aaz', 'zza')                       false
  validaAnagram('anagram', 'nagaram')               true
  validaAnagram('awesome', 'awesom')                false
  validaAnagram('qwerty', 'qeywrt')                 true
  validaAnagram('texttwisttime', 'timetwisttext')   true
  validaAnagram('rat', 'car')                       true
 */



const validaAnagram = (str1, str2) => {
  if (str1.length !== str2.length) return false;
  if (!str1.length && !str1.length) return true;

  let charCounterObj1 = {};
  let charCounterObj2 = {};

  for (let char of str1) {
    charCounterObj1[char] = (charCounterObj1[char] || 0) + 1;
  }
  for (let char of str2) {
    charCounterObj2[char] = (charCounterObj2[char] || 0) + 1;
  }

  for (let key in charCounterObj1) {
    if (!(key in charCounterObj2)) return false;
    if (charCounterObj1[key] !== charCounterObj2[key]) return false;
  }

  return true;
};

console.log(validaAnagram("texttwisttime", "timetwisttext"));
