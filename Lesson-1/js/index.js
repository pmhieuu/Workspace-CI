// ES6 là một version của javascript là một cuộc đại cách mạng của JS
// Biến số khai báo bằng let và var
// Hằng số khai báo bằng const
// Khi khởi tạo biến var thì JS sẽ chạy hết code sau khi chạy đến dòng var sẽ khởi tạo biến đó là undefined (đây là cơ chế hoisting của var khác với let và const)
// let, const, var
// scope
// - global
// - function: var, let, const
// - block: let, const

// DATA TYPES
// primitives (kiểu dữ liệu nguyên thuỷ): string, number, boolen, bigint, symbol, null and undefined
// non-primitives (kiểu dự liệu không nguyên thuỷ hay object): object, array
// cách kiểu tra kiểu dữ liệu dùng từ khoá typeof
// console.log(typeof [2]); kiểu dữ liệu này là object

// Tham trị và tham chiếu:
// Architecture của JS gồm Stack và Heap. Stack sẽ lưu biến primitives và địa chỉ ô nhớ. Heap sẽ lưu biến object/non-primitives. Khi lưu một biến object thì tại stack biến đó sẽ có giá trị là một địa chỉ trỏ đến object tại Heap. Heap sẽ cấp một bộ nhớ động

// let a = "chungbien"
// let b = a;
// a ="2021" // thay đổi giá trị của a nhưng ko thay đổi b đây là tác động lên tham trị
// console.log(a);
// console.log(b);

// let c = {
//   name: "chungbien",
//   job: "teaching",
//   ex: {
//     name: "FA",
//     loca: "no where",
//   },
// };
// //spread - destructuring ({...biến}). Copy nông(shallow copy) copy giá trị trong c
// let d = { ...c };
// c.name = "Vu Khac Tiep"; // do c và d cùng trỏ đến cùng một giá trị tham chiếu nên khi thay đổi c thì sẽ thay đổi d.
// c.ex.name = "Ngoc Trinh";
// console.log(c);
// console.log(d);
// let arrC = [1, 2, 3];
// let arrD = { ...arrC };
// arrC[0] = "1---a";
// console.log(arrC);
// console.log(arrD);

// deepClone
// let jsonC = JSON.stringify(c); // gán toàn bộ c vào jsonC ở dạng string
// console.log(jsonC);
// console.log(typeof jsonC);
// let d = JSON.parse(jsonC); // chuyển từ string về lại object
// console.log(d);
// console.log(typeof d);
// c.ex.name = "Ngo Chinh";
// console.log("-------------------");
// console.log(c);
// console.log(d);
// Viết gọn lại:
// let d = JSON.parse(JSON.stringify(c));

//TEMPLATE LITERALS:
//`{function()}ákjflaksjd`

// ARROW FUNCTION:
// void function:
// function getA(a,b,c){
//   console.log(a,b,c);
//   return a+b+c;
// }
// arrow function: khởi tạo 2 hằng số có giá trị là function
// window.a = 25; //khởi tạo property của object window
// window.b = 15;
// const getA1 = (a, b, c) => {
//   console.log(a, b, c);
//   return a + b + c;
// };
// const getA2 = (a, b, c) => a + b + c;
const calculate = {
  a: 10,
  b: 20,
  name: "old calculate",
  // declaration function
  add: function () {
    console.log(this); // trỏ đến cái object chứa function đấy. Ở đây this trỏ đến calculate
    return this.a + this.b;
  },
  //express function
  sub: () => {
    console.log(this); // this ở đây trỏ đến global object. Ở đây this nó trỏ đến window
    return this.a - this.b;
  },
};
const newCalculate = {
  a: 45,
  b: 90,
  name: "newCalculate",
};
console.log(calculate.add.bind(newCalculate)()); //bind ở đây là mượn hàm add và dùng bind để truyển một cái this khác vào. Ở đây là thay this từ calculate sang newCalculate. Bind sẽ copy từ hàm cũ (add()) và tham số đầu vào là object mà muốn thay thế this

// IEFF - immediately - invoked Function Expression
(function testFunc() {
  console.log("hello World");
})();
// Anonymous function hàm không tên
document.addEventListener("click", function () {
  console.log("clicked");
});
document.addEventListener("dblclick", () => {
  console.log("DB clicked");
});
