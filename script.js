
    const body = document.getElementsByTagName('body')[0]
    const section = document.createElement('section')
    body.appendChild(section)
    section.classList.add('sec')
    section.setAttribute('id', 'sec')


    


const sec = document.getElementById("sec")

const bola01 = document.createElement("div")
const bola02 = document.createElement("div")

bola01.classList.add("player01")
bola02.classList.add("player02")

let player = "p1";

sec.addEventListener("click", (evt)=>{

    const bola01 = document.createElement("div")
    const bola02 = document.createElement("div")
    
    bola01.classList.add("player01")
    bola02.classList.add("player02")
    
    let coluna = evt.target;

    if(coluna.classList[0] === "coluna"){
    if(player === "p1"){
    coluna.appendChild(bola01)
    player = "p2"

    }

    else if(player === "p2"){
        coluna.appendChild(bola02)
        player = "p1"
    }


     }



})