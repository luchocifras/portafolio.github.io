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
//Funcion que aplica las animaciones de las habilidades
function efectoHabilidades(){
    var skills = document.getElementById("skills");
    var distancia_skills = window.innerHeight - skills.getBoundingClientRect().top;
    if(distancia_skills >= 300){
        let habilidades = document.getElementsByClassName("progreso");
        habilidades[0].classList.add("javascript");
        habilidades[1].classList.add("htmlcss");
        habilidades[2].classList.add("photoshop");
        habilidades[3].classList.add("wordpress");
        habilidades[4].classList.add("drupal");
        habilidades[5].classList.add("comunicacion");
        habilidades[6].classList.add("trabajo");
        habilidades[7].classList.add("creatividad");
        habilidades[8].classList.add("dedicacion");
        habilidades[9].classList.add("proyect");
    }
}


//detecto el scrolling para aplicar la animacion de la barra de habilidades
window.onscroll = function(){
    efectoHabilidades();
} 


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



//FOTO 2
let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("demo");
  let captionText = document.getElementById("caption");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  captionText.innerHTML = dots[slideIndex-1].alt;
}
