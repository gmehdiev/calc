"use strict";



const num = document.querySelectorAll('.numButton')
const operator = document.querySelectorAll('.operator')

const dots= document.querySelector('#dots')
const nondots= document.querySelector('#nondots')

const equals = document.querySelector("#equals")
let count = true;
let dotIsPress = false;

Array.from(num).forEach(function(element) { 
  element.addEventListener('click', writeNumbers);
});

Array.from(operator).forEach(function(element) { 
  element.addEventListener('click', countCheck);
});

function countCheck(){
  if (count){
    document.querySelector("#field").value += this.id
    count= false;
    console.log(count);
  }else{

    document.querySelector("#field").value = calculations() + this.id 
    count = false;
  }

  
}

function writeNumbers(){
  if(this.id!='AC'){
    document.querySelector("#field").value += this.id
  }else{
    count = true;
    document.querySelector("#field").value = ''
  }

  

}

function calculations(){
  count = true;
  console.log(count);
  return document.querySelector("#field").value = powerCalc.calculate(document.querySelector("#field").value);
}




dots.addEventListener("click", () =>dotIsPress = true)
nondots.addEventListener("click", () =>dotIsPress = false)

function Calculator(){
  this.metods = {
    "+": (a, b) => a + b,
    "-": (a, b) => a - b,
    "/": (a, b) => a / b,
    "*": (a, b) => a * b,
    "%": (a, b) => a / 100 * b
  }
  this.calculate = function(str) {
    let result;
    
    let split = str.split(' '),
      a = +split[0],
      op = split[1],
      b = +split[2]
    if(b==''){
      alert('извинись и вставь число')
    }else{
     this.check = function(){
    if(split.length>3){
      result = this.metods[op](a, b);
      split = split.slice(2);
      split[0] = result;

      this.check(split);
    }
  }
  if(dotIsPress){
    return this.metods[op](a, b).toFixed(2);
  }else{
    return this.metods[op](a, b).toFixed(0)
  }
}
  return split.slice(0,1)
  }
}




let powerCalc = new Calculator;

console.log(typeof(document.querySelector("#field").value))
equals.addEventListener("click", calculations)


