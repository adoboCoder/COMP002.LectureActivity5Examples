// objects
// correction on Lecture 09 - Slide 9 code example
// to access a property of an object you have to call the object's name followed by a "." (dot) then the property key name
// therefore, to access wheels, it should be myCar.wheels
let myCar = {
    manufacturer: "Tesla",
    model: "3",
    trunkContents: ["books", "spare tire", "blankets"]
};

console.log("***** manufacturer property *****");
console.log(myCar.manufacturer); // accessing & displaying the manufacturer property

console.log("***** model property *****");
console.log(myCar.model); // model property

console.log("***** trunkContents property *****");
for (let i = 0; i < myCar.trunkContents.length;  i++){
    console.log(myCar.trunkContents[i]);
}