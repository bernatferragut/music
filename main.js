
// 1. WHEN DOM READY
$(document).ready(function() {
    // RANGESLIDER OBJECT FUNCTION
    var rangeSlider = function(){
    var slider = $('.range-slider'),
        range = $('.range-slider__range'),
        value = $('.range-slider__value');

    // for each of the sliders apply...
    slider.each(function(){
      // for each of the values apply...
      value.each(function(){
        // get the attr 'before' value of the slide
        var value = $(this).prev().attr('value');
        // aply it now on the new
        $(this).html(value);
      });
      // onInput()
      range.on('input', function(){
        $(this).next(value).html(this.value);
      });
    });
  };

  //RANGESLIDER CREATION
  rangeSlider();

  // WEB AUDIO API  // declare vars
  const context = new window.AudioContext()
  // OSCILLATOR
  let osc = context.createOscillator();
  let freq = osc.frequency;
  freq.value = 440;
  osc.type = 'sine'; //(sine, square, traingle, sawtooth)
  let freqControl = document.getElementById('frequency');
  // VOLUME
  let vol = context.createGain();
  let volControl = document.getElementById('volume');
  // osc => vol
  osc.connect(vol);
  // hook up values
  vol.gain.value = volControl.value;
  // vol => destination
  vol.connect(context.destination);
  // VOLUME CONTROL
  volControl.addEventListener('input', function() {
    vol.gain.value = volControl.value;
  });
  // FREQUENCY CONTROL
  freqControl.addEventListener('input', function() {
    freq.value = freqControl.value;
  });
  //start osc
  osc.start();
  osc.stop();

  // CREATING AN OBSERVABLE

});
