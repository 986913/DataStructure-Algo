/**
 * @param {string} path
 * @return {string}
 */

/* 堆栈就适合解决这类问题。
  我们首先把字符串用”/”分割成字符串数组。
    ””和”.”都没有啥意义，我们就什么都不做。
    有内容(string)就压栈，
    遇到”..”就弹栈，
    如果最后栈为空，就输出”/”。
    如果不为空就把栈里面的内容依次输出即 
*/

var simplifyPath = function (path) {
  let arr = path.split("/");
  let stack = [];

  for (let i = 0; i < arr.length; i++) {
    /* 4 case:  null .  ..  string */
    if (arr[i] === "" || arr[i] === ".") {
      continue;
    } else if (arr[i] === "..") {
      stack.pop();
    } else {
      // arr[i] is a string:
      stack.push(`/${arr[i]}`);
    }
  }

  if (stack.length === 0) return "/";
  else return `${stack.join("")}`;
};
