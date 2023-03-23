const si = document.getElementById('si');
const modal_container = document.getElementById('modal_container');
const close = document.getElementById('close');

close.addEventListener('click', () => {
  modal_container.classList.remove('show');
});
si.addEventListener('click', () => {
  modal_container.classList.add('show');
});

no.addEventListener('mouseover', function () {
  const randomX = parseInt(Math.random() * 100);
  const randomY = parseInt(Math.random() * 100);
  no.style.setProperty('top', randomY + '%');
  no.style.setProperty('left', randomX + '%');
  no.style.setProperty('transform', `translate(-${randomX}%,-${randomY})`);
})



var nyan = document.getElementById('nyan');
var nyanBtn = document.getElementById('nyan-btn');

function playPause(song) {
  if (song.paused && song.currentTime >= 0 && !song.ended) {
    song.play();
  } else {
    song.pause();
  }
}

function reset(btn, song) {
  if (btn.classList.contains('playing')) {
    btn.classList.toggle('playing');
  }
  song.pause();
  song.currentTime = 0;
}

function progress(btn, song) {
  setTimeout(function () {
    var end = song.duration;
    var current = song.currentTime;
    var percent = current / (end / 100);
    //check if song is at the end
    if (current == end) {
      reset(btn, song);
    }
    //set inset box shadow
    btn.style.boxShadow = "inset " + btn.offsetWidth * (percent / 100) + "px 0px 0px 0px rgba(0,0,0,0.125)"
    //call function again
    progress(btn, song);
  }, 1000);
}

nyanBtn.addEventListener('click', function () {
  nyanBtn.classList.toggle('playing');
  playPause(nyan);
  progress(nyanBtn, nyan);
});

var soundyes = new Audio();
soundyes.src = "yes.mp3"
var soundno = new Audio();
soundno.src = "no.mp3"

const playpause = document.querySelector('.playpause');

playpause.addEventListener('click', () => {
  playpause.classList.toggle('playing');
});


let popup = document.getElementsByClassName("popup-card")[0];

let closeBtn = document.getElementById("close-btn");



function showPopup() {

  setTimeout(() => {

    popup.style.transform = "translateY(0)";

  }, 900);

}



closeBtn.addEventListener("click", (e) => {

  popup.style.transform = "translateY(-70vh)";

});



window.onload = showPopup();



document.querySelector('.botton').addEventListener('click', function () {

  document.querySelector('body').classList.toggle('background')

});

