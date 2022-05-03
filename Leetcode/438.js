/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */


/* Sliding window solution: */


 const isMatch = (a,b) => JSON.stringify(a) == JSON.stringify(b)

 var findAnagrams = function(s, p) {
     let sMap = Array(26).fill(0);
     let pMap = Array(26).fill(0);
     let result = [];
     
     // initialize s -> sMap , and p -> pMap;
     for(let i=0; i<p.length; i++){
        sMap[s.charCodeAt(i)-97]+=1;
        pMap[p.charCodeAt(i)-97]+=1;
     }
     
     
     for(let j=0; j<=s.length-p.length; j++){
        if(isMatch(sMap,pMap)) result.push(j);
        
        // slding window here, fixed length as p's length;
        sMap[s.charCodeAt(j+p.length)-97]+=1; 
        sMap[s.charCodeAt(j)-97]-=1; 
     }
     
    return result;
 };