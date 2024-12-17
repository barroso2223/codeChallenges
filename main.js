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

Convert number to reversed array of digits
Given a random non-negative number, you have to return the digits of this number within an array in reverse order.

Example(Input => Output):
35231 => [1,3,2,5,3]
0 => [0]


Solution... */

function digitize(n) {
    return String(n)//Converts number into a string
        .split('')//Splits the string into individual characters
        .reverse()//reverse the order of the characters
        .map(Number);//Converts the characters back into a number
}

or 

const digitize = n => String(n)//Converts the numbers into a string
    .split('')//Splits the string into individual characters
    .reverse()//Reverses the order of the characters
    .map(Number);//converts each character back into a number