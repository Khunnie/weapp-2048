function Board(size){
  this.size= size;
  this.grid = this.init();
}
Board.prototype = {
  init(){//空矩阵
    var grid = [];
    for(var i = 0; i<this.size;i++){
      grid[i] = [];
      for(var j =0; j<this.size;j++){
        grid[i].push("");
      }
    }
    return grid;
  },
  usefulCell() {//记录为空的格子
    var cells = [];
    for(var i = 0;i<this.size;i++){
      for(var j = 0;j<this.size;j++){
        if(this.grid[i][j] === ""){
          cells.push({
            x:i,
            y:j
          });
        }
      }
    }
    return cells;
  },
  selectCell(){//从空白格子选择一个
    var cells = this.usefulCell();
    if(cells.length){
      return cells[Math.floor(Math.random()*cells.length)];
    }
  },
  cellEmpty() {  // 可用格子是否为空，为空返回true
    return !this.usefulCell().length;
  }
};
module.exports = Board;