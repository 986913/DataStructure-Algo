/**
 * @param {number[][]} points
 * @return {number}
 */
var findMinArrowShots = function (points) {
  //按照气球的起始位置排序
  points.sort((a, b) => a[0] - b[0]);

  let result = 1; // points 不为空至少需要一支箭
  for (let i = 1; i < points.length; i++) {
    if (points[i][0] > points[i - 1][1]) {
      // 气球i和气球i-1不挨着，注意这里不是>=
      result++; // 需要一支箭
    } else {
      // 气球i和气球i-1挨着
      points[i][1] = Math.min(points[i - 1][1], points[i][1]); // 更新重叠气球最小右边界
    }
  }

  return result;
};
