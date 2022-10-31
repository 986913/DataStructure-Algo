var strStr = function (haystack, needle) {
  if (needle === '') return 0;
  if (haystack.length < needle.length) return -1;

  let windowStartIdx = 0;
  let chars = '';
  const windowSize = needle.length;

  for (let windowEndIdx = 0; windowEndIdx < haystack.length; windowEndIdx++) {
    chars += haystack[windowEndIdx];

    if (chars.length >= windowSize) {
      if (chars === needle) return windowStartIdx;

      chars = chars.substring(1);
      windowStartIdx += 1;
    }
  }

  return -1;
};
