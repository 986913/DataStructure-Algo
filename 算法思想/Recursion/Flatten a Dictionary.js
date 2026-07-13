/**
  A dictionary is a type of data structure that is supported natively in all major interpreted languages such as JavaScript, Python, Ruby and PHP, where it’s known as an Object, Dictionary, Hash and Array, respectively. 
  In simple terms, a dictionary is a collection of unique keys and their values. The values can typically be of any primitive type (i.e an integer, boolean, double, string etc) or other dictionaries (dictionaries can be nested). 
  However, for this exercise assume that values are either an integer, a string or another dictionary.

  Given a dictionary dict, write a function flattenDictionary that returns a flattened version of it .
  If you’re using a compiled language such Java, C++, C#, Swift and Go, you may want to use a Map/Dictionary/Hash Table that maps strings (keys) to a generic type (e.g. Object in Java, AnyObject in Swift etc.) to allow nested dictionaries.
  
  If a certain key is empty, it should be excluded from the output (see e in the example below).
    const dictInput = {
      Key1: '1',
      Key2: {
        a: '2',
        b: '3',
        c: {
          d: '3',
          e: {
            '': '1',
          },
        },
      },
    };
  console.log(flattenDictionary(dictInput));
  {
            "Key1" : "1",
            "Key2.a" : "2",
            "Key2.b" : "3",
            "Key2.c.d" : "3",
            "Key2.c.e" : "1"
  }
 **/

/* -------------------------------- Solution 1 - 遍历型 Recursion -------------------------------- */
function flattenDictionary(dict) {
  let res = {};

  const helper = (obj, curPath) => {
    // reach leaf nodes, then update global res
    if (isPlainObj(obj) === false) {
      const k = curPath.filter(Boolean).join('.');
      res[k] = obj;
      return; // don't forget return here
    }

    // when obj is plain object:
    for (let key in obj) {
      curPath.push(key);
      helper(obj[key], [...curPath]);
      curPath.pop();
    }
  };

  //helper(当前对象, 当前已累积的键名前缀)
  helper(dict, []);
  return res;
}

const isPlainObj = (obj) => {
  if (obj === null || obj === undefined) return false;
  const prototype = Object.getPrototypeOf(obj);
  return prototype === null || prototype === Object.prototype;
};

/* -------------------------------- Solution 2 - 分治型 Recursion -------------------------------- */
//返回 obj 完全平铺后的对象
function flattenDictionary(obj) {
  // reach leaf nodes, return itself directly
  if (isPlainObj(obj) === false) return obj;

  // when obj is plain object:
  let curRes = {};
  for (let key in obj) {
    const subRes = flattenDictionary(obj[key]);
    if (isPlainObj(subRes) === false) {
      curRes[key] = subRes;
    } else {
      for (let subKey in subRes) {
        const newkey = [key, subKey].filter(Boolean).join('.');
        curRes[newkey] = subRes[subKey];
      }
    }
  }
  return curRes;
}

const isPlainObj = (obj) => {
  if (obj === null || obj === undefined) return false;
  const prototype = Object.getPrototypeOf(obj);
  return prototype === null || prototype === Object.prototype;
};
