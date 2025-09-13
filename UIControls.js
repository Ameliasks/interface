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

function playMusic() {
  var music = new Audio("audio/TRACK_REMIX_1.wav");
  music.play();
}
