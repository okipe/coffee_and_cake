(function(){
// Esto protege a la función de modificaciones


// Propiedades Slider
var propSlider = {
    slider: document.getElementById('slider'),
    primerSlide: null
}

// Metodos slider
var metSlider = {
    inicio: function () {
        setInterval(metSlider.moverSlide, 3000);
        // Esto hace funcionar al slider de manera automática.
    },
    moverSlide: function () {
        propSlider.slider.style.transition = 'all 1s ease';
        propSlider.slider.style.marginLeft = '-100%';
        // Esto moverá el slide al -100%"

        setTimeout(function () {
            propSlider.primerSlide = propSlider.slider.firstElementChild;            
        
            // Esto mostrará el primer elemento hijo.
            propSlider.slider.appendChild(propSlider.primerSlide);

            propSlider.slider.style.transition = 'unset';
            //Esto elimina el movimiento del slide en el cambio de orden de fotos (margin-left: -100%)

            propSlider.slider.style.marginLeft = '0%';
        }, 1000);
    
    }

}

metSlider.inicio();

}())