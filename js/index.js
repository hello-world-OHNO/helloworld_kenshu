// consoleに10回表示
for (var i = 0; i < 10; i++) {
  console.log("実行");
}

// 配列['apple', 'banana' , 'cat']の中身をそれぞれconsoleに表示
var arr = ['apple', 'banana', 'cat']
arr[1]

for (var i = 0; i < arr.length; i++) {
  console.log(arr[i])
}

// 配列[1, 2. 3] を合計した値6をconsoleに表示
var num = [1, 2, 3]
var num2 = 0
for (var i = 0; i < num.length; i++) {
  num2 = num[i] + num2
}
console.log(num2)

// 配列A[1, 'yoshida', 2, 'oono', 3, 'honda']を数値と文字列の配列にし、それぞれconsoleに表示してください

var teams = [1, 'yoshida', 2, 'oono', 3, 'honda']
var numbers = []
var strings = []

for (var i = 0; i < teams.length; i++) {
  // 説明変数
  var team = teams[i]
  // 
  if (!isNaN(team)) {
    strings[strings.length] = team
  } else {
    numbers[numbers.length] = team
  }
}
console.log(numbers)
console.log(strings)

// 100回ループさせ、奇数回のみ「1 + 3 + 5 ...」のように足し算し、結果をconsoleに表示

var result = 0

for (var i = 0; i < 100; i++) {
  if (i % 2 !== 0) {
    result += i
    continue;
  }
  else {
    // 何もしない
  }
}
console.log(result)

// foreach文
var array1 = ['a', 'b', 'c'];
array1.forEach((element) => console.log(element));

// while文
var n = 0;
while (n < 3) {
  n++;
}
console.log(n);

// [2, 4, 6, 8]各indexに2を掛けた新しい配列を作成
var array1 = [2, 4, 6, 8]
var map1 = array1.map((x) => x * 2)
console.log(map1)

// [2, 4, 6, 7]の配列内に奇数が含まれているかを判定
var array2 = [2, 4, 6, 7]
var even = (element) => element % 2 === 0
console.log(array2.some(even))

// 以下配列からhasSubmittedが全てtrueかどうかを判定してください

var hasSub = [
  { id: 2, hasSubmitted: true },
  { id: 3, hasSubmitted: false },
  { id: 4, hasSubmitted: true },
]
var result1 = hasSub.every(item => item.hasSubmitted === true)
console.log(result1)

// 以下配列からhasSubmittedがtrueのものだけを抜き出し、新しい配列を作成
// 🔼hassubを流用
var result2 = hasSub.filter((word) => word.hasSubmitted === true)
console.log(result2)

// 以下配列をidの昇順に並べ替え
var hasSub2 = [
  { id: 323, hasSubmitted: true },
  { id: 111, hasSubmitted: false },
  { id: 268, hasSubmitted: true },
]
hasSub2.sort((a, b) => a.id - b.id)
console.log(hasSub2)
