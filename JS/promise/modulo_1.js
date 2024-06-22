import { users, materias } from "./datos_1.js";

export function getUserById(id) {
  return new Promise((ok, error) => {
    users.find(function (users) {
      if (users.id === id)  correcto(users);
    });
    if (!users) {
      error(`Usuario no encontrado para el ID ${id}`)
    }
  });
}

export function getMateriasIds(ids) {
  return new Promise((ok, error) => {
    const respuesta = materias.filter((materias) => ids.includes(materias.id) ? true : false);
    console.log(respuesta)
  });
}