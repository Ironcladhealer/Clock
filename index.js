const secondHand = document.querySelector(".second-hand");
const largeHand = document.querySelector(".minute-hand");
const hourHand = document.querySelector(".hour-hand");

function setDate() {
  const now = new Date();
  const seconds = now.getSeconds();
  const secDegree = (seconds / 60) * 360 + 90;
  secondHand.style.transform = `rotate(${secDegree}deg)`;

  const minutes = now.getMinutes();
  const minDegree = (minutes / 60) * 360 + 90;
  largeHand.style.transform = `rotate(${minDegree}deg)`;

  const hours = now.getHours();
  const hourDegree = (hours / 12) * 360 + 90;
  hourHand.style.transform = `rotate(${hourDegree}deg)`;
}

setInterval(setDate, 1000);
