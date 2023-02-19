// Question 5
// Given an array of integers, find the pair of adjacent elements that has the largest product and return that product.
// Example
// For inputArray = [3, 6, -2, -5, 7, 3], the output should be adjacentElementsProduct(inputArray) = 21




let fu=(inputArray)=>{
    var p=0;
     for(index=0; index<inputArray.length;index++)
     {
      if(inputArray[index]*inputArray[index+1]>p)
      {
       p= inputArray[index]*inputArray[index+1];
      console.log(p);
   
      }
    }}
    let y=[3,6,-2,-5,7,3];
    fu(y);