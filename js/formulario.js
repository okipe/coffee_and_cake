// Objeto con propiedades de formulario
var propFormulario = {
    
    formulario: document.formulario_contacto,
    // Esta es una manera diferente de referirse a un elemento HTML, esta vez por su name.
    elementos: document.formulario_contacto.elements
    // Aquí entro a las propiedades de elementos.
}


// Objeto con métodos de formulario

var metFormulario = {

    inicio: function () {
    // Este método de inicio añadirá un evento a los distintos elementos, por ejemplo hacer clic en una parte del formulario
        for (var i = 0; i < propFormulario.elementos.length; i++) {
            if( propFormulario.elementos[i].type == 'text' || propFormulario.elementos[i].type == 'email' || propFormulario.elementos[i].nodeName.toLowerCase() == 'textarea'){
            // Con esto voy a comprobar el tipo de elemento que estoy validando. type es una propiedad que te dice el tipo de input. Node puede referirse a cuál es la etiqueta.
                propFormulario.elementos[i].addEventListener('focus', metFormulario.focusInput);
                // Esto añadirá un evento de focus
                propFormulario.elementos[i].addEventListener('blur', metFormulario.blurInput);
                // Esto añadirá un evento de blur
            }
        }
    },

    focusInput: function () {
        // Aquí ya vamos a definir focusInput
        this.parentElement.children[1].className = 'label active'; 
        // Aquí seleccionamos el label
    },

    blurInput: function () {
        if (this.value == '') {
            this.parentElement.children[1].className = 'label';
            // Esto hace que cuando se haga clic afuera, el texto de etiqueta vuelva a su posición; es decir, que le quite la clase active.
        }
    }
}

metFormulario.inicio();