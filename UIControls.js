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
  var myAudio = document.getElementById("main-remix-1");
  if (myAudio.paused) {
    myAudio.play();
    //document.getElementById("play").innerHTML="Pause";
  } else {
    myAudio.pause();
    //document.getElementById("Pause").innerHTML="Play";
  }

  var vinylRotate = document.getElementById("image3");
  vinylRotate.classList.toggle("rotate");
}

//button toggles ambient sound on/off

function toggleOnOff() {
  var ambient = document.getElementById("ambient-1");
  let base = document.getElementById("main-remix-1");

  if (ambient.paused) {
    ambient.play();
    base.volume = 0.5;
  } else {
    ambient.pause();
    base.volume = 1.0;
  }
}

function myFunction() {
  var element = document.getElementById("dial");
  element.classList.toggle("dial-on");
}

//START/STOP button plays and pauses rotation

function toggleHighlight() {
  let myBox = document.getElementById("myBox");
  myBox.classList.toggle("highlight");
}

/// volume slider

const volumeSlider = document.getElementById("volumeSlider");
const audio = document.getElementById("main-remix-1");

volumeSlider.addEventListener("input", function () {
  audio.volume = this.value / 100;
});

// // Check if the current date is the target date
// if (currentDate.getDate() === targetDate.getDate() &&
//     currentDate.getMonth() === targetDate.getMonth()) {
//     myElement.classList.toggle(className, true); // Add the class if it's the target date
// } else {
//     myElement.classList.toggle(className, false); // Remove the class if it's not
// }

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

// current hour should change
// 1- image displayed
// 2- colour of time display
// 3- song being played
// 4- ambient sound being played

// 12am-8am
// 1-vinyl1-alt
// 2- grey/brown
// 3- original
// 4-

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

const currentHour = now.getHours();
console.log(currentHour);

var imgChange = document.getElementById("change");

if (currentHour < 8) {
  imgChange.src = "img/vinyl1-alt.png";
} else {
  if (8 <= currentHour < 16) {
    imgChange.src = "img/vinyl2.png";
  } else {
    if (16 <= currentHour < 24) {
      imgChange.src = "img/vinyl3.png";
    }
  }
}
