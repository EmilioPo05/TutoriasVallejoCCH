const titleElement = document.getElementById("habitos-titulo");
const typewriter = new Typewriter(titleElement, {
  loop: false,
  delay: 75
});

typewriter.typeString("HÁBITOS DE ESTUDIO").start();