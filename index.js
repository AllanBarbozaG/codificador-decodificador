
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


/*if (selecao === 'Cifra de Cesar') {
  console.log('uhuul')
} else {
  console.log('aaarrhg')
}*/