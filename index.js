function guardaVariaveis () {
  selecao = document.getElementById("escolha"); // Seleciona a tag select
  escolha = selecao.options[selecao.selectedIndex]; // verifica qual das opções foi selecionada no select
  incrementoDiv = document.getElementById("incremento-div"); // Seleciona a div oculta
  radioBtn1 = document.getElementById("cod"); // Seleciona o radio btn de decodificar
  radioBtn2 = document.getElementById("decod"); // Seleciona o radio btn de decodificar
  botao = document.getElementById("botao"); // Seleciona o botao de executar
  inputTexto = document.getElementById('texto-codigo-input');  
  incremento = document.getElementById("incremento"); // Seleciona o campo de input dentro da div oculta 
  inputResultado = document.getElementById('input-resultado');
}
// Exibe ou esconde o input de incremento da Cifra de Cesar
function criaInput() {
  guardaVariaveis();

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
  guardaVariaveis();
  
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

function cifraDeCesar() { 
  textoParaArray = Array.from(inputTexto.value.toUpperCase()); // Transforma o conteúdo da variável em um array 
  valorIncremento = parseInt(incremento.value); // Transforma o número digitado em um variável number, pois é recebido primeiramente como string
  
  if (escolha.text == "Cifra de César" && botao.innerText == 'Codificar Mensagem!') {

    inputResultado.value = '';
    
    var i = 0;
    while (i < textoParaArray.length) { 
                    
      var codCifra = ((textoParaArray[i].charCodeAt() - 65 + valorIncremento) % 26) + 65;    
            
      inputResultado.value = inputResultado.value + String.fromCharCode(codCifra);

      i++;
    } 
  } else if (escolha.text == "Cifra de César" && botao.innerText == 'Decodificar Mensagem!') {

    inputResultado.value = '';

    var i = 0;
    while (i < textoParaArray.length) {

      var decodCifra = ((textoParaArray[i].charCodeAt() - 90 - valorIncremento) % 26 ) + 90;
      
      inputResultado.value = inputResultado.value + String.fromCharCode(decodCifra);

      i++;
    }
  }
  console.log('---------Teste de variável---------')
  console.log(inputTexto) // Exibe o conteúdo da variável 
  console.log(inputTexto.value) // Exibe o conteúdo do elemento selecionado pela variável
  console.log(textoParaArray) // Exibe o conteúdo da variável
  console.log(textoParaArray.length)
  console.log(codCifra);
  console.log(String.fromCharCode(codCifra));
  console.log(decodCifra);
  console.log(String.fromCharCode(decodCifra));
  console.log('-------FIM Teste de variável-------')    
}

function base64() {
  
  if (escolha.text == 'Base64' && botao.innerText == 'Codificar Mensagem!') {

    var codBase64 = btoa(inputTexto.value);    
    
    inputResultado.value = codBase64;

  } else {

    var decodBase64 = atob(inputTexto.value);

    inputResultado.value = decodBase64;

  }
}

// Função que será executada ao clicar no botão executar. Selecionada uma das duas opções, apenas a função interna correspondente terá efeito
function executar() {
  if (escolha.text == 'Cifra de César') {
    cifraDeCesar();
  } else {
    base64();
  }
}


// Função criaInput no formato orientado a objetos 
/*var criaInput = {
  nome: 'criaInput',
  selecao: document.getElementById("escolha"),
  incrementoDiv: document.getElementById("incremento-div"),
  condicao: function() {
    if (criaInput.selecao.options[criaInput.selecao.selectedIndex].text == 'Cifra de César') {
      criaInput.incrementoDiv.style.display = 'block';
      criaInput.incrementoDiv.innerHTML = `
      <label for="incremento">Informe o incremento</label> 
      <br>
      <input id="incremento" type="number">
      `;
    } else {
      criaInput.incrementoDiv.style.display = 'none';
    }
  }
}*/