let win = window;
let dom = document;


const $header = dom.querySelector('header');
const $div = dom.querySelector('div');
const $divs = dom.querySelectorAll('divs');
const $main = dom.querySelector('main');
const $div_item = dom.querySelectorAll('main > div.item');
const $item = dom.querySelectorAll('.item')
const $id = dom.getElementById('#item')
const $img = dom.querySelector('img')
const $form = dom.querySelector('form')



console.log(win)
console.log(dom)
console.log(dom.doctype)
console.log(dom.head)
console.log(dom.title)
console.log(dom.body)
console.log(dom.styleSheets)
console.log(dom.header)


console.log($header);
console.log($div);
console.log($divs);

$divs.forEach((div, a) => {
  // console.log(div)
  div.textContent = `item a- ${++a}`
});

const arregloA = [...$divs];
console-log([...$divs])

arregloA.map((a) => {
  console.log(a)
})

console.log($main.childNodes)
console.log($main.childElementCount)
console.log($main.firstElementChild);

console.log($img)
$img.setAttribute('src', 'https://picsum.photos/200/300/?blur=2'
)

// console.log($img.classList)
// $img.classList.add('block')
// console.log($img.classList)
// $img.classList.remove('block')
// console.log($img.classList)
// $img.classList.toggle('block')

$img.classList.add('blcok' , 'box')



// console.log($div_item)
// console.log($item)
// console.log($id);
// console.log($_id);

// $_id.textContent = "Otra palabra"
// $_id.textContent = "<p> <b>Otra</b> palabra</p>";

$form.removeAttribute('action')
$form.setAttribute('encyptype', 'multipart/form-data')
$form.firstElementChild.setAttribute('type', 'file')