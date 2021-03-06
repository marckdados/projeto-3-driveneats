let pratoSelecionado;
let bebidaSelecianado;
let sobremesaSelecionado;
const botao = document.querySelector('.botao');
let botaoDisponivel;
let prato;
let bebida;
let sobremesa;
let valorPrato;
let valorBebida;
let valorSobremesa;
let total;
let url;


function selecionarItem1(elemento){
    let selecionado = document.querySelector('.selecionado');
    let check = document.querySelector('.selecionado-icone');
    let icone = elemento.querySelector('.icone')
    prato = elemento.querySelector('.prato').innerHTML;
    valorPrato = elemento.querySelector('.valor-prato').innerHTML;
    
    if(selecionado !== null){
        selecionado.classList.toggle('selecionado');
        check.classList.toggle('selecionado-icone');
        pratoSelecionado = 0;
    }
    else{
        elemento.classList.add('selecionado');
        icone.classList.add('selecionado-icone');
        pratoSelecionado = 1;
        valorPrato = converterPreco(valorPrato);
    }
    
}

function selecionarItem2(elemento){
    let selecionado = document.querySelector('.selecionado2');
    let check = document.querySelector('.selecionado-icone2');
    let icone = elemento.querySelector('.icone');
    bebida = elemento.querySelector('.bebida').innerHTML;
    valorBebida = elemento.querySelector('.valor-bebida').innerHTML;
    
    if(selecionado !== null){
        selecionado.classList.toggle('selecionado2');
        check.classList.toggle('selecionado-icone2');
        bebidaSelecianado = 0;
    }
    else{
        elemento.classList.add('selecionado2');
        icone.classList.add('selecionado-icone2');
        bebidaSelecianado = 1;
        valorBebida = converterPreco(valorBebida);
    }
}

function selecionarItem3(elemento){
    let selecionado = document.querySelector('.selecionado3');
    let check = document.querySelector('.selecionado-icone3');
    let icone = elemento.querySelector('.icone')
    sobremesa = elemento.querySelector('.sobremesa').innerHTML;
    valorSobremesa = elemento.querySelector('.valor-sobremesa').innerHTML;

    if(selecionado !== null){
        selecionado.classList.toggle('selecionado3');
        check.classList.toggle('selecionado-icone3');
        sobremesaSelecionado = 0;
    }
    else{
        elemento.classList.add('selecionado3');
        icone.classList.add('selecionado-icone3');
        sobremesaSelecionado = 1;
        valorSobremesa = converterPreco(valorSobremesa);
    }
}

let checador = setInterval(()=>{
    if(pratoSelecionado === 1 && sobremesaSelecionado === 1 && bebidaSelecianado === 1){    
       botao.classList.add('selecionado-botao');
       botao.innerHTML = 'Fechar Pedido';
       botaoDisponivel = true;
    }
    else{
        botao.classList.remove('selecionado-botao')
        botao.innerHTML = 'Selecione os 3 itens para fechar o pedido';
        botaoDisponivel = false;
    }
},1000);

function fecharPedido(){
    if(botaoDisponivel){
        const fundo = document.querySelector('.fundo');
        fundo.classList.toggle('esconder');
    }
}

function converterPreco(preco){
    let valor = preco.slice(3);
    valor = valor.replace(",",".");
    return Number(valor);
}

function atualizarTabela(){
    total = valorPrato+valorBebida+valorSobremesa;
    document.querySelector('.tabela-prato').innerHTML = prato;
    document.querySelector('.preco-prato').innerHTML = valorPrato.toFixed(2);
    document.querySelector('.tabela-bebida').innerHTML = bebida;
    document.querySelector('.preco-bebida').innerHTML = valorBebida.toFixed(2);
    document.querySelector('.tabela-sobremesa').innerHTML = sobremesa;
    document.querySelector('.preco-sobremesa').innerHTML = valorSobremesa.toFixed(2);
    document.querySelector('.total').innerHTML = total.toFixed(2);
}

function enviarPedido(){
    let nome = prompt('Qual seu nome ?');
    let endereco = prompt('Qual sua rua e n??mero?')
    let str = 
    `
    Ol??, gostaria de fazer o pedido:\n- Prato: ${prato}\n- Bebida: ${bebida}\n- Sobremesa: ${sobremesa}\nTotal: R$ ${total.toFixed(2)}\n\n\nNome: ${nome}\nEndere??o: ${endereco}
    `
    url = encodeURIComponent(str);
    redirecionar(`https://wa.me/5583993395820?text=${url}`);
}

function redirecionar(link){
    window.open(link, "_blank")
    }