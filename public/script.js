// interacciones básicas con elementos de la página

const boton = document.getElementById('boton');
const body = document.querySelector('body');
const aparece = document.getElementById('output');

boton.addEventListener('click', () => {
  console.log('¡Hola! Has hecho clic en el botón.');
  let color = body.style.backgroundColor;
  if (color === 'white' || color === '') {
    body.style.backgroundColor = 'orange';
  } else {
    body.style.backgroundColor = 'white';
  }
  console.log(color);
});

const loquesea = document.getElementById('loquesea');
loquesea.addEventListener('input', () => {
  const escrito = loquesea.value;
  if (escrito.length == 0) {
    aparece.textContent = "";
  } else {
    aparece.textContent = "Escribiste: " + escrito;
  }

  const elemento = document.createElement("div");
  elemento.textContent = escrito;
  document.body.appendChild(elemento);
  console.log(escrito);
});
