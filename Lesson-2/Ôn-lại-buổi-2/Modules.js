// MODULES:
// Để sử dụng module thì trong thẻ <script> trong html phải thêm attribute type = "module"
// Modules: import/export
// trong file index.js: import modules from "./Modules";
// import chỉ có thể import hàm hoặc biến
// export chỉ có thể export hàm hoặc biến

// Cách 1: export default một module chỉ export được 1 lần. Tên được gọi sau khi import sẽ trả về hàm được export default
export const hieu = "Đẹp trai";
export const car = "Mercedes";
function logger(a) {
  console.log(a);
}
// import loggerr from "./Modules.js"; // trong file index.js. Import theo kiểu đặt tên bắt buộc phải export default
// import loggerr , {hieu ,car} from "./Modules.js"; cách import kết hợp giữa default và destructuring
export default logger;

// Cách 2: export destructuring
// Trong file Calculate.js
// const PI = 3.14;
// function add(a, b) {
//   return a + b;
// }
// const sub = function (a, b) {
//   return a - b;
// };
// const multi = (a, b) => {
//   return a * b;
// };
// const divide = (a, b) => a / b;
// import { add, sub, multi, divide } from "./Calculate.js";
// export { add, sub, multi, divide };

// Cách 3:
// import * as Tên_bất_kì from './Calculate.js';
// Lúc này nó sẽ biến Tên_bất_kì thành một object tên là Module chứa tất cả những thứ đã export trong file Calculate.js
