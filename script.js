const display = document.getElementById("display");

function agregar(valor) {
  display.value += valor;
}

function calcular() {
  try {
    display.value = eval(display.value);
  } catch (e) {
    display.value = "Error";
  }
}

function borrarTodo() {
  display.value = "";
}

function retroceder() {
  display.value = display.value.slice(0, -1);
}

function insertarRaiz() {
  const valor = display.value;
  const regexNumero = /\d+(\.\d+)?$/;
  if (regexNumero.test(valor)) {
    const numero = valor.match(regexNumero)[0];
    const inicio = valor.slice(0, valor.length - numero.length);
    display.value = inicio + "Math.sqrt(" + numero + ")";
  } else {
    display.value += "Math.sqrt()";
  }
}

function insertarFuncion(funcion) {
  const valor = display.value;
  const regexNumero = /\d+(\.\d+)?$/;
  if (regexNumero.test(valor)) {
    const numero = valor.match(regexNumero)[0];
    const inicio = valor.slice(0, valor.length - numero.length);
    display.value = inicio + funcion + numero + ")";
  } else {
    display.value += funcion + ")";
  }
}

function insertarPotencia() {
  const valor = display.value;
  const regexNumero = /\d+(\.\d+)?$/;
  if (regexNumero.test(valor)) {
    const numero = valor.match(regexNumero)[0];
    const inicio = valor.slice(0, valor.length - numero.length);
    display.value = inicio + "Math.pow(" + numero + ",";
  } else {
    display.value += "Math.pow(,";
  }
}

function cambiarModo() {
  const body = document.body;
  const boton = document.getElementById("botonModo");

  if (body.classList.contains("claro")) {
    body.classList.remove("claro");
    body.classList.add("oscuro");
    boton.textContent = "Modo Claro";
  } else {
    body.classList.remove("oscuro");
    body.classList.add("claro");
    boton.textContent = "Modo Oscuro";
  }
}

function mostrarManual() {
  window.open("manual.html", "_blank");
}
