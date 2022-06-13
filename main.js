var contador = 1;
var seleccion = 1;

function reiniciarestado() {
  document.getElementById("btncolor").value = "#000000";
  document.getElementById("btncolortexto").value = "#000000";
  document.getElementById("btncolorborde").value = "#000000";

  document.getElementById("lbaltura").style.display = "";
  document.getElementById("altura").style.display = "";
  document.getElementById("lbancho").style.display = "";
  document.getElementById("ancho").style.display = "";
  document.getElementById("btncolor").style.display = "";
  document.getElementById("btncolortexto").style.display = "";
  document.getElementById("btncolorborde").style.display = "";
  document.getElementById("lbbtncolor").style.display = "";
  document.getElementById("lbbtncolortexto").style.display = "";
  document.getElementById("lbbtncolorborde").style.display = "";
  document.getElementById("bordeestilo").style.display = "";
  document.getElementById("lbbordeestilo").style.display = "";
  document.getElementById("borderadio").style.display = "";
  document.getElementById("lbborderadio").style.display = "";
  document.getElementById("tamtexto").style.display = "";
  document.getElementById("lbtamtexto").style.display = "";
  document.getElementById("sctanimacion").style.display = "";
  document.getElementById("bordeestilo").value = "none";
  document.getElementById("animacion").checked = false;
  document.getElementById("altura").value = 105;
  document.getElementById("ancho").value = 500;
  document.getElementById("tamtexto").value = 50;
  document.getElementById("borderadio").value = 0;
}

function eliminar() {
  document.getElementById("elemento" + seleccion).remove();
  if (seleccion > 0) {
    seleccion = parseInt(seleccion) - 1;
    if (seleccion == 0) {
      document.getElementById("verelemento").value =
        "Sin elemento seleccionado";
    } else {
      document.getElementById("verelemento").value = "Elemento " + seleccion;
    }
  }
}

function agregarboton() {
  let conta = contador;

  seleccion = contador;
  contador = parseInt(contador) + 1;
  document.getElementById("resultado").innerHTML +=
    '<button style="cursor:pointer;" onclick="seleccionar(this)" id="elemento' +
    conta +
    '">Elemento ' +
    conta +
    "</button><br>";
  document.getElementById("verelemento").value = "Elemento " + conta;

  reiniciarestado();
}

function agregardiv() {
  let conta = contador;
  seleccion = contador;
  contador = parseInt(contador) + 1;
  document.getElementById("resultado").innerHTML +=
    '<div style="cursor:pointer;" onclick="seleccionar(this)" id="elemento' +
    conta +
    '">Elemento ' +
    conta +
    "</div><br>";
  document.getElementById("verelemento").value = "Elemento " + conta;

  reiniciarestado();
}
function agregarimg() {
  let conta = contador;
  seleccion = contador;
  contador = parseInt(contador) + 1;
  document.getElementById("resultado").innerHTML +=
    '<img class="imagen" src="https://www.w3schools.com/html/html5.gif" style="cursor:pointer;" onclick="seleccionar(this)" id="elemento' +
    conta +
    '"><br>';
  document.getElementById("verelemento").value = "Elemento " + conta;
  reiniciarestado();
  document.getElementById("lbbtncolortexto").style.display = "none";
  document.getElementById("btncolortexto").style.display = "none";
  document.getElementById("lbtamtexto").style.display = "none";
  document.getElementById("tamtexto").style.display = "none";
}

function agregarlink() {
  let conta = contador;
  seleccion = contador;
  contador = parseInt(contador) + 1;
  document.getElementById("resultado").innerHTML +=
    '<a class="link" style="cursor:pointer;" onclick="seleccionar(this)" href="#" id="elemento' +
    conta +
    '">Elemento ' +
    conta +
    "</a><br>";
  document.getElementById("verelemento").value = "Elemento " + conta;

  reiniciarestado();
  document.getElementById("lbaltura").style.display = "none";
  document.getElementById("altura").style.display = "none";
  document.getElementById("lbancho").style.display = "none";
  document.getElementById("ancho").style.display = "none";
}

function agregartabla() {
  let conta = contador;
  seleccion = contador;
  contador = parseInt(contador) + 1;

  let fila = document.getElementById("fila").value;
  let columna = document.getElementById("columna").value;
  let tabla =
    '<table style="cursor:pointer;" id="elemento' +
    conta +
    '" onclick="seleccionar(this)" cellspacing="0" border="1">';

  for (f = 1; f <= fila; f++) {
    tabla += "<tr>";
    for (c = 1; c <= columna; c++) {
      tabla += "<td>F: " + f + " C: " + c + "</td>";
    }
    tabla += "</tr>";
  }
  tabla += "</table>";
  document.getElementById("resultado").innerHTML += tabla;
  document.getElementById("verelemento").value = "Elemento " + conta;

  reiniciarestado();
}

function agregarinput() {
  let conta = contador;
  seleccion = contador;
  contador = parseInt(contador) + 1;

  document.getElementById("resultado").innerHTML +=
    '<input style="cursor:pointer;" onclick="seleccionar(this)" type="text" id="elemento' +
    conta +
    '" value="Elemento ' +
    conta +
    '"><br>';
  document.getElementById("verelemento").value = "Elemento " + conta;

  reiniciarestado();
}

function agregarradio() {
  let conta = contador;
  seleccion = contador;
  contador = parseInt(contador) + 1;

  document.getElementById("resultado").innerHTML +=
    '<input class="radio" style="cursor:pointer;" onclick="seleccionar(this)" type="radio" id="elemento' +
    conta +
    '"><br>';
  document.getElementById("verelemento").value = "Elemento " + conta;

  reiniciarestado();

  document.getElementById("btncolor").style.display = "none";
  document.getElementById("btncolortexto").style.display = "none";
  document.getElementById("btncolorborde").style.display = "none";
  document.getElementById("lbbtncolor").style.display = "none";
  document.getElementById("lbbtncolortexto").style.display = "none";
  document.getElementById("lbbtncolorborde").style.display = "none";
  document.getElementById("bordeestilo").style.display = "none";
  document.getElementById("lbbordeestilo").style.display = "none";
  document.getElementById("borderadio").style.display = "none";
  document.getElementById("lbborderadio").style.display = "none";
  document.getElementById("tamtexto").style.display = "none";
  document.getElementById("lbtamtexto").style.display = "none";
  document.getElementById("sctanimacion").style.display = "none"
}

function seleccionar(e) {
  let id = e.id;
  let num = id.split("elemento");
  seleccion = num[1];
  console.log(seleccion);
  document.getElementById("verelemento").value = "Elemento " + seleccion;
  reiniciarestado();

  let elemento = document.getElementById("elemento" + seleccion).className;
  if (elemento == "radio") {
    document.getElementById("btncolor").style.display = "none";
    document.getElementById("btncolortexto").style.display = "none";
    document.getElementById("btncolorborde").style.display = "none";
    document.getElementById("lbbtncolor").style.display = "none";
    document.getElementById("lbbtncolortexto").style.display = "none";
    document.getElementById("lbbtncolorborde").style.display = "none";
    document.getElementById("bordeestilo").style.display = "none";
    document.getElementById("lbbordeestilo").style.display = "none";
    document.getElementById("borderadio").style.display = "none";
    document.getElementById("lbborderadio").style.display = "none";
    document.getElementById("tamtexto").style.display = "none";
    document.getElementById("lbtamtexto").style.display = "none";
    document.getElementById("sctanimacion").style.display = "none"
  } else if (elemento == "link") {
    document.getElementById("lbaltura").style.display = "none";
    document.getElementById("altura").style.display = "none";
    document.getElementById("lbancho").style.display = "none";
    document.getElementById("ancho").style.display = "none";
  } else if (elemento == "imagen") {
    document.getElementById("lbbtncolortexto").style.display = "none";
    document.getElementById("btncolortexto").style.display = "none";
    document.getElementById("lbtamtexto").style.display = "none";
    document.getElementById("tamtexto").style.display = "none";
  }
}

//agregar escucha de evento sobre el color picker para el fondo
const colorInput = document.querySelector("#btncolor");
colorInput.addEventListener("input", () => {
  let color = colorInput.value;

  document.querySelector("#elemento" + seleccion).style.backgroundColor = color;
});

const colorborde = document.querySelector("#btncolorborde");
colorborde.addEventListener("input", () => {
  let color = colorborde.value;

  document.getElementById("elemento" + seleccion).style.borderColor = color;
});

//agregar escucha de evento sobre el color picker para el texto
const colortexto = document.querySelector("#btncolortexto");
colortexto.addEventListener("input", () => {
  let color = colortexto.value;

  document.querySelector("#elemento" + seleccion).style.color = color;
});

//agregar evento sobre el range altura
const btnaltura = document.querySelector("#altura");
btnaltura.addEventListener("input", () => {
  let altura = btnaltura.value;

  document.querySelector("#elemento" + seleccion).style.height = altura + "px";
});

const btnancho = document.querySelector("#ancho");
btnancho.addEventListener("input", () => {
  let ancho = btnancho.value;

  document.querySelector("#elemento" + seleccion).style.width = ancho + "px";
});

const btntamtexto = document.querySelector("#tamtexto");
btntamtexto.addEventListener("input", () => {
  let texto = btntamtexto.value + "px";
  console.log(texto);

  document.getElementById("elemento" + seleccion).style.fontSize = texto;
});

const btnborde = document.querySelector("#borderadio");
btnborde.addEventListener("input", () => {
  let borde = btnborde.value + "px";
  console.log(borde);

  document.getElementById("elemento" + seleccion).style.borderRadius = borde;
});

function estiloborde(e) {
  document.getElementById("elemento" + seleccion).style.borderStyle = e.value;
}

function animar() {
  if (document.getElementById("animacion").checked) {
    document.getElementById("elemento" + seleccion).classList.add("animacion");
  } else {
    document
      .getElementById("elemento" + seleccion)
      .classList.remove("animacion");
  }
}
