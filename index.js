// name and date of birth 
// calculate age
let name = prompt("Enter your name");
let yearofbirth = Number(prompt("Enter your birth of year"));
function nameandage(yearofbirth) {
    let date = new Date();
    var currentYear = date.getFullYear();
    let age = currentYear - yearofbirth
    return age;
}
const age = nameandage(yearofbirth)
let nameprint = alert("Your name is :" + name + " and your age is :" + age);
// normal function
function addNum(a, b) {
    let sum = a + b;
    return sum;
}
let sum = addNum(2, 3);
console.log(sum);
// arrow function
let addnumbers = (a, b) => {
    let sum = a + b;
    return sum;
}
let sum1 = addNum(2, 3);
console.log(sum1);
// if only one chezz likhni hy tu
let square = a => a * a
console.log(square(5));
// imediatley invoke function
(function () {
    console.log("IIFE!");
})();
// recursive function
// esy functions jo apny andr khud ko call krin
function getRecursive(nr) {
    console.log("recursivew " + nr);
    if (nr > 0) {
        getRecursive(--nr);
    }
}
getRecursive(3);
// function callback

const agecal = (Year1) =>{
    const age=new Date().getFullYear() - Year1;
    return age;

}
let selfintro =(agecal) => {
    const name = prompt("Name")
    const dob = Number(prompt("Dob"))
    const age = agecal(dob)
    alert("mu name is "+ name + " and i am " + age +" old")

}
selfintro(agecal);
// var ka scope function scope let ka scope block scope