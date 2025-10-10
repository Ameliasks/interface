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
    // rotationToggle.classList.add("rotate");
    rotationToggle.style.animationPlayState = "running";
  } else {
    myAudio.pause();
    // rotationToggle.classList.remove("rotate");
    // rotationToggle.classList.add("paused");
    rotationToggle.style.animationPlayState = "paused";
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

// mute button
// slider should go to 0
// mute button should change to mute appearance

var muteButton = document.getElementById("musicIcon");
var muteMusic = document.getElementById("main-remix-1");
var setRangeZero = document.getElementById("volumeSlider");
var pathChange = document.getElementById("musicOn");
var pathChanged =
  "m33.77,2.16l-2.16-2.16-2.49,2.49-20.89,2.84v.05s-.03,0-.03,0v18.03l-.59.59c-.31-.07-.62-.12-.94-.12-2.54,0-4.6,2.06-4.6,4.6,0,.33.04.65.1.96l-2.17,2.17,2.16,2.16,1.68-1.68c.78.61,1.75.99,2.82.99,2.49,0,4.51-1.99,4.58-4.47h.01v-3.94l15.7-15.7v12.64c-.48-.17-.99-.28-1.53-.28-2.54,0-4.6,2.06-4.6,4.6s2.06,4.6,4.6,4.6,4.51-1.99,4.58-4.47h.01V5.91l3.75-3.75Zm-22.51,7.71l12.22-1.74-12.22,12.22v-10.48Z";
var originalPathData = pathChange.getAttribute("d");

muteButton.addEventListener("click", () => {
  muteMusic.muted = !muteMusic.muted;

  // want to make mute button class
  if (muteMusic.muted) {
    pathChange.setAttribute("d", pathChanged);
    setRangeZero.value = 0;
  } else {
    pathChange.setAttribute("d", originalPathData);
    setRangeZero.value = 70;
  }
});

function updateRangeAppearance() {
  if (setRangeZero.value === "0") {
    pathChange.setAttribute("d", pathChanged);
  } else {
    pathChange.setAttribute("d", originalPathData);
  }
}

setRangeZero.addEventListener("input", updateRangeAppearance);
