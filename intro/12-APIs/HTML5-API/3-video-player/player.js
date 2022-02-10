import { videos } from "./data.js";

document.addEventListener("DOMContentLoaded", init, false);

function init() {
  let controlBtns = document.getElementById("controlBtns");
  let video = document.querySelector("#player video");
  let currentVideo = 0;
  video.src = `../media/${videos[currentVideo].url}`;
  video.volume = 0.5;
  let meter = document.querySelector("section.volumeMeter");
  let meterProgress = document.querySelector("section progress");
  let meterLabel = document.querySelector("section label");

  //events
  controlBtns.addEventListener("click", comandosVideo, false);

  //functions

  function comandosVideo(e) {
    let botaoClicado = e.target;

    if (botaoClicado.id === "playBtn") {
      playAoVideo();
    }

    if (botaoClicado.id === "pauseBtn") {
      pauseAoVideo();
    }

    if (botaoClicado.id === "stopBtn") {
      stopVideo();
    }

    if (botaoClicado.id === "muteBtn") {
      muteVideo();
    }

    if (botaoClicado.id === "maisBtn") {
      aumentarVolume();
    }

    if (botaoClicado.id === "menosBtn") {
      baixarVolume();
    }
  }

  // ações

  function playAoVideo() {
    video.play();
  }

  function pauseAoVideo() {
    video.pause();
  }

  function stopVideo() {
    video.load();
  }

  function muteVideo() {
    if (video.muted === false) {
      video.muted = true;
      meterProgress.value = 0;
      meterLabel.textContent = "🔈";
    } else if (video.muted === true) {
      video.muted = false;
      meterProgress.value = video.volume;
      meterLabel.textContent = "Volume:";
    }
  }

  function aumentarVolume() {
    console.log(video.volume);
    video.volume += 0.1;
    meterProgress.value = video.volume;
  }

  function baixarVolume() {
    console.log(video.volume);
    video.volume -= 0.1;
    meterProgress.value = video.volume;
  }
}
