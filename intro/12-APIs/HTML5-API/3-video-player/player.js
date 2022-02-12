import { videos } from "./data.js";

document.addEventListener("DOMContentLoaded", init, false);

function init() {
  let controlBtns = document.getElementById("controlBtns");
  let video = document.querySelector("#player video");
  let currentVideo = 0;
  video.src = `../media/${videos[currentVideo].url}`;
  console.log(video.src);
  video.volume = 0.5;
  let meterProgress = document.querySelector("section progress");
  let meterLabel = document.querySelector("section label");
  let currentTime = document.querySelector(".currentTime");
  let videoDuration = document.getElementById("videoDuration");
  let playNext = document.querySelector("#playNext");
  let canvas = document.querySelector("canvas");
  let context = canvas.getContext("2d");

  //events
  controlBtns.addEventListener("click", comandosVideo, false);
  video.addEventListener("timeupdate", showCurrentTime, false);
  playNext.addEventListener("click", playNextVideo, false);
  video.addEventListener("click", snapShot, false);

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

    if (botaoClicado.id === "snapshot") {
      snapShot();
      console.log(botaoClicado.id);
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
    currentTime.style.width = 0;
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

  function showCurrentTime() {
    let videoPosition = video.currentTime / video.duration;
    currentTime.style.width = videoPosition * 100 + "%";
    let showVideoTime = video.currentTime;

    let duration = video.duration;
    videoDuration.innerHTML = `${formatTime(showVideoTime)}/${formatTime(
      duration
    )}`;
  }

  function playNextVideo() {
    if (currentVideo === 0) {
      currentVideo = 1;
      video.src = `../media/${videos[currentVideo].url}`;
    } else if (currentVideo === 1) {
      currentVideo = 0;
      video.src = `../media/${videos[currentVideo].url}`;
    }

    stopVideo();
    playAoVideo();
  }

  function snapShot() {
    canvas.width = 300;
    canvas.height = 150;
    context.fillRect(0, 0, canvas.width, canvas.height);
    context.drawImage(video, 0, 0, 640, 480);
  }

  // how to get the time values in this format: 00:00 / 00:00
  function formatTime(showVideoTime) {
    let m = Math.floor(showVideoTime / 60);
    m = m >= 10 ? m : "0" + m;
    showVideoTime = Math.floor(showVideoTime % 60);
    showVideoTime = showVideoTime >= 10 ? showVideoTime : "0" + showVideoTime;
    return m + ":" + showVideoTime;
  }
}
