var text = document.getElementById("text")
console.log(text)

var text2 = document.querySelector("#text")
console.log(text2)

// 空pタグの生成、div内に追加
var p1 = document.getElementById("div1")

var newP = document.createElement("p")

p1.appendChild(newP)
//

// clickされたらconsoleに"click"が表示
var btn = document.querySelector("#button")

btn.addEventListener("click", () => {
  console.log("click")
})
//

// scrollされたらconsoleに"scroll"と表示
var scr = document.querySelector("#scroll")

window.addEventListener("scroll", function () {
  console.log("scroll")
})
//

// buttonクリックで、子要素が追加、テキスト表示
var btn2 = document.querySelector("#button2")
var result = document.querySelector("#result")

btn2.addEventListener("click", () => {
  result.innerHTML = "よく押せました！えらい！"
})
// 