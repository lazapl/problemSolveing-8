/*Given a number, return an array containing the two halves of the number. If the number is odd, make the rightmost number higher.


function numberSplit(num) {
    const half = Math.floor(num / 2);
    
   
    if (num % 2 === 0) {
        return [half, half];
    } else {
        
        return [half, half + 1];
    }
}

// Examples
console.log(numberSplit(4));   // Output: [2, 2]
console.log(numberSplit(10));  // Output: [5, 5]
console.log(numberSplit(11));  // Output: [5, 6]
console.log(numberSplit(-9));  // Output: [-5, -4]

------------------------------------------------------------------------------------------------------*/


/*Create a function that takes a string and returns a string in which each character is repeated once.



function doubleChar(str) {
    let result = '';

    for (let char of str) {
        result += char + char;
    }

    return result;
}

// Examples
console.log(doubleChar("String"));          // Output: "SSttrriinngg"
console.log(doubleChar("Hello World!"));     // Output: "HHeelllloo  WWoorrlldd!!"
console.log(doubleChar("1234!_ "));          // Output: "11223344!!__  "




------------------------------------------------------------------------------------------------------*/



/*Create a function that returns an array of strings sorted by length in ascending order.


function sortByLength(arr) {
    return arr.sort((a, b) => a.length - b.length);
}

// Examples
console.log(sortByLength(["a", "ccc", "dddd", "bb"]));  // Output: ["a", "bb", "ccc", "dddd"]
console.log(sortByLength(["apple", "pie", "shortcake"]));  // Output: ["pie", "apple", "shortcake"]
console.log(sortByLength(["may", "april", "september", "august"]));  // Output: ["may", "april", "august", "september"]
console.log(sortByLength([]));  // Output: []

------------------------------------------------------------------------------------------------------*/