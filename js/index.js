// 画像の登録
var images = [
  // スペードのカード画像
  { id: 11, url: "https://chicodeza.com/wordpress/wp-content/uploads/torannpu-illust1.png" },
  { id: 21, url: "https://chicodeza.com/wordpress/wp-content/uploads/torannpu-illust2.png" },
  { id: 31, url: "https://chicodeza.com/wordpress/wp-content/uploads/torannpu-illust3.png" },
  { id: 41, url: "https://chicodeza.com/wordpress/wp-content/uploads/torannpu-illust4.png" },
  { id: 51, url: "https://chicodeza.com/wordpress/wp-content/uploads/torannpu-illust5.png" },
  { id: 61, url: "https://chicodeza.com/wordpress/wp-content/uploads/torannpu-illust6.png" },
  { id: 71, url: "https://chicodeza.com/wordpress/wp-content/uploads/torannpu-illust7.png" },
  { id: 81, url: "https://chicodeza.com/wordpress/wp-content/uploads/torannpu-illust8.png" },
  { id: 91, url: "https://chicodeza.com/wordpress/wp-content/uploads/torannpu-illust9.png" },
  { id: 101, url: "https://chicodeza.com/wordpress/wp-content/uploads/torannpu-illust10.png" },
  { id: 111, url: "https://chicodeza.com/wordpress/wp-content/uploads/torannpu-illust11.png" },
  { id: 121, url: "https://chicodeza.com/wordpress/wp-content/uploads/torannpu-illust12.png" },
  { id: 131, url: "https://chicodeza.com/wordpress/wp-content/uploads/torannpu-illust13.png" },
  // ハートのカード画像
  { id: 12, url: "https://chicodeza.com/wordpress/wp-content/uploads/torannpu-illust40.png" },
  { id: 22, url: "https://chicodeza.com/wordpress/wp-content/uploads/torannpu-illust41.png" },
  { id: 32, url: "https://chicodeza.com/wordpress/wp-content/uploads/torannpu-illust42.png" },
  { id: 42, url: "https://chicodeza.com/wordpress/wp-content/uploads/torannpu-illust43.png" },
  { id: 52, url: "https://chicodeza.com/wordpress/wp-content/uploads/torannpu-illust44.png" },
  { id: 62, url: "https://chicodeza.com/wordpress/wp-content/uploads/torannpu-illust45.png" },
  { id: 72, url: "https://chicodeza.com/wordpress/wp-content/uploads/torannpu-illust46.png" },
  { id: 82, url: "https://chicodeza.com/wordpress/wp-content/uploads/torannpu-illust47.png" },
  { id: 92, url: "https://chicodeza.com/wordpress/wp-content/uploads/torannpu-illust48.png" },
  { id: 102, url: "https://chicodeza.com/wordpress/wp-content/uploads/torannpu-illust49.png" },
  { id: 112, url: "https://chicodeza.com/wordpress/wp-content/uploads/torannpu-illust50.png" },
  { id: 122, url: "https://chicodeza.com/wordpress/wp-content/uploads/torannpu-illust51.png" },
  { id: 132, url: "https://chicodeza.com/wordpress/wp-content/uploads/torannpu-illust52.png" },
  // クローバーのカード画像
  { id: 13, url: "https://chicodeza.com/wordpress/wp-content/uploads/torannpu-illust14.png" },
  { id: 23, url: "https://chicodeza.com/wordpress/wp-content/uploads/torannpu-illust15.png" },
  { id: 33, url: "https://chicodeza.com/wordpress/wp-content/uploads/torannpu-illust16.png" },
  { id: 43, url: "https://chicodeza.com/wordpress/wp-content/uploads/torannpu-illust17.png" },
  { id: 53, url: "https://chicodeza.com/wordpress/wp-content/uploads/torannpu-illust18.png" },
  { id: 63, url: "https://chicodeza.com/wordpress/wp-content/uploads/torannpu-illust19.png" },
  { id: 73, url: "https://chicodeza.com/wordpress/wp-content/uploads/torannpu-illust20.png" },
  { id: 83, url: "https://chicodeza.com/wordpress/wp-content/uploads/torannpu-illust21.png" },
  { id: 93, url: "https://chicodeza.com/wordpress/wp-content/uploads/torannpu-illust22.png" },
  { id: 103, url: "https://chicodeza.com/wordpress/wp-content/uploads/torannpu-illust23.png" },
  { id: 113, url: "https://chicodeza.com/wordpress/wp-content/uploads/torannpu-illust24.png" },
  { id: 123, url: "https://chicodeza.com/wordpress/wp-content/uploads/torannpu-illust25.png" },
  { id: 133, url: "https://chicodeza.com/wordpress/wp-content/uploads/torannpu-illust26.png" },
  // ダイヤのカード画像
  { id: 14, url: "https://chicodeza.com/wordpress/wp-content/uploads/torannpu-illust27.png" },
  { id: 24, url: "https://chicodeza.com/wordpress/wp-content/uploads/torannpu-illust28.png" },
  { id: 34, url: "https://chicodeza.com/wordpress/wp-content/uploads/torannpu-illust29.png" },
  { id: 44, url: "https://chicodeza.com/wordpress/wp-content/uploads/torannpu-illust30.png" },
  { id: 54, url: "https://chicodeza.com/wordpress/wp-content/uploads/torannpu-illust31.png" },
  { id: 64, url: "https://chicodeza.com/wordpress/wp-content/uploads/torannpu-illust32.png" },
  { id: 74, url: "https://chicodeza.com/wordpress/wp-content/uploads/torannpu-illust33.png" },
  { id: 84, url: "https://chicodeza.com/wordpress/wp-content/uploads/torannpu-illust34.png" },
  { id: 94, url: "https://chicodeza.com/wordpress/wp-content/uploads/torannpu-illust35.png" },
  { id: 104, url: "https://chicodeza.com/wordpress/wp-content/uploads/torannpu-illust36.png" },
  { id: 114, url: "https://chicodeza.com/wordpress/wp-content/uploads/torannpu-illust37.png" },
  { id: 124, url: "https://chicodeza.com/wordpress/wp-content/uploads/torannpu-illust38.png" },
  { id: 134, url: "https://chicodeza.com/wordpress/wp-content/uploads/torannpu-illust39.png" },
]

// シャッフル格納場所
var yamahuda1 = []
var yamahuda2 = []

// シャッフル要素(山札１)
for (var i = images.length - 1; i >= 0; i--) {
  var j = Math.floor(Math.random() * (i + 1));
  yamahuda1.push(images[j])
}
// シャッフル要素(山札2)
for (var i = images.length - 1; i >= 0; i--) {
  var j = Math.floor(Math.random() * (i + 1));
  yamahuda2.push(images[j])
}

// スタートを押すとyamahudaを上から順に配る 
// 勝利判定、結果

// ボタンの変数
var start = document.querySelector("#btn1")
// カード表示の変数
var set1 = document.querySelector("#cards1__img")
var set2 = document.querySelector("#cards2__img")
// クリックの変数
var clickCount = 0
// 結果の変数
var result = document.querySelector("#result__text")
// 勝利数の変数
var won1 = document.querySelector("#won__text1")
var won2 = document.querySelector("#won__text2")
var wonCount1 = 0
var wonCount2 = 0

start.addEventListener('click', function (event) {
  clickCount += 1
  if (clickCount <= 52) {
    var selectCard1 = yamahuda1.shift()
    var selectCard2 = yamahuda2.shift()

    set1.src = selectCard1.url;
    set2.src = selectCard2.url;
    if (selectCard1.id >= selectCard2.id) {
      wonCount1++;
      result.textContent = "親の勝ち！";
      won1.textContent = wonCount1;
    }
    else {
      wonCount2++;
      result.textContent = "子の勝ち！";
      won2.textContent = wonCount2;
    }
  }
  else {
  }
});

// リセット機能
var reset = document.querySelector("#btn2")

reset.addEventListener('click', function (event) {
  clickCount = 0;
  wonCount1 = 0;
  wonCount2 = 0;
  result.textContent = "";
  won1.textContent = "";
  won2.textContent = "";
  set1.src = "";
  set2.src = "";
  for (var i = images.length - 1; i >= 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    yamahuda1.push(images[j])
  }
  for (var i = images.length - 1; i >= 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    yamahuda2.push(images[j])
  }
});