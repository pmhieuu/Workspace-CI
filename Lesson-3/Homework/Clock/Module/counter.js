import time from "./helper.js";
class Counter {
  _container;
  _label;
  _btnStart;
  _btnPause;
  _btnStop;
  _btnStopAll;
  _counter;
  _intervalStorage;
  _startCondition;

  constructor() {
    this._counter = 0;
    this._startCondition = true; // Để tránh double click.

    this._container = document.createElement("div");
    this._container.classList.add("d-flex", "container", "mt-3");

    this._label = document.createElement("div");
    this._label.innerText = "00:00";
    this._label.classList.add("me-3", "label");

    this._btnStart = document.createElement("button");
    this._btnStart.innerText = "Start";
    this._btnStart.classList.add("btn", "btn-primary", "me-1");
    this._btnStart.addEventListener("click", this.handleStart.bind(this));

    this._btnPause = document.createElement("button");
    this._btnPause.innerText = "Pause";
    this._btnPause.classList.add("btn", "btn-warning", "me-1");
    this._btnPause.addEventListener("click", this.handlePause.bind(this));

    this._btnStop = document.createElement("button");
    this._btnStop.innerText = "Stop";
    this._btnStop.classList.add("btn", "btn-danger", "me-1");
    this._btnStop.addEventListener("click", this.handleStop.bind(this));
  }
  handleStart(e) {
    if (this._startCondition) {
      this._intervalStorage = setInterval(() => {
        this._counter++;
        this._label.innerText = time(this._counter);
      }, 1000);
    }
    this._startCondition = false;
  }
  handlePause() {
    clearInterval(this._intervalStorage);
    this._startCondition = true;
  }
  handleStop() {
    clearInterval(this._intervalStorage);
    this._label.innerText = "00:00";
    this._counter = 0;
    this._startCondition = true;
  }

  render() {
    this._container.append(
      this._label,
      this._btnStart,
      this._btnPause,
      this._btnStop
    );
    return this._container;
  }
}

export default Counter;
