const heartsContainer = document.querySelector(".hearts");
const heartChars = ["♥", "♡", "❤", "💕"];

function createHeart() {
  const heart = document.createElement("span");
  heart.className = "heart";
  heart.textContent = heartChars[Math.floor(Math.random() * heartChars.length)];
  heart.style.left = `${Math.random() * 100}%`;
  heart.style.fontSize = `${0.5 + Math.random() * 1.4}rem`;
  heart.style.animationDuration = `${5 + Math.random() * 7}s`;
  heartsContainer.appendChild(heart);

  heart.addEventListener("animationend", () => heart.remove());
}

function spawnHearts(count = 2) {
  for (let i = 0; i < count; i++) {
    createHeart();
  }
}

setInterval(() => spawnHearts(2), 350);

for (let i = 0; i < 12; i++) {
  setTimeout(() => createHeart(), i * 120);
}

const bgMusic = document.getElementById("bgMusic");
const musicStart = document.getElementById("musicStart");
const musicStartBtn = document.getElementById("musicStartBtn");
const musicToggle = document.getElementById("musicToggle");

function showMusicControls() {
  musicToggle.hidden = false;
}

function hideStartScreen() {
  musicStart.hidden = true;
  showMusicControls();
}

async function playMusic() {
  try {
    await bgMusic.play();
    musicToggle.classList.remove("is-paused");
    musicToggle.setAttribute("aria-label", "Pausar música");
    musicToggle.title = "Pausar música";
    hideStartScreen();
    return true;
  } catch {
    musicStart.hidden = false;
    return false;
  }
}

function pauseMusic() {
  bgMusic.pause();
  musicToggle.classList.add("is-paused");
  musicToggle.setAttribute("aria-label", "Tocar música");
  musicToggle.title = "Tocar música";
}

musicStartBtn.addEventListener("click", playMusic);

musicToggle.addEventListener("click", () => {
  if (bgMusic.paused) {
    playMusic();
  } else {
    pauseMusic();
  }
});

document.addEventListener("DOMContentLoaded", async () => {
  const started = await playMusic();
  if (!started) {
    musicStart.hidden = false;
  }
});
