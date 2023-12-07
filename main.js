let app = document.getElementById('typewriter');
 
let typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
 cursor: "<span style='color: #0052a8;'>|</span>",
});
 
typewriter
  .pauseFor(2500)
  .typeString('<span style="color: #0052a8;"> Soy matemática y trabajo en Inteligencia de Negocios.</span>')
  .pauseFor(200)
  .deleteChars(10)
  .start();
