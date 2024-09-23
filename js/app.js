let lista_amigos = []

function adicionar(){
    let nome = document.getElementById("nome-amigo")
    let lista = document.getElementById("lista-amigos")
    
    lista_amigos.push(nome.value)

    if (lista.innerText == ""){
        lista.innerText = nome.value
    }else{
        lista.innerText += `, ${nome.value}`
    }

    nome.value = ""
}
function sortear(){
    embaralha(lista_amigos)
    let lista_sorteio = document.getElementById("lista-sorteio")

    for (let i = 0; i < lista_amigos.length; i++){
        if(i == lista_amigos.length - 1){
            lista_sorteio.innerHTML += `${lista_amigos[i]} --> ${lista_amigos[0]} <br/>`
        }else{
            lista_sorteio.innerHTML += `${lista_amigos[i]} --> ${lista_amigos[i + 1]} <br/>`
        }
    }
}

function embaralha(lista) {
    for (let indice = lista.length; indice; indice--) {

        const indiceAleatorio = Math.floor(Math.random() * indice);

        [lista[indice - 1], lista[indiceAleatorio]] = 
            [lista[indiceAleatorio], lista[indice - 1]];
    }
}

function reiniciar(){
    lista_amigos = []
    document.getElementById("lista-sorteio").innerHTML = ""
    document.getElementById("lista-amigos").innerHTML = ""
}