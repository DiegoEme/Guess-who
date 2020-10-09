const cards = document.querySelectorAll(".flip-card");
const input = document.getElementById("input");
const enviar = document.getElementById("enviar");
const resultado = document.getElementById("score");
let imagenes = [];
let score = [];
let end = [];

//input.disabled = true;
enviar.addEventListener("click", botonEnviar);

const grid = document.getElementById("grid");
grid.addEventListener("click", cartas);

function cartas(e) {
  let carta = e.target;

  if (!carta.matches("img")) {
    return;
  }

  if (carta.classList.contains("imagen")) {
    imagenes.push(carta.alt);
    console.log("carta", imagenes);
  }
}

cards.forEach((card) => card.addEventListener("click", flipCard));

function flipCard() {
  if (this.classList.contains("flip")) {
    // return;
  } else {
    this.classList.add("flip");
  }
}

function botonEnviar() {
  imagenes.push(input.value.toLowerCase());
  console.log("texto", imagenes);

  if (imagenes[0] == imagenes[1]) {
    score.push(input.value);
    console.log(score);
    resultado.textContent = score.length;
    swal({
      title: "Good job!",
      text: "You guessed it right!",
      icon: "success",
      button: "Next one!",
    });
  } else {
    swal({
      title: "Wrong!",
      text: "You missed it!",
      icon: "error",
      button: "Next one!",
    });
  }
  input.value = "";

  imagenes = [];
}
