console.log("Hello world");
//for문
// var는 for ()안에 작성하면 전역으로 선언
// let은 for ()안에 작성하면 스코프(유효범위)로 선언
for (let i = 0; i < 3; i++) {
  console.log(i);
}

// 자바스크립트 객체
let user = {
  name: "Jhon",
  age: 30,
};
// 함수 프로토타입
function User(name, age) {
  this.name = name;
  this.age = age;
}
// 함수로 생성한 객체(인스턴스)
let user1 = new User("jane", 30);
console.log(user);
console.log(user1);

// 클래스로 생성한 객체
class Car {
  // 클래스에서 속성 값을 할당할 때 사용하는 메서드
  constructor(name) {
    this.brand = name;
  }
  // 메서드는 동일하게 작성
  printbrand() {
    console.log(this.brand);
  }
}
let mycar = new Car("Ford");
mycar.printbrand();

// 클래스 실습 문제 1
class UserClass {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  get name() {
    return this._name + "님";
  }
  set name(value) {
    if (value.length < 3) {
      console.log("이름이 너무 짧습니다");
      return;
    }
    this._name = value;
  }
  sayhi() {
    console.log("반갑습니다 " + this.name + "입니다 " + this.age + "살입니다");
  }
}
let user2 = new UserClass("홍길동", 30);
user2.sayhi();
user2.name = "홍";
console.log(user2.name);

// 클래스 실습 문제 2
class Dog {
  constructor(family, name, age) {
    this.family = family;
    this.name = name;
    this.age = age;
  }
  get name() {
    return this._name;
  }
  set name(value) {
    if (value.length == "") {
      console.log("이름에 빈 값은 안 됩니다");
      return;
    }
    this._name = value;
  }
  sayhi() {
    console.log(`${this.family}인 ${this.name}입니다 ${this.age}살입니다`);
  }
}
const mydog = new Dog("진돗개", "백구", 1);
mydog.sayhi();
mydog.name = "";
console.log(mydog.name);

// 클래스의 상속
// 부모클래스
class Animal {
  constructor(name) {
    this.speed = 0;
    this.name = name;
  }
  run(speed) {
    this.speed = speed;
    console.log(`${this.name}는 ${this.speed}로 달립니다`);
  }
  stop() {
    this.speed = 0;
    console.log(`${this.name}이 멈췄습니다`);
  }
}
// extends를 이용해서 상속받는 자식 클래스
class Rabbit extends Animal {
  constructor(name, earLength) {
    // 부모클래스에서 받아온 속성값은 super()이용하여 생성
    super(name);
    // 추가된 속성은 this를 이용하여 생성
    this.earLength = earLength;
  }
  hide() {
    console.log(`${this.name}가 숨었습니다`);
  }
  // 부모클래스에서도 있는 stop 메서드를 오버라이딩
  stop() {
    // 부모에 있는 stop을 가져와서 출력 - super키워드 사용
    super.stop();
    // 자기 자신에 있는 hide를 가져와서 출력 - this키워드 사용
    this.hide();
  }
}
// 자식 클래스로 객체 생성
let rabbit = new Rabbit("흰 토끼", 10);
rabbit.run(5); // 부모클래스의 메서드 사용
rabbit.hide(); // 자식클래스의 메서드 사용
rabbit.stop(); // 자식클래스에서 오버라이딩한 메소드가 출력
console.log(rabbit.earLength);

// 클래스 상속 실습 문제 1
class Student extends UserClass {
  constructor(name, age, major) {
    super(name, age);
    this.major = major;
  }
  study() {
    console.log(`${this.major}을 공부합니다`);
  }
  sayhi() {
    console.log(`${this.major}을 공부하는 ${this.name}입니다`);
  }
}

let student = new Student("홍길동", 30, "코딩");
student.study();
student.sayhi();

// 클래스 상속 실습 문제 2
// Dog을 상속받는 HouseDog 클래스
class HouseDog extends Dog {
  constructor(family, name, age, address) {
    super(family, name, age);
    this.address = address;
  }
  intro() {
    super.sayhi();
    console.log(`${this.address}에 살고 있습니다`);
  }
}

let mydog1 = new HouseDog("진돗개", "백구", "1", "부산");
mydog1.intro();
