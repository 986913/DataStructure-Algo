/******************************参照LC 209题************************************* */
/******************************参照LC  76题************************************* */
/******************************参照LC 567题************************************* */
/******************************参照LC 438题************************************* */
/******************************参照LC   3题************************************* */

/*
  const slidingWindow = (target, nums) => {
    let left = 0;
    let right = 0;

    while (right < nums.length) {
      //增大窗口
      window.add(nums[right]);
      right++;

      while(window needs shrink){
        //缩小窗口
        window.remove(nums[left]);
        left++
      }
    }

  };
*/


const slidingWindow = (strA, strB) => {

  遍历strB, 去创造frequency map  // map key为字符, value为出现的次数

  let left = 0;
  let right = 0;
  let valid = 0;


  while (right < strA.length) {

    /* 增大窗口： c是将移入窗口的字符 */
    let c = strA[right];
    //右移窗口
    right++;
    //进行窗口内数据的一系列更新
    ...

    /*** debug 输出的位置 ***/
    console.log(left, right);

    /* 缩小窗口：判断左侧窗口是否要收缩 */
    while(window needs shrink){
      //d是将移出窗口的字符
      let d = strA[left];
      //左移窗口
      left++
      //进行窗口内数据的一系列更新
      ...
    }
    
  }

};
