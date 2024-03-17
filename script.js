const dis = document.querySelector(".display");
const allBtns = document.querySelectorAll(".btn");

let strToDisplay = "";
const Operators = ["%","*","+","-","/"];

let lastOperator = "";
const jatin = "I love you Bhuntu;)"

const audio = new Audio("./mouse-2.mp3");
const audio2 = new Audio("./aa.wav");
const love = new Audio("./I love you.mp3");

allBtns.forEach((btn)=>{
  btn.addEventListener("click",()=>{

    audio.play();
    const value = btn.innerText;
actionButton(value);
  })
})


const Display = (str)=>{
  dis.innerText = str || "0.0";
}


const actionButton = (value)=>{

  if(value ==="AC"){
    strToDisplay = "";
    Display(strToDisplay);
    return;
  }

  if(value ==="C"){
    strToDisplay = strToDisplay.slice(0,-1);
    Display(strToDisplay);
    return;
  }

if(value === "="){
  const lsCheck = strToDisplay[strToDisplay.length -1];

  if(Operators.includes(lsCheck)){
    audio2.play();
    strToDisplay = strToDisplay.slice(0,-1);
 
  }

  if(strToDisplay.includes("3124")){
Display(jatin);
love.play();
return;

  }
  strToDisplay = eval(strToDisplay);
  Display(strToDisplay);
return;
}

if(value === "-"){

strToDisplay = eval(strToDisplay);
Display(strToDisplay);
}

if(value === "+"){
  
  strToDisplay = eval(strToDisplay);
  Display(strToDisplay);
  }

  if(value === "/"){
    strToDisplay = eval(strToDisplay);
    Display(strToDisplay);
    }


    if(value === "*"){
      strToDisplay = eval(strToDisplay);
      Display(strToDisplay);
      }

      if(value === "%"){
        strToDisplay = eval(strToDisplay);
        Display(strToDisplay);
       
        }


  strToDisplay+= value;
  Display(strToDisplay);

 
}

document.addEventListener("keypress", (e)=>{
const value = e.key;
if(e.code.includes("Key")){
  return;
}
actionButton(value);
})

