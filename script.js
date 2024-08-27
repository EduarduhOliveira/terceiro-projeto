let usuario = prompt("Qual é o seu nome aventureiro ?")
let idade = prompt("Quantos anos você tem ? ")
let classe = prompt(" Qual é a classe ?")


class personagem {
    constructor(nome, idade, tipo){
        this.nome = nome
        this.idade = idade
        this.tipo = tipo
    }
}
ataque()

function ataque(){
    let tipoPersonagem;
    if (classe === "mago"){
        tipoPersonagem = new personagem(usuario , idade, classe)
        console.log(`O ${classe} atacou usando magia`)
    }
    else if(classe ==="guerreiro"){
        tipoPersonagem = new personagem(usuario,idade,classe)
        console.log(`O ${classe} atacou usando espada`)
    }
    else if(classe ==="monge"){
        tipoPersonagem = new personagem(usuario,idade,classe)
        console.log(`O ${classe} atacou usando palma de lotus`)
    }
    else if(classe ==="ninja"){
        tipoPersonagem = new personagem(usuario,idade,classe)
        console.log(`O ${classe} atacou usando shuriken`)
    }

    return tipoPersonagem
}
 
