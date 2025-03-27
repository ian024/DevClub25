let prevbutton = document.getElementById('prev');
let nextbutton = document.getElementById('next');
let conteiner = document.querySelector('.conteiner');
let items = conteiner.querySelectorAll('.list .item');
let indicator = document.querySelector('.indicatores');
let dots = indicator.querySelectorAll('ul li');
let list = conteiner.querySelector('.list');


let ativo = 0
let firstPosition = 0
let lastPosition = items.length - 1

function setSlider() {
    let itemOld = conteiner.querySelectorAll('.list .item.ativo');
    itemOld.classList.remove('ativo');

    let dotsOld = indicator.querySelectorAll('ul li.ativo');
    dotsOld.classList.remove('ativo');
    dots[ativo].classList.add('ativo');

    indicator.querySelector('number.ativo').innerHTML = '0' + (ativo) + 1;
}

nextbutton.onclick = () => {
    list.style.setproperty('--calculation', 1);

    ativo = ativo + 1 > lastPosition ? 0 : ativo + 1;

    setSlider();

    items[ativo].classList.add('ativo');

}


prevbutton.onclick = () => {
    list.style.setproperty('--calculation', -1);
    ativo = ativo - 1 > firstPosition ? lastPosition : ativo - 1;

    setSlider();

    items[ativo].classList.add('ativo');


}