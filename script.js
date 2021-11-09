const screen = document.querySelector("#screen");
const buttons = document.querySelectorAll(".keys__orange, .keypad, .keys__orange_bg")
const operators = document.querySelectorAll (".keys__orange_bg, #keys__percent")
const ans = document.querySelector("#keys__equal")
const ac = document.querySelector("#keys__ac")



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

let firstNum;
let secondNum;
let operation;
let answer;

operators.forEach((operator)=>{
    operator.addEventListener("click", (event) =>{ 
        operation =event.target.innerHTML;
        firstNum = screen.innerHTML;
        screen.innerHTML= operation;
})
})

ans.addEventListener ("click",() => {
    secondNum = screen.innerHTML;

    let number1 = parseFloat(firstNum);
    let number2 = parseFloat(secondNum);

    switch (operation) { 
        case ("÷"): //divide
            screen.innerHTML = (number1/number2).toFixed(5);
            break;
        case "*": //multiply
            screen.innerHTML = (number1*number2);
            break;
        case "-": //minus
            screen.innerHTML = (number1-number2);
            break;
        case "+": //plus
            screen.innerHTML = (number1+number2);
            break;
        case "%": //percent
            screen.innerHTML = (number1 );
            break;
        default:
            screen.innerHTML = "error";
            break;
      }

})

ac.addEventListener ("click",() => {
    screen.innerHTML = "";
    firstNum = 0
    secondNum = 0
})