"use strict"
const $root = document.querySelector('#root')
const $div = document.createElement('div');
const $h1 = document.createElement('h1')
const $p = document.createElement('p')
const $img = document.createElement('img')
const $fragmento = document.createDocumentFragment();


const lista = [
  {
    id: 1,
    texto: "Lorem ipsum dolor sit amet consectetur adipisicing elit Nostrum tenetur",
    titulo: "Titulo 4",
    src: "https://picsum.photos/id/237/200/300"
  },
  {
    id: 2,
    texto: "Lorem ipsum dolor sit amet consectetur adipisicing elit Nostrum tenetur",
    titulo: "Titulo 5",
    src: "https://picsum.photos/200/300/?blur=2"
  },
  {
    id: 3,
    texto: "Lorem ipsum dolor sit amet consectetur adipisicing elit Nostrum tenetur",
    titulo: "Titulo 6",
    src: "https://picsum.photos/200/300.jpg"
  },
  {
    id: 4,
    texto: "Lorem ipsum dolor sit amet consectetur adipisicing elit Nostrum tenetur",
    titulo: "Titulo 7",
    src: "https://picsum.photos/200/300.webp"
  }
]

lista.forEach((elemento) => {
  const $div = document.createElement('div');
  const $h1 = document.createElement('h1');
  const $p = document.createElement('p');
  const $img = document.createElement('img');

  $h1.textContent = elemento.titulo
  $img.setAttribute('src', elemento.src)
  $p.textContent = elemento.texto

  $div.appendChild($h1)
  $div.appendChild($img)
  $div.appendChild($p)

  $div.classList.add('card')
  $fragmento.appendChild($div);
})
$root.appendChild($fragmento)
