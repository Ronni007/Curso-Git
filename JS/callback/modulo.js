import { users, materias } from "./datos.js";


export function getUserById(id, callback) {
  const user = users.find(function (users) {
    return users.id === id;
  });
  if (!users) {
    callback(`Usuario no encontrado para el id ${id}`)
  }
  callback(null, users)
}

// export function getMateriasIds (ids, callback) {
//   const respuesta = materias.filter((materias) => (ids.includes(materias.id)) ? true 
//   callback(null, respuesta)
// }