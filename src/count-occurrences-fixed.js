"use strict";

// /**
//  * Count how many whole occurrences of a string there are in an array.
//  * Partial matches are not counted.
//  * The count should be case sensitive.
//  * 
//  * @param {string[]} stringArray - array of strings to check
//  * @param {string} targetString- string to count occurrences off
//  * @returns {number} how many occurrences of the string are in the array
//  */
function countStrings(stringArray, targetString)  {
        console.log("Target is", `${targetString}`);
        console.log("List:", stringArray);
        let totalOccurences= 0;
        for (let word of stringArray)  {
                if (word === targetString)  {
                        totalOccurences++
                }
        }
        return totalOccurences;
    }

console.log(countStrings(["na", "na", "na", "na", "BATMAN"], "na"), "expected: 4");
console.log(countStrings(["na", "na", "na", "na", "BATMAN"], "BATMAN"), "expected 1");
console.log(countStrings(["na", "na", "na", "na", "BATMAN"], "batman"), "expected 0");
console.log(countStrings(["na", "na", "na", "na", "BATMAN"], "a"), "expected 0");