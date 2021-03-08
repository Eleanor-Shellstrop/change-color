const backgroundColor = document.getElementById("main");
const button = document.getElementById("button");

function changeColor () {
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);
    return `rgb(${r}, ${g}, ${b})`;
}

button.addEventListener('click', ()=> {
    backgroundColor.style.background = changeColor();
});

const ballButton = document.getElementById("ballButton");
const ball = document.getElementById("ball");
const body = document.getElementById("body");

ballButton.addEventListener('click', () => {
    ball.style.background = `radial-gradient(circle at 35% 35%, rgb(255, 255, 255) 0%, ${changeColor()} 50%, ${changeColor()} 100%)`;
});