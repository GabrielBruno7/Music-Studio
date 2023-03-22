

let modalcanto = document.getElementById('modalcanto');
let voltarbtncanto = document.getElementById('voltarbtncanto');
let cantobtn = document.getElementById('cantobtn');

let modalviolino = document.getElementById('modalviolino');
let voltarbtnviolino = document.getElementById('voltarbtnviolino');
let violinobtn = document.getElementById('violinobtn');



let bateriabtn = document.getElementById('bateriabtn')
let voltarlbtn = document.getElementById('voltarbtn');
let cntr = document.getElementById('cntr-main');
let modalviolao = document.getElementById('modalviolao');
let modalbateria = document.getElementById('modalbateria');
let voltarbtnbateria = document.getElementById('voltarbtnbateria');
let violaobtn = document.getElementById('violaobtn');

violaobtn.addEventListener('click', openmodalviolao);

function openmodalviolao() {
    cntr.style.display = 'none';
    modalviolao.style.display = 'flex'

}

voltarlbtn.addEventListener('click', closemodal);

function closemodal() {
    cntr.style.display = 'block';
    modalviolao.style.display = 'none'

}

bateriabtn.addEventListener('click', openmodalbateria);

function openmodalbateria() {
    cntr.style.display = 'none';
    modalbateria.style.display = 'flex'
}

voltarbtnbateria.addEventListener('click', closemodalbateria);

function closemodalbateria() {
    cntr.style.display = 'block';
    modalbateria.style.display = 'none'
}

cantobtn.addEventListener('click', openmodalcanto);

function openmodalcanto() {
    cntr.style.display = 'none';
    modalcanto.style.display = 'flex'
}

voltarbtncanto.addEventListener('click', closemodalcanto);

function closemodalcanto() {
    cntr.style.display = 'block';
    modalcanto.style.display = 'none'
}

violinobtn.addEventListener('click', openmodalviolino);

function openmodalviolino() {
    cntr.style.display = 'none';
    modalviolino.style.display = 'flex'
}

voltarbtnviolino.addEventListener('click', closemodalviolino);

function closemodalviolino() {
    cntr.style.display = 'block';
    modalviolino.style.display = 'none'
}







