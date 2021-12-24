// PROMISES: hạn chế callback hell
// Object constructor
var promise = new Promise(
  // Executor
  function (resolve, reject) {
    // resolve: thành công. reject: lỗi
    // Logic: khi thành công thì gọi tới resolve. Thất bại gọi reject. Phải gọi resolve hoặc reject nếu ko thì promise sẽ ở trạng thái treo(Memory leak)
    resolve([
      {
        id: 1,
        name: "Javascript",
      },
    ]);
  }
);

// Có 3 phương thức thường được sử dụng với Promise
// Khi resolve() được gọi thì then có thể được sử dụng
// - .then(function(){})
// Khi reject() được gọi thì catch có thể được sử dụng. Catch được dùng để bắt lỗi
// - .catch(function(){})
// Khi một trong 2 resolve hoặc reject được gọi thì finally được gọi
// - .finally(function(){})

// Có 3 trạng thái của Promise:
// 1. Pending: trạng thái chờ để được xử lý của Promise khi mà chưa resolve hoặc reject. Trạng thái gây rò rỉ bộ nhớ.
// 2. Fulfilled: trạng thái chạy thành công (resolve).Resolve giống như return trong hàm cũng trả về một giá trị.
// 3. Reject: trạng thái thất bại(reject)

promise
  .then(function (courses) {
    console.log(courses);
  })
  .catch(() => {
    console.log("Failure!");
  })
  .finally(() => {
    console.log("Finally!");
  });
