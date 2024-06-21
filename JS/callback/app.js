import { getUserById, getMateriasIds } from "./modulo.js";

let id = parseInt(prompt("Ingrese el ID"))

getUserById(id, function (error, users) { 
  console.log(users, error)
  if (error) {
    console.error(error)
  } else {
    getMateriasIds(users.materias, function (error, materiasNombre) {
      console.log(materiasNombre)
    })
  }
});