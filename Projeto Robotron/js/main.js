const controle = document.querySelectorAll('[data-botao]');
const estatistica = document.querySelectorAll('[data-estatistica]');
const contadorCor = document.querySelectorAll('[data-contador]');
const pecas = {
    "bracos": {
        "forca": 29,
        "poder": 35,
        "energia": -21,
        "velocidade": -5
    },

    "blindagem": {
        "forca": 41,
        "poder": 20,
        "energia": 0,
        "velocidade": -20
    },
    "nucleos":{
        "forca": 0,
        "poder": 7,
        "energia": 48,
        "velocidade": -24
    },
    "pernas":{
        "forca": 27,
        "poder": 21,
        "energia": -32,
        "velocidade": 42
    },
    "foguetes":{
        "forca": 0,
        "poder": 28,
        "energia": 0,
        "velocidade": -2
    }
}

controle.forEach((elemento)=>{

    elemento.addEventListener("click", (evento)=>{
        acao(evento.target.dataset.botao, evento.target.parentNode);
        atualizaEstatistica(evento.target.dataset.peca, elemento.dataset.botao);
        alteraCor()
    })
})

function acao(operacao, controleContador){
    const contador = controleContador.querySelector('[data-contador]');

    if(operacao == "+"){
        contador.value = parseInt(contador.value) + 1;
    }else if(operacao == "-"){
        contador.value = parseInt(contador.value) - 1;
    }

    
}


function atualizaEstatistica(peca, oper){

    
    estatistica.forEach( (el) => {
    if(oper == "+"){
        el.textContent = parseInt(el.textContent) + pecas[peca][el.dataset.estatistica]; 
    }else{
        el.textContent = parseInt(el.textContent) - pecas[peca][el.dataset.estatistica]; 
    }

    });

}

function alteraCor(){
    estatistica.forEach((e)=>{
        if(e.textContent < 0){
            e.style.color = "red";
        }else{
            e.style.color = "white"
        }
    })

    contadorCor.forEach((c)=>{
        if(c.value < 0){
            c.style.color = "red";
        }else{
            c.style.color = "white"
        }
    })

}