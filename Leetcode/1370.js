/**
 * @param {string} s
 * @return {string}
 */

 var sortString = function(s) {
  let arr = [];
  for(let i = 0; i < s.length; i++) {
      let findIndex = arr.findIndex(item=>{return item.key == s[i]});
      if(findIndex !== -1) {
          arr[findIndex].value++;
      } else {
          arr.push({key: s[i], value: 1})
      }
  }
  let len = arr.length, res = [], count = 0;
  while(len > 0) {
      if(count%2===0) {
          arr.sort((a,b)=>{return a['key'].localeCompare(b['key'])})
      } else {
          arr.sort((a,b)=>{return b['key'].localeCompare(a['key'])})
      }
      for(let i = 0; i < len; i++) {
          if(arr[i].value !== 0) {
              res.push(arr[i].key);
              arr[i].value--;
          }
      }
      arr.forEach((item, index)=>{
          if(item.value===0) {
              arr.splice(index, 1)
          }
      });
      len = arr.length;
      count++;
  }
  return res.join('')

————————————————
版权声明：本文为CSDN博主「M_Eve」的原创文章，遵循CC 4.0 BY-SA版权协议，转载请附上原文出处链接及本声明。
原文链接：https://blog.csdn.net/M_Eve/article/details/110139955