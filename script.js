const heartsContainer = document.querySelector(".hearts");
const heartChars = ["♥", "♡", "❤", "💕"];

function createHeart() {
  const heart = document.createElement("span");
  heart.className = "heart";
  heart.textContent = heartChars[Math.floor(Math.random() * heartChars.length)];
  heart.style.left = `${Math.random() * 100}%`;
  heart.style.fontSize = `${0.6 + Math.random() * 1.2}rem`;
  heart.style.animationDuration = `${6 + Math.random() * 8}s`;
  heartsContainer.appendChild(heart);

  heart.addEventListener("animationend", () => heart.remove());
}

setInterval(createHeart, 900);
