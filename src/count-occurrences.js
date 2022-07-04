"use strict";

/**
 * Count how many whole occurrences of a string there are in an array.
 * Partial matches are not counted.
 * The count should be case sensitive.
 *
 * @param {string[]} inputArr - array of strings to check
 * @param {string} searchStr - string to count occurrences off
 * @returns {number} how many occurrences of the string are in the array
 */
function countOccurrences(inputArr, searchStr) {
  let count = 0;
  for (let arrayStr of inputArr) {
    if ((arrayStr === searchStr)) {
      count++;
    }
  }
  return count;
}

console.log(countOccurrences(["na", "na", "na", "na", "BATMAN"], "na"), 4);
console.log(countOccurrences(["na", "na", "na", "na", "BATMAN"], "BATMAN"), 1);
console.log(countOccurrences(["na", "na", "na", "na", "BATMAN"], "batman"), 0);
console.log(countOccurrences(["na", "na", "na", "na", "BATMAN"], "a"), 0);
