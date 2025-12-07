const screens = [
  {
    title: "Pantalla 1",
    text: "Texto de la primera pantalla.",
    image: "imagenes/img1.png",
    pass: "clave1",
    hint: "imagenes/hint1.png"
  },
  {
    title: "Pantalla 2",
    text: "Texto de la segunda pantalla.",
    image: "imagenes/img2.png",
    pass: "clave2",
    hint: "imagenes/hint2.png"
  },
  {
    title: "Pantalla 3",
    text: "Texto de la tercera pantalla.",
    image: "imagenes/img3.png",
    pass: "clave3",
    hint: "imagenes/hint3.png"
  },
  {
    title: "Fin",
    text: "Gracias por llegar hasta aquí.",
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
