const speechInput = document.getElementById('speech');
const convertButton = document.getElementById('convert');
const colorDisplay = document.getElementById('color-display');
const speakButton = document.getElementById('speak');

let recognition = new webkitSpeechRecognition();
recognition.lang = 'en-US';
recognition.maxResults = 10;

speakButton.addEventListener('click', () => {
  recognition.start();
});

recognition.onresult = event => {
  const speech = event.results[0][0].transcript.trim().replace(/\./g, '')
  ;
  speechInput.value = speech;
  if (isValidColor(speech)) {
    colorDisplay.style.backgroundColor = speech;
    console.log(speech)
  
  } else {
    const error = document.createElement('div')
    error.className = 'error'
    error.innerHTML = `${speech}: Not Found <i class="fa fa-exclamation-circle"></i>`
    document.querySelector('.fa').style.color = 'red'
    console.log(error);

    //position error msg
    const card = document.querySelector('.section')
    const header = document.querySelector('#header')
    card.insertBefore(error,header)
    console.log(header)

    setTimeout(()=>{
      error.remove()
    },3000)
  
  }
  

};



  function isValidColor(color) {
  const element = document.createElement('div');
  element.style.backgroundColor = color;
  return element.style.backgroundColor !== '';
  }




function getColorFromSpeech(speech) {
  // This is a simple example, you can improve it using more advanced algorithms

}