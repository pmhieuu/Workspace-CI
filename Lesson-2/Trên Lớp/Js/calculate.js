const PI = 3.14;
function add(a, b) {
  return a + b;
}
const sub = function (a, b) {
  return a - b;
};
const multi = (a, b) => {
  return a * b;
};
const divide = (a, b) => a / b;

export default {
  PI,
  add,
  sub,
  multi,
  divide,
};
