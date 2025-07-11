// Telegram WebApp mock
if (window.Telegram && window.Telegram.WebApp) {
  console.log("Telegram WebApp detected");
  // можно использовать: Telegram.WebApp.initData, Telegram.WebApp.sendData()
}

// TON Connect mock
document.getElementById('tonConnectBtn').addEventListener('click', () => {
  alert('TON Connect вызван (здесь будет tonconnect-ui)');
});

// Spin wheel
const wheel = document.getElementById('wheel');
const spinBtn = document.getElementById('spinBtn');

spinBtn.addEventListener('click', () => {
  const randomRotation = 720 + Math.floor(Math.random() * 360); // от 720 до 1080 градусов
  wheel.style.transform = `rotate(${randomRotation}deg)`;
});
