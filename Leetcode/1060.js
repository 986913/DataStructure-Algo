var missingElement = function (nums, k) {
  let target = nums[0];
  let point = 0;
  let missingarr = [];

  while (point < nums.length) {
    if (nums[point] !== target) {
      missingarr.push(target);
      target++;
    } else {
      point++;
      target++;
    }
  }
  if (k > missingarr.length) {
    let lastno = Math.max(
      missingarr[missingarr.length - 1] || 0,
      nums[nums.length - 1]
    );
    let extendtimes = k - missingarr.length;
    while (extendtimes > 0) {
      lastno++;
      extendtimes--;
    }
    return lastno;
  } else {
    return missingarr[k - 1];
  }
};
