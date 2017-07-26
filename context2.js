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

    // SLIDER
    // Instantiate a slider
    var mySlider = $("input.slider").slider();
    // Call a method on the slider
    var value = mySlider.slider('getValue');
    
}




