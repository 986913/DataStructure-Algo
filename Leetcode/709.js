var toLowerCase = function (str) {
  let result = '';

  for (let char of str) {
    let code = char.charCodeAt();
    //如果是大写字母的话: A-Z
    if (code >= 65 && code <= 90) {
      result += String.fromCodePoint(+code + 32);
    } else {
      //如果是小写字母：
      result += char;
    }
  }

  return result;
};
