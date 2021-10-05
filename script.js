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
        // const teste = coluna.classList[1]
        // console.log(teste)
        if(player === "p1"){
            coluna.appendChild(bola01)
            player = "p2"
            if(coluna.id === "coluna01") {
                tab01 += '1'
            }
            if(coluna.id === "coluna02") {
                tab02 += '1'
            }
            if(coluna.id === "coluna03") {
                tab03 += '1'
            }
            if(coluna.id === "coluna04") {
                tab04 += '1'
            }
            if(coluna.id === "coluna05") {
                tab05 += '1'
            }
            if(coluna.id === "coluna06") {
                tab06 += '1'
            }
            if(coluna.id === "coluna07") {
                tab07 += '1'
            }

        }

        else if(player === "p2"){
            coluna.appendChild(bola02)
            player = "p1"
            if(coluna.id === "coluna01") {
                tab01 += '2'
            }
            if(coluna.id === "coluna02") {
                tab02 += '2'
            }
            if(coluna.id === "coluna03") {
                tab03 += '2'
            }
            if(coluna.id === "coluna04") {
                tab04 += '2'
            }
            if(coluna.id === "coluna05") {
                tab05 += '2'
            }
            if(coluna.id === "coluna06") {
                tab06 += '2'
            }
            if(coluna.id === "coluna07") {
                tab07 += '2'
            }
        }
    }
    console.log(tab01)
    console.log(tab02)
    console.log(tab03)
    console.log(tab04)
    console.log(tab05)
    console.log(tab06)
    console.log(tab07)
})

function placar(){
    
}