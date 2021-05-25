var uniquePaths = function(m, n) {
  //开数组
  var f = Array(m); 
  
  if (!m || !n) return 0;
  
  for (let i = 0; i < m; i++) {
    f[i] = Array(n); //2d array
    
    for (let j = 0; j < n; j++) {
      if(i===0 || j===0) f[i][j]=1 //初始化
      else f[i][j] = f[i - 1][j] + f[i][j - 1]; //转移方程
    }
    
  }
  
  return f[m - 1][n - 1];
};