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
  console.log(vinylRotate);
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

// function toggleRotation() {

// }
// changes button color on click

// var changeColorButton = document.querySelector("knob");
// var colorChange = document.querySelector("dial");

// changeColorButton.addEventListener("click", function () {
//   colorChange.style.backgroundColor = "red"; // Changes the background color of the clicked button to red
// });

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
