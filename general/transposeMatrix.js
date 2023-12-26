/*
Transpose Matrix (Dificulty: easy)

You're given a 2D array of integers matrix. Write a function that returns the
transpose of the matrix

The transpose of a matrix is a flipped version of the original matrix across
its main diagonal; it switches the row and column indices of the original matrix


We can think of the concept of transposing a matrix as basically 
switching rows and columns.

For example:

[
[1, 2, 3],
[4, 5, 6],
[7, 8, 9]
]

The transposed matrix in this example would be:

[
[1, 4, 7],
[2, 5, 8],
[3, 6, 9]
]

And in this example we can clearly see that the moviment of transposition is
basically grouping all the values that are in the first column, then the second
column and so on. 

For example, for the first row of our transposed matrix we need to get 
matrix[0][0] = 1
matrix[1][0] = 4
matrix[2][0] = 7

so we need to add this newRow = [1,4,7] to our transposedMatrix 

In which the first number is the row and the second number is the column.

Once we reach the maximum rows we proceed to the next column, 
matrix[0][1] = 2
matrix[1][1] = 5
matrix[2][1] = 8

And so on until we reach the max columns, which we can know by performing
matrix[0].length because like this we can see exactly how many elements we have within
the first row of the matrix
*/

function transposeMatrix(matrix) {
  const transposedMatrix = [];

  // We get how many columns there are by performing matrix[0].length
  for (let column = 0; column < matrix[0].length; column++) {
    const newRow = [];

    for (let row = 0; row < matrix.length; row++) {
      // Like this we will get all the elements within that column
      // Ex: matrix[0][0], matrix[1][0], matrix[2][0] and so on
      newRow.push(matrix[row][column]);
    }

    transposedMatrix.push(newRow);
  }

  return transposedMatrix;
}
