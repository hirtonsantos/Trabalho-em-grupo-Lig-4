
let count_player_one = 0
let count_player_two = 0
let player = "p1";

function pageConstruct() {

let title = document.createElement("h1")
let currentPlayer = document.createElement("div");

currentPlayer.classList.add("jogada01")
currentPlayer.id = "jogadorSeguinte"
title.innerHTML = "Lig-4"
title.classList.add("title")


document.body.appendChild(title)
document.body.appendChild(currentPlayer)

const body = document.getElementsByTagName('body')[0]
const section = document.createElement('section')
body.appendChild(section)
section.classList.add('sec')
section.setAttribute('id', 'sec')
}
function initial_table(){

    let coluna = 7;
    let section = document.getElementById("sec")
    for (let i = 0; i < coluna; i++) {
        const colunas = document.createElement('div')
        section.appendChild(colunas)
        colunas.setAttribute('class','coluna')
        colunas.setAttribute('id',`coluna0${i+1}`)
        
    }


}
pageConstruct()
initial_table()
placar()

const tabuleiro = document.getElementById("sec")

tabuleiro.addEventListener("click", (evt)=>{
 
    bolinhaAppend(evt) 

})

function bolinhaAppend(evt) {

    const bola01 = document.createElement("div")
    const bola02 = document.createElement("div")
    
    bola01.classList.add("player01","slide-in-top")
    bola02.classList.add("player02","slide-in-top")



//-------CAPTURANDO O ELEMENTO CLICADO E A POSIÇÃO XY DA BOLINHA (COLUNA)------//
    
    let coluna = evt.target;

            // ------- TESTANDO SE O CLICK FOU DIRETO NA COLUNA OU NA BOLINHA ----//
    if(coluna.classList[0] != "coluna"){
        coluna =evt.target.parentElement
    }

    let colunaIndice = coluna.childElementCount
    let posicaoY = parseInt(coluna.id[coluna.id.length-1])
    let posicaoX = colunaIndice+1
    
    

//----ALTERNANDO A CLASSE DO DISPLAY DO PRÓXIMO JOGADOR ------//

let currentPlayer = document.getElementById("jogadorSeguinte")
    if(player === "p1"){

        currentPlayer.classList.remove("jogada01")
        currentPlayer.classList.add("jogada02")
    }
    else{
        currentPlayer.classList.remove("jogada02")
        currentPlayer.classList.add("jogada01")
    }
     
//------TESTANDO ONDE ACONTECEU O CLIQUE E DEPOSITANDO A BOLINHA -----//
    if(coluna.classList[0] === "coluna"){
 
        if(player === "p1"){


                if(colunaIndice < 6) {
                    coluna.appendChild(bola01)
                    player = "p2"
                    conditional(posicaoY, "p1")
                    vitoriaTeste(posicaoX,posicaoY)
                
        }}
        else if(player === "p2"){
            
                if (colunaIndice < 6) {
                    coluna.appendChild(bola02)
                    player = "p1"
                    conditional(posicaoY, "p2")
                    vitoriaTeste(posicaoX,posicaoY)
                }   
        }
    }
    
}

function vitoriaTeste(posicaoX,posicaoY) {

    vertical(posicaoX,posicaoY);
    horizontal(posicaoX,posicaoY);
    diagonal(posicaoX,posicaoY)
    empate()
}

function vitoriaConcluida(vencedor){

    displayResult(vencedor)

    console.log(vencedor + " Ganhou")
    if(vencedor === "p1"){
        const placar = document.querySelector("p")
        count_player_one +=1    
        placar.innerText = count_player_one+" VS "+count_player_two

    }else{
        const placar = document.querySelector("p")
        count_player_two +=1 
        placar.innerText = count_player_one+" VS "+count_player_two
    }
}

let array = [
    [],
    [],
    [],
    [],
    [],
    [],
    [],
]

function conditional(parametro,bola){

        array[parametro-1].push(bola)
    
}

function vertical(posicaoX,posicaoY){
    let coluna = array[posicaoY-1]
    let elemento = array[posicaoY-1][posicaoX-1] 
    let score = 1;
        if (coluna[posicaoX-1] === coluna[posicaoX-2] && coluna[posicaoX-1] != undefined && coluna[posicaoX-2] != undefined){
            score++
        }
        if (coluna[posicaoX-1] === coluna[posicaoX-3] && coluna[posicaoX-1] != undefined && coluna[posicaoX-2] != undefined){
            score++
        }
        if (coluna[posicaoX-1] === coluna[posicaoX-4] && coluna[posicaoX-1] != undefined && coluna[posicaoX-2] != undefined){
            score++
        }
        
        
        if (score===4) {
            score = 1
        
            vitoriaConcluida(elemento)
        

            
        }
}

function horizontal(posicaoX,posicaoY){
    let elemento = array[posicaoY-1][posicaoX-1]    
        let score = 0;

    for (let i=0; i<array.length; i++){
        if(elemento === array[i][posicaoX-1] && array[i][posicaoX-1] != undefined && elemento != undefined){
        score++}
        else{
            score = 0
        }
        if(score >= 4 && score != undefined){
            score = 0

            vitoriaConcluida(elemento);
            
           break;
        }

    }
}

function diagonal(posicaoX,posicaoY){
    let x =posicaoX-1
    let y = posicaoY-1
    let elemento = array[y][x]    
    let score1 = 1;
    let score2 = 1;
    let j =1
    let k =1
    let dirTop = true
    let dirBot = true
    let esqTop = true
    let esqBot = true

    for (let i = y; i < 6; i++) {
       
        if(elemento === array[y+j][x+j] && dirTop === true ){
            score1++
        }
        else{dirTop=false}

        if(elemento === array[y+j][x-j]  && dirBot === true ){
            score2++
        }
        else{dirBot = false}

    j++
        if(score2>=4||score1>=4){
            vitoriaConcluida(elemento);
            score2 = 1
            break;
        }
    }

    for (let i = y; i > 0; i--) {

        if(y-k>-1){

            if(elemento === array[y-k][x-k]  &&  esqBot === true ){  
                score1++  
            }
            else{esqBot = false}
            if(elemento === array[y-k][x+k] && esqTop === true ){   
                score2++
            }
            else{esqTop = false}
            
        }
    k++
    if(score2>=4||score1>=4){

        vitoriaConcluida(elemento);
        score2 = 1
        break

    }

    }
    
}

function empate(){
    let soma = 1
    let texto = "voce empatou"
    for (let i = 0; i < 7; i++){
        for (let j = 0; j < 7; j++){
            if (array[i][j] === "p1" ||array[i][j] === "p2"){
                soma++
            }
        }
    }
    if (soma >= 43){
        
        displayResult("empate")
    }
}

function placar(){
    const placar = document.createElement("div")
    placar.classList.add("placar")

    const player01 = document.createElement("div")
    player01.classList.add("player01")

    const vs = document.createElement("p")
    vs.innerText = count_player_one+" VS "+count_player_two

    const player02 = document.createElement("div")
    player02.classList.add("player02")

    placar.appendChild(player01)
    placar.appendChild(vs)
    placar.appendChild(player02)

    document.body.appendChild(placar)
}

function temaLove(){
    const love = document.querySelector("#sec")
    
    love.classList.remove("sec")
    love.classList.add("sec_love")
}
function del(){
    const tabuleiro = document.getElementById("sec")
    const display = document.getElementById("result")

    tabuleiro.innerHTML=""
    display.remove() 
     initial_table()
     array = [
        [],
        [],
        [],
        [],
        [],
        [],
        [],
    ]
     player="p1"
     let currentPlayer = document.getElementById("jogadorSeguinte")
     currentPlayer.classList.remove("jogada02")
        currentPlayer.classList.add("jogada01")
}

let resetButton = document.createElement("button");

resetButton.addEventListener("click" ,() => {
    del()
})

function displayResult(resultado) {

    
    const result = document.createElement("div")
    result.id = "result"

        const content = document.createElement("div")
        content.classList.add("container-modal")


        const player = document.createElement("div")
        const frase = document.createElement("div")
        frase.innerText = " é o vencedor!"
        frase.classList.add("winner")

        player.classList.add("player01")
        player.setAttribute("id","win01")

        if (resultado === "p2"){
        player.classList.add("player02")
        player.setAttribute("id","win02")
        }

        if(resultado === "empate"){
            frase.innerText = "Empatou!"
            player.classList.remove("player01", "player02")

        }

        resetButton.setAttribute("id", "btn")
        resetButton.innerText = "Continuar";
    
        content.appendChild(player)
        content.appendChild(frase)
        content.appendChild(resetButton)
        result.classList.add("modal")
        result.style.display = "block"
        result.appendChild(content)
        document.body.appendChild(result)


}

