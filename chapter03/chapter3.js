let currentTempC = 22;  // ES6 let 뉴 문법 등장 변수 선언 및 초기 값 할당
let currentTempC1;       // 묵시적 undefined
let targetTempC, room1 = "conference_room_a", room2= "lobby";   //여러개 동시에 선언 가능 묵시적 초기화도 가능
const ROOM_TEMP_C = 21.5, MAX_TEMP_C = 30;      // ES6 상수 등장, let과 마찬가지로 동시에도 가능

// 숫자
let count = 10;
const blue = 0x0000ff;
const umask = 0x0022;
const roomTemp = 21.5;
const c = 3.0e6;
const e = -1.6e-19;         // 지수 활용한 소수점 표현
const inf = Infinity;       // 양수 무한대
const ninf = -Infinity;     // 음수 무한대
const nan = NaN;            // 알수없는 숫자

const small = Number.EPSILON;               //1에 더했을때 구분되는 결과를 만들 수 있는 가장 작은 값
const bigInt = Number.MAX_SAFE_INTEGER;     //표현할 수 있는 가장 큰 정수
const max = Number.MAX_VALUE;               //표현할 수 있는 가장 큰 숫자
const minInt = Number.MIN_SAFE_INTEGER;     //표현할 수 있는 가장 작은 정수
const min = Number.MIN_VALUE;               //표현할 수 있는 가장 작은 숫자
const n_nInf = Number.NEGATIVE_INFINITY;    //음수 무한대
const n_inf = Number.POSITIVE_INFINITY;     //양수 무한대
const n_nan = Number.NaN;                   //숫자에러

//문자열
const dialog = 'Sam looked up, and said "hello, load friend!", as Max walked in.';
const imperative = "Don`t do that!";
const example_dialog = "Sam looked up and said \"don`t do that!\" to Max";
const example_imperative = "Dont` \n do that!";
const backtick = `${dialog}, \n${imperative}`;

const multiline = "line1\n\
line2";

const bMultiline = `line1
    line2
    line3`;

const lMultiline =  'line1\n' +
                    'line2\n' +
                    'line3';

const result1 = 3 + '30';
const result2 = 3 * '30';

const symbol1 = Symbol(result1);
const symbol2 = Symbol(result1);

let udCurrentTemp;          // 암시적으로 undefined
const udTargetTemp = null;  // 아직 모르는 값

//객체
const obj = {};

//출력
console.log(currentTempC);
console.log(currentTempC1);
console.log(targetTempC, room1, room2);
console.log(ROOM_TEMP_C, MAX_TEMP_C);

console.log('정수:',count);
console.log('진법', blue, umask);
console.log('실수',roomTemp, c, e);
console.log('무한대', inf, ninf);
console.log('숫자에러',nan);

console.log(dialog);
console.log(imperative);
console.log(example_dialog);
console.log(example_imperative);
console.log(backtick);

console.log(multiline);
console.log(bMultiline);
console.log(lMultiline);

console.log(result1);
console.log(result2);

console.log('symbol1:',symbol1, 'symbol2',symbol2,'sym1 is sym2? :', symbol1 == symbol2);
