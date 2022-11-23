/* 
  Selection Sort:
  selection sort没有bubble sort和insertion sort好使
*/

// https://www.youtube.com/watch?v=xWBP4lzkoyM&ab_channel=GeeksforGeeks

function selectionSort(arr){

  for(let i=0; i<arr.length; i++){
    let minIndex = i;

    for(let j=i+1; j <arr.length; j++){
      if(arr[j]<arr[minIndex])   
        minIndex = j ;
    }

    if(i !== minIndex){
      let tmp = arr[minIndex];
      arr[minIndex] = arr[i];
      arr[i] = tmp;
    }

  }

  return arr;
}


selectionSort([19,5,25,3,10])

