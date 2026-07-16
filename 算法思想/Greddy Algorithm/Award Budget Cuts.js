/**
  You're given an array of grant amounts and a reduced total budget. 
  Find a cap such that every grant larger than the cap is reduced to the cap, while smaller grants remain unchanged. 
  The total after capping must equal the new budget, and the cap should affect as few recipients as possible.

  input:  grantsArray = [2, 100, 50, 120, 1000], newBudget = 190
  output: 47 # and given this cap the new grants array would be
            # [2, 47, 47, 47, 47]. Notice that the sum of the
            # new grants is indeed 190
 */

/************************************** Greedy Solution ******************************************/
function findGrantsCap(grantsArray, newBudget) {
  // step 1: sort first -> [2,50,100,120,1000]
  grantsArray.sort((a, b) => a - b);

  // step 2: greedy
  let remain = newBudget;
  let cap;
  for (let i = 0; i < grantsArray.length; i++) {
    let cur = grantsArray[i];

    cap = remain / (grantsArray.length - i); // 38
    if (cap <= cur) return cap; // 47

    remain -= cur; // 188
  }

  return cap;
}
