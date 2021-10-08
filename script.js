let tab01 = ''
let tab02 = ''
let tab03 = ''
let tab04 = ''
let tab05 = ''
let tab06 = ''
let tab07 = ''

let count_player_one = 0
let count_player_two = 0

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
    let section = document.querySelector('section')
 

    

    for (let i = 0; i < coluna; i++) {
        if(i === 3){
            const result = document.createElement('div')
            section.appendChild(result)
            // result.setAttribute('class','win')
            result.setAttribute('id', 'myModal')

            

        }
        const colunas = document.createElement('div')
        section.appendChild(colunas)
        colunas.setAttribute('class','coluna')
        colunas.setAttribute('id',`coluna0${i+1}`)
        console.log(colunas)
    }

 console.log('passei aqui')
}
initial_table()
placar()


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
                if (tab01.length < 6) {
                    coluna.appendChild(bola01)
                    tab01 += '1'
                    player = "p2"
                    conditional(coluna, "p1")
                }
            }
            if(coluna.id === "coluna02") {
                if (tab02.length < 6) {
                    coluna.appendChild(bola01)
                    tab02 += '1'
                    player = "p2"
                    conditional(coluna, "p1")
                    
                }
            }
            if(coluna.id === "coluna03") {
                if (tab03.length < 6) {
                    coluna.appendChild(bola01)
                    tab03 += '1'
                    player = "p2"
                    conditional(coluna, "p1")
                }
            }
            if(coluna.id === "coluna04") {
                if (tab04.length < 6) {
                    coluna.appendChild(bola01)
                    tab04 += '1'
                    player = "p2"
                    conditional(coluna, "p1")
                }
            }
            if(coluna.id === "coluna05") {
                if (tab05.length < 6) {
                    coluna.appendChild(bola01)
                    tab05 += '1'
                    player = "p2"
                    conditional(coluna, "p1")
                }

            }
            if(coluna.id === "coluna06") {
                if (tab06.length < 6) {
                    coluna.appendChild(bola01)
                    tab06 += '1'
                    player = "p2"
                    conditional(coluna, "p1")
                }
            }
            if(coluna.id === "coluna07") {
                if (tab07.length < 6) {
                    coluna.appendChild(bola01)
                    tab07 += '1'
                    player = "p2"
                    conditional(coluna, "p1")
                }
            }
        }

        else if(player === "p2"){
            if(coluna.id === "coluna01") {
                if (tab01.length < 6) {
                    coluna.appendChild(bola02)
                    player = "p1"
                    tab01 += '2'
                    conditional(coluna, "p2")
                }
            }
            if(coluna.id === "coluna02") {
                if (tab02.length < 6) {
                    coluna.appendChild(bola02)
                    player = "p1"
                    tab02 += '2'
                    conditional(coluna, "p2")
                }
            }
            if(coluna.id === "coluna03") {
                if (tab03.length < 6) {
                    coluna.appendChild(bola02)
                    player = "p1"
                    tab03 += '2'
                    conditional(coluna, "p2")
                }
            }
            if(coluna.id === "coluna04") {
                if (tab04.length < 6) {
                    coluna.appendChild(bola02)
                    player = "p1"
                    tab04 += '2'
                    conditional(coluna, "p2")
                }
            }
            if(coluna.id === "coluna05") {
                if (tab05.length < 6) {
                    coluna.appendChild(bola02)
                    player = "p1"
                    tab05 += '2'
                    conditional(coluna, "p2")
                }
            }
            if(coluna.id === "coluna06") {
                if (tab06.length < 6) {
                    coluna.appendChild(bola02)
                    player = "p1"
                    tab06 += '2'
                    conditional(coluna, "p2")
                }
            }
            if(coluna.id === "coluna07") {
                if (tab07.length < 6) {
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

    
    vitoriaTeste(posicaoX,posicaoY)


})

function vitoriaTeste(posicaoX,posicaoY) {

    vertical(posicaoX,posicaoY);
    horizontal(posicaoX,posicaoY);
    diagonal(posicaoX,posicaoY)
}

function vitoriaConcluida(vencedor){

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

    if(vencedor === "p1"){

        const result = document.querySelector("#myModal")
        const content = document.createElement("div")
        content.classList.add("container-modal")


        const player = document.createElement("div")
        player.classList.add("player01")
        player.setAttribute("id","win01")

        const btn = document.createElement("a")
        btn.setAttribute("id", "btn")
        btn.innerText = "Continuar"
        // btn.setAttribute(onclick,del())
        
        // btn.addEventListener(onclick,del())
        



        const frase = document.createElement("div")
        frase.innerText = " é o vencedor!"
        frase.classList.add("winner")
    
        content.appendChild(player)
        content.appendChild(frase)
        btn.innerHTML = "<a onclick=del()>Continuar</a>"
        content.appendChild(btn)
        result.classList.add("modal")
        result.style.display = "block"
        result.appendChild(content)

        // btn.addEventListener("click", (evt)=>{
        //     del()
        // })



    // result.appendChild(player)
    // result.appendChild(frase)
    }else{
        const result = document.querySelector("#myModal")
        const content = document.createElement("div")
        content.classList.add("container-modal")


        const player = document.createElement("div")
        player.classList.add("player02")
        player.setAttribute("id","win01")

        const btn = document.createElement("a")
        btn.setAttribute("id", "btn")
        btn.innerText = "Continuar"
        
        // btn.setAttribute(onclick,del())



        const frase = document.createElement("div")
        frase.innerText = " é o vencedor!"
        frase.classList.add("winner")
    
        content.appendChild(player)
        content.appendChild(frase)
        btn.innerHTML = "<a onclick=del()>Continuar</a>"
        content.appendChild(btn)
        result.classList.add("modal")
        result.style.display = "block"
        result.appendChild(content)

        // btn.addEventListener("onclick", (evt)=>{
        //     del()
        // })

        // <a class="onClick">continutar</a>

    }

    
   

    
    


}

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
        if (coluna[posicaoX-1] === coluna[posicaoX-5] && coluna[posicaoX-1] != undefined && coluna[posicaoX-2] != undefined){
            score++
        }
        
        if (score===4) {
            score = 1
            console.log("score vertical ", score)
            vitoriaConcluida(elemento)
        

            
        }
}

function horizontal(posicaoX,posicaoY){
    let elemento = array[posicaoY-1][posicaoX-1]    
    console.log('elemento zero',elemento)
    let score = 0;

    for (let i=0; i<array.length; i++){
        if(elemento === array[i][posicaoX-1] && array[i][posicaoX-1] != undefined && elemento != undefined){
        score++}
        else{
            score = 0
        }
        if(score >= 4 && score != undefined){
            score = 0
            console.log("score ",score)
            console.log("elemento ",elemento)
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
    console.log(love)
    love.classList.remove("sec")
    love.classList.add("sec_love")
   


}

// temaLove()



// function apagar(){
//     const conteudo = document.querySelectorAll("body > .sec")

//     for(let i = 0; i <conteudo.length; i++){
//         conteudo[i].remove()
//     }

// }

// apagar();



// testando modal

// Get the modal
// var modal = document.getElementById("myModal");

// Get the button that opens the modal
// var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
// var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
// btn.onclick = function() {
//   modal.style.display = "block";
// }

// When the user clicks on <span> (x), close the modal
// span.onclick = function() {
//   modal.style.display = "none";
// }

// When the user clicks anywhere outside of the modal, close it
// window.onclick = function(event) {
//   if (event.target == modal) {
    // modal.style.display = "none";
//   }
// }

function del(){

    const reset= document.querySelectorAll("section");

    for(let i = 0; i < reset.length ; i ++){

        reset[i].remove();

    }
 

    const tit = document.querySelector("h1")

    const plac = document.querySelector(".placar")

    plac.remove()

    tit.remove()

    // reset.remove();

    let title = document.createElement("h1")
    title.innerHTML = "Lig-4"
    title.classList.add("title")

    document.body.appendChild(title)

    // const body = document.getElementsByTagName('body')[0]
    const section = document.createElement('section')
    document.body.appendChild(section)
    section.classList.add('sec')
    section.setAttribute('id', 'sec')

    

    // let section = document.querySelector('section')

    // console.log("initial table ", initial_table())
    initial_table()

    placar()

    
 

 


    

  

    const sec = document.getElementById("sec")

    const bola01 = document.createElement("div")
    const bola02 = document.createElement("div")

    bola01.classList.add("player01")
    bola02.classList.add("player02")

    let player = "p1";

    let tab01 = ''
    let tab02 = ''
    let tab03 = ''
    let tab04 = ''
    let tab05 = ''
    let tab06 = ''
    let tab07 = '' 

    coluna01 = document.getElementById("coluna01")
    coluna02 = document.getElementById("coluna02")
    coluna03 = document.getElementById("coluna03")
    coluna04 = document.getElementById("coluna04")
    coluna05 = document.getElementById("coluna05")
    coluna06 = document.getElementById("coluna06")
    coluna07 = document.getElementById("coluna07")

    array = [
        [],
        [],
        [],
        [],
        [],
        [],
        [],
    ]

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
                    if (tab01.length < 6) {
                        coluna.appendChild(bola01)
                        tab01 += '1'
                        player = "p2"
                        conditional(coluna, "p1")
                    }
                }
                if(coluna.id === "coluna02") {
                    if (tab02.length < 6) {
                        coluna.appendChild(bola01)
                        tab02 += '1'
                        player = "p2"
                        conditional(coluna, "p1")
                        
                    }
                }
                if(coluna.id === "coluna03") {
                    if (tab03.length < 6) {
                        coluna.appendChild(bola01)
                        tab03 += '1'
                        player = "p2"
                        conditional(coluna, "p1")
                    }
                }
                if(coluna.id === "coluna04") {
                    if (tab04.length < 6) {
                        coluna.appendChild(bola01)
                        tab04 += '1'
                        player = "p2"
                        conditional(coluna, "p1")
                    }
                }
                if(coluna.id === "coluna05") {
                    if (tab05.length < 6) {
                        coluna.appendChild(bola01)
                        tab05 += '1'
                        player = "p2"
                        conditional(coluna, "p1")
                    }

                }
                if(coluna.id === "coluna06") {
                    if (tab06.length < 6) {
                        coluna.appendChild(bola01)
                        tab06 += '1'
                        player = "p2"
                        conditional(coluna, "p1")
                    }
                }
                if(coluna.id === "coluna07") {
                    if (tab07.length < 6) {
                        coluna.appendChild(bola01)
                        tab07 += '1'
                        player = "p2"
                        conditional(coluna, "p1")
                    }
                }
            }

            else if(player === "p2"){
                if(coluna.id === "coluna01") {
                    if (tab01.length < 6) {
                        coluna.appendChild(bola02)
                        player = "p1"
                        tab01 += '2'
                        conditional(coluna, "p2")
                    }
                }
                if(coluna.id === "coluna02") {
                    if (tab02.length < 6) {
                        coluna.appendChild(bola02)
                        player = "p1"
                        tab02 += '2'
                        conditional(coluna, "p2")
                    }
                }
                if(coluna.id === "coluna03") {
                    if (tab03.length < 6) {
                        coluna.appendChild(bola02)
                        player = "p1"
                        tab03 += '2'
                        conditional(coluna, "p2")
                    }
                }
                if(coluna.id === "coluna04") {
                    if (tab04.length < 6) {
                        coluna.appendChild(bola02)
                        player = "p1"
                        tab04 += '2'
                        conditional(coluna, "p2")
                    }
                }
                if(coluna.id === "coluna05") {
                    if (tab05.length < 6) {
                        coluna.appendChild(bola02)
                        player = "p1"
                        tab05 += '2'
                        conditional(coluna, "p2")
                    }
                }
                if(coluna.id === "coluna06") {
                    if (tab06.length < 6) {
                        coluna.appendChild(bola02)
                        player = "p1"
                        tab06 += '2'
                        conditional(coluna, "p2")
                    }
                }
                if(coluna.id === "coluna07") {
                    if (tab07.length < 6) {
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

        
        vitoriaTeste(posicaoX,posicaoY)


    })

    // 

 



 

}