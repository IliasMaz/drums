// Detecting Button Press
for (let i = 0; i < document.querySelectorAll(".drum").length; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", handleClick);
}

function handleClick() {
  let buttonInnerHTML = this.innerHTML;
  makeSound(buttonInnerHTML);
  buttonAnimation(buttonInnerHTML);
}

// detecting keyboard Press
document.addEventListener("keydown", function (event) {
  makeSound(event.key);
  buttonAnimation(event.key);
});

function makeSound(key) {
  switch (key) {
    case "w":
      let tom1Audio = new Audio("./sounds/tom-1.mp3");
      tom1Audio.play();
      break;

    case "a":
      let tom2Audio = new Audio("./sounds/tom-2.mp3");
      tom2Audio.play();
      break;
    case "s":
      let tom3Audio = new Audio("./sounds/tom-3.mp3");
      tom3Audio.play();
      break;
    case "d":
      let tom4Audio = new Audio("./sounds/tom-4.mp3");
      tom4Audio.play();
      break;
    case "j":
      let snareAudio = new Audio("./sounds/snare.mp3");
      snareAudio.play();
      break;
    case "k":
      let crashAudio = new Audio("./sounds/crash.mp3");
      crashAudio.play();
      break;
    case "l":
      let kickAudio = new Audio("./sounds/kick-bass.mp3");
      kickAudio.play();
      break;

    default:
      console.log(key);
      break;
  }
}

function buttonAnimation(currentKey) {
  let activeButton = document.querySelector("." + currentKey);
  activeButton.classList.add("pressed");

  setTimeout(function () {
    activeButton.classList.remove("pressed");
  }, 100);
}

