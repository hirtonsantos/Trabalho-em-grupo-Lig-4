let tab01 = ''
let tab02 = ''
let tab03 = ''
let tab04 = ''
let tab05 = ''
let tab06 = ''
let tab07 = ''

let title = document.createElement("h1")
title.innerHTML = "Lig-4"
title.classList.add("title")

document.body.appendChild(title)

const body = document.getElementsByTagName('body')[0]
const section = document.createElement('section')
body.appendChild(section)
section.classList.add('sec')
section.setAttribute('id', 'sec')

function initial_table(){

    let coluna = 7;

    

    for (let i = 0; i < coluna; i++) {
        const colunas = document.createElement('div')
        section.appendChild(colunas)
        colunas.setAttribute('class','coluna')
        colunas.setAttribute('id',`coluna0${i+1}`)
    }

 
}
initial_table()



const sec = document.getElementById("sec")

const bola01 = document.createElement("div")
const bola02 = document.createElement("div")

bola01.classList.add("player01")
bola02.classList.add("player02")

let player = "p1";

sec.addEventListener("click", (evt)=>{

    const bola01 = document.createElement("div")
    const bola02 = document.createElement("div")
    
    bola01.classList.add("player01","slide-in-top")
    bola02.classList.add("player02","slide-in-top")
    
    let coluna = evt.target;
    // console.log()    

    if(coluna.classList[0] === "coluna"){
        if(player === "p1"){
            if(coluna.id === "coluna01") {
                if (tab01.length < 7) {
                    coluna.appendChild(bola01)
                    tab01 += '1'
                    player = "p2"
                    conditional(coluna, "p1")
                }
            }
            if(coluna.id === "coluna02") {
                if (tab02.length < 7) {
                    coluna.appendChild(bola01)
                    tab02 += '1'
                    player = "p2"
                    conditional(coluna, "p1")
                    
                }
            }
            if(coluna.id === "coluna03") {
                if (tab03.length < 7) {
                    coluna.appendChild(bola01)
                    tab03 += '1'
                    player = "p2"
                    conditional(coluna, "p1")
                }
            }
            if(coluna.id === "coluna04") {
                if (tab04.length < 7) {
                    coluna.appendChild(bola01)
                    tab04 += '1'
                    player = "p2"
                    conditional(coluna, "p1")
                }
            }
            if(coluna.id === "coluna05") {
                if (tab05.length < 7) {
                    coluna.appendChild(bola01)
                    tab05 += '1'
                    player = "p2"
                    conditional(coluna, "p1")
                }

            }
            if(coluna.id === "coluna06") {
                if (tab06.length < 7) {
                    coluna.appendChild(bola01)
                    tab06 += '1'
                    player = "p2"
                    conditional(coluna, "p1")
                }
            }
            if(coluna.id === "coluna07") {
                if (tab07.length < 7) {
                    coluna.appendChild(bola01)
                    tab07 += '1'
                    player = "p2"
                    conditional(coluna, "p1")
                }
            }
        }

        else if(player === "p2"){
            if(coluna.id === "coluna01") {
                if (tab01.length < 7) {
                    coluna.appendChild(bola02)
                    player = "p1"
                    tab01 += '2'
                    conditional(coluna, "p2")
                }
            }
            if(coluna.id === "coluna02") {
                if (tab02.length < 7) {
                    coluna.appendChild(bola02)
                    player = "p1"
                    tab02 += '2'
                    conditional(coluna, "p2")
                }
            }
            if(coluna.id === "coluna03") {
                if (tab03.length < 7) {
                    coluna.appendChild(bola02)
                    player = "p1"
                    tab03 += '2'
                    conditional(coluna, "p2")
                }
            }
            if(coluna.id === "coluna04") {
                if (tab04.length < 7) {
                    coluna.appendChild(bola02)
                    player = "p1"
                    tab04 += '2'
                    conditional(coluna, "p2")
                }
            }
            if(coluna.id === "coluna05") {
                if (tab05.length < 7) {
                    coluna.appendChild(bola02)
                    player = "p1"
                    tab05 += '2'
                    conditional(coluna, "p2")
                }
            }
            if(coluna.id === "coluna06") {
                if (tab06.length < 7) {
                    coluna.appendChild(bola02)
                    player = "p1"
                    tab06 += '2'
                    conditional(coluna, "p2")
                }
            }
            if(coluna.id === "coluna07") {
                if (tab07.length < 7) {
                    coluna.appendChild(bola02)
                    player = "p1"
                    tab07 += '2'
                    conditional(coluna, "p2")
                }
            }
        }
    }
    
    let posicaoY = parseInt(coluna.id[coluna.id.length-1])
    let posicaoX = coluna.childElementCount

  


    //vertical(posicaoX,posicaoY);
    //horizontal(posicaoX,posicaoY);
    diagonalLeft(posicaoX,posicaoY)
})

// function placar(){
    
// }



let coluna01 = document.getElementById("coluna01")
let coluna02 = document.getElementById("coluna02")
let coluna03 = document.getElementById("coluna03")
let coluna04 = document.getElementById("coluna04")
let coluna05 = document.getElementById("coluna05")
let coluna06 = document.getElementById("coluna06")
let coluna07 = document.getElementById("coluna07")

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
    if (parametro === coluna01){
        array[0].push(bola)
    } 
    if (parametro === coluna02){
        array[1].push(bola)
    }
    if (parametro === coluna03){
        array[2].push(bola)
    } 
    if (parametro === coluna04){
        array[3].push(bola)
    } 
    if (parametro === coluna05){
        array[4].push(bola)
    }
    if (parametro === coluna06){
        array[5].push(bola)
    }
    if (parametro === coluna07){
        array[6].push(bola)
    }
}

function vertical(posicaoX,posicaoY){
    let coluna = array[posicaoY-1]
    let score = 0;
        if (coluna[posicaoX-1] === coluna[posicaoX-2]){
            score++
        }
        if (coluna[posicaoX-1] === coluna[posicaoX-3]){
            score++
        }
        if (coluna[posicaoX-1] === coluna[posicaoX-4]){
            score++
        }
        if (coluna[posicaoX-1] === coluna[posicaoX-5]){
            score++
        }
        
        if (score===4) {
            console.log("você ganhou")
        }
}

function horizontal(posicaoX,posicaoY){
    let elemento = array[posicaoY-1][posicaoX-1]    
    let score = 0;

    

    for (let i=0; i<array.length; i++){
        if(elemento === array[i][posicaoX-1]){
        score++}
        else{
            score = 0
        }
        if(score >= 4){
            console.log("votória");
            console.log(elemento);
        }

    }
}

function diagonalLeft(posicaoX,posicaoY){
    let x =posicaoX-1
    let y = posicaoY-1
    let elemento = array[y][x]    
    let score1 = 1;
    let score2 = 1;
    let j =1
    let k =1
   

   for (let i = y; i < 6; i++) {
       
    if(elemento === array[y+j][x+j]){
        score1++
    }
    else{
        score1=1
    }
    if(elemento === array[y+j][x-j]){
        score2++
    }
    else{
        score2 = 1
    }
    j++
}

    for (let i = y; i > 0; i--) {

        

        if(y-k>-1){
       
        if(elemento === array[y-k][x-k]){
    
            
            score1++
            
        }
        else {
            score1 = 1
        }
        if(elemento === array[y-k][x+k]){
    
            
            score2++
            
        }
        else{
            score2=1
        }
    
    }
        k++

       
    }
   
    console.log(score1, score2)

    if(score1>=4||score2>=4){

        console.log("vitória",elemento)

    }
}
