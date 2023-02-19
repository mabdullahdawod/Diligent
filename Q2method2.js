// Second method for question #2
// I applied ES6 feature called as Arrow function Which is returning its parameters as "first and second" after that i use spread operator to add them also considering camel case in prg..

const mergeBoth = (firstArr, secondArr) => {
    const merge=[...firstArr,...secondArr]
    console.log(merge);
    }
    mergeBoth([1,2,3], [4,5,6]);