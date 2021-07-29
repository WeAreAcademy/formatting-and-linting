"use strict";

/**
 * Count how many whole occurrences of a string there are in an array.
 * Partial matches are not counted.
 * The count should be case sensitive.
 * 
 * @param {string[]} y - array of strings to check
 * @param {string} n - string to count occurrences off
 * @returns {number} how many occurrences of the string are in the array
 */
function countOccurancesOfString(arrayOfStrings, stringToCount){
        let occurrences = 0
        for (const string of arrayOfStrings){
                if(stringToCount === string){
                        occurrences++
                }
        }
        return occurrences
}

console.log(countOccurancesOfString(["na", "na", "na", "na", "BATMAN"], "na") +' should read:', 4);
console.log(countOccurancesOfString(["na", "na", "na", "na", "BATMAN"], "BATMAN")+'should read:', 1);
console.log(countOccurancesOfString(["na", "na", "na", "na", "BATMAN"], "batman")+' should read:', 0);
console.log(countOccurancesOfString(["na", "na", "na", "na", "BATMAN"], "a")+' should read:', 0);