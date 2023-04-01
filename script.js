// Handles loading the events for <model-viewer>'s slotted progress bar
const onProgress = (event) => {
  const progressBar = event.target.querySelector('.progress-bar');
  const updatingBar = event.target.querySelector('.update-bar');
  updatingBar.style.width = `${event.detail.totalProgress * 100}%`;
  if (event.detail.totalProgress === 1) {
    progressBar.classList.add('hide');
  } else {
    progressBar.classList.remove('hide');
    if (event.detail.totalProgress === 0) {
      event.target.querySelector('.center-pre-prompt').classList.add('hide');
    }
  }
};
document.querySelector('model-viewer').addEventListener('progress', onProgress);



const playButton = document.querySelector('#boton1');
const modelViewer = document.querySelector('model-viewer');
playButton.addEventListener('click', () => {
  // modelViewer.currentTime = 0; // reinicia la animación si ya se estaba reproduciendo
  modelViewer.play({ repetitions: 1 });
});


function mostrarp(divNum) {
  document.getElementById("text1").classList.add("hide");
  document.getElementById("text2").classList.add("hide");
  document.getElementById("text3").classList.add("hide");
  /* document.getElementById("text4").classList.add("hide");
   document.getElementById("text5").classList.add("hide");
   document.getElementById("text6").classList.add("hide");
   document.getElementById("text7").classList.add("hide");*/


  // Show the specific div
  document.getElementById("text" + divNum).classList.remove("hide");
}

function cerrar() {
  document.getElementById("text1").classList.add("hide");
  document.getElementById("text2").classList.add("hide");
  document.getElementById("text3").classList.add("hide");
  /* document.getElementById("text4").classList.add("hide");
   document.getElementById("text5").classList.add("hide");
   document.getElementById("text6").classList.add("hide");
   document.getElementById("text7").classList.add("hide");*/
}