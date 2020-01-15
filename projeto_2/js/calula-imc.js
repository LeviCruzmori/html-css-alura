/* mudando o titulo */
 var titulo = document.querySelector(".titulo");
  titulo.textContent = "Aparecida Nutricionista";

  var pacientes = document.querySelectorAll(".paciente");
 

  for(var i = 0; i < pacientes.length; i++){

  var paciente = pacientes[i];

  var tdpeso = paciente.querySelector(".info-peso")
  var peso = tdpeso.textContent

  var tdnome = paciente.querySelector(".info-nome")
  var nome = tdnome.textContent

  var tdaltura = paciente.querySelector(".info-altura")
  var altura = tdaltura.textContent
  var tdgordura = paciente.querySelector('.info-gordura').textContent;
  var gordura = tdgordura.textContent

  var tdimc = paciente.querySelector('.info-imc')
/* o text.Content apreenta o resultado que esta na classe para poder
realizar o calculo */
var pesoEhvalido = validapeso(peso);
var alturaEhvalido =validaaltura(altura);


if(!pesoEhvalido){
    
    pesoEhvalido = false;
    tdimc.textContent ='peso invalido'
    paciente.classList.add('paciente-invalido');
    
}
if(!alturaEhvalido){
    
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

 function validapeso(peso){
  if(peso >=0 && peso <=300){
    return true;
  }else{
    return false;
  }
 }
 function validaaltura(altura){
  if(altura >=0 && altura <=3.00){
    return true;
  }else{
    return false;
  }
 }

 