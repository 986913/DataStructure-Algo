/**
 * @param {number[][]} points
 * @param {number} k
 * @return {number[][]}
 */
import { MaxHeap } from '../DataStructure/Tree/Heap/Heap';
const calcDistance = (point) => {
  //走题目给的公式
  return Math.sqrt(Math.pow(point[0], 2) + Math.pow(point[1], 2));
};
var kClosest = function (points, k) {
  //1. loop through the points array. calcutate the distace to 0 for each points. build arr: [ { key:[1,3], priority: distance }]
  let arr = points.map((point) => {
    const distance = calcDistance(point);
    return {
      key: point,
      priority: distance,
    };
  });

  //2.  then build k size Max heap
  const maxheap = new MaxHeap(k);
  maxheap.build(arr);

  //3. then log out result;
  return maxheap.get().map((item) => item.key);
};
