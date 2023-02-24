// Question 12
// Given the list of items and their actual prices and sold prices. Find the number of items in sold products which has wrong prices
// Example Input
// Products = ['eggs', 'milk', 'cheese'];
// productPrices = [2.89, 3.29, 5.79];
// productSold = ['eggs', 'eggs', 'cheese', 'milk']
// soldPrice = [2.89, 2.99, 5.97, 3.29];
// Example Output Here
// eggs has 2.99 price which is worng milk has 5.97 price which is worng So we will return 2 in this example.


Products = ['eggs', 'milk', 'cheese'];
productPrices = [2.89, 3.29, 5.79];
productSold = ['eggs', 'eggs', 'cheese', 'milk'];
soldPrice = [2.89, 2.99, 5.97, 3.29];


let count=0;
let adderr={};

for(let i=0; i<Products.length; i++)
{   
    adderr[Products[i]]=productPrices[i]; 
}
for(let j=0; j < productSold.length; j++)
{
if(adderr[productSold[j]] !== soldPrice[j])
    {
    count++;
    }
}
    console.log(count);
