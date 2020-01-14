/* mudando o titulo */
 var titulo = document.querySelector(".titulo");
  titulo.textContent = "Aparecida Nutricionista";

  var pacientes = document.querySelectorAll(".paciente");
 

  for(var i = 0; i < pacientes.length; i++){

  var paciente = pacientes[i];
  var tdpeso = paciente.querySelector(".info-peso").textContent;
  var tdnome = paciente.querySelector(".info-nome").textContent;
  var tdaltura = paciente.querySelector(".info-altura").textContent;
  var tdgordura = paciente.querySelector('.info-gordura').textContent;
  var tdimc = paciente.querySelector('.info-imc')
/* o text.Content apreenta o resultado que esta na classe para poder
realizar o calculo */
var pesoEhvalido = true
var alturaEhvalido =true


if(tdpeso < 0 || tdpeso > 300){
    
    pesoEhvalido = false;
    tdimc.textContent ='peso invalido'
    paciente.classList.add('paciente-invalido');
    
}
if(tdaltura < 0 || tdaltura > 3.00){
    
    alturaEhvalido=false;
    tdimc.textContent='altura invalido'
    paciente.classList.add('paciente-invalido');
    
}

if(alturaEhvalido && pesoEhvalido){
    /* toFixed define a quantidade numerica da casa decimal a ser exibida na tabela */
    var imc= calculaImc(peso,altura);
  tdimc.textContent = imc;/* aqui vc manda o resultado do imc para a tabela em html.*/

}
  };
/* função que calcula o IMC */
function calculaImc(peso,altura){
  var imc= 0;
  imc = peso / (altura*altura);
  return imc.toFixed(2);


}

 


 