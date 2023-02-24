// Question 11
// Given an array of integers, calculate the ratios of its elements that are positive, negative, and zero. Print the decimal value of each fraction on a new line with places after the decimal.
// Sample Input
// -4 3 -9 0 4 1
var positive=0;
var negative=0;
var zeroo=0;
////.sign is a predefined function which is use to evaluate the integer. so i use .sign function in my question////
arr = [-4, 3, -9, 0, 4, 1]
for(i=0;i<arr.length;i++){
if(Math.sign(arr[i])==1){
positive++;}
else if(Math.sign(arr[i])==-1){
negative++;}
else if(Math.sign(arr[i]==0)){
 zeroo++;}

}
console.log((positive/ 6));
console.log((negative/ 6));
console.log((zeroo /6));