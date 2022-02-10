function formatTime(showVideoTime) {
  let m = Math.floor(showVideoTime / 60);
  m = m >= 10 ? m : "0" + m;
  showVideoTime = Math.floor(showVideoTime % 60);
  showVideoTime = showVideoTime >= 10 ? showVideoTime : "0" + showVideoTime;
  return m + ":" + showVideoTime;
}
