"use strict";

/**
 * Count how many whole occurrences of a string there are in an array.
 * Partial matches are not counted.
 * The count should be case sensitive.
 *
 * @param {string[]} stringArr - array of strings to check
 * @param {string} str - string to count occurrences off
 * @returns {number} how many occurrences of the string are in the array
 */
function CountOccurences (stringArr, str) {
  let occurrences = 0;
  for (let mars of stringArr) {
    if ((str === mars)) {
      occurrences++;
    }
  }
  return occurrences;
}

console.log(CountOccurences(["na", "na", "na", "na", "BATMAN"], "na"), 4);
console.log(CountOccurences(["na", "na", "na", "na", "BATMAN"], "BATMAN"), 1);
console.log(CountOccurences(["na", "na", "na", "na", "BATMAN"], "batman"), 0);
console.log(CountOccurences(["na", "na", "na", "na", "BATMAN"], "a"), 0);
