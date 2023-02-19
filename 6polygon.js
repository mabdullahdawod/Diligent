// Below we will define an n-interesting polygon. Your task is to find the area of a polygon for a given n.
// Example n= 1, output = 1; For n = 2, the output should be output= 5; For n = 3, the output should be output= 13. For n = 4, the output should be output = 25.


// Arrow function
const polygon=(n)=>             
{
if(n>0){
var formula=(1 + 2 * n * (n-1));
console.log(formula);
}
else
{
 console.log("0");
}
}
polygon(4);