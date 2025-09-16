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

// knob

// const knob = document.querySelector(".knob");

// function calculateDegree(e) {
//   const x1 = window.innerWidth / 2;
//   const y1 = innerHeight / 2;
//   const x2 = e.clientX;
//   const y2 = e.elientY;

//   const deltaX = x1 - x2;
//   const deltaY = y1 - y2;

//   const rad = Math.atan2(deltaY, deltaX);

//   let deg = rad * (180 / Math.PI);
//   return deg;
// }

// knob.addEventListener("mousedown", function () {
//   knob.addEventListener("mousemove", rotate);
//   function rotate(e) {
//     const result = Math.floor(calculateDegree(e) - 90);
//     knob.style.transform = `rotate(${result}deg)`;
//   }
//   knob.addEventListener("mouseup", function () {
//     knob.removeEventListener("mousemove", rotate);
//   });
// });

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

// slider controls volume of audio

// let volume = document.getElementById("#myRange.slider");
// volume.addEventListener("change", function (e) {
//   audio.volume = e.currentTarget.value / 100;
// });

//START/STOP button plays and pauses rotation

document.addEventListener("DOMContentLoaded", () => {
  const rotatingItem = document.getElementById("rotate");
  const toggleRotationButton = document.getElementById("toggleButton");
  let isRotating = true; // Initial state

  toggleRotationButton.addEventListener("click", () => {
    if (isRotating) {
      rotatingItem.classList.remove("rotate"); // Stop rotation
      toggleRotationButton.textContent = "Start Rotation";
    } else {
      rotatingItem.classList.add("rotate"); // Start rotation
      toggleRotationButton.textContent = "Stop Rotation";
    }
    isRotating = !isRotating; // Toggle the state
  });
});

//^does not work yet
