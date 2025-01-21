let menuVisible = false;
//Función que oculta o muestra el menu
function mostrarOcultarMenu(){
    if(menuVisible){
        document.getElementById("nav").classList ="";
        menuVisible = false;
    }else{
        document.getElementById("nav").classList ="responsive";
        menuVisible = true;
    }
}

function seleccionar(){
    //oculto el menu una vez que selecciono una opcion
    document.getElementById("nav").classList = "";
    menuVisible = false;
}



//detecto el scrolling para aplicar la animacion de la barra de habilidades
/* window.onscroll = function(){
    efectoHabilidades();
}  */


const modalImage = document.getElementById('modalImage');
document.querySelectorAll('[data-bs-target="#photoModal"]').forEach(img => {
  img.addEventListener('click', (event) => {
    const src = event.target.getAttribute('data-bs-src');
    modalImage.setAttribute('src', src);
  });
});


document.getElementById('downloadPdf').addEventListener('click', () => {
    // URL del archivo PDF
    const pdfUrl = 'cv/Luis-Cifras-Vergara-CV.pdf'; // Ejemplo: './docs/miArchivo.pdf'

    // Crear un enlace temporal
    const link = document.createElement('a');
    link.href = pdfUrl;
    link.download = 'Curriculum Luis Cifras.pdf'; // Nombre del archivo descargado

    // Simular el clic para descargar
    link.click();
  });


  //GALERIA
     const tabs = document.querySelectorAll('.tab');
        const galleries = document.querySelectorAll('.images');

        tabs.forEach(tab => {
            tab.addEventListener('click', () => {
                // Remove active class from all tabs
                tabs.forEach(t => t.classList.remove('active'));
                // Add active class to the clicked tab
                tab.classList.add('active');

                // Hide all galleries
                galleries.forEach(gallery => gallery.classList.remove('active'));
                // Show the gallery corresponding to the clicked tab
                const target = document.getElementById(tab.dataset.target);
                target.classList.add('active');
            });
        });

        const fulImgBox = document.getElementById("fulImgBox"),
        fulImg = document.getElementById("fulImg");
        
        function openFulImg(reference){
            fulImgBox.style.display = "flex";
            fulImg.src = reference
        }
        function closeImg(){
            fulImgBox.style.display = "none";
        }





