// 色を変更する関数を定義
function changeColor() {
    const textElement = document.getElementById('text-element');
    textElement.classList.add('color-changed');
}

// ボタンを取得
const button = document.getElementById("color-change-button");

myForm.addEventListener("submit", (e) => {
    e.preventDefault();
  
    const usernameValue = document.getElementById("username").value.trim();
    const ageValue = document.getElementById("age").value;
  
    if (usernameValue === "") {
      alert("ユーザー名を入力してください");
      return;
    }
    if (ageValue < 1) {
      alert("年齢は1以上で入力してください");
      return;
    }
  
    // すべてのバリデーションを通過した場合のみフォーム送信やデータ送信を行う
    console.log("バリデーションOK. 送信処理を続行...");
  });
  fetch("https://api.example.com/data")  // URLにGETリクエスト
  .then((response) => response.json()) // レスポンスをJSONとしてパース
  .then((data) => {
    console.log(data); // パースされたJSONデータを利用
  })
  .catch((error) => {
    console.error("通信に失敗しました", error);
  });
  async function fetchData() {
    try {
      const response = await fetch("https://api.example.com/data");
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error("通信に失敗しました", error);
    }
  }
  
  fetchData();