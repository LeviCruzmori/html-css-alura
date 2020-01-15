/* parte do formulario usando uma função anonima*/
  var botaoadicionar = document.querySelector('#adicionar-paciente');/* adiciona um evento, com uma função anonima*/
  botaoadicionar.addEventListener('click',function(event){/* addEventListener é um escutador de enventos ele lê o evento digitado*/
    event.preventDefault();/* => permite que a tela não seja recarregada e limpa antes mesmo de coletar o dado*/
 
    /* coletando dados do paciente do form do index.html */
    var form = document.querySelector('#form-adiciona')
    var paciente = obitempacientefoformulario(form);
   
    var erros= validapaciente(paciente);

    if(erros.length > 0 ){
     exibemensagensdeerro(erros);
      return;
    }
 
    /* criar a tr a td do paciente */
  var pacientetr = montartr(paciente);

/* trasendo o tr para dentro da tabela que sera exibida com os dodos coletados pelo formulario.*/
    var tabela = document.querySelector('#tabela-pacientes');

    tabela.appendChild(pacientetr);

    form.reset();

    var mensagemErro = document.querySelector('#mensagem-erro');
    mensagemErro.innerHTML;



  });
function exibemensagensdeerro(erros){
  var ul = document.querySelector('#mensagem-erro');
  ul.innerHTML = '';

  erros.forEach(function(erro){
    var li = document.createElement('li');
    li.textContent = erro;
    ul.appendChild(li)
  });
  }

  /* função que obtem os valores o que alimenta o fromulario */
  function obitempacientefoformulario(form){

    var paciente = {
      nome:form.nome.value,
      peso: form.peso.value,
      altura: form.altura.value,
      gordura: form.gordura.value,
      /* chamando a função calculaImc e atribuindo valores */ 
      imc: calculaImc(form.peso.value, form.altura.value)
  
    }
    return paciente;
  }

  /* função implementa e monta tr com td*/
  function  montartr(paciente){
     var pacientetr =document.createElement('tr');
    pacientetr.classList.add('paciente');
  
    /* colocando os td dentro do tr */
    pacientetr.appendChild(montatd(paciente.nome, 'info-nome'));
    pacientetr.appendChild(montatd(paciente.peso, 'info-peso'));
    pacientetr.appendChild(montatd(paciente.altura, 'info-altura'));
    pacientetr.appendChild(montatd(paciente.gordura, 'info-gordura'));
    pacientetr.appendChild(montatd(paciente.imc, 'info-imc'));

    return pacientetr;

  }
/* função que monta o td */
  function montatd(dado,classe){
    var td = document.createElement('td');
    td.textContent = dado;
    td.classList.add(classe)

    return td;

  }

  function validapaciente(paciente){
var erros = [];
    if (paciente.nome.length == 0) {
      erros.push('O nome não é valido')
    }
   if(!validapeso(paciente.peso)){
      erros.push('PESO INVALIDO');
    }

    if(!validaaltura(paciente.altura)){
       erros.push('ALTURA INVALIDA');
    }
   

    if(paciente.gordura.length == 0){
      erros.push('gordura não pode ser em branco')
    }
    if(paciente.peso.length == 0){
      erros.push('peso não pode ser em branco')
    }
    if(paciente.altura.length == 0){
      erros.push('altura não pode ser em branco')
    }
    return erros;
  };
  