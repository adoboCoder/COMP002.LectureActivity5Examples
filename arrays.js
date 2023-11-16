/* arrays begin at index 0. it is a collection of items of the same data type
 * array of strings declaration syntax: let variableName = [ "item 1", "item 2"];
 * array of numbers declaration syntax: let variableName = [ 1, 2, 3, 4];
 * array access syntax: variableName[index]
 * example:
 * // strings can be treated as an array
 * let word = "hello";
 * 
 * h | e | l | l | o
 * 0 | 1 | 2 | 3 | 4
 * 
 * to access the first letter "h,"" you have to use index 0 or word[0]
 * to access the fifth letter "o," you have to use index 4 or word[4]
*/

// array of numbers
let myGrades = [ 100, 90, 80, 95, 97 ];

// access the first item in the array
console.log(myGrades[0]);

// access the fifth item in the array
console.log(myGrades[4]);

// iterating or traversing each item in an array
console.log("***** Each item in myGrades *****")
for (let i = 0; i < myGrades.length; i++){
    console.log(myGrades[i]);
}

// array traversal function
function arrayTraversal(items) {
    for (let i = 0; i < items.length; i++){
        console.log("items[" + i + "]: " + items[i]);
    }
}

// adding an element in the end of an array
myGrades.push(77);
console.log("***** after push() *****");
arrayTraversal(myGrades); // traversal

// remove the last element in an array
myGrades.pop();
console.log("***** after pop() *****");
arrayTraversal(myGrades);

// adding an element in the start of an array
myGrades.unshift(70);
console.log("***** after unshift() *****");
arrayTraversal(myGrades);

// removing an element in the beginning of an array
myGrades.shift();
console.log("***** after shift() *****");
arrayTraversal(myGrades);

// function to get average
function average(grades) {
    let runningTotal = 0;
    let average = 0;

    for (let i = 0; i < grades.length; i++) {
        runningTotal += grades[i];
    }

    average = runningTotal / grades.length;
    return average;
}

console.log("***** average *****");
console.log(average(myGrades));