document.addEventListener("DOMContentLoaded", () => {

  const music = document.getElementById("bgMusic");
  const volumeControl = document.getElementById("volumeControl");

  // carregar tempo salvo
  const savedTime = localStorage.getItem("musicTime");
  const savedVolume = localStorage.getItem("volume");

  if (music) {
    if (savedTime) music.currentTime = savedTime;
    if (savedVolume) music.volume = savedVolume;
  }

  // iniciar música
  function startMusic() {
    if (music) {
      music.play().catch(() => {});
    }
  }

  document.addEventListener("click", startMusic, { once: true });

  // salvar tempo continuamente
  if (music) {
    setInterval(() => {
      localStorage.setItem("musicTime", music.currentTime);
    }, 1000);
  }

  // controle de volume
  if (volumeControl && music) {
    volumeControl.value = savedVolume || 0.3;

    volumeControl.addEventListener("input", () => {
      music.volume = volumeControl.value;
      localStorage.setItem("volume", volumeControl.value);
    });
  }

});

function copyIP() {
  navigator.clipboard.writeText("TMB.serveminecraft.net:9148");
  alert("IP copiado!");
}
function copyPort() {
  navigator.clipboard.writeText("28258");
  alert("Porta copiada!");
}

function copyIP() {
  navigator.clipboard.writeText("TMB.serveminecraft.net");
  alert("IP copiado!");
}

function copyPort() {
  navigator.clipboard.writeText("28258");
  alert("Porta copiada!");
}

const elements = document.querySelectorAll(".fade-in");

function showOnScroll() {
  const trigger = window.innerHeight * 0.85;

  elements.forEach(el => {
    const top = el.getBoundingClientRect().top;

    if (top < trigger) {
      el.classList.add("visible");
    }
  });
}

window.addEventListener("scroll", showOnScroll);
showOnScroll();

const volumeControl = document.getElementById("volumeControl");

if (volumeControl && music) {
  volumeControl.value = 0.3;

  volumeControl.addEventListener("input", () => {
    music.volume = volumeControl.value;
  });
}

function openImage(element) {
  const img = element.querySelector("img");
  const titleElement = element.querySelector(".title");

  const title = titleElement ? titleElement.innerText : "";

  document.getElementById("lightbox").style.display = "flex";
  document.getElementById("lightbox-img").src = img.src;
  document.getElementById("lightbox-title").innerText = title;
}

function closeImage() {
  document.getElementById("lightbox").style.display = "none";
}
