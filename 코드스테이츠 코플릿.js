/* test01 06_findShortestOfThreeWords 
입력
인자 1 : word1
string 타입의 문자열
word1.length는 10 이하
인자 2 : word2
string 타입의 문자열
word2.length는 10 이하
인자 3 : word3
string 타입의 문자열
word3.length는 10 이하
출력
string 타입을 리턴해야 합니다.
주의 사항
동일한 길이의 문자열 중에서는 처음 입력받은 문자열을 리턴해야 합니다.
입출력 예시
let output = findShortestOfThreeWords('a', 'two', 'three');
console.log(output); // --> 'a'

output = findShortestOfThreeWords('c', 'b', 'a');
console.log(output); // --> 'c' */
function findShortestOfThreeWords(word1, word2, word3) {
  let s = word1;

  if (word1.length > word2.length) {
    s = word2;
    if (word2.length > word3.length) {
      s = word3;
    }
  } else if (word1.length > word3.length) {
    s = word3;
  }
  return s;
}

/* test2 (조건문)
convertScoreToGradeWithPlusAndMinus
문제
점수를 입력받아 점수에 해당하는 등급을 리턴해야 합니다.

입력
인자 1 : score
number 타입의 정수
출력
string 타입을 리턴해야 합니다.
각 등급의 최저 점수는 아래와 같습니다. ('F'의 경우 최대 점수를 표기)
90 이상 --> 'A'
80 이상 --> 'B'
70 이상 --> 'C'
60 이상 --> 'D'
60 미만 --> 'F'
주의 사항
만약 주어진 점수가 100을 초과하거나 0 미만인 경우, 문자열 'INVALID SCORE'를 리턴해야 합니다.
각 등급의 최고 점수보다 7점 이하인 경우, 등급과 함께 '-'를 리턴해야 합니다.
각 등급의 최저 점수보다 8점 이상인 경우, 등급과 함께 '+'를 리턴해야 합니다.
F+ 와 F- 는 존재하지 않습니다.
입출력 예시
let output = convertScoreToGradeWithPlusAndMinus(91);
console.log(output); // --> 'A-'
*/
function plusOrMinus(score) {
  const extra = score % 10;
  if (extra <= 2) {
    return "-";
  } else if (extra >= 8) {
    return "+";
  } else {
    return "";
  }
}
function convertScoreToGradeWithPlusAndMinus(score) {
  let grade;
  if (score > 100 || score < 0) {
    return "INVALID SCORE";
  }
  if (score === 100) {
    return "A+";
  }
  if (score >= 90) {
    grade = "A";
  } else if (score >= 80) {
    grade = "B";
  } else if (score >= 70) {
    grade = "C";
  } else if (score >= 60) {
    grade = "D";
  } else if (score >= 0) {
    grade = "F";
  }

  if (grade !== "F") {
    grade = grade + plusOrMinus(score);
  }
  return grade;
}

/* test3 (문자열)
findShortestOfThreeWords
문제
차례대로 문자열 3개를 입력받아, 가장 짧은 문자열을 리턴해야 합니다.

입력
인자 1 : word1
string 타입의 문자열
word1.length는 10 이하
인자 2 : word2
string 타입의 문자열
word2.length는 10 이하
인자 3 : word3
string 타입의 문자열
word3.length는 10 이하
출력
string 타입을 리턴해야 합니다.
주의 사항
동일한 길이의 문자열 중에서는 처음 입력받은 문자열을 리턴해야 합니다.
입출력 예시
let output = findShortestOfThreeWords('a', 'two', 'three');
console.log(output); // --> 'a'

output = findShortestOfThreeWords('c', 'b', 'a');
console.log(output); // --> 'c' */
function findShortestOfThreeWords(word1, word2, word3) {
  let shortestWord = word1;

  // 첫 번 째 글자가 2번째 글자보다 길 때
  if (word1.length > word2.length) {
    shortestWord = word2;
    // word 2 랑 word 3을 비교
    if (word2.length > word3.length) {
      shortestWord = word3;
    }
  } else {
    // word1 과 word3 을 비교
    if (word1.length > word3.length) {
      shortestWord = word3;
    }
  }
  return shortestWord;
}
//내풀이
function findShortestOfThreeWords(word1, word2, word3) {
  // TODO: 여기에 코드를 작성합니다.
  let one = word1.length;
  let two = word2.length;
  let thr = word3.length;

  let result = word1;

  if (one > two && thr > two) {
    result = word2;
  }

  if (two > thr && one > thr) {
    result = word3;
  }
  return result;
}

/* test4 (반복문)
makeMultiplesOfDigit
문제
수를 입력받아 1부터 해당 수까지의 수 중에서 3의 배수로만 구성된 문자열을 리턴해야 합니다.

입력
인자 1 : num
number 타입의 정수 (num >= 0) 이상의 정수)
출력
string 타입을 리턴해야 합니다.
주의 사항
반복문(for)문을 사용해야 합니다.
숫자(number string) 사이의 구분은 없습니다. ('3691215')
3의 배수가 없을 경우, 빈 문자열을 리턴해야 합니다.
입출력 예시
let output = makeMultiplesOfDigit(7);
console.log(output); // --> "36"

output = makeMultiplesOfDigit(19);
console.log(output); // --> "369121518" */
function makeMultiplesOfDigit(num) {
  let result = "";

  for (let i = 3; i <= num; i += 3) {
    result = result + String(i);
  }

  return result;
}
//내풀이
function makeMultiplesOfDigit(num) {
  // TODO: 여기에 코드를 작성합니다.
  let n = Math.floor(num / 3);
  let num3 = 3;
  let result = "";

  for (let i = 2; i <= n + 1; i++) {
    result = result + String(num3);
    num3 = 3;
    num3 = num3 * i;
  }
  return result;
}

/* test5 (반복문)
makePermutations
문제
문자열을 입력받아 해당 문자열에 등장하는 각 문자(letter)를 가지고 만들 수 있는 길이 2의 문자열들을 리턴해야 합니다.

입력
인자 1 : str
string 타입의 문자열
출력
string 타입을 리턴해야 합니다.
입력받은 문자열의 각 문자를 0, 1, 2, ..., n이라고 할 경우, 00,01,02,...,nn 형식으로 리턴해야 합니다.
주의 사항
이중 반복문(double for loop)을 사용해야 합니다.
빈 문자열을 입력받은 경우에는 빈 문자열을 리턴해야 합니다.
입출력 예시
let output = makePermutations('ab');
console.log(output); // --> 'aa,ab,ba,bb'

output = makePermutations('123');
console.log(output); // --> '11,12,13,21,22,23,31,32,33'

output = makePermutations('');
console.log(output); // --> '' */
function makePermutations(str) {
  let result = "";
  for (let left = 0; left < str.length; left++) {
    for (let right = 0; right < str.length; right++) {
      result = result + `${str[left]}${str[right]},`;
    }
  }

  return result.slice(0, result.length - 1);
}

/* test6 (반복문)
makeMarginalString
문제
문자열을 입력받아 해당 문자열을 처음부터 한 글자(letter)씩 다시 작성하려고 합니다. 이 때, 한 글자를 추가할 때마다 부분적으로 완성된 문자열을 전부 이어붙인 문자열을 리턴해야 합니다.

입력
인자 1 : str
string 타입의 문자열
출력
string 타입을 리턴해야 합니다.
주의 사항
이중 반복문(double for loop)을 사용해야 합니다.
str.slice, str.substr, str.substring 사용은 금지됩니다.
빈 문자열을 입력받은 경우에는 빈 문자열을 리턴해야 합니다.
입출력 예시
let output = makeMarginalString('abc');
console.log(output); // --> 'aababc'

output = makeMarginalString('flower');
console.log(output); // --> 'fflfloflowfloweflower'

output = makeMarginalString('');
console.log(output); // --> '' */
function makeMarginalString(str) {
  let result = "";

  for (let i = 0; i < str.length; i++) {
    for (let j = 0; j <= i; j += 1) {
      result = result + str[j];
    }
  }

  return result;
}
/*
listPrimes
문제
1 이상의 자연수를 입력받아 2부터 해당 수까지의 소수(prime number)들을 리턴해야 합니다.

입력
인자 1 : num
number 타입의 정수 (num >= 2)
출력
string 타입을 리턴해야 합니다.
2-3-5-7의 형식으로 리턴해야 합니다.
주의 사항
이중 반복문(double for loop)을 사용해야 합니다.
입출력 예시
let output = listPrimes(2);
console.log(output); // --> '2'

output = listPrimes(6);
console.log(output); // --> '2-3-5'

output = listPrimes(18);
console.log(output); // --> '2-3-5-7-11-13-17'
힌트
반복문의 break 문에 대해서 학습합니다. (javascript loop break)*/

//내풀이
function listPrimes(num) {
  // TODO: 여기에 코드를 작성합니다.
  if (num === 2) {
    return "2";
  }
  let result = "";
  for (let i = 1; i <= num; i++) {
    let count = 0;
    for (let j = 1; j < i; j++) {
      if (i % j === 0) {
        count = count + 1;
      }
    }
    if (count === 1) {
      result = result + "-" + String(i);
    }
  }
  return result.slice(1);
}
//정답
function listPrimes(num) {
  let result = "2";
  for (let candi = 3; candi <= num; candi += 2) {
    let isPrime = true;
    let sqrt = parseInt(Math.sqrt(candi));
    for (let divider = 3; divider <= sqrt; divider += 2) {
      if (candi % divider === 0) {
        isPrime = false;
        break;
      }
    }

    if (isPrime) {
      result = `${result}-${candi}`;
    }
  }

  return result;
}

/* test7 (배열)
fibonacci
문제
수(num)를 입력받아 num번째까지 총 num + 1개의 피보나치 수열을 리턴해야 합니다.

0번째 피보나치 수는 0이고, 1번째 피보나치 수는 1입니다. 그 다음 2번째 피보나치 수부터는 바로 직전의 두 피보나치 수의 합으로 정의합니다.
0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, ...

입력
인자 1 : num
number 타입의 num (num은 0 이상의 정수)
출력
배열을 리턴해야 합니다.
주의 사항
반복문(for)문을 사용해야 합니다.
피보나치 수열은 0번부터 시작합니다.
입출력 예시
let output = fibonacci(5);
console.log(output[5]); // --> 5

output = fibonacci(9)[9];
console.log(output); // --> 34
*/
function fibonacci(num) {
  let fibNum = [];

  for (let i = 0; i <= num; i++) {
    if (i === 0) {
      fibNum.push(0);
    } else if (i === 1) {
      fibNum.push(1);
    } else {
      fibNum.push(fibNum[i - 2] + fibNum[i - 1]);
    }
  }

  return fibNum;
}
//내풀이
function fibonacci(num) {
  if (num === 0) {
    return [0];
  }
  if (num === 1) {
    return [0, 1];
  }
  let result = [0, 1];
  let first = 0;
  let second = 1;

  for (let i = 0; i < num - 1; i++) {
    let next = first + second;
    first = second;
    second = next;
    result.push(second);
  }
  return result;
}

/* test8 (객체)
extend
문제
두 개의 객체를 입력받아 두번째 객체의 속성들을 첫번째 객체에 추가해야 합니다.

입력
인자 1 : obj1
임의의 속성을 갖는 객체
인자 2 : obj2
임의의 속성을 갖는 객체
출력
별도의 리턴문(return statement)을 작성하지 않습니다.
주의 사항
추가하려는 속성이 이미 첫번째 객체에 존재하는 경우, 기존 값을 그대로 둡니다.
두번째 객체는 수정하지 않아야 합니다.
입출력 예시
const obj1 = {
  a: 1,
  b: 2,
};

const obj2 = {
  b: 4,
  c: 3,
};

extend(obj1, obj2);
console.log(obj1); // --> {a: 1, b: 2, c: 3}
console.log(obj2); // --> {b: 4, c: 3} */
function extend(obj1, obj2) {
  for (let key in obj2) {
    if (!(key in obj1)) {
      obj1[key] = obj2[key];
    }
  }
}
//내풀이
function extend(obj1, obj2) {
  // TODO: 여기에 코드를 작성합니다.
  // 객체1이 객체2의 첫번째를 포함하느냐? 두번째를 포함하느냐?
  // 만약 포함하지 않는다면? 추가를 한다.
  for (let key in obj2) {
    if (!obj1.hasOwnProperty(key)) {
      obj1[key] = obj2[key];
    }
  }
}

/* test9 (객체)
mostFrequentCharacter
문제
문자열을 입력받아 가장 많이 반복되는 문자(letter)를 리턴해야 합니다.

입력
인자 1 : str
string 타입의 공백이 있는 문장
출력
string 타입을 리턴해야 합니다.
주의 사항
띄어쓰기는 제외합니다.
가장 많이 반복되는 문자가 다수일 경우, 가장 먼저 해당 횟수에 도달한 문자를 리턴해야 합니다.
빈 문자열을 입력받은 경우, 빈 문자열을 리턴해야 합니다.
입출력 예시
let output = mostFrequentCharacter('apples not oranges');
console.log(output); // --> 'p'

output = mostFrequentCharacter('hello world');
console.log(output); // --> 'l'

output = mostFrequentCharacter('   ');
console.log(output); // --> ''

output = mostFrequentCharacter('');
console.log(output); // --> ''

output = mostFrequentCharacter('abba');
console.log(output); // --> 'b' */

function mostFrequentCharacter(str) {
  let obj = { mostCount: 0, mostFrequent: "" };
  for (let i = 0; i < str.length; i++) {
    if (str[i] === " ") {
      continue;
    }

    if (obj[str[i]] === undefined) {
      obj[str[i]] = 0;
    }
    obj[str[i]] += 1;

    if (obj[str[i]] > obj["mostCount"]) {
      obj["mostCount"] = obj[str[i]];
      obj["mostFrequent"] = str[i];
    }
  }
  return obj["mostFrequent"];
}
//내풀이
function mostFrequentCharacter(str) {
  let obj = {};
  for (let key of str) {
    if (key === " ") {
      continue;
    }
    if (!(key in obj)) {
      obj[key] = 1;
    } else {
      obj[key] = obj[key] + 1;
    }
  }
  let count = 0;
  let result = "";
  for (let key in obj) {
    if (obj[key] > count) {
      count = obj[key];
      result = key;
    }
  }
  return result;
  // 이렇게 풀면 "abcddcba"이 d가 답이여야하는데, 답이 a가 나와버린다.
  // 즉, 가장 빨리 만들어진 값을 도출하지를 못한다.
}
//내가 푼 건데 맞춤
function mostFrequentCharacter(str) {
  // TODO: 여기에 코드를 작성합니다.
  //포문을 돌리면서 값을 넣고, 넣으면서 그 값을 유지하는 식으로 가야할 거 같다.
  let obj = { string: "", count: 0 };

  for (let key of str) {
    if (key === " ") {
      continue;
    }
    if (!(key in obj)) {
      //키 값이 없으면?
      obj[key] = 1;
      if (obj.string === "") {
        obj.string = key;
        if (obj.count < obj[key]) {
          obj.count = obj[key];
        }
      }
    } // 키값이 있으면?
    else {
      obj[key] = obj[key] + 1;
      if (obj[key] > obj.count) {
        obj.count = obj[key];
        obj.string = key;
      }
    }
  }
  return obj.string;
}

/* test10 (고차함수)
pipe
문제
함수들을 입력받아 함수들이 입력된 차례대로 결합된 새로운 함수를 리턴해야 합니다.

입력
인자 1 : func1
number 타입을 입력받아 number 타입을 리턴하는 함수
인자 2 : func2
number 타입을 입력받아 number 타입을 리턴하는 함수
인자 N : funcN
number 타입을 입력받아 임의의 타입을 리턴하는 함수
출력
함수를 리턴해야 합니다.
리턴되는 함수는 정수를 입력받아 func1, func2, ..., funcN의 순으로 적용합니다.
주의 사항
입력되는 함수들의 수는 1개 이상이라고 가정합니다.
함수가 아닌 입력은 존재하지 않는다고 가정합니다.
입력받은 함수들이 어떤 일을 하는지는 중요하지 않습니다.
입출력 예시
function square(num) {
  return num * num;
}

function add5(num) {
  return num + 5;
}

function mul3(num) {
  return num * 3;
}

function isOdd(num) {
  return num % 2 !== 0;
}

let output = pipe(add5, square);
console.log(output(4)); // --> 81

output = pipe(square, add5, mul3);
console.log(output(4)); // --> 63

output = pipe(square, mul3, add5, add5, isOdd);
console.log(output(4)); // --> false
힌트
자바스크립트 함수의 인자(arguments)에 대해서 검색해 봅니다. (javascript arguments object)
전개 문법, 연산자를 활용할 수도 있습니다. (mdn spread syntax, spread operator) */
function pipe(...func) {
  // TODO: 여기에 코드를 작성합니다.
  return function (num) {
    let result = num;
    for (let i = 0; i < func.length; i++) {
      result = func[i](result);
    }
    return result;
  };
}

/*고차함수 13
getIndex
문제
정수를 요소로 갖는 배열과 정수(num)를 입력받아 num을 배열에 추가하고 정렬한다고 가정할 경우, num의 인덱스를 리턴해야 합니다.

입력
인자 1 : arr
number 타입을 요소로 갖는 배열
arr[i]는 0 이상의 정수
인자 2 : num
number 타입의 정수 (num >= 0)
출력
number 타입을 리턴해야 합니다.
주의 사항
반복문(for, while) 사용은 금지됩니다.
arr.sort, arr.indexOf 사용은 금지됩니다.
빈 배열을 입력받은 경우, 0을 리턴해야 합니다.
num은 arr의 어떤 요소와도 같지 않다고 가정합니다.
입출력 예시
let output = getIndex([5, 4, 1, 3], 2);
console.log(output); // --> 1

output = getIndex([10, 5, 1, 3], 13);
console.log(output); // --> 4 */
function getIndex(arr, num) {
  return arr.filter(function (el) {
    return el < num;
  }).length;
}
//내가푼방법
function getIndex(arr, num) {
  arr.push(num);
  let length = arr.length;
  let eraseCount = 0;
  let filterArr = arr.filter((e) => {
    if (e > num) {
      eraseCount = eraseCount + 1;
      return true;
    }
    return false;
  });
  return length - eraseCount - 1;
}

/*27_getLongestElement (고차함수)
getLongestElement
문제
문자열을 요소로 갖는 배열을 입력받아 배열에서 가장 긴 문자열을 리턴해야 합니다.

입력
인자 1 : arr
string 타입을 요소로 갖는 배열
출력
string 타입을 리턴해야 합니다.
주의 사항
반복문(for, while) 사용은 금지됩니다.
가장 긴 문자열이 중복이 될 경우, 앞 쪽에 있는 요소를 리턴해야 합니다.
빈 배열을 입력받은 경우, 빈 문자열을 리턴해야 합니다.
입출력 예시
let output = getLongestElement(['one', 'two', 'three']);
console.log(output); // --> 'three'

output = getLongestElement(['one', 'two', 'wow']);
console.log(output); // --> 'one' */
function getLongestElement(arr) {
  return arr.reduce(function (a, b) {
    if (a.length >= b.length) {
      return a;
    } else {
      return b;
    }
  }, "");
}

/*29_joinArrayOfArrays (고차함수)
joinArrayOfArrays
문제
2차원 배열(배열을 요소로 갖는 배열)을 입력받아 배열들의 요소를 모두 담고 있는 단일 배열을 리턴해야 합니다.

입력
인자 1 : arr
임의의 요소를 갖는 배열
출력
배열의 모든 요소들을 깊이 1 까지 단일 배열로 이어붙인 배열을 리턴해야 합니다.
주의 사항
반복문(for, while) 사용은 금지됩니다.
arr.flat 사용은 금지됩니다.
입출력 예시
let output = joinArrayOfArrays([
  [1, 4],
  [true, false],
  ['x', 'y'],
]); */
function joinArrayOfArrays(arr) {
  // TODO: 여기에 코드를 작성합니다.
  return arr.reduce((a, c) => [...a, ...c]);
}

/*32_sumOfArraysInArray
sumOfArraysInArray
문제
2차원 배열(배열을 요소로 갖는 배열)을 입력받아 모든 수(number)의 합을 리턴해야 합니다.

입력
인자 1 : arr
배열을 요소로 갖는 배열
arr[i]는 임의의 타입을 요소로 갖는 배열
출력
number 타입을 리턴해야 합니다.
주의 사항
합을 구할 때 number 타입만 고려해야 합니다.
입출력 예시
let output = sumOfArraysInArray([
  [1, 2],
  [undefined, 4, '5'],
  [9, 'hello'],
]);
console.log(output); // --> 16
힌트
문제를 한 번에 해결하지 말고, 나누어 봅니다.
2차원 배열을 1차원으로 만들 경우, 문제가 더 쉬워집니다.
1차원 배열에서 number 타입의 요소만 취할 경우, 문제가 더 쉬워집니다.*/
function sumOfArraysInArray(arr) {
  const joinedArr = arr.reduce(function (acc, cur) {
    return acc.concat(cur);
  });

  const onlyNumbers = joinedArr.filter(function (el) {
    return typeof el === "number";
  });

  return onlyNumbers.reduce(function (acc, cur) {
    return acc + cur;
  }, 0);
}
