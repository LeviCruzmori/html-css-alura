// criando varialvel para o botao e atrelando ao evento.
var botaoAdicionar = document.querySelector('#buscar-pacientes');
// atrelando o evento ao botao com uma função fantasma.
botaoAdicionar.addEventListener('click',function(){

// criando objeto responsavel pela requisição da url.
    var xhr = new XMLHttpRequest();
// XML possui varios metodos e abaixo utilizaremos o metodo open()                         que verifica se o indereço esta correto.
    xhr.open('GET','https://api-pacientes.herokuapp.com/pacientes');

// carregando a resposta da requisição com o metodo 'load'.
    xhr.addEventListener('load',function(){
        //verifica se a requisição e verdadeira com o cod(200) e impreme um erro se a mesma não for  exibindo o erro cod(404).
        var erroajax = document.querySelector('#erro-ajax')
        if(xhr.status == 200){
       // erroajax.classlist.add('invisivel');// foi inutilixada pois gera erro de sintaxe.
        var resposta = xhr.responseText;
    // transformando a resposta em uma arrey.
        var pacientes = JSON.parse(resposta)
    // iterando arry de pacientes e ixibindo na lista.
    pacientes.forEach(function(paciente) {
        acidionapacientenatabela(paciente)

          });
        }else{
            erroajax.classList.remove('invisivel');
        }
       });
// metodo de envio da requisição.
    xhr.send();
});
// linck da api esterna que contem os dados de outros pacientes.
