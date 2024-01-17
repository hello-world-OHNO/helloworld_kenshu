const btn = document.querySelector("#btn")
btn.addEventListener('click', () => {

  // 年、月、日の入力値を取得
  const yearInput = document.getElementById("yearInput").value;
  const monthInput = document.getElementById("monthInput").value;
  const dayInput = document.getElementById("dayInput").value;

  // エラーメッセージ一覧
  const errorMessage = {
    year: "年：　有効な数字を入力するんだにょ",
    month: "月：　有効な数字を入力するんだにょ",
    day: "日：　有効な数字を入力するんだにょ",
  }
  // 数字の有効数字
  const yearNumber = /^[0-9]{1,4}$/;
  const monthNumber = /^([1-9]|1[0-2])$/;
  const dayNumber = /^([1-9]|[1-2]\d|3[0-1])$/;
  // 閏年の判定数字
  const isLeapYear = (yearInput % 4 === 0);
  const leapYearDays = (dayInput === "30" || dayInput === "31");
  const notLeapYearDays = (dayInput === "29" || dayInput === "30" || dayInput === "31");

  // エラー判定
  if (yearInput === "" || !yearInput.match(yearNumber)) {
    alert(errorMessage.year);
    return;
  }
  if (monthInput === "" || !monthInput.match(monthNumber)) {
    alert(errorMessage.month);
    return;
  }
  if (dayInput === "" || !dayInput.match(dayNumber)) {
    alert(errorMessage.day);
    return;
  }
  // 閏年の判定
  if (monthInput === "2") {
    if ((isLeapYear && leapYearDays) || (!isLeapYear && notLeapYearDays)) {
      alert(errorMessage.day);
      return;
    }
  }

  // Dateオブジェクト
  const selectedDate = new Date(yearInput, monthInput - 1, dayInput);

  // 曜日を取得
  const days_Week = ["日", "月", "火", "水", "木", "金", "土"];
  const dayOfWeek = days_Week[selectedDate.getDay()];

  // 結果を表示
  const resultElement = document.getElementById("result");
  resultElement.innerHTML = "その日は " + dayOfWeek + " 曜日です。";
})
