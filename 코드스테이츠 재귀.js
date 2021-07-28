/*
test01 
fibonacci
문제
수(num)를 입력받아 피보나치 수열의 num번째 요소를 리턴해야 합니다.

0번째 피보나치 수는 0이고, 1번째 피보나치 수는 1입니다. 그 다음 2번째 피보나치 수부터는 바로 직전의 두 피보나치 수의 합으로 정의합니다.
0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, ...

입력
인자 1 : num
number 타입의 num (num은 0 이상 15 이하의 정수)
출력
number 타입을 리턴해야 합니다. (num 번째 피보나치 수)
주의 사항
함수 fibonacci는 재귀함수의 형태로 작성합니다.
반복문(for, while) 사용은 금지됩니다.
피보나치 수열은 0번부터 시작합니다.
입출력 예시
let output = fibonacci(5);
console.log(output); // --> 5

output = fibonacci(9);
console.log(output); // --> 34 */
function fibonacci(num) {
  // TODO: 여기에 코드를 작성합니다.
  // 별도의 최적화 기법(memoization)은 금지됩니다.
  if (num === 0) {
    return 0;
  }
  if (num === 1) {
    return 1;
  }
  return fibonacci(num - 1) + fibonacci(num - 2);
}

/*
  test02
  reverseArr
  문제
  배열을 입력받아 순서가 뒤집힌 배열을 리턴해야 합니다.
  
  입력
  인자 1 : arr
  임의의 요소를 갖는 배열
  출력
  순서가 뒤집힌 배열을 리턴해야 합니다.
  [arr[n-1], arr[n-2], ... , arr[0]]
  arr.length는 n
  주의 사항
  함수 reverseArr는 재귀함수의 형태로 작성합니다.
  반복문(for, while) 사용은 금지됩니다.
  입력받은 배열은 함수의 호출 뒤에도 처음 상태를 유지해야 합니다(immutability).
  빈 배열은 빈 배열 그대로를 리턴해야 합니다.
  입출력 예시
  let output = reverseArr([1, 2, 3]);
  console.log(output); // --> [3, 2, 1] */
function reverseArr(arr) {
  if (arr.length === 0) {
    return [];
  }

  // const [head, ...tail] = arr;
  const head = arr[0];
  const tail = arr.slice(1);
  return reverseArr(tail).concat(head);
}
function reverseArr(arr) {
  // TODO: 여기에 코드를 작성합니다.
  if (arr.length === 0) {
    return [];
  }

  return [arr[arr.length - 1]].concat(reverseArr(arr.slice(0, arr.length - 1)));
}

/*
  test03
  findMatryoshka
  문제
  러시아 전통인형 마트료시카에 대한 정보를 담은 객체와 수를 입력받아 조건에 맞는 인형이 있는지 여부를 리턴해야 합니다.
  
  입력
  인자 1 : matryoshka
  'matryoshka', 'size' 속성을 갖는 재귀적으로 정의된 객체 (입출력 예시 참고)
  matryoshka.matryoshka는 null 또는 matryoshka 객체
  matryoshka.size는 중첩될수록 작아집니다.
  인자 2 : size
  number 타입의 수
  출력
  boolean 타입을 리턴해야 합니다.
  주의 사항
  함수 findMatryoshka는 재귀함수의 형태로 작성합니다.
  반복문(for, while) 사용은 금지됩니다.
  입력받은 객체는 함수의 호출 뒤에도 처음 상태를 유지해야 합니다(immutability).
  빈 객체를 입력받은 경우, false를 리턴해야 합니다.
  입출력 예시
  const matryoshka = {
    size: 10,
    matryoshka: {
      size: 9,
      matryoshka: null,
    },
  };
  
  let output = findMatryoshka(matryoshka, 10);
  console.log(output); // --> true
  
  output = findMatryoshka(matryoshka, 8);
  console.log(output); // --> false */
function findMatryoshka(matryoshka, size) {
  // recursive case
  if (matryoshka.size === size) {
    return true;
  } else if (matryoshka.matryoshka && matryoshka.size > size) {
    return findMatryoshka(matryoshka.matryoshka, size);
  }

  // base case
  return false;
}
//내풀이
function findMatryoshka(matryoshka, size) {
  if (matryoshka !== null && Object.keys(matryoshka).length === 0) {
    return false;
  }
  if (matryoshka === null) {
    return false;
  }
  return (
    matryoshka["size"] === size ||
    findMatryoshka(matryoshka["matryoshka"], size)
  );
}

/*
test04
unpackGiftbox
문제
선물 상자에 대한 정보를 담은 배열과 문자열을 입력받아 조건에 맞는 선물이 있는지 여부를 리턴해야 합니다.

입력
인자 1 : giftBox
문자열, 배열을 요소로 갖는 재귀적으로 정의된 배열 (입출력 예시 참고)
문자열은 선물 상자에 들어있는 각 선물의 이름을 의미합니다.
배열은 더 작은 선물 상자를 의미합니다.
인자 2 : wish
string 타입의 문자열
출력
boolean 타입을 리턴해야 합니다.
주의 사항
함수 unpackGiftbox는 재귀함수의 형태로 작성합니다.
반복문(for, while) 사용이 가능합니다.
입력받은 배열은 함수의 호출 뒤에도 처음 상태를 유지해야 합니다(immutability).
빈 배열 또는 빈 문자열을 입력받은 경우, false를 리턴해야 합니다.
입출력 예시
const giftBox = ['macbook', 'mugcup', ['eyephone', 'postcard'], 'money'];

let output = unpackGiftbox(giftBox, 'iphone');
console.log(output); // --> false

output = unpackGiftbox(giftBox, 'postcard');
console.log(output); // --> true */
function unpackGiftbox(giftBox, wish) {
  // recursive case
  for (let i = 0; i < giftBox.length; i++) {
    if (giftBox[i] === wish) {
      return true;
    } else if (Array.isArray(giftBox[i])) {
      const result = unpackGiftbox(giftBox[i], wish);
      if (result === true) {
        return true;
      }
    }
  }

  // base case
  return false;
}

// 다른 풀이 방법 1
// function unpackGiftbox(giftBox, wish) {
//   // recursive case
//   let anotherBoxes = [];
//   for (let i = 0; i < giftBox.length; i++) {
//     if (giftBox[i] === wish) {
//       return true;
//     } else if (Array.isArray(giftBox[i])) {
//       anotherBoxes = anotherBoxes.concat(giftBox[i]);
//     }
//   }

//   if (anotherBoxes.length > 0) {
//     return unpackGiftbox(anotherBoxes, wish);
//   }

//   // base case
//   return false;
// }

// 다른 풀이 방법 2
// function unpackGiftbox(giftBox, wish) {
//   const result = giftBox.reduce((acc, curr) => {
//     if (curr === wish) {
//       return true;
//     } else if (Array.isArray(curr)) {
//       return unpackGiftbox(curr, wish) || acc; // 왜 뒤에 acc를 넣은거지?
//     } else {
//       return acc;
//     }
//   }, false);
//   return result;
// }

/* test05
flattenArr
문제
다차원 배열을 입력받아 1차원 배열로 변환하여 리턴해야 합니다.

입력
인자 1 : arr
양의 정수 또는 배열을 요소로 갖는 다차원 배열 (입출력 예시 참고)
출력
배열을 리턴해야 합니다.
주의 사항
함수 flattenArr는 재귀함수의 형태로 작성합니다.
Array Method flat()과 flatMap() 사용은 금지됩니다.
반복문(for, while) 사용이 가능합니다.
입력받은 배열은 함수의 호출 뒤에도 처음 상태를 유지해야 합니다(immutability).
입력으로 전달되는 다차원 배열이 중첩된 정도(중첩의 깊이)는 정해져 있지 않습니다.
빈 배열을 입력받은 경우, 빈 배열을 리턴해야 합니다.
입출력 예시
let output = flattenArr([[1], 2, [3, 4], 5]);
console.log(output); // --> [1, 2, 3, 4, 5]

output = flattenArr([[2, [[3]]], 4, [[[5]]]);
console.log(output); // --> [2, 3, 4, 5] */
function flattenArr(arr) {
  // base case
  if (arr.length === 0) {
    return [];
  }

  // recursive case
  const head = arr[0];
  const tail = arr.slice(1);
  if (Array.isArray(head)) {
    return flattenArr([...head, ...tail]);
  } else {
    return [head].concat(flattenArr(tail));
  }
}

// 다른 풀이 방법 1
// function flattenArr(arr) {
//   const result = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (Array.isArray(arr[i])) {
//       const flattend = flattenArr(arr[i]);
//       result.push(...flattend);
//     } else {
//       result.push(arr[i]);
//     }
//   }
//   return result;
// }

// 다른 풀이 방법 2
// function flattenArr(arr) {
//   return arr.reduce(function (result, item) {
//     if (Array.isArray(item)) {
//       const flattened = flattenArr(item);
//       return [...result, ...flattened];
//     } else {
//       return [...result, item];
//     }
//   }, []);
// }
