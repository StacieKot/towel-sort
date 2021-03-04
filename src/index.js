// You should implement your task here.
module.exports = function towelSort (matrix) {
   matrix = matrix || [];
   let newMatrix =[];
   let index = 0;
   for(let i=0;i<matrix.length;i++){
      if(i%2!==1){
        let arr = matrix[i].sort((a,b) => a - b);
        } else {
         let arr = matrix[i].sort((a,b) => b -a );
         }
      for( let n = 0; n <  matrix[i].length; n++){
         newMatrix[index]=matrix[i][n];
         index++;
      }
   }
  return newMatrix;
}