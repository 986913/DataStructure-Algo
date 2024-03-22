/********************* Merge sort变形题：https://bigfrontend.dev/problem/merge-sorted-arrays ******************/
function merge2Arrays(arr1, arr2) {
  let p1 = 0;
  let p2 = 0;

  let res = [];

  while (p1 < arr1.length && p2 < arr2.length) {
    if (arr1[p1] < arr2[p2]) {
      res.push(arr1[p1]);
      p1++;
    } else {
      res.push(arr2[p2]);
      p2++;
    }
  }

  while (p1 < arr1.length) {
    res.push(arr1[p1]);
    p1++;
  }
  while (p2 < arr2.length) {
    res.push(arr2[p2]);
    p2++;
  }

  return res;
}
function merge(arrList) {
  if (arrList.length === 0) return [];
  if (arrList.length === 1) return arrList[0];
  if (arrList.length === 2) return merge2Arrays(arrList[0], arrList[1]);

  let mid = Math.floor(arrList.length / 2);
  let left = merge(arrList.slice(0, mid));
  let right = merge(arrList.slice(mid));

  return merge2Arrays(left, right);
}
