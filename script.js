
let count = 0;
let interval = setInterval(() => {
    count++;
    document.getElementById("log").innerHTML += `<p>Повідомлення ${count}</p>`;
    if (count === 5) {
        clearInterval(interval);
    }
}, 1000);
let box = document.querySelector(".box");
let position = 50;
setInterval(() => {
    position += 10;
    box.style.left = position + "px";
    if (position > 300) position = 50;
}, 500);
let score = 0;
let gameTime = 10;
let gameActive = false;
let gameInterval;

document.getElementById("clickBtn").addEventListener("click", () => {
    if (gameActive) {
        score++;
        document.getElementById("score").innerText = score;
    }
});
function startGame() {
    score = 0;
    gameTime = 10;
    gameActive = true;
    document.getElementById("score").innerText = score;

    gameInterval = setInterval(() => {
        gameTime--;
        if (gameTime === 0) {
            clearInterval(gameInterval);
            gameActive = false;
            alert("Час вийшов! Ваш рахунок: " + score);
        }
    }, 1000);
}
document.getElementById("clickBtn").addEventListener("click", () => {
    if (!gameActive) {
        startGame();
    }
});
document.getElementById("startTimer").addEventListener("click", () => {
    let time = parseInt(document.getElementById("timeInput").value);
    if (!isNaN(time) && time > 0) {
        setTimeout(() => {
            alert("Час вийшов!");
        }, time * 1000);
    }
});
