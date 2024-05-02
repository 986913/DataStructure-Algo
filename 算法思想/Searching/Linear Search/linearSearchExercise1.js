function linearSearch(arr, value){
  for(let i=0; i<arr.length; i++){
      if(value===arr[i]) return i
  }
  return -1
}

linearSearch([10,15,20,25], 15) // 1