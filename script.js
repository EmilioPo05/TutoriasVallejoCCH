window.addEventListener("scroll", function () {
    var slideInElements = document.querySelectorAll(".slide-in");
    var windowHeight = window.innerHeight;
    var pageBottom = document.documentElement.scrollHeight;
  
    if (window.pageYOffset + windowHeight >= pageBottom) {
      return; // No reiniciar animaciones si se llega al final de la página
    }
  
    for (var i = 0; i < slideInElements.length; i++) {
      var slideInElement = slideInElements[i];
      var slideInAnimation = slideInElement.style.animation;
      slideInElement.style.animation = "none";
      slideInElement.offsetHeight; // Reiniciar la animación
      slideInElement.style.animation = slideInAnimation;
    }
  });
  
  window.addEventListener("scroll", function () {
    var slideInElements = document.querySelectorAll(".slide-in2");
    var windowHeight = window.innerHeight;
    var pageBottom = document.documentElement.scrollHeight;
  
    if (window.pageYOffset + windowHeight >= pageBottom) {
      return; // No reiniciar animaciones si se llega al final de la página
    }
  
    for (var i = 0; i < slideInElements.length; i++) {
      var slideInElement = slideInElements[i];
      var slideInAnimation = slideInElement.style.animation;
      slideInElement.style.animation = "none";
      slideInElement.offsetHeight; // Reiniciar la animación
      slideInElement.style.animation = slideInAnimation;
    }
  });