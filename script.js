//constant variables (sourced from .html)
const screen = document.querySelector(".calculator__screen");
const calc = document.querySelector(".calculator__calculations");
const buttons = document.querySelectorAll(".calculator__key");
const operators = document.querySelectorAll (".calculator__key--orange-bg");
const equals = document.querySelector("#keys__equal");
const percent = document.querySelector("#keys__percent")
const ac = document.querySelector("#keys__ac");
const polarity = document.querySelector("#keys__polarity");

//display number
buttons.forEach((button)=>{
    button.addEventListener("click",(event)=>{
        if (screen.innerHTML === operation) {
            screen.innerHTML = "";
        }
    let number = event.target.value;

    //doesn't let the user input more than 1 dot into the number
    if (screen.innerHTML.includes(".") && number == (".")){
        return;
    }else{
    //setting character limit
        screen.innerHTML += number;
    }
    });
})
//variables (values changes)
let firstNum;
let secondNum;
let operation;
let digit;

//first-numbers
operators.forEach((operator)=>{
    operator.addEventListener("click", (event) =>{ 
        operation =event.target.innerHTML;
        firstNum = screen.innerHTML;
        screen.innerHTML= operation;
})
})
//operatators
equals.addEventListener ("click",() => {
    secondNum = screen.innerHTML;

    //includes decimals
    let number1 = parseFloat(firstNum);
    let number2 = parseFloat(secondNum);

    switch (operation) { 
        case ("÷"): //divide to 2 d.p
            screen.innerHTML = (number1/number2).toFixed(2);
            calc.innerHTML = `${number1} ÷ ${number2} =`;
            break;
        case "×": //multiply to 2 d.p
            screen.innerHTML = (number1*number2).toFixed(2);
            calc.innerHTML = `${number1} × ${number2} =`;
            break;
        case "-": //minus
            screen.innerHTML = (number1-number2);
            calc.innerHTML = `${number1} - ${number2} =`;
            break;
        case "+": //plus
            screen.innerHTML = (number1+number2);
            calc.innerHTML = `${number1} + ${number2} =`;
            break;
        default:
            screen.innerHTML = "error";
            break;
      }
})

//percent
percent.addEventListener("click", () => {
    digit = screen.innerHTML;
    digit = parseFloat(digit);

    screen.innerHTML = (digit/100);
})
//clear when C double-clicked
ac.addEventListener("dblclick", ()=>{
    screen.innerHTML = "";
    calc.innerHTML = "";
    firstNum = "";
    secondNum = "";
    digit = "";
})

//delete when C is single-clicked
ac.addEventListener("click", ()=>{
    let newNumber= screen.innerHTML.slice(0, screen.innerHTML.length-1);
    screen.innerHTML = newNumber;
    
})

//number polarity
polarity.addEventListener("click", ()=>{
    digit = screen.innerHTML;
    let _digit = parseFloat(digit);

    screen.innerHTML = (0 - _digit)
    }
)