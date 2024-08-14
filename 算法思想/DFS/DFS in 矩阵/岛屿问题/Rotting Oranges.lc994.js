/**
 * @param {number[][]} grid
 * @return {number}
 */

/************************ Solution: BFS 推荐 **************************/
svar orangesRotting = function(grid) {
    let m = grid.length;
    let n = grid[0].length;

    let queue = [];
    let freshOranges = 0; // <-- diff is here

    for(let i=0; i<m; i++){
        for(let j=0; j<n; j++){
            if(grid[i][j]===2){
                queue.push([i,j])
            }else if(grid[i][j]===1){
                freshOranges++  // <-- diff is here
            }
        }
    }

    let level = 0;  // <-- diff is here
    while(queue.length){
        let len = queue.length;
        level+=1

        for(let i=0; i<len; i++){
            let [x,y] = queue.shift();

            // 遍历四个方向: 上下左右
            if (x - 1 >= 0 && grid[x - 1][y] === 1) {
                grid[x - 1][y] = 2; //橘子变坏
                queue.push([x - 1, y]); //更新queue
                freshOranges--; // 更新freshOranges数量
            }
            if (x + 1 < m && grid[x + 1][y] === 1) {
                grid[x + 1][y] = 2
                queue.push([x + 1, y]);
                freshOranges--;
            }
            if (y - 1 >= 0 && grid[x][y - 1] === 1) {
                grid[x][y - 1] = 2
                queue.push([x, y - 1]);
                freshOranges--;
            }
            if (y + 1 < n && grid[x][y + 1] === 1) {
                grid[x][y + 1] = 2
                queue.push([x, y + 1]);
                freshOranges--;
            }
        }
    }

    if(level===0 && freshOranges==0) return 0 // for the input case :  [[0]].
    return freshOranges ===0 ? level-1 : -1  // <-- diff is here
}; 