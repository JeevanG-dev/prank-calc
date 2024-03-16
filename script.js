const allBtns = document.querySelectorAll(".btn");
const dis = document.querySelector(".display");

let strTodisplay = "";
const operators = ["+", "-", "/", "%", "*"];
const lastOperator = "";

const jaggu = "I love you POOjA";
const jatin = "I love you Bhuntu"

const audio = new Audio("./mouse-2.mp3");
const audio2 = new Audio("./aa.wav");
const love = new Audio ("./I love you.mp3")

allBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
  audio.play();
    const value = btn.innerText;

    actionButton(value);
  });
});

const display = (str) => {
  dis.innerText = str || "0.0";
};

const actionButton = (value) => {
  if (value === "AC") {
    strTodisplay = "";
    display();
    return;
  }

  if (value === "C") {
    strTodisplay = strTodisplay.slice(0, -1);
    display(strTodisplay);
    return;
  }


  if(value === "="){
    let ls = strTodisplay[strTodisplay.length -1];

    if(operators.includes(ls)){
strTodisplay = strTodisplay.slice(0,-1);
audio2.play();
    }
  if(strTodisplay.includes("7336")){
    love.play();
    display(jaggu);
    return;
  }

  if(strTodisplay.includes("3124")){
    love.play();
    display(jatin);
    return;
  }

  
strTodisplay = eval(strTodisplay);

display(strTodisplay);
return;

  }

  strTodisplay += value;
  display(strTodisplay);
};
