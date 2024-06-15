import { getUserById } from "./modulo.js";
let id = parseInt(prompt("Ingrese el ID"))

getUserById(id, function (error, user) { 
  console.log(user, error)
  if (error) {
    console.error(error)
  } else {
    console.log(user)
  }
});