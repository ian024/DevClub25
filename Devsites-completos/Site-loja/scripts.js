
let prevButton = document.getElementById('prev');
let nextButton = document.getElementById('next');
let container = document.querySelector('.container');
let item = container.querySelectorAll('.list .item');
let indicador = document.querySelector('.indicadores');
let dots = indicador.querySelectorAll('ul li');
let list = container.querySelector('.list');


let ativo = 0
let firstPosition = 0
let lastPosition = item.length - 1

function setSlider() {
    let itemOld = container.querySelector('.list .item.ativo');
    itemOld.classList.remove('ativo');

    let dotsOld = indicador.querySelector('ul li.ativo');
    dotsOld.classList.remove('ativo');
    dots[ativo].classList.add('ativo');

    indicador.querySelector('.number').innerHTML = '0' + (ativo + 1);
}



nextButton.onclick = () => {

    list.style.setProperty('--calculation', 1);

    ativo = ativo + 1 > lastPosition ? 0 : ativo + 1;

    setSlider();

    item[ativo].classList.add('ativo');
}


prevButton.onclick = () => {

    list.style.setProperty('--calculation', -1);

    ativo = ativo - 1 < firstPosition ? lastPosition : ativo - 1;

    setSlider();

    item[ativo].classList.add('ativo');
    
}