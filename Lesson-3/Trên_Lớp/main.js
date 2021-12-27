// Hàm listButton.forEach((btn)=> btn.addEventListener()); tức là mỗi btn trong listButton sẽ được gán một eventListener

// cách comment một function cú pháp:
/**
 *
 */

// dấu ? dùng để check str trước khi check str.length
// function isEmptyString(str){
//   if(str?.length > 0 ){
//     return false;
//   }
//   return true;
// }

//Prototype trong Javascript

/**  OOP (hướng đối tượng): Object Oriented Programing
 * Class bản thiết kế có sẵn
 * Object là một thực thể được tạo ra từ bản thiết kế đó
 * 4 thuộc tính cơ bản của OOP:
 * 1. Kế thừa: thuộc tính và phương thức của thằng cha
 * 2. Đóng gói(che giấu): không thể truy xuất những thuộc tính một cách trực tiếp. Nhưng mà Js vẫn cho phép truy xuất trực tiếp.
 * 3. Đa hình:
 * 4. Trừu tượng:
 */
// Js không phải là OOP do không đảm bảo đúng tính chất

/** Class: bản thiết kế sẵn của một đối tượng
 * constructor(){} là một function mặc định được gọi ngay khi có từ khoá new.
 * instanceof : ktra xem object có phải của class hay không
 * Tính kế thừa khi dùng từ khoá extends và super().
 */

/** Component: được tạo ra để người dùng tái sử dụng
 *
 */

// Authentication

import Counter from "./Models/Counter.js";

const c1 = new Counter("c1");
const c2 = new Counter("c2");
const c3 = new Counter("c3");

console.log(typeof c1);
document.getElementById("app").appendChild(c1.render());
