// CLASS:
// Đặt tên cho class quy ước là viết hoa chứ cái đầu tiên.

class Person {
  // Hàm khởi tạo
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  intro() {
    console.log(this.name + this.age);
  }
}

// Class có tính kế thừa. Nếu có 2 hàm giống nhau thì ngoài tính kề thừa class có khả năng ghi đè. Vdu 2 hàm intro() thì sẽ lấy intro() trong Student

class Student extends Person {
  constructor(name, age, university, className) {
    super(name, age); // Khi extends bắt buộc phải có hàm super để lấy constructor của Person
    this.university = university;
    this.className = className;
  }
  intro() {
    console.log("====" + this.name + this.age + "====");
  }
}
let str1 = new Student("Hieu", 20, "MindX", "CI");
str1.intro();
