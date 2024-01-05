// JSONオブジェクトをjavascriptで使用できるオブジェクトに変換し、consoleに表示
var json = '{"Name":"Taro","Age":13,"gender":"male"}';
var obj = JSON.parse(json);

console.log(obj);

// オブジェクトをJSONオブジェクトに変換し、consoleに表示しましょう
var strings = { "Name": "Taro", "Age": 13, "gender": "male" }
var jsonstrings = JSON.stringify(strings);

console.log(jsonstrings);


// XMLHttpxhrを使用し、非同期通信を行い、レスポンスをconsoleに表示
var xhr = new XMLHttpRequest();

xhr.open('GET', 'api/response.txt', true);
xhr.send()
xhr.onload = function () {
  console.log(xhr.response)
  var json2 = (xhr.response)
  var obj2 = JSON.parse(json2)
  console.log(obj2)
}

// 取得したレスポンスをHTML(テーブル)に表示

var button = document.getElementById('btn')
button.addEventListener('click', function () {

  var xhr = new XMLHttpRequest();
  xhr.open('GET', 'api/response.txt', true);
  xhr.send();
  xhr.onload = function () {
    var json2 = (xhr.response);
    var dataArray = JSON.parse(json2);
    var Array = dataArray.users

    // テーブルの要素を取得
    var tbody = document.getElementById('myTable')

    // 配列をループしてテーブルに行とセルを追加
    for (var i = 0; i < Array.length; i++) {
      var row = tbody.insertRow(i);
      var cell1 = row.insertCell(0);
      var cell2 = row.insertCell(1);
      var cell3 = row.insertCell(2);

      // 配列の各オブジェクトのプロパティをセルに表示
      cell1.innerHTML = Array[i].Name;
      cell2.innerHTML = Array[i].Age;
      cell3.innerHTML = Array[i].gender;
    }
  };
}, false);

// フォーカスアウトしたときに、未入力または全角以外は「正しい名前を入力してください」というエラー文言

var namearea = document.getElementById("name")
namearea.addEventListener('blur', function (event) {
  // 名前が未入力または全角以外の文字が含まれている場合にエラーメッセージを表示
  if (namearea === '' || !namearea.value.match(/^[^\x01-\x7E\uFF61-\uFF9F]+$/)) {
    document.getElementById('error').textContent = '正しい名前を入力してください。';
  } else {
    document.getElementById('error').textContent = '';
  }
});

// 未入力または、数値以外の場合は「正しい年齢を入力してください」というエラー文言

var agearea = document.getElementById("age")
agearea.addEventListener('blur', function (event) {
  // 数字以外の文字が含まれている場合にエラーメッセージを表示
  if (agearea === '' || !agearea.value.match(/^[0-9]+$/)) {
    document.getElementById('error2').textContent = '正しい年齢を入力してください。';
  } else {
    document.getElementById('error2').textContent = '';
  }
});

// メールアドレスのエラーメッセージ

var mailarea = document.getElementById("mail")
mailarea.addEventListener('blur', function (event) {
  if (mailarea === '' || !mailarea.value.match(/^[a-zA-Z0-9_+-]+(\.[a-zA-Z0-9_+-]+)*@([a-zA-Z0-9][a-zA-Z0-9-]*[a-zA-Z0-9]*\.)+[a-zA-Z]{2,}$/)) {
    document.getElementById('error3').textContent = '正しいメールアドレスを入力してください。';
  }
  else {
    document.getElementById('error3').textContent = '';
  }
});

// 電話番号のエラーメッセージ

var telarea = document.getElementById("tel")
telarea.addEventListener('blur', function (event) {
  // 名前が未入力または全角以外の文字が含まれている場合にエラーメッセージを表示
  if (telarea === '' || !telarea.value.match(/^[0-9]{11}$/)) {
    document.getElementById('error4').textContent = '正しい電話番号を入力してください。';
  } else {
    document.getElementById('error4').textContent = '';
  }
});