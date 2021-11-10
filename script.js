//variables (sourced from .html)
const screen = document.querySelector("#screen");
const calc = document.querySelector("#calculations");
const buttons = document.querySelectorAll(".keys__orange, .keypad, .keys__orange_bg");
const operators = document.querySelectorAll (".keys__orange_bg");
const ans = document.querySelector("#keys__equal");
const percent = document.querySelector("#keys__percent")
const ac = document.querySelector("#keys__ac");
const polarity = document.querySelector("#keys__polarity");


//display number
buttons.forEach((button)=>{
    button.addEventListener("click",(event)=>{
        if (screen.innerHTML == operation) {
            screen.innerHTML = "";
        }
    let number = event.target.value;
    screen.innerHTML += number;
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
ans.addEventListener ("click",() => {
    secondNum = screen.innerHTML;

    //includes decimals
    let number1 = parseFloat(firstNum);
    let number2 = parseFloat(secondNum);

    switch (operation) { 
        case ("÷"): //divide to 2 d.p
            screen.innerHTML = (number1/number2).toFixed(2);
            calc.innerHTML = number1 + " ÷ " + number2 + " = ";
            break;
        case "×": //multiply
            screen.innerHTML = (number1*number2).toFixed(2);
            calc.innerHTML = number1 + " × " + number2 + " = ";
            break;
        case "-": //minus
            screen.innerHTML = (number1-number2);
            calc.innerHTML = number1 + " - " + number2 + " = ";
            break;
        case "+": //plus
            screen.innerHTML = (number1+number2);
            calc.innerHTML = number1 + " + " + number2 + " = ";
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

//clear
ac.addEventListener("click", ()=>{
    screen.innerHTML = "";
    calc.innerHTML = "";
    firstNum = 0;
    secondNum = 0;
    digit = 0;
})

//number polarity
polarity.addEventListener("click", ()=>{
    digit = screen.innerHTML;
    let _digit = parseFloat(digit);

    screen.innerHTML = (0 - _digit)
    }
)