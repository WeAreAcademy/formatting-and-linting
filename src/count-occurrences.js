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
function x(arrOfStr,strOccurrence) {
var counter = 0;
        for (let x of arrOfStr){
                if(x === strOccurrence){
                        counter = counter + 1;
                }
        }return(counter)
}
console.log(x(["na", "na", "na", "na", "BATMAN"], "na"), 4);
console.log(x(["na", "na", "na", "na", "BATMAN"], "BATMAN"), 1);
console.log(x(["na", "na", "na", "na", "BATMAN"], "batman"), 0);
console.log(x(["na", "na", "na", "na", "BATMAN"], "a"), 0);
console.log(x(["na", "na", "na", "123", "BATMAN"], "123"), 1);