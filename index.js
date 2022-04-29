// Exibe ou esconde o input de incremento da Cifra de Cesar
function criaInput() {
  var selecao = document.getElementById("escolha");
  var escolha = selecao.options[selecao.selectedIndex];  
  var incrementoDiv = document.getElementById("incremento-div");

  if (escolha.text == 'Cifra de César') {
    incrementoDiv.style.display = 'block';
    
    incrementoDiv.innerHTML = `
    <label for="incremento">Informe o incremento</label>
    <input id="incremento" type="number">
    `;
  } else {
    incrementoDiv.style.display = 'none';
  }
}
// Altera a mensagem do botão dependendo do que foi selecionado nos radio buttons
function alteraMsg() {
  var radioBtn1 = document.getElementById("cod");
  var radioBtn2 = document.getElementById("decod");
  var botao = document.getElementById("botao");

  radioBtn1.addEventListener('click', function() {
    botao.innerText = "Codificar Mensagem!";
  });

  radioBtn2.addEventListener('click', function() {
    botao.innerText = "Decodificar Mensagem!";
  });
} alteraMsg()

botao.addEventListener('click', function(event) {
  event.preventDefault()
});

// Função que será executada ao clicar no botão. No caso 
function executar() {
  executaCifraCesar()
}

function executaCifraCesar() {
  var selecao = document.getElementById("escolha"); // acessa a tag select escolha
  var escolha = selecao.options[selecao.selectedIndex]; // verifica qual a opção escolhida no select

  var inputTexto = document.getElementById('input-texto');     
  var textoParaArray = Array.from(inputTexto.value.toUpperCase());
   
  var incremento = document.getElementById("incremento");
  var valorIncremento = parseFloat(incremento.value)
  

  if (escolha.text == "Cifra de César" && botao.innerText == 'Codificar Mensagem!') {

    var i = 0;
    while (i < textoParaArray.length) { 
            
      var conversao = ((`${textoParaArray[i]}`.charCodeAt() - 65 + valorIncremento) % 26) + 65;

      
           
      
     
      i++    
      console.log(String.fromCharCode(conversao))
      console.log(conversao)

    }  
    
    // console.log(String.fromCharCode(`${recebeFrase}`))
    
   /* 

    console.log(typeof valorIncremento)
   
    console.log(teste[i].charCodeAt())
    console.log(teste[i])

    console.log(String.fromCharCode(recebeFrase))
    console.log(teste) 

       
    console.log(conversao)
    console.log(String.fromCharCode(conversao))*/
    
  }
}


/*if (selecao === 'Cifra de Cesar') {
  console.log('uhuul')
} else {
  console.log('aaarrhg')
}*/