// WEB AUDIO API
// 1. Simple Oscillator
var context = new AudioContext() || new webkitAudioContext();
var osc = context.createOscillator();
osc.frequency.value = 440;
osc.type = "sin"
osc.connect(context.destination);
//osc.start();
//osc.stop();

//select buttons
var startBtn = document.getElementById('start');
console.log(startBtn);
var stopBtn = document.getElementById('stop');
console.log(stopBtn);
// attach Event to Start
startBtn.addEventListener('click', function() {
    osc.start();
})
// attach event to Stop
stopBtn.addEventListener('click', function() {
    osc.stop();
})


