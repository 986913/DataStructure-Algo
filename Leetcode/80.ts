/******************************** Solution: Two pointers👍 前提nums是sorted好的----LC26,27变形题 ********************************************/

function removeDuplicates(nums: number[]): number {
  // 初始门槛：长度 <= 2 的数组天然满足“最多重复 2 次”的契约，无需处理
  if (nums.length <= 2) return nums.length;

  /**
   * 【逻辑契约 / 循环不变量 (Loop Invariant)】
   *  区间 [0, slow) 始终是“最多允许重复 2 次”的合法有效数组。
   *    - slow 的数值时刻等于当前有效数组的长度。
   *    - nums[slow - 1] 始终是当前有效数组中的最后一个元素（即最新加入的）
   *    - nums[slow - 2] 始终是当前有效数组中的倒数第二个元素（即次新加入的）
   *
   * 【初始状态】
   * slow = 2, fast = 2
   * 前 2 个元素（nums[0], nums[1]）绝对合法，初始有效区间为 [0, 2)，不变量成立。
   */
  let slow = 2;
  let fast = 2;
  while (fast < nums.length) {
    /**
     * 【安检法则 / 逆向守护契约】
     * 问：把 nums[fast] 放到 slow 位置，怎样才会破环“最多重复 2 次”的契约？
     * 答：如果它和有效区里的“倒数第二个元素 (nums[slow - 2])”相同，就会凑齐 3 个重复项导致违规。
     *
     * 通关条件：nums[fast] !== nums[slow - 2]
     */
    if (nums[fast] !== nums[slow - 2]) {
      nums[slow] = nums[fast]; // 通过安检，放入有效区末尾
      slow++; // 扩容有效区，继续维护不变量,守护契约 [0, slow)
    }
    fast++;
  }

  return slow;
}
