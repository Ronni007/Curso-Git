

import { Matematicas } from "./modulo.js";

try {

  let a = prompt("Ingresa el primer número");
  let b = prompt("Ingresa el segundo número");

  const obj = new Matematicas(a, b);
  if (typeof a === "number" && typeof b === "number") {
    console.log(obj.suma());
  } else {
    throw new Error("Algun número no es valido")
  }
} catch (error) {
  console.error(`${error}`);
}
