/**
 * @param {number[]} difficulty
 * @param {number[]} profit
 * @param {number[]} worker
 * @return {number}
 */
/****************************** Solution 1: force Brute - Double forloop ****************************************/
var maxProfitAssignment = function (difficulty, profit, worker) {
  let maxProfitSum = 0;

  for (let i = 0; i < worker.length; i++) {
    let curWorker = worker[i];
    let maxProfit = 0;

    for (let j = 0; j < profit.length; j++) {
      if (curWorker >= difficulty[j]) {
        maxProfit = Math.max(maxProfit, profit[j]);
      }
    }

    maxProfitSum += maxProfit;
  }
  return maxProfitSum;
};

/****************************** Solution 2: Two pointer + sort ****************************************/
var maxProfitAssignment = function (difficulties, profits, workers) {
  //创建一个jobs数组， 每一项是{difficulty:xxx, profit:xxx}
  const jobs = [];
  for (let i = 0; i < difficulties.length; i++) {
    jobs[i] = { difficulty: difficulties[i], profit: profits[i] };
  }

  jobs.sort((a, b) => a.difficulty - b.difficulty); // sort the jobs by their difficulties
  workers.sort((a, b) => a - b); // sort the workers by their abilities

  let jobIdx = 0; // pointer for the jobs array
  let workerIdx = 0; // pointer for the workers array

  let maxProfitSum = 0;
  let bestIdx = 0;

  // loop through worker
  while (workerIdx < workers.length) {
    const workerAbility = workers[workerIdx];

    // loop jobs with condition to get bestIdx
    while (
      jobIdx < difficulties.length &&
      jobs[jobIdx].difficulty <= workerAbility
    ) {
      if (jobs[jobIdx].profit > jobs[bestIdx].profit) {
        bestIdx = jobIdx;
      }
      jobIdx++;
    }

    // once had bestIdx, then calculate maxProfitSum
    if (jobs[bestIdx].difficulty <= workerAbility) {
      maxProfitSum += jobs[bestIdx].profit;
    }

    workerIdx++;
  }

  return maxProfitSum;
};
