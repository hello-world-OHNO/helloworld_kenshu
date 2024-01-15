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
  // ジョーカーのカード画像
  { id: 999, url: "https://chicodeza.com/wordpress/wp-content/uploads/torannpu-illust53.png" },
]

// シャッフル関数
function arrayShuffle(array) {
  for (let i = (array.length - 1); 0 < i; i--) {
    let r = Math.floor(Math.random() * (i + 1));
    let tmp = array[i];
    array[i] = array[r];
    array[r] = tmp;
  }
  return array;
}

// シャッフル格納場所
var dealer_deck = arrayShuffle(images.slice())
var player_deck = arrayShuffle(images.slice());
var dealer_deck_cheat = []
var player_deck_cheat = []

// ボタンの変数
var start = document.querySelector("#btn1")

// カード表示divの取得
var dealer_div = document.querySelector("#cards__left")
var player_div = document.querySelector("#cards__right")

// 画像タグを生成する関数
function createImageElement(width, height) {
  const img = document.createElement('img');
  img.width = width;
  img.height = height;
  return img;
}
// dealer_setとplayer_setを生成
var dealer_set = createImageElement(150, 200);
var player_set = createImageElement(150, 200);

// チートボタンが押されたか判定
var cheatButtonClicked = false;

// 結果の変数
var result = document.querySelector("#result__text")

// 勝利数の変数
var dealer_won = document.querySelector("#won__text1")
var player_won = document.querySelector("#won__text2")
var dealer_wonCount = 0
var player_wonCount = 0

// カウント変数
var MAX_CLICK_COUNT = 53

// クリックの変数
var clickCount = 0

// チートボタンが押された際の切り替わり回数
var MAX_CHEAT_COUNT = 3

// ３桁idデッキ
var dealer_deck_3digits = images.filter(card => card.id >= 100 && card.id < 1000);

// 2桁idデッキ
var player_deck_2digits = images.filter(card => card.id >= 0 && card.id < 99);

// 勝利時の挙動関数
function updateResult(winnerCount, winnerText, winCount) {
  result.textContent = winnerText;
  winnerCount = winnerCount + 1;
  winCount.textContent = winnerCount;
  return winnerCount
}

// スタート押下処理
start.addEventListener('click', () => {
  if (clickCount >= MAX_CLICK_COUNT) {
    // クリック非活性化
    start.disabled = true;
    return;
  }

  if (clickCount >= 0) {
    reset.disabled = false;
    cheatButton.disabled = false;
  }

  dealer_div.appendChild(dealer_set)
  player_div.appendChild(player_set)
  // イカサマボタンが押された時の処理
  if (cheatButtonClicked) {
    dealer_deck_cheat = arrayShuffle(dealer_deck_3digits.slice());
    player_deck_cheat = arrayShuffle(player_deck_2digits.slice());
    for (let i = 0; i < MAX_CHEAT_COUNT; i++) {
      dealer_deck.unshift(dealer_deck_cheat[i]);
      player_deck.unshift(player_deck_cheat[i]);
    }
    cheatButtonClicked = false;
  }

  var dealer_random_card = dealer_deck.shift();
  var player_random_card = player_deck.shift();
  dealer_set.src = dealer_random_card.url;
  player_set.src = player_random_card.url;

  // 親の勝利条件
  if (dealer_random_card.id > player_random_card.id) {
    var newCount = updateResult(dealer_wonCount, "親の勝ち！", dealer_won)
    dealer_wonCount = newCount
  }
  // 引き分け条件
  else if (dealer_random_card.id === player_random_card.id) {
    result.textContent = "引き分け";
  }
  // ジョーカー条件
  else if (dealer_random_card.id === 999 && player_random_card.id === 999) {
    var newCount = updateResult(dealer_wonCount, "親の勝ち！", dealer_won)
    dealer_wonCount = newCount
  }
  // 子の勝利条件
  else {
    var newCount = updateResult(player_wonCount, "子の勝ち！", player_won)
    player_wonCount = newCount
  }
  clickCount++;
});
// リセット機能
var reset = document.querySelector("#btn2")
reset.disabled = true;

reset.addEventListener('click', () => {
  clickCount = 0;
  cheatCount = 0;
  dealer_wonCount = 0;
  player_wonCount = 0;
  result.textContent = "";
  dealer_won.textContent = "";
  player_won.textContent = "";
  dealer_set.remove();
  player_set.remove();
  dealer_deck = arrayShuffle(images.slice());
  player_deck = arrayShuffle(images.slice());
  start.disabled = false;
  reset.disabled = true;
  cheatButton.disabled = true;
});

// イカサマボタン
var cheatButton = document.querySelector("#btn3")
cheatButton.disabled = true;

cheatButton.addEventListener('click', () => {
  cheatButtonClicked = true;
});