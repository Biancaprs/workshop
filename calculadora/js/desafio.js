var custoHora = document.querySelector('#valor-hora');
var horaTrabalhada = document.querySelector('#horas-projeto');
var mostrarResultado = document.querySelector('#resposta');

function calcular(){

    var valorCobrado = (custoHora.value * horaTrabalhada.value).toFixed(2)
    mostrarResultado.textContent = 'R$ ' + valorCobrado.replace(".", ",");

}

//Entrada 1 - <input type="number" id="valor-hora" />

//Entrada 2 - <input type="number" id="horas-projeto" />

//<button onclick="calcular()">Calcular Projeto</button>

//CONTA será uma multiplicação em da E1 pela E2

//resultado <span id="resposta">Resposta</span>
//<span id="resposta">R$ 0,00</span><small>/hora</small>