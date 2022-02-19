//1
let ages = [3, 9, 23, 64, 2, 8, 28, 93];

//1a

function findDifferenceOfAges(element)
{
    return element.slice(-1) - element.slice(0,1);
}

console.log(findDifferenceOfAges(ages));

//1b

ages.push(10);
console.log(ages);

console.log(findDifferenceOfAges(ages));

//1c

function averageOfArray(element)
{
    let sum = 0;

    for (i = 0; i < element.length; i++) 
    {
        sum += element[i];
    }
    console.log(sum / element.length);
}

averageOfArray(ages);

//2

let names = ['Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob'];

//2a

function averageLettersPerName(element)
{
    let lettersPerName = 0;

    for (i = 0; i < element.length; i++) 
    {
        lettersPerName += element[i].length
    }
    console.log(lettersPerName / names.length);
}

averageLettersPerName(names);

//2b 

function concatArray(element)
 {
     let list = '';

     for (i = 0; i < element.length; i++) 
     {
        list = list.concat(element[i]);
        if (i < element.length - 1)
        {
            list = list.concat(' ');
        }
     }  
     console.log(list);
}

concatArray(names);

//5

let nameLengths = names.map(function(element) 
{
    return element.length;
});
console.log(nameLengths);

//6 

let sumOfNameLengths = 0
for(i = 0; i < nameLengths.length; i++) {
    sumOfNameLengths += nameLengths[i];
}
console.log(sumOfNameLengths);

//7 

function repeatString(word, n) 
{
    let print = '';
    for (i=0; i < n; i++) {
            print = print.concat(word)
        }
    return print;
}

console.log(repeatString('Hello', 3));

//8

function createFullName(firstName, lastName) 
{
   return firstName + " " + lastName;
}

console.log(createFullName("John", "Smith"));

//9 

let aA = [12, 50, 34, 12, 40];

function isGreaterThan100(array) 
{
    let sumOfArray = 0
    for(i = 0; i < array.length; i++) {
        sumOfArray += array[i];
    }
    return sumOfArray > 100
}

console.log(isGreaterThan100(aA));

//10 

function averageOfNumbers(element)
{
    let sum = 0;

    for (i = 0; i < element.length; i++) 
    {
        sum += element[i];
    }
    console.log(sum / element.length);
}

averageOfNumbers(aA);

//11 

let bB = [1, 2, 3];
function calcualteGreaterOfArrays(arr1, arr2)
{
    let sum1 = 0;
    let avg1 = 0;

    for (i = 0; i < arr1.length; i++) 
    {
        sum1 += arr1[i];
    }
    avg1 = sum1 / arr1.length;

    let sum2 = 0;
    let avg2 = 0;
    
    for (i = 0; i < arr2.length; i++) 
    {
        sum2 += arr2[i];
    }
    avg2 = sum2 / arr2.length

    if (sum1 > sum2)
    {
        return true;
    }
}

console.log(calcualteGreaterOfArrays(aA, bB));

//12 

isHotOutside = true;
moneyInPocket = 11;

function willBuyDrink(bool, num) 
{
    if (bool == true && num > 10.50) 
    {
        return true;
    }
}

console.log(willBuyDrink(isHotOutside, moneyInPocket));

//13 

let age = 23;
let cash = 25;
function canBuyWine(element1, element2)
{
    if (element1 >= 21 && element2 >= 25)
    {
        return true;
    }
}

console.log(canBuyWine(age, cash));