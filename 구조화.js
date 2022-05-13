const vehicles = ["mustang", "f-150", "expendition", "bike"];

// 구조화: 사용할 변수들의 이름을 모아서, 배열 기호 안에 나열한 후
// 다른 배열의 요소들을 순서에 맞게 할당받는다.
// 요소값이 필요하지 않은 경우는 빈칸으로 두고 작성한다.
const [car, , suv] = vehicles;
console.log(car);
console.log(suv);

// 구조화 실습 1
const fruit = ["사과", "바나나", "오렌지"];
const [apple, , orange] = fruit;
console.log(apple);
console.log(orange);

// 스프레드 연산자 (...) : 배열 혹은 객체의 값을 꺼내서 보여주는 연산자
const num1 = [1, 2, 3];
const num2 = [4, 5, 6];
const num = [...num1, ...num2];
console.log(num);
console.log(...num1);
// 두 개의 배열을 더할 때 사용하는 메서드 : concat
const numPlus = num1.concat(num2);
console.log(numPlus);

// 스프레드 연산자와 구조화: 구조화할 때 사용하게되면 남은 값을 다 들고온다(배열)
// 위에 작성한 num 배열을 구조화
const [one, two, ...rest] = num;
console.log(rest);

// 스프레드 연산자 실습 1
const myVehicle = {
  brand: "Ford",
  model: "Mustang",
  color: "red",
};

const updateMyVehicle = {
  type: "car",
  year: 2021,
  color: "yellow",
};

const myUpdatedVehicle = { ...myVehicle, ...updateMyVehicle };
console.log(myUpdatedVehicle);
