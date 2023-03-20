// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

//  Your JavaScript code goes here!
const heartChange = {
  "♡": "♥",
  "♥": "♡"
};

const colorChange = {
  "red" : "",
  "" : "red"
};

const likes = document.querySelectorAll(".like-glyph");

function addLike(event) {
  const heart = event.target;
  mimicServerCall()
   
    .then(function(resp){
       heart.innerText = heartChange[heart.innerText];
       heart.style.color = colorChange[heart.style.color];
    })
    .catch(function(err) {
      const modal = document.getElementById("modal");
      modal.className = "";
      modal.innerText = err;
      setTimeout(() =>  modal.className = "hidden", 3000);
    });
}

for (hearts of likes) {
  hearts.addEventListener("click", addLike);
}

//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
