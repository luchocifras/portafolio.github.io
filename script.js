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


//reel
/*         const video = document.getElementById("myVideo");
        const audioButton = document.getElementById("audioToggle");
        const icon = audioButton.querySelector("i");

        audioButton.addEventListener("click", () => {
            video.muted = !video.muted; 
            icon.classList.toggle("fa-volume-mute", video.muted);
            icon.classList.toggle("fa-volume-up", !video.muted);
        });

        document.addEventListener("click", () => {
            video.muted = false;
            icon.classList.replace("fa-volume-mute", "fa-volume-up");
        }, { once: true }); */

        const video = document.getElementById("myVideo");
        const videoContainer = document.getElementById("videoContainer");
        const audioButton = document.getElementById("audioToggle");
        const fullscreenButton = document.getElementById("fullscreenToggle");
        const audioIcon = audioButton.querySelector("i");
        const fullscreenIcon = fullscreenButton.querySelector("i");

        // Alternar sonido
        audioButton.addEventListener("click", () => {
            video.muted = !video.muted;
            audioIcon.classList.toggle("fa-volume-mute", video.muted);
            audioIcon.classList.toggle("fa-volume-up", !video.muted);
        });

        // Permitir sonido en el primer clic
        document.addEventListener("click", () => {
            video.muted = false;
            audioIcon.classList.replace("fa-volume-mute", "fa-volume-up");
        }, { once: true });

        // Alternar pantalla completa
        fullscreenButton.addEventListener("click", () => {
            if (!document.fullscreenElement) {
                if (videoContainer.requestFullscreen) {
                    videoContainer.requestFullscreen();
                } else if (videoContainer.mozRequestFullScreen) { // Firefox
                    videoContainer.mozRequestFullScreen();
                } else if (videoContainer.webkitRequestFullscreen) { // Chrome, Safari y Edge
                    videoContainer.webkitRequestFullscreen();
                } else if (videoContainer.msRequestFullscreen) { // IE/Edge
                    videoContainer.msRequestFullscreen();
                }
                fullscreenIcon.classList.replace("fa-expand", "fa-compress");
            } else {
                if (document.exitFullscreen) {
                    document.exitFullscreen();
                } else if (document.mozCancelFullScreen) {
                    document.mozCancelFullScreen();
                } else if (document.webkitExitFullscreen) {
                    document.webkitExitFullscreen();
                } else if (document.msExitFullscreen) {
                    document.msExitFullscreen();
                }
                fullscreenIcon.classList.replace("fa-compress", "fa-expand");
            }
        });

        // Escuchar cambios en el modo de pantalla completa
        document.addEventListener("fullscreenchange", () => {
            if (!document.fullscreenElement) {
                fullscreenIcon.classList.replace("fa-compress", "fa-expand");
            }
        });


         const lightbox = document.getElementById('lightbox');
  const lightboxImage = document.getElementById('lightbox-image');
  const closeBtn = document.querySelector('.lightbox .close');
  const nextBtn = document.querySelector('.lightbox .next');
  const prevBtn = document.querySelector('.lightbox .prev');

  const images = Array.from(document.querySelectorAll('.photo-gallery img'));
  let currentIndex = 0;

  function showImage(index) {
    const img = images[index];
    if (img) {
      lightboxImage.src = img.src;
      currentIndex = index;
      lightbox.classList.remove('hidden');
    }
  }

  images.forEach((img, index) => {
    img.addEventListener('click', () => showImage(index));
  });

  closeBtn.addEventListener('click', () => {
    lightbox.classList.add('hidden');
  });

  nextBtn.addEventListener('click', () => {
    showImage((currentIndex + 1) % images.length);
  });

  prevBtn.addEventListener('click', () => {
    showImage((currentIndex - 1 + images.length) % images.length);
  });

  // Opcional: cerrar con tecla ESC
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') lightbox.classList.add('hidden');
    if (e.key === 'ArrowRight') nextBtn.click();
    if (e.key === 'ArrowLeft') prevBtn.click();
  });
