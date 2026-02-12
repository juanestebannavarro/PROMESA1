function saludar(nombre) {
  return new Promise((resolve, reject) => {
    console.log(`Verificando nombre: ${nombre}... - Promesa.js:3`);
    
    setTimeout(() => {
      if (nombre === "JUAN ESTEBAN ") {
        resolve(`Hola ${nombre}, bienvenido capo`);
      } else {
        reject("No te conozco");
      }
    }, 2000);
  });
}

saludar("JUAN ESTEBAN ")
  .then((mensaje) => console.log("Éxito: - Promesa.js:16", mensaje))
  .catch((error) => console.error("Error: - Promesa.js:17", error));