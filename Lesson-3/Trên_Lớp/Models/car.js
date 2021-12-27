class Car {
  brand;
  name;
  engine;
  speed;
  constructor(_name, _brand, _engine, _speed) {
    this.brand = _brand;
    this.name = _name;
    this.engine = _engine;
    this.speed = _speed;
  }
  run() {
    console.log("This car is running.");
  }
}
// fadil là một object được tạo ra từ Car
const fadil = new Car("Fadil", "Vinfast", "1.8L", "100km/h");
console.log(fadil);
console.log(typeof fadil);
console.log(fadil instanceof Car); // -> true

class Vinfast extends Car {
  madeIn;
  constructor(_name, _brand, _engine, _speed, _madeIn) {
    super(_name, _brand, _engine, _speed);
    this.madeIn = _madeIn;
  }
  run() {
    console.log("Xe vinfast không thèm chạy");
  }
}
const fadil2 = new Vinfast("Fadil", "Vinfast", "1.8L", "100km/h", "Vietnam");
console.log(fadil2);

class Mec extends Car {
  brandOfWheels;
  constructor(_name, _brand, _engine, _speed, _brandOfWheels) {
    super(_name, _brand, _engine, _speed);
    this.brandOfWheels = _brandOfWheels;
  }
  run() {
    console.log("Bánh xe của taù nên dừng lại rồi");
  }
}
const fadil3 = new Mec("Mec", "Vinfast", "1.8L", "100km/h", "Vietnam");
console.log(fadil2);

fadil2.run();
