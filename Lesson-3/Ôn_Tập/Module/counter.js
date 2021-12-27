class Counter {
  _container;
  _label;
  _btnStart;
  _btnStop;
  _counter;
  _intervalHandler;
  constructor(id) {
    this._container = document.createElement("div");
    this._container.id = id;
    this._container.classList.add("d-flex", "container");

    this._label = document.createElement("div");
    this._label.innerText = "00:00";
    this._label.classList.add("label");

    this._btnStart = document.createElement("button");
    this._btnStart.innerText = "Start";
    this._btnStart.classList.add("btn", "btn-primary");
    this._btnStart.addEventListener("click", this.handleStart.bind(this)); // this trong bind giúp this trước handleStart ko tham chiếu tới _btnStart mà trỏ tới this ở trước _btnStart.

    this._btnStop = document.createElement("button");
    this._btnStop.innerText = "Stop";
    this._btnStop.classList.add("btn", "btn-danger");
    this._btnStop.addEventListener("click", this.handleStop.bind(this));

    this._counter = 0;
  }
  handleStart() {
    this._intervalHandler = setInterval(() => {
      this._counter++;
      this._label.innerText = this._counter;
    }, 1000);
  }
  handleStop() {
    clearInterval(this._intervalHandler);
  }
  render() {
    this._container.append(this._label, this._btnStart, this._btnStop);
    return this._container;
  }
}

export default Counter;
