// generate random number and use concatenation to change img
const randomNumber1 = Math.floor(Math.random() * 6) + 1; // javascript 無法直接設定在特定的數區間產生隨機數值，所以使用 Math.random() * 6 次後再加一，才能在 1-6 之間產生隨機數。概念為，原本隨機數產出的最大值為 0.9，而 0.9 乘以 6，得出值介為 5.4，使用 Math.floor 無條件捨去，得出 1-5 的隨機整數，為確保能隨機得出 6，所以加 1。 images 資料夾中檔案編碼沒有編碼 0，所以不用考慮產出隨機數 0。
const randomDiceImage = "dice" + randomNumber1 + ".png";
const randomImageSource = "images/" + randomDiceImage;

const image1 = document.querySelectorAll("img")[0]; // class img有多個，所以使用 querySelectorAll("img")[0] 指出特定的標籤
image1.setAttribute("src", randomImageSource); // 將 img 連結換成 randomImageSource，所以使用 setAttribute 將 image1 的 src 設定值更新

const randomNumber2 = Math.floor(Math.random() * 6) + 1;
const randomImageSource2 = "images/dice" + randomNumber2 + ".png";

document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);

if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "🚩 Play 1 Wins!"; // 使用 querySelector 呼叫 h1 標籤，透過 innerHTML 修改標籤的內文。注意，呼叫標籤有多種做法，例如：getElementById，完全依照 HTML 的寫法來判斷如何呼叫最方便
} else if (randomNumber1 < randomNumber2) {
    document.querySelector("h1").innerHTML = "Play 2 Wins! 🚩";
} else {
    document.querySelector("h1").innerHTML = "Draw!"
}

