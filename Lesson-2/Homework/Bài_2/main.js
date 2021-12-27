// Bài 1:
let form = document.querySelector("form");
const Ktradieukien = (a) => {
  if (a < 4 || a > 20) {
    alert("Nhập lại!");
  } else return true;
};
const evenCheck = (a) => {
  if (a % 2 === 0) {
    return true;
  }
};
form.onsubmit = (e) => {
  e.preventDefault();
  let a = form.number.value;
  if (Ktradieukien(a)) {
    for (i = 0; i <= a; i++) {
      if (evenCheck(i)) {
        document.querySelector(".result span").innerText += `${i},`;
      }
    }
  } else {
    document.querySelector(".result span").innerText = "";
  }
};

// Bài 2:
let randomColor = document.getElementById("Color");
let change = randomColor.addEventListener("mouseover", () => {
  let arr = ["red", "green", "blue", "yellow", "orange", "purple"];
  let a = Math.floor(Math.random() * arr.length);
  randomColor.style.backgroundColor = arr[a];
});

// Bài 3:
