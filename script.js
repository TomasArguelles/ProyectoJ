const screens = [
  {
    title: "La casa de las bestias",
    text: "En la pequeña guarida de las bestias, las estrellas te mostrarán el camino",
    image: "imagenes/pensando.webp",
    pass: "cabañaDeLosPerros",
    hint: "imagenes/hint1.webp"
  },
  {
    title: "Nectar de los dioses",
    text: "Ambrosía, nectar y manjar, nada se puede hacer sin agitar",
    image: "imagenes/Wiii.webp",
    pass: "CocteleraDeSalón",
    hint: "imagenes/hint2.png"
  },
  {
    title: "Las cartas están echadas",
    text: "Has llegado hasta aquí sin apostar, pero a partir de ahora tus cartas debes jugar",
    image: "imagenes/Woha.webp",
    pass: "CasinoPortatil100",
    hint: "imagenes/hint3.png"
  },
  {
    title: "Fin",
    text: "Gracias por participar en la Jincana amorcito, espero que te haya gustado y no haya sido demasiado facil/dificil (dificil de saber pues estoy escribiendo este codigo con antelación xD)./n",
    image: "imagenes/fin.png",
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
