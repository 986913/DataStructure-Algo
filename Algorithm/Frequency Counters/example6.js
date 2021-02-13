/*
implement a function called areThereDuplcates which accepts a variable number of arguements,
and checks whether there are any duplicates among the arguments passed in.

you can slove this using the frequency counter pattern OR the multiple pointer pattern

eg:  
areThereDuplcates(1,2,3)                false
areThereDuplcates(1,2,2)                true
areThereDuplcates('a', 'b', 'c', 'a')   true
 */

/* requency counter pattern solution: */
const areThereDuplcates = (...args) => {
  let lookUp = {};
  for (let item of args) {
    if (lookUp[item]) return true;
    else lookUp[item] = 1;
  }
  return false;
};

/* multiple pointer pattern solution: */
const areThereDuplcatesV2 = (...args) => {
  args.sort((a, b) => a - b);

  let start = 0;
  let next = 1;
  while (next < args.length) {
    if (args[next] === args[start]) return true;
    start++;
    next++;
  }
  return false;
};

/*one linear solution: */
const areThereDuplicatesV3 = (...args) => {
  return new Set(args).size !== args.length;
};

console.log(areThereDuplicatesV3("a", "b", "c", "a"));
