/* Code Wars Challenges

Challenge 1

Complete the solution so that it returns true if the first argument(string) passed in ends with the 2nd argument (also a string).

Examples:

solution('abc', 'bc') // returns true
solution('abc', 'd') // returns false

Solution: */

function solution(str, ending) {
    return str.endsWith(ending);
}

or

const solution = (str, ending) => str.endsWith(ending);

/*.endsWith() is a built-in method in JavaScript that checks if a string ends with a specified substring 
i.e format string.endsWith(substring) or in the case of this example it would be as follows...
function solution(string, substring) {
     return string.endsWith(substring);
}
*/

/* Challenge 2
