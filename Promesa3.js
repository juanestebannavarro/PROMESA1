function obtenerEdad() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Edad obtenida: 19 - Promesa3.js:4");
      resolve(19);
    }, 2000);
  });
}

function verificarMayorDeEdad(edad) {
  return new Promise((resolve, reject) => {
    if (edad >= 18) {
      resolve("Eres mayor de edad");
    } else {
      reject("Eres menor de edad");
    }
  });
}

obtenerEdad()
  .then((edad) => {
    return verificarMayorDeEdad(edad);
  })
  .then((mensaje) => {
    console.log(mensaje);
  })
  .catch((error) => {
    console.error("Error validación: - Promesa3.js:28", error); 
  });