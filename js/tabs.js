(function(){

// Objeto con propiedades de Tab

var propTabs = {

    primer_encabezado: document.getElementById('encabezado_menu').firstElementChild,
    primer_contenido: document.getElementById('contenido_menu').firstElementChild,
    enlaces_encabezado: document.querySelectorAll('#encabezado_menu li a'),
    li_encabezado: document.querySelectorAll('#encabezado_menu li'),
    divs_contenido: document.querySelectorAll('#contenido_menu > div'),
    contenido_activo: null
}


// Objeto con métodos de Tab
var metTabs = {
    inicio: function(){
        propTabs.primer_encabezado.className = 'active';
        propTabs.primer_contenido.className = 'active';
        //esto asignará la clase 'active' al HTML de la carta.

        for (var i = 0; i < propTabs.enlaces_encabezado.length; i++) {
            propTabs.enlaces_encabezado[i].addEventListener('click', metTabs.evento);
        }
    },

    evento: function(e) {
        e.preventDefault();
        //previene que el click lleve a #cafés en la URL
        for (var i = 0; i < propTabs.li_encabezado.length; i++) {
            propTabs.li_encabezado[i].className = '';
        }
        //quita la clase active a los encabezados


        for (var i = 0; i < propTabs.divs_contenido.length; i++) {
            propTabs.divs_contenido[i].className = '';
        }
        //quita la clase active a los contenidos

        this.parentElement.className = 'active';
        propTabs.contenido_activo = this.getAttribute('href');
        document.querySelector(propTabs.contenido_activo).className = 'active';
        //con ello ya funciona el selector de listas de menus y postres
        document.querySelector(propTabs.contenido_activo).style.opacity = 0;
        setTimeout(function(){
            document.querySelector(propTabs.contenido_activo).style.opacity = 1;
        }, 100);
    }
}

metTabs.inicio();

}())