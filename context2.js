window.onload = function() {
    // declare vars
    var context = new window.AudioContext(),
        osc = context.createOscillator(),
        vol = context.createGain()
        volControl = document.getElementById("volume");
    // osc => vol
     osc.frequency.value = 440;
     osc.connect(vol);
    // hook up values
    vol.value = volControl.value;
    // vol => destination
    vol.connect(context.destination);
    // EventListener
    volControl.addEventListener('input', function() {
        vol.gain.value = volControl.value;
    })
    //start osc
    osc.start();
    osc.stop();

    // RANGE SLIDER
    // select
var $element = $('input[type="range"]');

$element
  .rangeslider({
    polyfill: false,
    onInit: function() {
      var $handle = $('.rangeslider__handle', this.$range);
      updateHandle($handle[0], this.value);
    }
  })
  .on('input', function(e) {
    var $handle = $('.rangeslider__handle', e.target.nextSibling);
    updateHandle($handle[0], this.value);
  });

function updateHandle(el, val) {
  el.textContent = val;
}

}




