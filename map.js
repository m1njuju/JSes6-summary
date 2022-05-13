const num = [1, 4, 9, 16];
// map: 배열의 요소를 가져와서 결과(return)값을 배열로 반환
const map1 = num.map((n) => n * 2);

// return 값이 없을 경우 undifined값이 들어간다.
const map2 = num.map((n) => {
  n * 2;
});

console.log(map1);
console.log(map2);

// 배열 메서드.map() 실습
const numarray = [1, 16, 49, 121];
const numsqrt = numarray.map((x) => Math.sqrt(x));
console.log(numsqrt);
// 짝수인 경우에는 나누기 2의 값, 홀수인 경우에는 제곱근
const numresult = numarray.map((x) => {
  if (x % 2 == 0) {
    return x / 2;
  } else {
    return Math.sqrt(x);
  }
});
// 위의 내용을 삼항 연산자로 바꿔서 실행
const numresult1 = numarray.map((x) => {
  return x % 2 == 0 ? x / 2 : Math.sqrt(x);
});
console.log(numresult1);

// 삼항 연산자
let a = 10;
let b = 50;
let max = a > b ? a : b;
console.log(max);

if (a > b) {
  max = a;
} else {
  max = b;
}

// 삼항 연산자 실습 1
let accessAllowed;
let age = 30;
accessAllowed = age > 18 ? true : false;
console.log(accessAllowed);
