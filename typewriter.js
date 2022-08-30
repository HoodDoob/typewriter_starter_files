"use strict";
// init();
// function init() {
//   let writtenText, firstArray, i;
//   writtenText = document.querySelector(".typewritten").textContent;

//   //   firstArray = writtenText.split("");
//   firstArray = writtenText.split("");
//   console.log(firstArray);

//     for (; firstArray.length > 44; firstArray.length--) {
//     appendLetter();
//     function appendLetter(){
//         let letter = document.createElement(firstArray[3]);
//         writtenText.append(letter);
//     }
// }}

init();
function init() {
  document.querySelector("#fakebutton").addEventListener("click", start);
}

function start() {
  document.querySelector("#fakebutton").classList.add("hidden");
  document.querySelector(".typewritten").classList.remove("hidden");
  var typespace = document.getElementById("typespace");
  var typekey1 = document.getElementById("typekey1");
  var typekey2 = document.getElementById("typekey2");

  let writtenText, firstArray, counter;
  let i = -2;
  writtenText = document.querySelector(".typewritten").textContent;

  firstArray = writtenText.split("");
  counter = firstArray.length;
  console.log("counter index " + counter);
  loop();
  document.querySelector(".typewritten").textContent = "";

  function loop() {
    if (counter > -1) {
      console.log(
        "counter " + counter + " " + "current letter " + firstArray[i]
      );

      counter -= 1;
      i += 1;
      document.querySelector(".typewritten").append(firstArray[i]);

      play();
      function play() {
        let randomNumba = PositionGenerator1();
        function PositionGenerator1() {
          return Math.floor(Math.random() * 2 + 1);
        }
        console.log("the random number is " + randomNumba);
        if (firstArray[i] == " ") {
          var newAudio0 = typespace.cloneNode();
          newAudio0.play();
          console.log(newAudio0);
        } else {
          if (randomNumba == 1) {
            var newAudio = typekey1.cloneNode();
            newAudio.play();
            console.log(newAudio);
          } else {
            typekey2.play();
            var newAudio2 = typekey2.cloneNode();
            newAudio2.play();
            console.log(newAudio2);
          }
        }
      }

      var random = Math.random() * 400 + 100;
      setTimeout(loop, random);
      console.log(random);
    }
  }
}
