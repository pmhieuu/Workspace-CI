// import from '../common/helper.js'
class Counter {
  $container;
  $label;
  $btnStart;
  $btnStop;
  $counter;
  $intervalHandler;
  constructor(id) {
    this.$counter = 0;

    this.$container = document.createElement("div");
    this.$container.id = id;
    this.$container.classList.add("d-flex", "container");

    this.$label = document.createElement("div");
    this.$label.innerText = "00:00";
    this.$container.classList.add("label");

    this.$btnStart = document.createElement("button");
    this.$btnStart.innerText = "Start";
    this.$btnStart.classList.add("btn", "btn-primary", "btn-start");
    this.$btnStart.addEventListener("click", this.handleStart.bind(this));

    this.$btnStop = document.createElement("button");
    this.$btnStop.innerText = "Stop";
    this.$btnStop.classList.add("btn", "btn-danger");
    this.$btnStop.addEventListener("click", this.handleStop);
  }
  // function thường thì this trỏ đến object chứa nó
  handleStart() {
    console.log("start");
    setInterval(() => {
      this.$counter++;
      this.$label.innerText = this.$counter;
    }, 1000);
  }
  // arrow function this trỏ đến global object. this là Counter
  handleStop = () => {};
  render() {
    this.$container.append(this.$label, this.$btnStart, this.$btnStop);
    return this.$container;
  }
}
export default Counter;
