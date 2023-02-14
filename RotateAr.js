// write an array , rotate the array to right by k steps where k is non negative
const arr=[1,2,3,4,5,6,7]
k=4;
for(let i=0 ; i<=k; i++){
  const arr1=arr.pop();
  arr.unshift(arr1);
  console.log(arr);
}




//  write an array , rotate the array to right by k steps where k is non negative
// input:[1,2,3,4,5,6,7],k=3
// output:[5,6,7,1,2,3,4]

// const arr=[1,2,3,4,5,6,7]
// let a=arr.pop();
// arr.unshift(a);
// console.log(arr);
// let b=arr.pop();
// arr.unshift(b);
// console.log(arr);
// let c=arr.pop();
// arr.unshift(c);
// console.log(arr);

