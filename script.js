const screens = [
  {
    title: "La casa de las bestias",
    text: "En la pequeña guarida de las bestias, las estrellas te mostrarán el camino",
    image: "imagenes/Pensando.jpg",
    pass: "cabañaDeLosPerros",
    hint: "imagenes/hint1.jpg"
  },
  {
    title: "Nectar de los dioses",
    text: "Ambrosía, nectar y manjar, nada se puede hacer sin agitar",
    image: "imagenes/Wiii.jpg",
    pass: "CocteleraDeSalón",
    hint: "imagenes/hint2.jpg"
  },
  {
    title: "Las cartas están echadas",
    text: "Has llegado hasta aquí sin apostar, pero a partir de ahora tus cartas debes jugar",
    image: "imagenes/Woha.jpg",
    pass: "CasinoPortatil100",
    hint: "imagenes/hint3.jpg"
  },
  {
    title: "Solo respuestas contundentes",
    text: "Cada problema requiere una solución, y cada solución una herramienta",
    image: "imagenes/Wishh.jpg",
    pass: "MartilloDeMadera!",
    hint: "imagenes/hint4.jpg"
  },
  {
    title: "Fin",
    text: "Gracias por participar en la Jincana amorcito, espero que te haya gustado y no haya sido demasiado facil/dificil (dificil de saber pues estoy escribiendo este codigo con antelación xD). Esto es una pseudo-carta, una pseudo-recompensa, y viene con pseudo-besitos. Lo cierto es que esta pequeña carta ha sido escrita a lo largo de la quedada, al principio pensaba esconderlo tod en papel, pero acabé pasandolo a programa porque recordé que, hace tiempo, te había parecido muy chulo cuando un chico le había programado un regalo a su pareja en las redes, así que hice mi propia versión, si bien no será tan chula como me gustaría, solo espero que sea algo que te haga ilusión y te guste, porque no hay nada más bello en tí que la felicidad que muestras cuando te brillan los ojos y deslumbra tu sonrisa. Espero que esta quedada haya sido especial para ti, aal igual que lo ha sido para mi, y que aunque no hayamos podido ir al zoo esta vez, recuerdes que todos, y sobretodo yo (;3), te queremos mucho. Felicidades amorcito, te quiero, feliz cumpleaños",
    image: "imagenes/fin.jpg",
    pass: null,
    hint: null
  }
];

let index = 0;

function render() {
  const s = screens[index];
  document.getElementById("title").textContent = s.title;
  document.getElementById("text").textContent = s.text;
  document.getElementById("image").src = s.image;

  const input = document.getElementById("passInput");
  const btn = document.getElementById("goBtn");
  const errorMsg = document.getElementById("errorMsg");
  const hintBtn = document.getElementById("hintBtn");
  const hintImg = document.getElementById("hintImg");

  // Reset controles
  errorMsg.classList.add("hidden");
  input.value = "";
  hintImg.classList.add("hidden");
  hintBtn.style.display = s.hint ? "inline-block" : "none";

  if (s.pass === null) {
    input.style.display = "none";
    btn.style.display = "none";
  } else {
    input.style.display = "inline-block";
    btn.style.display = "inline-block";
  }

  if (s.hint) {
    hintImg.src = s.hint;
  }
}

document.getElementById("goBtn").onclick = () => {
  const input = document.getElementById("passInput");
  const msg = document.getElementById("errorMsg");
  const v = input.value;
  const needed = screens[index].pass;

  if (v === needed) {
    msg.classList.add("hidden");
    input.classList.remove("shake");
    index++;
    if (index < screens.length) {
      render();
    }
  } else {
    msg.textContent =
      "Uh oh, pregunta a Tomás si lo has escrito bien o vuelve a darle otra vuelta ;3";
    msg.classList.remove("hidden");

    input.classList.remove("shake");
    void input.offsetWidth;
    input.classList.add("shake");
  }
};

document.getElementById("hintBtn").onclick = () => {
  document.getElementById("hintImg").classList.remove("hidden");
  document.getElementById("hintBtn").style.display = "none";
};

render();
