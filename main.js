// **THIS IS INCREDIBLY IMPORTANT THAT YOU DO BOTH SECTIONS!!! You will be doing only front-end work in 421 and you need to brush up on your HTML elements**


// ***************************
//          PART ONE
// ***************************
// Write a JavaScript program to display the current day and time, start with:
console.log(new Date)

const displayDate = () => {
  const currentDate = new Date()

  document.getElementById("display-element").innerHTML = currentDate;
}
 

// Write a JavaScript program to convert a number to a string.



const numToString = (num) => {
  num = parseInt(num)
  console.log("start: " ,typeof num)
  num += ""
  console.log("end: " ,typeof num)
}

// Write a JavaScript program to convert a string to the number.


const stringToNum = (string) => {
  console.log("start: " ,typeof string)
  string = parseInt(string)
  console.log("end: " ,typeof string)
}


// Write a JavaScript program that takes in different datatypes and prints out whether they are a:
  // * Boolean
  // * Null
  // * Undefined
  // * Number
  // * NaN
  // * String
  
let thing 
const typePrint = (type) => {
  console.log(typeof thing)

  // console.log(type)
  // if (type == "boolean") {
  //   console.log("boolean")
  //   return
  // }
  // if (type == "null") {
  //   console.log("null")
  //   return
  // }
  // if (type == "boolean") {
  //   console.log("boolean")
  //   return
  // }
  // if (type == "undefined") {
  //   console.log("undefined")
  //   return
  // }
  // if (type == "NaN") {
  //   console.log("NaN")
  //   return
  // }
  // if (type == "number") {
  //   console.log("number")
  //   return
  // }
}
  
// Write a JavaScript program that adds 2 numbers together.
let numOne
let numTwo
const setNumOne = (one) => {
  numOne = parseInt(one)
}
const setNumTwo = (two) => {
  numTwo = parseInt(two)
}

const addition = () => {
  console.log(numOne+numTwo)
  document.getElementById("additionAnswer").innerHTML = numOne + numTwo
}

// Write a JavaScript program that runs only when 2 things are true.
let A = false
let B = false
const flipValue = (name) => {
  if (name == "A") {
    if (A == true){
      A = false
    } else {
      A = true
    }
    // console.log("button selected: ", name, "value: ", A)

  }
  if (name == "B") {
    if (B == true){
      B = false
    } else {
      B = true
    }
    // console.log("button selected: ", name, "value: ", B)

  }
}
const resultText = document.getElementById("result")
let run = "Program has been run!"
let noRun = "Program cannot be run!"
const bothTrue = () => {
  if (A == true && B == true) {
    resultText.innerHTML = run
    console.log("Program has been run!")
  } else {
    resultText.innerHTML = noRun
    console.log("Program cannot be run!")
  }
}

// Write a JavaScript program that runs when 1 of 2 things are true.

const eitherTrue = () => {
  if (A == true || B == true) {
    resultText.innerHTML = run
    console.log("Program has been run!")
  } else {
    resultText.innerHTML = noRun
    console.log("Program cannot be run!")
  }
}

// Write a JavaScript program that runs when both things are not true.  

const neitherTrue = () => {
  if (A == false && B == false) {
    resultText.innerHTML = run
    console.log("Program has been run!")
  } else {
    resultText.innerHTML = noRun
    console.log("Program cannot be run!")
  }
}

// ***************************
//         PART TWO
// ***************************

// 1. download Live-Server by Ritwick Dey, 
// 2. reload VS Code, 
// 3. click the "Go Live" button
// 4. Go local host 5500 or http://127.0.0.1:5500/index.html to see your web page
// 5. Or go use the `npm start` command and navigate to localhost:8080 (ctrl + C to close)
// 6. go to `index.html` 
// 7. create inputs, buttons and event listeners that render the code blocks you built above to the DOM.




// Additional Resources
// Video1: https://player.vimeo.com/video/377147232
// Video2: https://www.youtube.com/embed/bkvH28PXLWc
// Video3: https://www.youtube.com/embed/TrGI9Yki-24
