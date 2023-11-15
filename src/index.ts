// index.ts

// 기본 출력법 === 자바스크립트 작성법
// .ts 출력
console.log("Hello, TypeScript");

// .ts 실행
//* 1. 디렉토리를 지정하고 실행 - node dist/index.js
//* 2. 디렉토리로 이동하고 실행 - cd .. / cd 등으로 디렉토리 이동하고 node index.js
//* 3. Node.js 디버거 세팅
//* 4. package.json을 수정 - npm start

// 타입 지정법: 타입을 먼저 지정하고 실수를 확인할 수 있다!
//! 각각 지정한 타입을 지키지 않으면 에러가 출력된다.
//* 할당될 수 없습니다 === 타입 불일치로 인한 에러
// 기본 타입 - 숫자, 문자열, 불리언
// number
let numberVar: number = "Hello"; // 'string' 형식은 'number' 형식에 할당할 수 없습니다.
// string
let stringVar: string = 123; // 'number' 형식은 'string' 형식에 할당할 수 없습니다.
// boolean
let booleanVar: boolean = "Hi" // 'string' 형식은 'boolean' 형식에 할당할 수 없습니다.

// 배열
// Array<number>
let number1Arr: Array<number> = [1, 2, 3]; 

// number[]
let number2Arr: number[] = [1, 2, 3];