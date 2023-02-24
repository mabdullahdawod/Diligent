// Question 10
// Given a square matrix, calculate the absolute difference between the sums of its diagonals.
// For example, the square matrix is shown below:
// 1 2 3
// 4 5 6
// 9 8 9
// The left-to-right diagonal = . The right to left diagonal = . Their absolute difference is .
// Function description
// Complete the function in the editor below.
// diagonalDifference takes the following parameter:
// int arr[n][m]: an array of integers
// Return
// int: the absolute diagonal difference
// Sample Input
// 3
// 11 2 4
// 4 5 6
// 10 8 -12
// Sample Output
// 15

const diag=(arr)=> {
    let n = arr.length;
    let leftDiag = 0;
    let rightDiag = 0;
    for (let i = 0; i < n; i++) {
      leftDiag += arr[i][i];
      
      rightDiag += arr[(n-1)-i][i];
    } 
    console.log( (rightDiag-leftDiag));
  }
  let arr=[[11,2,4],[4,5,6],[10,,-12]];
  y=diag(arr);
  console.log(y);
  