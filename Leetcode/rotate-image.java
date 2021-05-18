class Solution {
    public void rotate(int[][] matrix) {
        for(int j = 0; j < matrix.length; j++){
            for(int i = 0; i < matrix.length/2; i++){
                int temp = matrix[i][j];
                matrix[i][j] = matrix[matrix.length - 1 - i][j];
                matrix[matrix.length - 1 - i][j] = temp;
            }
        }
            
        for(int x = 0; x < matrix.length; x++){
            for(int k = x; k < matrix.length; k++){
                int temp = matrix[k][x];
                matrix[k][x] = matrix[x][k];
                matrix[x][k] = temp;
            }
        }
        
    }
}
