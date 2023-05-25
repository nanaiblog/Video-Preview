
// Obtén el elemento del video
var video = document.getElementById('video');

// Agrega un evento para cuando el cursor se coloca sobre el video
video.addEventListener('mouseover', function() {
  // Reproduce el video en silencio
  video.play();
  video.muted = true;
});

// Agrega un evento para cuando el cursor se retira del video
video.addEventListener('mouseout', function() {
  // Detén la reproducción del video y reinicia el video al principio
  video.pause();
  video.currentTime = 0;
});