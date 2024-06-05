/**
 * @param {number} target
 * @param {number[]} position
 * @param {number[]} speed
 * @return {number}
 */

/**************************************************************
  1. 先创建车的map, { position: speed }
  2. 根据position从大到小排序map, 生成新的sortedMap
  3. 根据distance/speed=time算时间 (遍历sortedMap)
  4. 开始计算车队数量
******************************************************************/
var carFleet = function (target, position, speed) {
  let len = position.length;

  let map = new Map(); // key: position, value: speed
  for (let i = 0; i < len; i++) {
    map.set(position[i], speed[i]);
  }

  //按照position从大到小sort:
  const sortedMap = new Map([...map.entries()].sort((a, b) => b[0] - a[0]));

  let times = []; //每辆车到达终点的时间
  sortedMap.forEach((val, key) => {
    times.push((target - key) / val);
  });

  /*开始计算车队数量：
      使用cur变量记录当前车队的最大时间（最慢的时间）。
      如果新的车的时间>cur，则说明这个车不能追上前面的车，形成新的车队，fleetNumbers 增加1。
  */
  let cur = 0;
  let fleetNumbers = 0;
  for (let i = 0; i < len; i++) {
    if (times[i] > cur) {
      cur = times[i];
      fleetNumbers++;
    }
  }

  return fleetNumbers;
};
