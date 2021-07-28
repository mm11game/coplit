/* test01
letterCapitalize
문제
문자열을 입력받아 문자열을 구성하는 각 단어의 첫 글자가 대문자인 문자열을 리턴해야 합니다.

입력
인자 1 : str
string 타입의 공백이 있는 알파벳 문자열
출력
string 타입을 리턴해야 합니다.
주의 사항
단어는 공백으로 구분합니다.
연속된 공백이 존재할 수 있습니다.
빈 문자열을 입력받은 경우, 빈 문자열을 리턴해야 합니다.
입출력 예시
let output1 = letterCapitalize('hello world');
console.log(output1); // "Hello World"
let output2 = letterCapitalize('javascript  is sexy ');
console.log(output2); // "Javascript  Is Sexy " */

function letterCapitalize(str) {
  let words = str.split(" ");

  for (let i = 0; i < words.length; i++) {
    if (words[i].length > 0) {
      words[i] = words[i][0].toUpperCase() + words[i].substr(1);
    }
  }

  str = words.join(" ");
  return str;
}
//내풀이
function letterCapitalize(str) {
  // TODO: 여기에 코드를 작성합니다.
  //처음에 문자열을 만나면? 바꿈
  //앞에 인덱스가 문자열이면? 안 바꿈
  // 앞에가 빈칸이면? 바꿈
  // 근데 본인이 빈칸이면? 넘어감
  if (str.length === 0) {
    return "";
  }
  let result = [];
  result[0] = str[0].toUpperCase();
  for (let i = 1; i < str.length; i++) {
    if (str[i] !== " " && str[i - 1] === " ") {
      result.push(str[i].toUpperCase());
    } else {
      result.push(str[i]);
    }
  }
  return result.join("");
}

/*
test02
ABCheck
문제
문자열을 입력받아 문자열 내에 아래 중 하나가 존재하는지 여부를 리턴해야 합니다.

'a'로 시작해서 'b'로 끝나는 길이 5의 문자열
'b'로 시작해서 'a'로 끝나는 길이 5의 문자열
입력
인자 1 : str
string 타입의 알파벳 문자열
출력
boolean 타입을 리턴해야 합니다.
주의 사항
대소문자를 구분하지 않습니다.
공백도 한 글자로 취급합니다.
'a'와 'b'는 중복해서 등장할 수 있습니다.
입출력 예시
let output = ABCheck('lane Borrowed');
console.log(output); // --> true */
function ABCheck(str) {
  if (str === undefined) {
    return false;
  }

  str = str.toLowerCase();

  for (let i = 4; i < str.length; i++) {
    if (
      (str[i] === "a" && str[i - 4] === "b") ||
      (str[i] === "b" && str[i - 4] === "a")
    ) {
      return true;
    }
  }

  return false;
}

/*
test03
readVertically
문제
문자열을 요소로 갖는 배열을 입력받아 문자열을 세로로 읽었을 때의 문자열을 리턴해야 합니다.

입력
인자 1 : arr
string 타입을 요소로 갖는 배열
출력
string 타입을 리턴해야 합니다.
주의 사항
각 문자열의 길이는 다양합니다.
각 문자의 위치를 행, 열로 나타낼 경우, 비어있는 (행, 열)은 무시합니다.
입출력 예시
let input = [
  //
  'hello',
  'wolrd',
];
let output = readVertically(input);
console.log(output); // --> 'hweolllrod'

input = [
  //
  'hi',
  'wolrd',
];
output = readVertically(input);
console.log(output); // --> 'hwiolrd' */
function readVertically(arr) {
  let temp = [];
  for (let i = 0; i < arr.length; i++) {
    let str = arr[i];
    for (let j = 0; j < str.length; j++) {
      if (temp.length === j) {
        temp.push(str[j]);
      } else {
        temp[j] = temp[j] + str[j];
      }
    }
  }

  let result = "";
  for (let i = 0; i < temp.length; i++) {
    result = result + temp[i];
  }

  return result;
}
//내풀이
function readVertically(arr) {
  // code goes here
  //가장 긴 랭스를 구한다.
  // 긴 랭스를 포문을 돌린다.
  // 또 포문을 돌린다, 배열의 랭스만큼
  let long = arr.reduce((a, c) => {
    if (a.length < c.length) {
      return c;
    } else {
      return a;
    }
  });

  let result = [];
  for (let i = 0; i < long.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (arr[j][i] !== undefined) {
        result.push(arr[j][i]);
      }
    }
  }
  return result.join("");
}

/*
  test04
  readVertically
문제
문자열을 요소로 갖는 배열을 입력받아 문자열을 세로로 읽었을 때의 문자열을 리턴해야 합니다.

입력
인자 1 : arr
string 타입을 요소로 갖는 배열
출력
string 타입을 리턴해야 합니다.
주의 사항
각 문자열의 길이는 다양합니다.
각 문자의 위치를 행, 열로 나타낼 경우, 비어있는 (행, 열)은 무시합니다.
입출력 예시
let input = [
  //
  'hello',
  'wolrd',
];
let output = readVertically(input);
console.log(output); // --> 'hweolllrod'

input = [
  //
  'hi',
  'wolrd',
];
output = readVertically(input);
console.log(output); // --> 'hwiolrd' */
function readVertically(arr) {
  let temp = [];
  for (let i = 0; i < arr.length; i++) {
    let str = arr[i];
    for (let j = 0; j < str.length; j++) {
      if (temp.length === j) {
        temp.push(str[j]);
      } else {
        temp[j] = temp[j] + str[j];
      }
    }
  }

  let result = "";
  for (let i = 0; i < temp.length; i++) {
    result = result + temp[i];
  }

  return result;
}
//내풀이
function readVertically(arr) {
  // code goes here
  //가장 긴 랭스를 구한다.
  // 긴 랭스를 포문을 돌린다.
  // 또 포문을 돌린다, 배열의 랭스만큼
  let long = arr.reduce((a, c) => {
    if (a.length < c.length) {
      return c;
    } else {
      return a;
    }
  });

  let result = [];
  for (let i = 0; i < long.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (arr[j][i] !== undefined) {
        result.push(arr[j][i]);
      }
    }
  }
  return result.join("");
}
/* test05
numberSearch
문제
문자열을 입력받아 문자열에서 숫자를 모두 찾아 더한 뒤에 해당 값을 (숫자와 공백을 제외한 나머지) 문자열의 길이로 나눈 값을 정수로 반올림하여 리턴해야 합니다.

입력
인자 1 : str
string 타입의 문자열
출력
number 타입을 리턴해야 합니다 (0 이상의 정수)
주의 사항
빈 문자열을 입력받은 경우, 0을 리턴해야 합니다.
숫자(digit)는 연속해서 등장하지 않습니다.
입출력 예시
let output = numberSearch('Hello6 ');
console.log(output); // --> 1

output = numberSearch('Hello6 9World 2,');
console.log(output); // --> 1

output = numberSearch('Hello6 9World 2, Nic8e D7ay!');
console.log(output); // --> 2 */
function numberSearch(str) {
  const digits = "0123456789";

  if (str === "") {
    return 0;
  }

  let sum = 0;
  let pureStr = "";
  for (let i = 0; i < str.length; i += 1) {
    if (digits.includes(str[i])) {
      // 숫자인 경우
      sum = sum + Number(str[i]);
    } else if (str[i] !== " ") {
      // 숫자도 공백도 아닌 경우
      pureStr = pureStr + str[i];
    }
  }

  // 결과를 반올림 한다.
  return Math.round(sum / pureStr.length);
}

/* test06
decryptCaesarCipher
문제
암호화된 문자열과 암호화 키를 입력받아 복호화된 문자열을 리턴해야 합니다.
카이사르 암호(Caesar cipher)는 평문(plaintext)을 암호키 secret개만큼 (오른쪽으로) 평행이동시켜 암호화 합니다. 복호화는 암호화된 문자열을 원래의 평문으로 복원하는 것을 말합니다.

'hello'를 secret 3으로 암호화한 경우: 'khoor'
'codestates'를 secret 11로 암호화한 경우: 'nzopdelepd'
입력
인자 1 : str
string 타입의 알파벳 소문자 문자열
인자 2 : secret
number 타입의 암호화 키
출력
string 타입을 리턴해야 합니다.
주의 사항
빈 문자열을 입력받은 경우, 빈 문자열을 리턴해야 합니다.
공백은 그대로 두어야 합니다.
입출력 예시
let output = decryptCaesarCipher('khoor', 3);
console.log(output); // --> hello

output = decryptCaesarCipher('zruog', 3);
console.log(output); // --> world */
function decryptCaesarCipher(str, secret) {
  // 알파벳
  let alpha = "abcdefghijklmnopqrstuvwxyz";

  let result = "";
  for (let i = 0; i < str.length; i++) {
    if (str[i] === " ") {
      // 공백은 그대로 둔다.
      result = result + " ";
    } else {
      // 현재 문자의 알파벳 순서를 구한다.
      let asis = alpha.indexOf(str[i]);
      // 복호화는 반대 방향으로 이루어기 때문에 seceret을 뺀다.
      let tobe = (asis - secret + alpha.length) % alpha.length;
      result = result + alpha[tobe];
    }
  }

  return result;
}
/*test07
compressString
문제
문자열을 입력받아 연속되는 문자가 있을 경우, 연속 구간을 반복되는 수와 문자로 조합한 형태로 압축한 문자열을 리턴해야 합니다.

입력
인자 1 : str
string 타입의 알파벳 문자열
출력
string 타입을 리턴해야 합니다.
주의 사항
빈 문자열을 입력받은 경우, 빈 문자열을 리턴해야 합니다.
3개 이상 연속되는 문자만 압축합니다.
입출력 예시
let output = compressString('abc');
console.log(output); // --> abc

output = compressString('wwwggoppopppp');
console.log(output); // --> 3wggoppo4p */
function compressString(str) {
  // 연속되는 문자를 기록하기 위한 변수
  // 첫 번째 문자로 초기화
  let before = str[0];

  // 동일한 문자의 반복 횟수
  let count = 1;

  // 정답으로 리턴할 문자열
  let result = "";

  // 마지막 부분이 연속된 문자일 경우를 위해 dummy 문자 추가
  str = str + " "; //이 부분이 기가막히다 ㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋ 내가 푼거보면 답답함
  for (let i = 1; i < str.length; i++) {
    // 동일한 문자가 반복될 경우
    if (before === str[i]) {
      count++;
    } else {
      // 이전과 다른 문자일 경우,
      // 반복된 횟수가 3 이상일 경우에만 압축을 한다.
      if (count >= 3) {
        result = result + `${count}${before}`;
      } else {
        result = result + before.repeat(count);
      }
      before = str[i];
      count = 1;
    }
  }

  return result;
}
//내풀이
function compressString(str) {
  // TODO: 여기에 코드를 작성합니다.
  if (str.length === 0) {
    return "";
  }
  let letter = str[0];
  let count = 1;
  let result = "";

  //만약에 단어와 레터가 같으면??
  // 카운트를 하나 올린다
  //만약에 단어가 레터랑 다르면?
  // 이때 카운트가 3이상인지 본다.
  //3이상이면
  // 카운트와 레터를 레절트에 넣는다

  //다 빠져나왔을때, 그때 레터와 카운트를 또 넣는다.
  for (let i = 1; i < str.length; i++) {
    if (letter === str[i]) {
      count = count + 1;
    } else {
      if (count >= 3) {
        result = result + String(count) + letter;
      } else {
        for (let i = 0; i < count; i++) {
          result = result + letter;
        }
      }
      letter = str[i];
      count = 1;
    }
  } //이 밑에 부분을 안하려고, dummydata를 만들어줬다.
  if (count >= 3) {
    result = result + String(count) + letter;
  } else {
    for (let i = 0; i < count; i++) {
      result = result + letter;
    }
  }

  return result;
}
