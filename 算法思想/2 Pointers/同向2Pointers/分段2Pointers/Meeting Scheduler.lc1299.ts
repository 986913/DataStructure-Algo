/***************************** 分段双指针 *********************************/
function minAvailableDuration(
  slots1: number[][],
  slots2: number[][],
  duration: number,
): number[] {
  let p1 = 0;
  let p2 = 0;

  // 💡 按照开始时间升序排序
  slots1.sort((a, b) => a[0] - b[0]);
  slots2.sort((a, b) => a[0] - b[0]);

  while (p1 < slots1.length && p2 < slots2.length) {
    const cur1 = slots1[p1];
    const cur2 = slots2[p2];

    const [start, end] = [
      Math.max(cur1[0], cur2[0]),
      Math.min(cur1[1], cur2[1]),
    ];

    if (start + duration <= end) {
      // Both have time
      return [start, start + duration];
    }

    if (cur1[1] < cur2[1]) {
      p1++;
    } else if (cur1[1] > cur2[1]) {
      p2++;
    } else {
      p1++;
      p2++;
    }
  }

  return [];
}
