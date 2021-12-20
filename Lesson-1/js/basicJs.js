// Object constructor
// Hàm tạo:
// function User(firstName, lastName, avatar) {
//   this.firstName = firstName; //this ở đây dùng để khi tạo đối tượng mới thì trong đối tượng mới sẽ có một property là firstName có giá trị bằng với arguement firstName
//   this.lastName = lastName;
//   this.avatar = avatar;
//   this.getName = function () {
//     return `${this.firstName} ${this.lastName}`; //this ở đấy sẽ trỏ tới đối tượng được gọi. Trong ví dụ này this trỏ tới author và user.
//   };
// }
// let author = new User("Sơn", "Đặng", "Avatar");
// let user = new User("Hiếu", "Phạm", "Avatar");
// author.title = "Chia sẻ dạo tại F8";
// user.comment = "liệu có khoá asp.net k ad";
// console.log(author);
// console.log(user);

// CALLBACK
// là hàm (function) được truyền qua đối số
// khi gọi hàm khác
// 1. Là hàm
// 2. Được truyền qua một đối số
// 3. Được gọi lại (trong hàm nhận đối số)
// Hàm được truyền vào một hàm thì khi đó arguement là callback
// function myFunction(param){
//   param('Học lập trình')
// }
// function myCallback(value) {
//   console.log('Value: ', value)
// }
// myFunction(myCallback);

// HTML DOM (Document Object Model): quy chuẩn của w3c
// Trình duyệt đọc file HTML rồi mã hoá thành HTML DOM
// DOM có 3 thành phần(NODE):
// - element (h1, h2, p, a,...)
// - attribute (href, src,...)
// - text
// Js cung cấp phương tiện để truy xuất vào HTML DOM

// Browser: HTML -> DOM -> DOM API (application programming interface)
// DOM API (WEB API): chỉ có trên những nền tảng hỗ trợ mở web

// GET ELEMENT METHODS:
// - Element: ID, class, tag, CSS selector, HTML colleciton
// Select by ID: -> trả về element
// let headingNode = document.getElementById("heading");
// console.log(headingNode);
// Select by class: -> trả về collection. Có thể thao tác giống như thao tác với mảng.
// let getClass = document.getElementsByClassName("classname");
// console.log(getClass);
// Select by tag: -> trả về collection
// let getTag = document.getElementsByTagName("h2");
// console.log(getTag);
// Select by CSS selector: -> trả về element
// let getCssSelector = document.querySelector(".box h3");
// console.log(getCssSelector);

// DOM ATTRIBUTES:
// let headingElement = document.querySelector("h1");
// // Setter tạo attributes
// headingElement.title = "Heading"; // tạo một attribute title trong thẻ h1 hiển thị trên elements nhưgn ko hiển thị trên source code
// headingElement.className = "heading"; //tạo một attribute class trong h1
// //.setAttribute(attribute, attribute name)
// headingElement.setAttribute("class", "heading");
// // .getAttribute(attribute)
// console.log(headingElement.getAttribute("class"));
// // dùng thẳng để get và set attribute bằng cách:
// headingElement.title //nhược điểm là attribute phải phù hợp với element

// TEXT
// INNERTEXT VÀ TEXTCONTENT: dùng để sửa text trong thẻ
//let headingElement = document.querySelector("h1");
// getter
//console.log(headingElement.innerText);
// setter
//headingElement.innerText = "New Heading";
// Sự khác nhau giữa innertext và textcontent:
// innertext trả lại nội dung thấy giống như trong trình duyệt
// textcontent trả lại nguyên bản và tất cả khoảng cách ở trong thẻ kể cả những element node.
//console.log(headingElement.innerText);
//console.log(headingElement.textContent);
//headingElement.innerText = "<i>New Heading</i>" // trình duyệt không hiểu được thẻ i và tự hiệu là một đoạn text.

// INNERHTML PROPERTYPE: cách để thêm một element trong một element
// // innerHTML, outerHTML: 2 thuộc tính của element node
// let boxElement = document.querySelector(".Box");
// boxElement.innerHTML = "<h1 class= 'hehe'>Heading</h1>";
// console.log(boxElement.innerHTML); //<h1>Heading</h1> dạng string
// console.log(boxElement.outerHTML); //<div class="Box"><h1 class="hehe">Heading</h1></div>
// // Nếu dùng outHTML để setter thì nó sẽ ghi đè lên
// boxElement.outerHTML = "<span>Test</span>";

// DOM CSS:
// let boxElement = document.querySelector(".Box");
// boxElement.style.width = "100px";
// boxElement.style.height = "200px";
// boxElement.style.backgroundColor = "aqua";
// // Dùng Object.assign để hợp nhất 2 obj
// Object.assign(boxElement.style, {
//   width: "200px",
//   height: "100px",
//   backgroundColor: "green",
// });

// DOM EVENT:
// 1. Attibute Events
// 2. Assign event using element node
// let domEvent = document.querySelector("h1");
// domEvent.setAttribute("onclick", "console.log(Math.random())");
// DOM EVENT EXAMPLE:
// let inputElement = document.querySelector('input[type="text"]');
// let inputValue;
// inputElement.oninput = function (e) {
//   inputValue = e.target.value;
// };

// DOM CREATE ELEMENT:
// 1. document.createElement()
// 2. document.body.appendChild()
// 3. console.dir()
// 4. innerText, id, className, style

// const h1 = document.createElement("h1");
// h1.innerText = "Hello motherfucker!";
// console.log(h1);
// document.body.appendChild(h1); // lấy đến body và dùng appendChild để thêm thẻ h1 vào trong thẻ body.
// const box = document.querySelector(".Box");
// box.appendChild(h1);

// DOM EVENTS
// 1. preventDefault
// 2. stopPropagation

// EVENT LISTENER
