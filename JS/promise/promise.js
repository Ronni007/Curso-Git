import { getUserById ,getMateriasIds } from "./modulo_1";

let id = parseInt(prompt("Ingrese el id"))

getUserById(id)
  .then((user) => {
    console.log(user)
    getMateriasIds(user.materias)
  })
.catch()