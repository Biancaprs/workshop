var salario = document.querySelector('#ganho-mes'); //ENTRADA DE DADO 1
var horasTrabalhadasPorDia = document.querySelector('#horas-dia'); // ENTRADA DE DADO 2
var mostrarResultado = document.querySelector('#resposta');
function calcularValorHora(){
    var totalDeHorasTrabalhadas = horasTrabalhadasPorDia.value * 21; //TOTAL DE HORAS
    var valorPorHora = (salario.value / totalDeHorasTrabalhadas).toFixed(2)
    mostrarResultado.textContent = 'R$ ' + valorPorHora.replace(".", ",");
}


//ENTRADA DE DADOS 1 = SALARIO =-------- <input id="ganho-mes" type="number" value="0" /> 

//ENTRADA DE DADOS 2 = HORAS TRABALHADAS ========= <input id="horas-dia" type="number" value="0" />

//CLICAR EM CALCULAR ======= <button onclick="calcularValorHora()">Calcular</button>

//CONTA //JAVASCRIPT

//MOSTRAR RESULTADO    ========== <span id="resposta">R$ 0,00</span><small>/hora</small>
