// Bài 2: check số nguyên tố

let form = document.getElementById("Form");

function ktraSoNguyenTo(a) {
  let k = 1;
  for (let i = 2; i <= a; i++) {
    if (a % i === 0) {
      k++;
    }
  }
  return k;
}

form.onsubmit = (e) => {
  e.preventDefault();
  let a = Number(form.firstNumber.value);
  let b = Number(form.secondNumber.value);
  for (let i = a; i <= b; i++) {
    if (ktraSoNguyenTo(i) === 2) {
      document.querySelector("span").innerText += `${i}, `;
    }
  }
  const app = document.createElement("div");
  app.setAttribute("id", "app");
  document.body.appendChild(app);

  const table = document.createElement("table");
  Object.assign(table.style, {
    backgroundColor: "aqua",
    border: "1px solid",
  });
  app.appendChild(table);

  for (i = 0; i < a; i++) {
    let aRow = document.createElement("tr");
    for (j = 0; j < b; j++) {
      let bCol = document.createElement("th");
      bCol.innerText = "hello";
      bCol.style.border = "`1px";
      bCol.style.border = "solid";
      aRow.appendChild(bCol);
    }
    table.appendChild(aRow);
  }
};
