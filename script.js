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
