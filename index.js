// Exibe ou esconde o input de incremento da Cifra de Cesar
function criaInput() {
  var selecao = document.getElementById("escolha"); // Seleciona a tag select
  var escolha = selecao.options[selecao.selectedIndex]; // verifica qual das opções foi selecionada no select
  var incrementoDiv = document.getElementById("incremento-div"); // Seleciona a div oculpa

  if (escolha.text == 'Cifra de César') { // Se a Cifra de César estiver selecionada, irá mudar o display da div oculta para que ela apareca na página
    incrementoDiv.style.display = 'block';
    
    incrementoDiv.innerHTML = `
    <label for="incremento">Informe o incremento</label> 
    <br>
    <input id="incremento" type="number">
    `; // Define o html de dentro da div oculta quando ela aparecer
  } else {
    incrementoDiv.style.display = 'none'; // esconhe a div oculta caso a opção base64 esteja selecionada
  }
}
// Altera a mensagem do botão dependendo do que foi selecionado nos radio buttons
function alteraMsg() {
  var radioBtn1 = document.getElementById("cod"); // Seleciona o radio btn de decodificar
  var radioBtn2 = document.getElementById("decod"); // Seleciona o radio btn de decodificar
  var botao = document.getElementById("botao"); // Seleciona o botao de executar

  radioBtn1.addEventListener('click', function() {
    botao.innerText = "Codificar Mensagem!";
  });

  radioBtn2.addEventListener('click', function() {
    botao.innerText = "Decodificar Mensagem!";
  });
} alteraMsg();

botao.addEventListener('click', function(event) {
  event.preventDefault();
});

function CifraDeCesar() {
  var selecao = document.getElementById("escolha"); // acessa a tag select escolha
  var escolha = selecao.options[selecao.selectedIndex]; // verifica qual a opção escolhida no select

  var inputTexto = document.getElementById('texto-codigo-input');     
  var textoParaArray = Array.from(inputTexto.value.toUpperCase()); // Transforma o conteúdo da variável em um array

  console.log('---------Teste de variável---------')
  console.log(inputTexto) // Exibe o conteúdo da variável 
  console.log(inputTexto.value) // Exibe o conteúdo do elemento selecionado pela variável
  console.log(textoParaArray) // Exibe o conteúdo da variável
  
  console.log(textoParaArray.length)
  console.log('---------FIM Teste de variável---------')
   
  var incremento = document.getElementById("incremento"); // Seleciona o campo de input dentro da div oculta 
  var valorIncremento = parseFloat(incremento.value); // Transforma o número digitado em um variável number, pois é recebido primeiramente como string
  

  if (escolha.text == "Cifra de César" && botao.innerText == 'Codificar Mensagem!') {

    var i = 0;
    while (i < textoParaArray.length) { 
                  
      var conversao = ((textoParaArray[i].charCodeAt() - 65 + valorIncremento) % 26) + 65;    
      
      var inputResultado = document.getElementById('input-resultado');
      inputResultado.value = inputResultado.value + String.fromCharCode(conversao);

      i++;
      
      console.log(conversao);
      console.log(String.fromCharCode(conversao));
     
    } 
  } else if (escolha.text == "Cifra de César" && botao.innerText == 'Decodificar Mensagem!') {

    var i = 0;
    while (i < textoParaArray.length) {

      var conversaoDois = ((textoParaArray[i].charCodeAt() - 65 - valorIncremento) % 26 ) + 65;

      var inputResultadoDois = document.getElementById('input-resultado');
      inputResultadoDois.value = inputResultadoDois.value + String.fromCharCode(conversaoDois);

      i++;

      console.log(conversaoDois);
      console.log(String.fromCharCode(conversaoDois));
    }
  }    
}

// Função que será executada ao clicar no botão. Selecionada uma das duas opções, apenas a função correspondente terá efeito
function executar() {
  CifraDeCesar();
}
