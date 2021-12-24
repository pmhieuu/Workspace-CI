import { add, sub, multi, divide } from "./Calculate.js";

let input = document.querySelector(".screen .input");
let arr = Array.from(document.querySelectorAll(".btn"));
arr.forEach(function (btn) {
  btn.addEventListener("click", function () {
    if (input.innerHTML === "0") {
      input.innerHTML = "";
    }
    if (btn.innerHTML === "AC") {
      input.innerHTML = "0";
    } else if (btn.innerHTML == "DEL") {
      let newArr = Array.from(input.innerHTML);
      newArr.splice(newArr.length - 1, 1);
      if (newArr.length !== 0) {
        input.innerHTML = newArr.join("");
      } else input.innerHTML = "0";
    } else if (btn.innerHTML === " = ") {
      let newArr = Array.from(input.innerHTML);
      let num1, num2;
      if (newArr.indexOf("+") !== -1) {
        num1 = Number(newArr.splice(0, newArr.indexOf("+")).join(""));
        num2 = Number(
          newArr.splice(newArr.indexOf("+") + 1, newArr.length).join("")
        );
        input.innerHTML = add(num1, num2);
      }
      if (newArr.indexOf("-") !== -1) {
        num1 = Number(newArr.splice(0, newArr.indexOf("-")).join(""));
        num2 = Number(
          newArr.splice(newArr.indexOf("-") + 1, newArr.length).join("")
        );
        console.log(num1, num2);
        input.innerHTML = sub(num1, num2);
      }
      if (newArr.indexOf("*") !== -1) {
        num1 = Number(newArr.splice(0, newArr.indexOf("*")).join(""));
        num2 = Number(
          newArr.splice(newArr.indexOf("*") + 1, newArr.length).join("")
        );
        input.innerHTML = multi(num1, num2);
      }
      if (newArr.indexOf("/") !== -1) {
        num1 = Number(newArr.splice(0, newArr.indexOf("/")).join(""));
        num2 = Number(
          newArr.splice(newArr.indexOf("/") + 1, newArr.length).join("")
        );
        input.innerHTML = divide(num1, num2);
      }
    } else input.innerHTML += btn.innerHTML;
  });
});
