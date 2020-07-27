const btn = document.querySelector('.talk');
const content = document.querySelector('.content');
const container = document.querySelector('.container');

const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();

const bg = ['0','1','2','3','4','5','6','7','8','9','a','b','c','d','e','f'];

function color(){
    var color = '#';
    for(let i = 0; i < 6; i++){
        mathRanInt = parseInt(Math.random() * bg.length);
        color += bg[mathRanInt];
    }
    return color;
}
recognition.onresult = function(event) {
    const current = event.resultIndex;
    const transcript = event.results[current][0].transcript;
    content.textContent = transcript;
    readOutLoud(transcript);
}
btn.addEventListener('click', () => {
    recognition.start();
})
function readOutLoud(message){
    const speech = new SpeechSynthesisUtterance();
    if (message.includes('поменяй фон')) {
        container.style.background = `linear-gradient(25deg, ${color()}, ${color()}, ${color()})`;
    } else if (message.includes('change background')) {
        container.style.background = `linear-gradient(25deg, ${color()}, ${color()}, ${color()})`;
    }
    speech.volume = 1;
    speech.rate = 1;
    speech.pitch = 1;
    window.speechSynthesis.speak(speech);
}