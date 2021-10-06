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
                }
            }
            if(coluna.id === "coluna02") {
                if (tab02.length < 7) {
                    coluna.appendChild(bola01)
                    tab02 += '1'
                    player = "p2"
                }
            }
            if(coluna.id === "coluna03") {
                if (tab03.length < 7) {
                    coluna.appendChild(bola01)
                    tab03 += '1'
                    player = "p2"
                }
            }
            if(coluna.id === "coluna04") {
                if (tab04.length < 7) {
                    coluna.appendChild(bola01)
                    tab04 += '1'
                    player = "p2"
                }
            }
            if(coluna.id === "coluna05") {
                if (tab05.length < 7) {
                    coluna.appendChild(bola01)
                    tab05 += '1'
                    player = "p2"
                }

            }
            if(coluna.id === "coluna06") {
                if (tab06.length < 7) {
                    coluna.appendChild(bola01)
                    tab06 += '1'
                    player = "p2"
                }
            }
            if(coluna.id === "coluna07") {
                if (tab07.length < 7) {
                    coluna.appendChild(bola01)
                    tab07 += '1'
                    player = "p2"
                }
            }
        }

        else if(player === "p2"){
            if(coluna.id === "coluna01") {
                if (tab01.length < 7) {
                    coluna.appendChild(bola02)
                    player = "p1"
                    tab01 += '2'
                }
            }
            if(coluna.id === "coluna02") {
                if (tab02.length < 7) {
                    coluna.appendChild(bola02)
                    player = "p1"
                    tab02 += '2'
                    
                    console.log('Largura: ' + tab01.length)
                }
            }
            if(coluna.id === "coluna03") {
                if (tab03.length < 7) {
                    coluna.appendChild(bola02)
                    player = "p1"
                    tab03 += '2'
                }
            }
            if(coluna.id === "coluna04") {
                if (tab04.length < 7) {
                    coluna.appendChild(bola02)
                    player = "p1"
                    tab04 += '2'
                }
            }
            if(coluna.id === "coluna05") {
                if (tab05.length < 7) {
                    coluna.appendChild(bola02)
                    player = "p1"
                    tab05 += '2'
                }
            }
            if(coluna.id === "coluna06") {
                if (tab06.length < 7) {
                    coluna.appendChild(bola02)
                    player = "p1"
                    tab06 += '2'
                }
            }
            if(coluna.id === "coluna07") {
                if (tab07.length < 7) {
                    coluna.appendChild(bola02)
                    player = "p1"
                    tab07 += '2'
                }
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