"use strict";

/**
 * Count how many whole occurrences of a string there are in an array.
 * Partial matches are not counted.
 * The count should be case sensitive.
 *
 * @param {string[]} stringArray - array of strings to check
 * @param {string} searchString - string to count occurrences off
 * @returns {number} how many occurrences of the string are in the array
 */
function x(stringArray, searchString) {
  let count = 0;
  for (let eachString of stringArray) {
    if ((searchString === eachString)) {
      count++;
    }
  }
  return count;
}

console.log(x(["na", "na", "na", "na", "BATMAN"], "na"), 4);
console.log(x(["na", "na", "na", "na", "BATMAN"], "BATMAN"), 1);
console.log(x(["na", "na", "na", "na", "BATMAN"], "batman"), 0);
console.log(x(["na", "na", "na", "na", "BATMAN"], "a"), 0);
