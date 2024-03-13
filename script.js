const displayElm = document.querySelector(".display");


const allBtns = document.querySelectorAll(".btn");

let strtoDisplay ="";

const operators = ["%","/","*","-","+"];

const love = "3124";

let lastOperators="";

allBtns.forEach((btn)=>{
  btn.addEventListener("click", ()=>{
    const value = btn.innerText;
    buttonAction(value);
  })

  
})


const display =(abc)=>{
  displayElm.innerText = abc || "0.0";
}




const buttonAction = (value)=>{

  if(value=== "AC"){
    strtoDisplay="";
    display(strtoDisplay);
    return;
  }

  if(value=== "C"){


strtoDisplay=strtoDisplay.slice(0,-1)

display(strtoDisplay);
return;

  }


  if(value=="="){

const lc = strtoDisplay[strtoDisplay.length -1];

if(operators.includes(lc)){
  
  strtoDisplay=strtoDisplay.slice(0,-1);
}

if(strtoDisplay.includes(love)){
  strtoDisplay = "I Love you Bhuntu";

  display(strtoDisplay)
}


strtoDisplay = eval(strtoDisplay)
display(strtoDisplay)
return;
}



  strtoDisplay += value;
  display(strtoDisplay);
}



