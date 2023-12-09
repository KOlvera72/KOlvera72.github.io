let app = document.getElementById('typewriter');
 
let typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
 cursor: "<span style='color: #376d7c;'>|</span>",
});
 
typewriter
  .pauseFor(2500)
  .typeString('<span style="color: #376d7c;"> Matemática Aplicada que trabaja como desarrolladora en Inteligencia de Negocios.</span>')
  .pauseFor(200)
  .deleteChars(10)
  .start();
