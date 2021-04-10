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

const canAttendAll = (arr) => {
  arr.sort((a,b)=>a[0]-b[0]);
  console.log(arr)
  for(let i=0; i<arr.length-1; i++){
    if(arr[i][1]>arr[i+1][1])
      return false
  }
  return true
}

console.log(canAttendAll([[0,30],[5,10],[15,20]])) // false
console.log(canAttendAll([[7,10],[2,4]]))