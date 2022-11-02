var repeatedSubstringPattern = function (s) {
  const repeated = s.repeat(2); // repeat s
  const newstr = repeated.slice(1, -1); //  去除掉首尾char
  return newstr.includes(s);
};
