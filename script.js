console.log(document);

const heading = document.querySelector("h1");
console.log(heading);

const value = document.querySelector(".value");
console.log(value);

const button = document.querySelector("button");
console.log(button);

const area = document.querySelector(".area");
console.log(area);


//Redo this one 
const stat = document.querySelector(".stat .div")
console.log(stat);

const hello = document.querySelector(".hello")
console.log(hello);

//Find all buttons on the page 
//loop over this result as well
const buttons = document.querySelectorAll("button");
console.log(buttons);

//Get a list of all '<h3>' elements 
const heading3List = document.querySelectorAll("h3");

//Iterate over the list and print each one 
for (let element of heading3List.values()){
    console.log(element);
}

//Or you can use a simple for look like this:
// for (let i = 0; i < heading3List.length; i++){
//     const element = heading3List[i];
//     console.log(element);
// }

//redo this one 
const ratings = document.querySelectorAll(".rating .value")
for (let rates of ratings.values()){
    console.log(rates);
}

const areas = document.querySelectorAll(".area .value")
for (let i = 0; i < areas.length; i++){
    let element = areas[i];
    console.log(element);
}

//Get a list of descritions
const list = document.querySelectorAll(".description");

//Log them to the console
Array.prototype.forEach.call(list, function(element) {
    console.log(element);
});
