// EVENT:
// 3 cách để sử dụng event:
// 1. Thêm thẳng trên html (trong một số dự án cấm ko cho sử dụng. Khi thêm thẳng vào html thì khó để chỉnh hàm cũng như khó để thêm hàm. Chỉ gán được 1 function)
// function clickMe() {
//   console.log("ChungBien");
// }

// 2. Sử dụng Js (cách này flexible dễ thêm sửa. Giống cách 1 chỉ nhét được 1 function)
// const btnSubmit = document.getElementById("btn-primary");
// btnSubmit.onclick = clickMe;

// 3. .addEventListener (cáhc thông dụng được sử dụng nhiều nhất)
// btnSubmit.addEventListener("click", clickMe);
// btnSubmit.addEventListener("click", () => {
//   console.log("arrow function");
// });
// btnSubmit.addEventListener("click", function () {
//   console.log("normal function");
// });

// Ví dụ:
// const btnSubmit = document.getElementById("btn-primary");
// const inputText = document.getElementById("input-text");
// const myForm = document.getElementById("my-form");
// inputText.addEventListener("change", (event) => {
//   console.log("change - ", event.target.value); //target ở đây là mục tiêu của Event ở đây là inputText
//   // khi gõ trên input
// });
// inputText.addEventListener("focus", (event) => {
//   console.log("focus - ", event.target.value);
// });
// inputText.addEventListener("change", (event) => {
//   console.log("change - ", event.target.value);
// });
// myForm.addEventListener("submit", (e) => {
//   e.preventDefault();
//   console.log(e.target.fText.value);
//   // form là một object cha. fText là một thẻ input và là một object chứa value
// });

// MODULE
// Trong thẻ script bên html phải điền type ="module"
// Trong file js export cái gì thì trong một file js khác có thể import những cái đó
// import { add, PI, sub, multi } from "./calculate.js";
// import Hieu from "./calculate.js"; //cái này chỉ import multi do bên kia export default multi.
// Cách chuẩn:
// import Cal from "./calculate.js";\
// console.log(Cal.add(10, Cal.PI));

// JS Engine: stack & heap
// JS là ngôn ngữ hỗ trợ đơn luồng tức là 1 việc tại một thời điểm
// Đồng bộ: chạy code từ trên xuống dưới làm việc tuần tự
// Bất đồng bộ: chạy lung tung

// Async Callback: những tác vụ sau một khoảng thời gian mới chạy
// Vdu:
// Callback Hell
// hocbai(function(ketqua){
//   xinmemuaxe(function(xe){
//     chogaidichoi(function(gai){
//       gotohotel(function(){});
//     });
//   });
// });

//Những call back mất thời gian thì Js dùng WEB API(gồm settimeout, setinterval,fetch(XML,HttpRequest),event) do browser cung cấp để xử lý.
// Js thì đơn luồng nhưng web API thì đa luồng xử lý được song song cho nên ví dụ dưới là do web api xử lý rồi js lấy về xử lý
console.log("1");
setTimeout(() => {
  console.log("5s");
}, 5000);
setTimeout(() => {
  console.log("0s");
}, 0);
setTimeout(() => {
  console.log("2s");
}, 2000);
console.log("2");
// có callback queue để chứa những xử lý bất đồng bộ hàm nào xong sẽ ở trong đấy. Sau đấy sẽ được eventloop đẩy lên stack với điều kiện là có stack rỗng và phải có callback đang chờ trong callback queue.
// Thứ tự chạy chương trình trên là: trong stack sẽ in "1" và "2" để đẩy ra ngoài stack. Trong lúc đấy "0s" đang chờ stack rỗng để eventloop có thể đẩy "0s" lên stack
// Js runtime

// Promise
// Có 3 trạng thái:
// 1. pending
// 2. fullfiled
// 3. reject
// học_bai là một promise có thể then một lần nữa
// hoc_bai()
//   .then((kq) => {
//     return xin_me_mua_xe(kq);
//   })
//   .then((xe) => {
//     return cho_gai_di_choi(xe);
//   })
//   .then(() => {
//     return go_to_hotel();
//   })
//   .catch((err) => {
//     console.log(err);
//   });
// promise dùng để giải quyết callback hell

function delay(timer) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("ABC"); //trả ra kết quả khi fullfiled, reject trả ra kq khi thất bại
    }, timer);
  });
}
// delay(2000)
//   .then((str) => {
//     return delay(1000);
//   })
//   .then(() => {
//     return delay(1000);
//   });

// async await

async function codeWithDelay() {
  console.log("Start");
  const str = await delay(4000); //đợi 4 s để có str
  console.log(str);
  console.log("End");
}
codewithDelay();
