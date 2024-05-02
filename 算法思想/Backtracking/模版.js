/****************** Combination/Subset (输入元素无重不可复选) - Backtracking抽象模版(类似于 多叉树遍历框架） *******************/
const wrapper = (nums) => {
  const result = [];

  const traversal = (arr, curPath, startIdx) => {
    if (终止条件) {
      result.push([...curPath]);
      return;
    }

    //组合/子集类问题都是从startIdx开始
    for (let i = startIdx; i < arr.length; i++) {
      curPath.push(arr[i]);
      traversal(arr, curPath, i + 1);
      curPath.pop();
    }
  };

  traversal(nums, [], 0);
  return result;
};

/*************************** Permute (输入元素无重不可复选) - Backtracking抽象模版(类似于 多叉树遍历框架）**********************/
const wrapper = (nums) => {
  const result = [];
  let used = [];

  const traversal = (arr, curPath, used) => {
    if (终止条件) {
      result.push([...curPath]);
      return;
    }

    //排序permute类问题都是从0开始
    for (let i = 0; i < arr.length; i++) {
      if (used[i] === true) continue; //剪枝逻辑

      curPath.push(arr[i]);
      used[i] = true;
      traversal(arr, curPath, used);
      curPath.pop();
      used[i] = false;
    }
  };

  traversal(nums, [], used);
  return result;
};

/****************** Combination/Subset (输入元素可重不可复选) - Backtracking抽象模版(类似于 多叉树遍历框架） *******************/
const wrapper = (nums) => {
  nums.sort((a, b) => a - b); // 先排序！
  const result = [];

  const traversal = (arr, curPath, startIdx) => {
    if (终止条件) {
      result.push([...curPath]);
      return;
    }

    let set = new Set(); // <-- diff is here
    //组合/子集类问题都是从startIdx开始
    for (let i = startIdx; i < arr.length; i++) {
      if (set.has(arr[i])) continue; // <-- diff is here

      curPath.push(arr[i]);
      set.add(arr[i]); // <-- diff is here
      traversal(arr, curPath, i + 1);
      curPath.pop();
    }
  };

  traversal(nums, [], 0);
  return result;
};

/*************************** Permute (输入元素可重不可复选) - Backtracking抽象模版(类似于 多叉树遍历框架）**********************/
const wrapper = (nums) => {
  nums.sort((a, b) => a - b); // 先排序！
  const result = [];
  let used = [];

  const traversal = (arr, curPath) => {
    if (终止条件) {
      result.push([...curPath]);
      return;
    }

    let set = new Set(); // <-- diff is here
    //排序permute类问题都是从0开始
    for (let i = 0; i < arr.length; i++) {
      if (used[i] === true) continue; //剪枝逻辑
      if (set.has(arr[i])) continue; // <-- diff is here：树层去重

      set.add(arr[i]); // <-- diff is here
      curPath.push(arr[i]);
      used[i] = true;
      traversal(arr, curPath, used);
      curPath.pop();
      used[i] = false;
    }
  };

  traversal(nums, [], used);
  return result;
};

/****************** Combination/Subset (输入元素无重可复选) - Backtracking抽象模版(类似于 多叉树遍历框架） *******************/
const wrapper = (nums) => {
  const result = [];

  const traversal = (arr, curPath, startIdx) => {
    if (终止条件) {
      result.push([...curPath]);
      return;
    }

    //组合/子集类问题都是从startIdx开始
    for (let i = startIdx; i < arr.length; i++) {
      curPath.push(arr[i]);
      traversal(arr, curPath, i); // diff is here <--- 参数是i，不再是i+1了！
      curPath.pop();
    }
  };

  traversal(nums, [], 0);
  return result;
};

/*************************** Permute (输入元素无重可复选) - Backtracking抽象模版(类似于 多叉树遍历框架）**********************/
const wrapper = (nums) => {
  const result = [];

  const traversal = (arr, curPath) => {
    if (终止条件) {
      result.push([...curPath]);
      return;
    }

    //排序permute类问题都是从0开始, 这个情况不需要used数组了
    for (let i = 0; i < arr.length; i++) {
      curPath.push(arr[i]);
      traversal(arr, curPath);
      curPath.pop();
    }
  };

  traversal(nums, []);
  return result;
};
