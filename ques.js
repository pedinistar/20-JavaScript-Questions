// given a string, reverse each word in the sequence

function reverseString(str) {
  return str
    .split(" ")
    .map(function (word) {
      return word.split("").reverse().join("");
    })
    .join(" ");
}

console.log(reverseString("hi boga"));

// how to check if an object is an array or not
// typeof [] -> object
// typeof {} -> object
function isArrayOrNot(arr) {
  if (Array.isArray(arr)) {
    console.log(`[${arr}] is an array`);
  } else {
    console.log(`${arr} is not an array`);
  }
}

isArrayOrNot([2, 3, 4]);
isArrayOrNot("hi");

// how to empty an array in js [don't reset it to a new array & donot loop through pop each value]
function emptyTheArray(arr) {
  arr.length = 0;
  return arr;
}

console.log(emptyTheArray([1, 2, 3, 4, "hi"]));

// how would you check if a number is an integer
// Number.isInteger(1);
// 12/1 = 12   rem=0
// 13/1 = 13   rem=0
// 14.5/1 = 14   rem=0
function isInteger(param) {
  let a = 12;
  if (a % 1 === 0) {
    console.log("This is an integer");
  } else {
    console.log("This is not an integer");
  }
}
isInteger(2);

// make this duplicate([2,3,4,5])  => [2,3,4,5,2,3,4,5]
function duplicate(param) {
  return param.concat(param);
}
console.log(duplicate([2, 3, 4, 5]));

// function to reverse a number
function reverseKaro(num) {
  return Number(num.toString().split("").reverse().join(""));
}
console.log(reverseKaro(234));

function reverseNum(num) {
  let rev = 0;
  while (num > 0) {
    let rem = num % 10;
    rev = rev * 10 + rem;
    num = Math.floor(num / 10);
  }
  return rev;
}

console.log(reverseNum(12));

// palindrome string check
function palindrome(str) {
  let reversedString = str.split("").reverse().join("");
  if (reversedString === str) {
    console.log(`${str} is a plaindrome number.`);
  } else {
    console.log(`${str} is not a plaindrome number.`);
  }
  // or
  // if (reversedString===str) return "palindrome";
  // else return "not a palindrome"
}

palindrome("long");
palindrome("lool");

// returns a passed string with letters in alphabetical order
function alphabeticalOrder(word) {
  return word.split("").sort().join("");
}
console.log(alphabeticalOrder("hindi"));

// accepts a string as a parameter & converts first letter of each word to uppercase
function stringConversion(str) {
  let allWords = str.split(" ").map(function (word) {
    return word.charAt(0).toUpperCase() + word.substring(1);
  });
  return allWords.join(" ");
}

console.log(stringConversion("wola wola"));

// function to get number of occurences of each letter in specified string
function countAlphabets(str) {
  let occurences = {};
  str.split("").forEach((elem) => {
    if (occurences.hasOwnProperty(elem) === false) {
      occurences[elem] = 1;
    } else {
      occurences[elem]++;
    }
  });
  return occurences;
}
console.log(countAlphabets("hulagula"));
/*
myArr.reduce(function(acc,curr){
    if(acc.hasOwnProperty(curr) === false){
        acc[curr] = 1
    } else {
        acc[curr]++
    }
    return acc
},{})
*/

// Loop and array and add all numbers
let myNums = [2, 3, 4, 5, 6, 7];
let sumOfNums = myNums.reduce(function (sum, curr) {
  sum = sum + curr;
  return sum;
}, 0);
console.log(sumOfNums);

let sum = 0;
myNums.forEach(function (elem) {
  sum = sum + elem;
});
console.log(sum);

// In an array of numbers & strings , add only those who are not strings
let mixedArray = ["hi", 2, 3, 4, 1, "ko", "ni"];
function sumOnlyNums(arr) {
  let sumOfNumbers = arr
    .filter(function (elem) {
      return typeof elem === "number";
    })
    .reduce(function (sum, curr) {
      sum = sum + curr;
      return sum;
    });
  return sumOfNumbers;
}
console.log(sumOnlyNums(mixedArray));

// Loop an array of objects & remove all objects which don't have gender's value male
// ⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐
// filter map and reduce tino mein return karna aniwarya hai
// ⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐
let obj = [
  { name: "one", gender: "male" },
  { name: "two", gender: "female" },
  { name: "three", gender: "male" },
];
let newArr = obj.filter(function (elem) {
  return elem.gender === "male";
});
console.log(newArr);

function cloneArray(arr) {
  return [...arr];
}
console.log(cloneArray[(2, 3, 4)]);

function typeTester(elem) {
  return typeof elem;
}
console.log(typeTester(false));

function retrive(arr, n = 1) {
  if (n < arr.length) {
    for (let i = 0; i < n; i++) {
      console.log(arr[i]);
    }
  } else {
    console.log("exeeds the array length limit");
  }
}
