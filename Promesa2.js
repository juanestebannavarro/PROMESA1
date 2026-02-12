function obtenerNumero() {
  return new Promise((resolve) => {
    setTimeout(() => {
    console.log("Obtenido número 10 - Promesa2.js:4");
      resolve(10);
    }, 2000);
  });
}

function multiplicarPorDos(numero) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log(`Multiplicando ${numero} por 2 - Promesa2.js:13`);
      resolve(numero * 2);
    }, 2000);
  });
}

obtenerNumero()
  .then((num) => {
    return multiplicarPorDos(num);
  })
  .then((resultado) => {
    console.log("Resultado final Ejercicio 2: - Promesa2.js:24", resultado); 
  })
  .catch((error) => console.error(error));

//1. ¿Qué imprime?
//"Va a imprimir undefined. O sea, nada."
//2. ¿Por qué?
//"Porque el código hace la multiplicación, pero se le olvida entregar el resultado. Es como si yo hiciera una tarea, pero me la quedo en el bolso y no se la entrego al profe; para el profe, la tarea no existe."
//3. ¿Qué faltó?
//"Faltó el return. El return es el puente. Si no hay return, la información no puede cruzar al siguiente .then()."
//4. ¿Qué retorna realmente .then()?
//"El .then() siempre devuelve una promesa nueva. Siempre. Pero si no le pones un return con datos, esa promesa nueva llega vacía (por eso sale el undefined)."