(function(){

// Objeto con las propiedades del efecto Lightbox

var propLightbox = {
    imgContainer: document.getElementsByClassName('lightbox'),
    imagen: null,
    //esto iniciará nulo porque no quiero que tenga valor pero que si exista.

    imagenSrc: null,
    //esto es para seleccionar la imagen que refiere el CSS

    cuerpoDom: document.getElementsByTagName('body')[0],
    lightbox_container: null,
    modal: null,
    cerrarModal: null,
    animacion: 'fade'
}

// Objetos con los métodos del efecto Lightbox

var metLightbox = {
    inicio: function(){
        for (var i = 0; i < propLightbox.imgContainer.length; i++) {
            // crear una variable de inicio que sea cero, que se repite el ciclo mientras i sea menor a la cantidad de elementos que tenga el arreglo y luego que actualice la variable i en cada ejecución.
            propLightbox.imgContainer[i].addEventListener('click', metLightbox.capturaImagen);

        }  
    },

    capturaImagen: function(){
        propLightbox.imagen = this;
        metLightbox.lightbox(propLightbox.imagen);
        //Estos sirvirán cuando se cree el método lightbox. Este alamcenará la imagen que se hizo clic y luego ejecutará el metLightbox, el cual tendrá la imagen capturada.

    },

    lightbox: function(imagen){
    // Esto toma la imagen de la función anterior para esta función

        propLightbox.imagenSrc = window.getComputedStyle(imagen, null).backgroundImage.slice(5, -2);
        // Este método window.getComputedStyle permite ver las propiedades del CSS que ya están asigandas. El imagen.style solo sirve para asignar estilos CSS únicamente. Cuando uso el bakground.Image, obtengo la URl, meintras que con slice, puedo cortar las primeras y últimas letras de un stream según los parámetros asignados.

        propLightbox.cuerpoDom.appendChild(document.createElement('DIV')).setAttribute('id', 'lightbox_container');
        propLightbox.lightbox_container = document.getElementById('lightbox_container');
        propLightbox.lightbox_container.style.width = '100%';
        propLightbox.lightbox_container.style.height = '100%';
        propLightbox.lightbox_container.style.position = 'fixed';
        propLightbox.lightbox_container.style.zIndex = '1000';
        propLightbox.lightbox_container.style.background = 'rgba(0,0,0,0.8)';
        propLightbox.lightbox_container.style.top = '0';
        propLightbox.lightbox_container.style.left = '0';

        propLightbox.lightbox_container.appendChild(document.createElement('DIV')).setAttribute('id', 'modal');
        propLightbox.modal = document.getElementById('modal');
        
        propLightbox.modal.style.height = '100%';
        
        propLightbox.modal.appendChild(document.createElement('IMG')).setAttribute('src', propLightbox.imagenSrc);
        propLightbox.modal.getElementsByTagName('img')[0].setAttribute('class', 'imagen-modal');

        if (propLightbox.animacion == 'fade') {
            document.getElementsByClassName('imagen-modal')[0].style.opacity = 0;
            setTimeout(function() {
                document.getElementsByClassName('imagen-modal')[0].style.opacity = 1;
            }, 50);
        }

        propLightbox.modal.innerHTML += '<i id="cerrar_modal" class="fa fa-times" aria-hidden="true"></i>';
        propLightbox.cerrarModal = document.getElementById('cerrar_modal');
        propLightbox.cerrarModal.addEventListener('click', metLightbox.cerrarModal);

    },

    cerrarModal: function(){
        propLightbox.cuerpoDom.removeChild(propLightbox.lightbox_container); 
    }
}

metLightbox.inicio();
// Esto ejecuta el código anterior.

}())

