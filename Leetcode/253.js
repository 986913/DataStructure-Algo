/**
 * @param {number[][]} intervals
 * @return {number}
 */

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
