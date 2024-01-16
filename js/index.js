const showDay = () => {
  // 年、月、日の入力値を取得
  const yearInput = document.getElementById("yearInput").value;
  const monthInput = document.getElementById("monthInput").value;
  const dayInput = document.getElementById("dayInput").value;

  if (yearInput === "" || !yearInput.match(/^[0-9]{4}$/)) {
    alert("年は4桁の数字で入力するんだにょ 例:0893");
    return;
  }
  if (monthInput === "" || !monthInput.match(/^(0[1-9]|1[0-2])$/)) {
    alert("月は2桁の数字で入力するんだにょ 例:05");
    return;
  }
  if (dayInput === "" || !dayInput.match(/^(0[1-9]|[12][0-9]|3[01])$/)) {
    alert("日は2桁の数字で入力するんだにょ 例:03");
    return;
  }
  // 閏年の判定
  if (monthInput === "02") {
    if (yearInput % 4 === 0) {
      if (dayInput === "30" || dayInput === "31") {
        alert("その日付は存在しないにょ");
        return;
      }
    } else {
      if (dayInput === "29" || dayInput === "30" || dayInput === "31") {
        alert("その日付は存在しないにょ");
        return;
      }
    }
  }
  // Dateオブジェクト
  const selectedDate = new Date(yearInput, monthInput, dayInput);

  // 曜日を取得
  const days_Week = ["日", "月", "火", "水", "木", "金", "土"];
  const dayOfWeek = days_Week[selectedDate.getDay()];

  // 結果を表示
  const resultElement = document.getElementById("result");
  resultElement.innerHTML = "その日は " + dayOfWeek + " 曜日です。";
}