// WEB AUDIO API

// 1.START > Create Audio context
let ctxt;
window.addEventListener('load', init(false));
function init() {
    try {
        ctxt = new AudioContext();
    }
    catch(e) {
        alert('WebAPI is not supported');
    }
}

// 2.Charge Sound

var sound1 = null;
var ctxt2 = new AudioContext();
var url = '/Users/bernatferragut/Documents/MZK/llSounds/01\ 1ag.mp3';

function loadSound1() {
    var request = new XMLHttpRequest();
    request.open('GET', url, true);
    request.responseType = 'arraybuffer';

    //Decode asynchronously 
    request.onload = function() {
        ctxt2.decodeAudioData(request, response, function(buffer) {
            sound1 = buffer;
        }, onError);
    }
    reques.send();
}

// 3. Play a Sound

var ctxt3 = new AudioContext();
var synth = ctxt3.createOscillator();
var gain = ctxt3.createGain();
var destintation = ctxt3.destination;

function playSound(buffer) {
    var source = ctxt3.createBufferSource();
    source.buffer = buffer;
    source.connect(destintation);
}//source.noteOn(0);

// 4. Buffer Abstraction