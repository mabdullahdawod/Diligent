// Question 8
// Given a year, return the century it is in. The first century spans from the year 1 up to and including the year 100, the second - from the year 101 up to and including the year 200, etc.


let year=1905;
if(year%100==0){
  console.log(year/100);
}
else{
  console.log(Math.round(year/100)+1);
}

