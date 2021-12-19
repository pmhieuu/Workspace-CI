// VALUE TYPES AND REFERENCE TYPES (THAM TRỊ VÀ THAM CHIẾU):
// VALUE TYPES:
// let a = 1;
// let b = a;
// a = 2;
// console.log(b);

// BIẾN       GIÁ TRỊ       Ô NHỚ
// a          1             1
// b          1             1
// với a = 2: sửa giá trị trong ô nhớ của a thành 2
// BIẾN       GIÁ TRỊ       Ô NHỚ
// a          2             2
// b          1             1

// REFERENCE TYPES:
// let a = {
//   name: "mercedes",
// };
// let b = a;
// a.name = "BMW";
// console.log(b);

// Với const a = { name: 'mercedes'}: Tạo biến a, cấp một ô nhớ, lưu { name: 'mercedes' } vào ô nhớ, trả về địa chỉ đã lưu và gán cho biến a. Khi dùng reference type thì JS sẽ truy xuất đến địa chỉ lưu vào biến và lấy giá trị trong ô nhớ.

// BIẾN       GIÁ TRỊ       Địa chỉ      Ô NHỚ
// a          <#001>        #001         { name: 'mercedes' }
// với let b = a: Tạo ra biến b, trỏ biến b tới cùng địa chỉ ô nhớ của biến a. Chép địa chỉ biến a vào biến b.

// BIẾN       GIÁ TRỊ       Địa chỉ      Ô NHỚ
// a          <#001>        #001         { name: 'mercedes' }
// b          <#001>

// Với a.name = "BMW" : sửa giá trị của key name trong ô nhớ thành 'BMW'. Do khi sửa a.name tức là thay đổi giá trị của ô nhớ mà cả a và b đều trỏ tới cùng một ô nhớ nên sửa a thì b cũng thay đổi theo

// Trường hợp tạo 2 reference types
// let a = {
//   name: "mercedes",
// };
// a = {
//   name: "BMW",
//   model: "i8",
// };
// BIẾN       GIÁ TRỊ       Địa chỉ      Ô NHỚ
// a          <#002>        #001         { name: 'mercedes' }
//                          #002         { name: 'BMW', model: 'i8'}

// Cứ thấy một biến/hằng được tạo ra và gán cho nó một biến khác là object thì các biến/hằng này đều trỏ về một địa chỉ ô nhớ.

// Trường hợp object chứa object con:

const student = {
  name: "Oanh Ha",
  profile: {
    firstName: "Oanh",
    lastName: "Ha",
    introduction: "Girl",
  },
};

// Tạo ra 2 object, object thứ nhất được gán cho student. Object thứ 2 được gán cho key profile.
// student đang lưu địa chỉ ô nhớ của object đã gán cho nó
// Key profile trong object trên cũng đang lưu địa chỉ ô nhớ của object đã gán cho nó
// BIẾN       GIÁ TRỊ       Địa chỉ      Ô NHỚ
//                          #001         { firstName:'Oanh', lastName:'Ha',introduction:'Girl' }
// student    <#002>        #002         { name: 'Oanh Ha', profile: <#001> }

// 2 CÁCH THAY ĐỔI TRỰC TIẾP GIÁ TRỊ CỦA THAM CHIẾU:

// CÁCH 1: DEEP CLONE
// let a = {
//   name: "mercedes",
// };
// let b = JSON.parse(JSON.stringify(a));
// // Hàm stringify dùng để mã hoá obj a sang string còn parse dùng để chuyển hoá string về lại obj nhưng là một obj với một địa chỉ và ô nhớ mới
// // Nhược điểm cách này là nếu object nhiều dung lượgn thì sẽ lâu vì nó sẽ mã hoá tất cả trong obj.
// b.name = "BMW";
// console.log(a);
// console.log(b);

// CÁCH 2: SHALLOW CLONE (copy nông):
// let a = {
//   name: "mercedes",
// };
// // Toán tử spread {...obj} - destructuring. Cách này không áp dụng với các obj lồng nhau. Các object con vẫn sẽ trỏ tới vùng nhớ cũ
// let b = { ...a };
// b.name = "BMW";
// console.log(a);
// console.log(b);
