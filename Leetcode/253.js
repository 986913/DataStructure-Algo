/**
 * @param {number[][]} intervals
 * @return {number}
 */

/* ---------------------------- Solution 1: lc252🟡变形题 ----------------------------  */
const minMeetingRooms = function (intervals) {
  intervals.sort((a, b) => a[0] - b[0]);

  const finish = new MinPriorityQueue();
  let rooms = 0;

  for (let i = 0; i < intervals.length; i++) {
    const interval = intervals[i];

    if (!finish.size()) rooms++;
    else {
      const front = finish.front().element;
      if (front <= interval[0]) finish.dequeue();
      else rooms++;
    }

    finish.enqueue(interval[1]);
  }

  return rooms;
};

/* ------ Solution2: lc252🟡变形题----------------------------------------------------- */
var minMeetingRooms = function (intervals) {
  // sort intervals by start time
  intervals.sort((i1, i2) => i1[0] - i2[0]);

  let max = 0; // will be the return value
  let conferences = [];

  // loop through each interval and assign conference rooms similar to what you would do in real world situation
  intervals.forEach((interval) => {
    // Empty the conference rooms for which end time is already in past
    conferences = conferences.filter(
      (conference) => conference[1] > interval[0]
    );
    // Assign conference room for current meeting
    conferences.push(interval);

    // Maintain max conference rooms
    max = Math.max(max, conferences.length);
  });

  return max;
};
