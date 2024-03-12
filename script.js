const displayElm = document.querySelector(".display");


const allBtns = document.querySelectorAll(".btn");

let strtoDisplay ="";

const operators = ["%","/","*","-","+"];


let lastOperators="";


const buttonAction = (value)=>{
if(value=="AC"){
  strtoDisplay="";
  display();
  return;
}
}

const display=(str)=>{
  displayElm.innerText = str || "0.0";
}