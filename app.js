let amigos = []; 

function adicionarAmigo() {
    let nomeAmigo = document.querySelector("input").value.trim();

    if (nomeAmigo === '') {
        alert('Por favor, insira um nome');
    } else {
        amigos.push(nomeAmigo); 
        atualizarListaNaTela(); 
        limparCampo(); 
        // para acompanhar // console.log(nomeAmigo);
    }   
}

function limparCampo() {
    document.querySelector("input").value = ''; 
}

function atualizarListaNaTela() {
    let listaDeAmigos = document.getElementById("listaAmigos");
    listaDeAmigos.innerHTML = ''; 

    for(let i = 0; i < amigos.length; i++) {
        let novoElemento = document.createElement("li");
        novoElemento.textContent = amigos[i];
        listaDeAmigos.appendChild(novoElemento);
    }
}

function sortearAmigo() {
    if (amigos.length === 0) {
        document.getElementById("resultado").innerHTML = "Nenhum amigo para sortear!";
        return;
    }
    let nomeAleatorio = Math.floor(Math.random() * amigos.length);
    let nomeSorteado = amigos[nomeAleatorio];
    document.getElementById("resultado").innerHTML = "O amigo sorteado é: " + nomeSorteado;
    // para acompanhar // console.log(nomeSorteado); 
}