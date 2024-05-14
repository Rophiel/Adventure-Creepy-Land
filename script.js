function usuario(){ /*Armazenando o valor inserido no input na variável*/
    var nomeUsuario = document.getElementById('login').value;
    console.log(' O ++1 valor inserido é ',nomeUsuario);
}

function alterarBotao(){ /* Aumentando o tamanho da letra*/
    document.getElementById("letras").style.fontSize = "60pt"
}

function diminuirLetra(){ /**/
    document.getElementById("letras").style.fontSize = "10pt"
}

/*Mudando o título*/
function mudandoTitulo(){
    document.getElementById("titulo").innerHTML = " WASTED! "
}

