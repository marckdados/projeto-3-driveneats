let pratoSelecionado;
let bebidaSelecianado;
let sobremesaSelecionado;
let botao = document.querySelector('.botao');


function selecionarItem1(elemento){
    let selecionado = document.querySelector('.selecionado');
    let check = document.querySelector('.selecionado-icone');
    let icone = elemento.querySelector('.icone')
    
    if(selecionado !== null){
        selecionado.classList.toggle('selecionado');
        check.classList.toggle('selecionado-icone');
        pratoSelecionado = 0;
    }
    else{
        elemento.classList.add('selecionado');
        icone.classList.add('selecionado-icone');
        pratoSelecionado = 1;
    }
}

function selecionarItem2(elemento){
    let selecionado = document.querySelector('.selecionado2');
    let check = document.querySelector('.selecionado-icone2');
    let icone = elemento.querySelector('.icone')
    
    if(selecionado !== null){
        selecionado.classList.toggle('selecionado2');
        check.classList.toggle('selecionado-icone2');
        bebidaSelecianado = 0;
    }
    else{
        elemento.classList.add('selecionado2');
        icone.classList.add('selecionado-icone2');
        bebidaSelecianado = 1;
    }
}

function selecionarItem3(elemento){
    let selecionado = document.querySelector('.selecionado3');
    let check = document.querySelector('.selecionado-icone3');
    let icone = elemento.querySelector('.icone')

    if(selecionado !== null){
        selecionado.classList.toggle('selecionado3');
        check.classList.toggle('selecionado-icone3');
        sobremesaSelecionado = 0;
    }
    else{
        elemento.classList.add('selecionado3');
        icone.classList.add('selecionado-icone3');
        sobremesaSelecionado = 1;
    }
}

let checador = setInterval(()=>{
    if(pratoSelecionado === 1 && sobremesaSelecionado === 1 && bebidaSelecianado === 1){    
       botao.classList.add('selecionado-botao');
       botao.innerHTML = 'Fechar Pedido';
    }
    else{
        botao.classList.remove('selecionado-botao')
        botao.innerHTML = 'Selecione os 3 itens para fechar o pedido';
    }
},1000)