
// You should implement your task here.

module.exports = function towelSort (matrix) {
  if (matrix == undefined ) return [];
  if(matrix.length === 0) return [];
  matrix = matrix.map(
  function (item,index) {
      for(let i=0; i<1; i++) {
          if (index%2==0) continue;
          item = item.reverse();
      }
         return item; 
  }
);
matrix = matrix.flat();
    return matrix;
}
