import Counter from "./Module/counter.js";

let app1 = new Counter("app");
let app2 = new Counter("app");
let app3 = new Counter("app");

document
  .getElementById("app")
  .append(app1.render(), app2.render(), app3.render());

let startAll = document.createElement("button");
startAll.innerText = "Start All";
startAll.classList.add("btn", "btn-primary", "mt-3", "startAll");
document.getElementById("app").append(startAll);

let stopAll = document.createElement("button");
stopAll.innerText = "Stop All";
stopAll.classList.add("btn", "btn-danger", "mt-3", "stopAll", "ms-1");
document.getElementById("app").append(stopAll);

stopAll.addEventListener("click", () => {
  app1.handleStop();
  app2.handleStop();
  app3.handleStop();
});

startAll.addEventListener("click", () => {
  app1.handleStart();
  app2.handleStart();
  app3.handleStart();
});
