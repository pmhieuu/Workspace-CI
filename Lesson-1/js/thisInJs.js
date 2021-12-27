// THIS:
// TỪ KHOÁ THIS TRONG HÀM VOID TRỎ VỀ OBJECT ĐỨNG TRƯỚC DẤU CHẤM
// TỪ KHOÁ THIS TRONG HÀM ARROW FUNCTION TRỎ VỀ GLOBAL OBJECT
// Đứng ngoài phương thức this tham chiếu tới đối tượng global
// this trong hàm tạo là đại diện cho đối tượng sẽ được tạo
// this trong một hàm là undefined khi ở strict mode
// Các phương thức bind(), call(), apply() có thể tham chiếu this tới đối tượng khác

// const iPhone7 = {
//   // Properties - thuộc tính
//   name: "iphone 7",
//   color: "pink",
//   weight: 300,
//   takePhoto() {
//     console.log(this); //this ở đây trỏ tới obj iphone7
//   },
//   objChild: {
//     methodChild(){
//       console.log(this) // this ở đây tham chiếu tới obj objChild
//     }
//   }
// };
// console.log(iPhone7.takePhoto());
// iPhone7.objChild.methodChild()

// HÀM TẠO:
// function Car(name, color, weight) {
//   this.name = name; // this ở đây là khuôn để tạo ra đối tượng
//   this.color = color;
//   this.weight = weight;
//   this.run = function () {
//     console.log("Running...", this);  // this ở đây trả về thằng mercedesS450
//   };
// }
// const mercedesS450 = new Car("Mercedes S450", "black", 1200);
// console.log(mercedesS450.run());

// THIS KHI ĐỨNG NGOÀI PHƯƠNG THỨC TRẢ VỀ OBJECT GLOBAL (WINDOW):
//console.log(this)
// function myFunc() {
//   console.log(this);
// }
// myFunc();

// Trường hợp đặc biệt 1: trong phương thức có void function chứa this thì this trỏ tới global (window)
// function Car(name, color, weight) {
//   this.name = name; // this ở đây là khuôn để tạo ra đối tượng
//   this.color = color;
//   this.weight = weight;
//   this.run = function () {
//     console.log(this); //this ở đây tham chiếu đến đối tượng sử dụng
//     // Context
//     function test() {
//       console.log("Running...", this); // this ở đây là trong một hàm chứ không phải trong một phương thức nên đối tượng this trỏ về ở đây sẽ là window
//     }
//   };
// }
// const mercedesS450 = new Car("Mercedes S450", "black", 1200);
// console.log(mercedesS450.run());

// Trường hợp đặc biệt 2: trong phương thức có arrow function chứ this thì this ở đây giống với this trong phương thức vì arrow function ko có context.
// function Car(name, color, weight) {
//   this.name = name; // this ở đây là khuôn để tạo ra đối tượng
//   this.color = color;
//   this.weight = weight;
//   this.run = function () {
//     console.log(this); //this ở đây tham chiếu đến đối tượng sử dụng
//     // Context
//     const test = () => {
//       console.log("Running...", this); // this ở đây là trong một hàm chứ không phải trong một phương thức nên đối tượng this trỏ về ở đây sẽ là window
//     };
//   };
// }
// const mercedesS450 = new Car("Mercedes S450", "black", 1200);
// console.log(mercedesS450.run());

// CÁC PHƯƠNG THỨC bind(), call(), apply():
// bind(objectName, argument1, argument2)
// bind trả về hàm mới với một this mới chứ không hề thay đổi obj cũ. Method tạo ra sau khi hàm bind() trả về vẫn có thể nhận được những đối số ban đầu.

// khai báo trên window
// this.firstName = "Minh";
// this.lastName = "Thu";

// const teacher = {
//   firstName: "Minh",
//   lastName: "Thảo",
//   getFullName(a, b) {
//     console.log(a, b);
//     return `${this.firstName} ${this.lastName}`;
//   },
// };
// // case 1:
// console.log(teacher.getFullName()); //"Minh Thảo"
// // case 2:
// const getTeacherName = teacher.getFullName; //getTeacherName đang sao chép vùng nhớ của teacher.getFullName
// // do gọi hàm không có dấu . đằng trước hay khôgn có đối tượng đứng trước thì this sẽ trỏ tới window
// console.log(getTeacherName()); // "Minh Thu"

// //case 3:
// // bind(objectName, argument1, argument2)
// const GetTeacherName = teacher.getFullName.bind(teacher, 3, 4); //bind ràng buộc GetTeacherName với obj teacher cho nên this ở đây sẽ tham chiếu tới teacher.
// console.log(GetTeacherName()); //"Minh Thảo"

// call()
// một cách để gọi hàm
// function myFunc() {
//   console.log(Math.random());
// }
// myFunc.call();

// const teacher = {
//   firstName: "Minh",
//   lastName: "Thu",
// };
// const me = {
//   firstName: "Hiếu",
//   lastName: "Phạm",
//   getFullName() {
//     console.log(`${this.firstName} ${this.lastName}`);
//   },
// };
// me.getFullName(); //"Hiếu Phạm"
// // call cũng giống như bind dùng để cố định đối tượng cho this.
// me.getFullName.call(teacher); //"Minh Thu"

// call có tình kết thừa

// function Animal(name, weight) {
//   this.name = name;
//   this.weight = weight;
// }

// function Chicken(name, weight, legs) {
//   //dùng call để gọi function Animal, dùng call để bind để ràng buộc. this ở đây tham chiếu tới sonDang
//   Animal.call(this, name, weight);
//   this.legs = legs;
// }

// const sonDang = new Chicken("Sơn Đặng", 66, 2);
// console.log(sonDang);
