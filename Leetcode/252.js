/*
题目：
  Given an array of meeting time intervals consisting of start and end times [[s1,e1],[s2,e2],...] (si < ei), 
  determine if a person could attend all meetings.

  eg: 
  Input: [[0,30],[5,10],[15,20]]
  Output: false

  Input: [[7,10],[2,4]]
  Output: true
*/

/* ------------------- Solution:  sort --------------- */
var canAttendMeetings = function (intervals) {
  intervals.sort((a, b) => a[0] - b[0]);

  for (let i = 1; i < intervals.length; i++) {
    if (intervals[i][0] < intervals[i - 1][1]) {
      return false;
    }
  }

  return true;
};
