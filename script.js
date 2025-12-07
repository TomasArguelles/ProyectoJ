const screens = [
  {
    title: "Pantalla 1",
    text: "Texto de la primera pantalla.",
    image: "imagenes/img1.png",
    pass: "clave1"
  },
  {
    title: "Pantalla 2",
    text: "Texto de la segunda pantalla.",
    image: "imagenes/img2.png",
    pass: "clave2"
  },
  {
    title: "Pantalla 3",
    text: "Texto de la tercera pantalla.",
    image: "imagenes/img3.png",
    pass: "clave3"
  },
  {
    title: "Fin",
    text: "Gracias por llegar hasta aquí.",
    image: "imagenes/fin.png",
    pass: null   // sin contraseña en el final
  }
];

let index = 0;

function render() {
  const s = screens[index];
  document.getElementById("title").textContent = s.title;
  document.getElementById("text").textContent = s.text;
  document.getElementById("image").src = s.image;

  document.getElementById("errorMsg").classList.add("hidden");
  document.getElementById("passInput").value = "";
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

render();
