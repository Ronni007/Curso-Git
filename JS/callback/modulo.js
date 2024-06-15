const users = [
  {
    id: 1,
    name: 'Ronald Lipez',
    aprendiz: true,
    materias: [
      1,2,3
    ]
  },
  {
    id: 2,
    name: 'Ronalito',
    materias:[
      1,2,3,4
    ]
  },
  {
    id: 3,
    name: 'Roni',
    productiva: true,
    materias: [
      1,2,4
    ]
  },
  {
    id: 4,
    name: 'Ronni',
    materias: [
      3,4
    ]
  }
];

const materias = [
  {
    id: 1,
    name: 'logica'
  },
  {
    id: 2,
    name: 'bases de datos'
  },
  {
    id: 3,
    name: 'seguridad'
  },
  {
    id: 4,
    name: 'deportes'
  },
]
export function getUserById(id, callback) {
  const user = users.find(function (user) {
    return user.id === id;
  })
  if (!user) {
    return callback(`Usuario no encontrado para el id $(id)`)
  }
  return callback(null, user)
}