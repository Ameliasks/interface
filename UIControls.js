/* find modal */
let introModal = document.getElementById("introDialog");

/* to get the backdrop working we need to open the modal with js */
document.getElementById("introDialog").showModal();

/* find modal close button and add an eventlistener */
document.getElementById("dialogCloseButton").addEventListener("click", () => {
  introModal.close();
});

// introModal.addEventListener("close", toneInit);

document.getElementById("popupDialog").style.display = "none";

function popupFn() {
  document.getElementById("overlay").style.display = "block";
  document.getElementById("popupDialog").style.display = "block";
}
function closeFn() {
  document.getElementById("overlay").style.display = "none";
  document.getElementById("popupDialog").style.display = "none";
}

//START/STOP button toggles audio on and off

const toggleButton = document.querySelector("toggleButton");

function playMusic() {
  var music = document.getElementById("main-remix-1");
  music.play();
}

function togglePlayPause() {
  //START/STOP button plays and pauses music
  //START/STOP button plays and pauses rotation

  let rotationToggle = document.getElementById("change");
  var myAudio = document.getElementById("main-remix-1");
  if (myAudio.paused) {
    myAudio.play();
    rotationToggle.classList.add("rotate");
  } else {
    myAudio.pause();
    rotationToggle.classList.remove("rotate");
  }
}

//button toggles ambient sound on/off

function toggleOnOff() {
  var ambient = document.getElementById("ambientSound");
  let base = document.getElementById("main-remix-1");
  let buttonState = document.getElementById("myDial");
  let knobState = document.getElementById("myKnob");

  if (ambient.paused) {
    ambient.play();
    base.volume = 0.3;
    buttonState.classList.add("dialOn");
    knobState.classList.remove("knob");
    knobState.classList.toggle("knobOn");
  } else {
    ambient.pause();
    base.volume = 1.0;
    buttonState.classList.remove("dialOn");
    knobState.classList.remove("knobOn");
    knobState.classList.toggle("knob");
  }
}

/// volume slider

const volumeSlider = document.getElementById("volumeSlider");
const audio = document.getElementById("main-remix-1");

volumeSlider.addEventListener("input", function () {
  audio.volume = this.value / 100;
});

// Get current date and time
// set interval

let now = new Date();
console.log(now.getHours());

// display date(day)
var dayName = now.toLocaleString("en-US", { weekday: "long" });
document.getElementById("dateDisplay").innerHTML = dayName;

// display time
var dateShort = now.toLocaleString("en-US", { timeStyle: "short" });
document.getElementById("timeDisplay").innerHTML = dateShort;
setInterval(dateShort, 200000);

// current hour should change
// 1- image displayed
// 2- colour of time display
// 3- song being played
// 4- ambient sound being played

// 12am-8am
// 1-vinyl1-alt
// 2- grey/brown
// 3- original
// 4- nature

// 8am-4pm
// 1- vinyl2
// 2- orange
// 3- remix 1
// 4-

// 4pm-12am
// 1- vinyl 3
// 2- blue
// 3- remix 2
// 4- city

var currentHour = now.getHours();
console.log(currentHour);

var imgChange = document.getElementById("change");
var dateColorChange = document.getElementById("dateDisplay");
var timeColorChange = document.getElementById("timeDisplay");
var songChange = document.getElementById("main-remix-1");
var ambientChange = document.getElementById("ambientSound");

if (currentHour < 8) {
  imgChange.src = "img/vinyl1-alt.png";
  timeColorChange.style.color = "#8a7b4d";
} else if (currentHour >= 8 && currentHour < 16) {
  imgChange.src = "img/vinyl2.png";

  timeColorChange.style.color = "#d58056";

  songChange.src = "audio/TRACK_REMIX_2.wav";
  songChange.play();

  ambientChange.src = "audio/ambientOcean.mp3";
} else if (currentHour >= 16) {
  imgChange.src = "img/vinyl3.png";

  timeColorChange.style.color = "#6e9aaf";

  songChange.src = "audio/TRACK_REMIX_1.wav";

  ambientChange.src = "audio/ambientCity.mp3";
}

// mute button test

var muteButton = document.getElementById("musicIcon");
var muteMusic = document.getElementById("main-remix-1");
var setRangeZero = document.getElementById("volumeSlider");

muteButton.addEventListener("click", () => {
  muteMusic.muted = !muteMusic.muted;

  // want to make mute button class
  if (muteMusic.muted) {
    // muteButton.classList.add("mute");
    // muteButton.classList.remove("on");

    muteButton.src = "img/mute.svg";
    setRangeZero.value = 0;
  } else {
    // muteButton.classList.remove("mute");
    // muteButton.classList.add("on");

    muteButton.src = "img/on.svg";
    setRangeZero.value = 70;
  }
});

// credits stored in info dialog
