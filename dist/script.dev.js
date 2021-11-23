"use strict";

//constant variables (sourced from .html)
var screen = document.querySelector("#screen");
var calc = document.querySelector("#calculations");
var buttons = document.querySelectorAll(".keypad, .keys__orange_bg");
var operators = document.querySelectorAll(".keys__orange_bg");
var ans = document.querySelector("#keys__equal");
var percent = document.querySelector("#keys__percent");
var ac = document.querySelector("#keys__ac");
var polarity = document.querySelector("#keys__polarity"); //display number

buttons.forEach(function (button) {
  button.addEventListener("click", function (event) {
    if (screen.innerHTML == operation) {
      screen.innerHTML = "";
    }

    var number = event.target.value; //setting character limit

    if (screen.innerHTML.length < 9) {
      screen.innerHTML += number;
    }
  });
}); //variables (values changes)

var firstNum;
var secondNum;
var operation;
var digit; //first-numbers

operators.forEach(function (operator) {
  operator.addEventListener("click", function (event) {
    operation = event.target.innerHTML;
    firstNum = screen.innerHTML;
    screen.innerHTML = operation;
  });
}); //operatators

ans.addEventListener("click", function () {
  secondNum = screen.innerHTML; //includes decimals

  var number1 = parseFloat(firstNum);
  var number2 = parseFloat(secondNum);

  switch (operation) {
    case "÷":
      //divide to 2 d.p
      screen.innerHTML = (number1 / number2).toFixed(2);
      calc.innerHTML = "".concat(number1, " \xF7 ").concat(number2, " =");
      break;

    case "×":
      //multiply to 2 d.p
      screen.innerHTML = (number1 * number2).toFixed(2);
      calc.innerHTML = "".concat(number1, " \xD7 ").concat(number2, " =");
      break;

    case "-":
      //minus
      screen.innerHTML = number1 - number2;
      calc.innerHTML = "".concat(number1, " - ").concat(number2, " =");
      break;

    case "+":
      //plus
      screen.innerHTML = number1 + number2;
      calc.innerHTML = "".concat(number1, " + ").concat(number2, " =");
      break;

    default:
      screen.innerHTML = "error";
      break;
  }
}); //percent

percent.addEventListener("click", function () {
  digit = screen.innerHTML;
  digit = parseFloat(digit);
  screen.innerHTML = digit / 100;
}); //clear when C double-clicked

ac.addEventListener("dblclick", function () {
  screen.innerHTML = "";
  calc.innerHTML = "";
  firstNum = "";
  secondNum = "";
  digit = "";
}); //delete when C is single-clicked

ac.addEventListener("click", function () {
  var newNumber = screen.innerHTML.slice(0, screen.innerHTML.length - 1);
  screen.innerHTML = newNumber;
}); //number polarity

polarity.addEventListener("click", function () {
  digit = screen.innerHTML;

  var _digit = parseFloat(digit);

  screen.innerHTML = 0 - _digit;
});