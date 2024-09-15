function tocaSom (seletorAudio) { //seletorAudio é um parâmetro que reserva espaço para receber valor
    const elemento = document.querySelector(seletorAudio);

    //console.log(elemento); A partir daqui, econtramos a propriedade localName usada abaixo

    if (elemento != null && elemento.localName === 'audio' ) {
            elemento.play();
        }
        else {
            console.log('Elemento não encontrado ou seletor inválido')
        }
}


const listaDeTeclas = document.querySelectorAll('.tecla');

for (let contador = 0; contador < listaDeTeclas.length; contador++) {

    const tecla = listaDeTeclas[contador];
    const instrumento = tecla.classList[1]; //classList é um atributo do JS, está retornando a 2° classe do html
    const idAudio = `#som_${instrumento}`; //crase + $ constituem um template string
    
    tecla.onclick = function () { //Utilização de função anônima
        tocaSom(idAudio); //Atribuição do valor esperado no parâmetro idElementoAudio
    }

    tecla.onkeydown = function (evento) {

        if (evento.code === 'Space' || evento.code === 'Enter') {
            tecla.classList.add('ativa')
        }

    }

    tecla.onkeyup = function () {
            tecla.classList.remove('ativa')
        }
}
