/* find modal */
let introModal = document.getElementById("introDialog");

/* to get the backdrop working we need to open the modal with js */
document.getElementById("introDialog").showModal();

/* find modal close button and add an eventlistener */
document.getElementById("dialogCloseButton").addEventListener("click", () => {
  introModal.close();
});

introModal.addEventListener("close", toneInit);

// volume slider

var slider = document.getElementById("myRange");
var output = document.getElementById("demo");
output.innerHTML = slider.value;

// Update the current slider value (each time you drag the slider handle)
slider.oninput = function () {
  output.innerHTML = this.value;
};

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
}

//button toggles ambient sound on/off

function toggleOnOff() {
  var ambient = document.getElementById("ambient-1");
  let base = document.getElementById("main-remix-1");

  if (ambient.paused) {
    ambient.play();
    base.volume = 0.7;
  } else {
    ambient.pause();
    base.volume = 1.0;
  }
}

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

// slider controls volume of audio

const volumeSlider = document.getElementById("volumeSlider");

// Set initial volume based on slider value
myAudio.volume = volumeSlider.value / 100;

// Add an event listener to update volume when the slider changes
volumeSlider.addEventListener("change", function (e) {
  myAudio.volume = e.target.value / 100;
});

//START/STOP button plays and pauses rotation
