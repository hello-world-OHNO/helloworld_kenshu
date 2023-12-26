// A,Bどちらの所持金が多いか表示
var Amoney = 8000
var Bmoney = 12000
var Cmoney = 3000

if (Amoney > Bmoney) {
  console.log("A君の所持金が多い: " + Aoney + "円")
} else if (Amoney < Bmoney) {
  console.log("B君の所持金が多い: " + Bmoney + "円")
}

// A,B,C　誰の所持金が多いか表示
if (Amoney > Bmoney && Cmoney) {
  console.log("A君の所持金が多い: " + Amoney + "円")
} else if (Bmoney > Amoney && Cmoney) {
  console.log("B君の所持金が多い: " + Bmoney + "円")
} else if (Cmoney > Amoney && Bmoney) {
  console.log("C君の所持金が多い: " + Cmoney + "円")
}

// ランダム結果ボタン
var btn = document.querySelector("#button__random")

btn.addEventListener("click", (event) => {
  var random = Math.floor(Math.random() * 100) + 1
  var message = ""
  if (random === 100) {
    message = "満点！！"
  } else if (random >= 80) {
    message = "合格です"
  } else if (random <= 30) {
    message = "赤点です"
  } else {
    message = "不合格です"
  }

  alert(message)
}, false)

// テキスト入力でconsoleの変化
var text = document.querySelector("#text1")
var input = text.value
text.addEventListener("keyup", (event) => {
  // memo ※event,taragetについて復習
  switch (event.target.value) {
    case "saitama":
      console.log("埼玉");
      break;
    case "tokyo":
      console.log("東京");
      break;
    case "kanagawa":
      console.log("神奈川");
      break;
    default:
      console.log("未確認");
  }
}, false)



// 勉強用

