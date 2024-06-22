
// import { } from "./modulo.js";

function cuadradoPromesa(value) {
  if (typeof value !== "number") {
    return new Promise.reject("Cuidad, el valor ingresado no es un número");
  }
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        value: value,
        result: value * value
      });
    }, 2000);
  })
}

cuadradoPromesa(2)
  .then((obj) => {
    console.log(`Pomesa con valor ${obj.value} y con resultado ${obj.result}`);
    return cuadradoPromesa(obj.result)
  })
  .then((obj) => {
    console.log(`Pomesa con valor ${obj.value} y con resultado ${obj.result}`);
    return cuadradoPromesa(obj.result)
  })
  .then((obj) => {
    console.log(obj)
  })
  .then((obj) => {
    console.log(obj)
  })
  .catch((e) => {
  console.log(e)
})