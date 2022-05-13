// 화살표 함수 실습 1
// 화살표 함수는 익명함수이기에 변수에 할당해서 사용
let sum = (a, b) => a + b;
console.log(sum(1, 2));

// 선언적 함수의 모습
function sunFunction(a, b) {
  return a + b;
}

// 화살표 함수 실습 2
const words = [
  "spray",
  "limit",
  "elite",
  "exuberant",
  "destruction",
  "present",
];
let result = words.filter((word) => word.length <= 6);
console.log(result);
