const secPlayers = document.createElement('section')
document.body.appendChild(secPlayers)
secPlayers.setAttribute('class', 'secPlayer')

const player1Button = document.createElement('button')
secPlayers.appendChild(player1Button)
player1Button.classList.add('playersButtons','player1Button')
player1Button.innerText = 'PLAYER 1'


const player2Button = document.createElement('button')
secPlayers.appendChild(player2Button)
player2Button.classList.add('playersButtons','player2Button')
player2Button.innerText = 'PLAYER 2'

const secCircle = document.createElement('section')
document.body.appendChild(secCircle)
secCircle.setAttribute('class','secCircle')

const circlePlayer1 = document.createElement('div')
const circlePlayer2 = document.createElement('div')







function initial_table(){
    let column = 7;
    let row = 6;

    const table = document.createElement("ul")
    const secao = document.createElement("section")
    document.body.appendChild(secao)


    secao.appendChild(table)
    
    
     
    for(let i = 0; i < column; i++ ){
        const coluna = document.createElement("li")

        
        for(let a = 0; a < row; a++){
            const linha = document.createElement("div")
            linha.classList.add("tupla","tupla"+i+a)


 
            // linha.innerHTML = "teste"

            coluna.appendChild(linha)
        }

        coluna.classList.add("column","coluna"+(i+1))
        table.appendChild(coluna)
        
        
    }
}
initial_table()





// PABLO


// let tableGame = [[],[],[],[],[],[],[],]

let tab01 = []
let tab02 = []
let tab03 = []
let tab04 = []
let tab05 = []
let tab06 = []
let tab07 = []

// let player1Games = 21
// let player2Games = 21

// console.log(player1Games)

player1Button.addEventListener('click', player1)

function player1() {
    
    let checkExistsCirclePlayer2 = !!document.getElementsByClassName("circlePlayer2").length;
        console.log(checkExistsCirclePlayer2)

    if (checkExistsCirclePlayer2 === true) {

        secCircle.removeChild(circlePlayer2)
        circlePlayer1.setAttribute('class','circlePlayer1')
        secCircle.appendChild(circlePlayer1)
    }


    circlePlayer1.setAttribute('class','circlePlayer1')
    secCircle.appendChild(circlePlayer1)
    
    // console.log(secCircle)
    
    let circleStartTop = 0
    let circleStartLeft = circlePlayer1.getBoundingClientRect().left

    document.addEventListener('keydown', (event) => {
        const keyName = event.key

        if (keyName == 'ArrowLeft') {
            console.log('Left')
            circleStartLeft -= 51.95
            circlePlayer1.style.left = circleStartLeft + 'px'
            let positionTopNow = circlePlayer1.getBoundingClientRect().top
            let positionLeftNow = circlePlayer1.getBoundingClientRect().left
            console.log('Top: ' + positionTopNow)
            console.log('Left: ' + positionLeftNow)
        }

        if (keyName == 'ArrowRight') {
            console.log('Rigth')
            circleStartLeft += 51.95
            circlePlayer1.style.left = circleStartLeft + 'px'
            let positionTopNow = circlePlayer1.getBoundingClientRect().top
            let positionLeftNow = circlePlayer1.getBoundingClientRect().left
            console.log('Top: ' + positionTopNow)
            console.log('Left: ' + positionLeftNow)
        }

        if (keyName == 'Enter') {
            console.log('Enter')
            let positionTopNow = circlePlayer1.getBoundingClientRect().top
            let positionLeftNow = circlePlayer1.getBoundingClientRect().left
            
            
            
            
            // COLUNA 1
            if (positionTopNow === 119.99999237060547 && positionLeftNow === 691.8607788085938) {
                console.log('Funciona')
                // tableGame[0].push('R')
                // tableGame[0] += 'R'
                tab01.push('R')
                
                // tab01 += 'R'
                // console.log(tableGame)
                console.log('TABELA 1: ' + tab01)
            }




            // COLUNA 2
            if (positionTopNow === 119.99999237060547 && positionLeftNow === 743.8067626953125) {
                console.log('Funciona')
                // tableGame[1].push('R')
                tab02.push('R')
                // tab02 += 'R'

                // console.log(tableGame)
                console.log('TABELA 2: ' + tab02)
            }
            // COLUNA 3
            if (positionTopNow === 119.99999237060547 && positionLeftNow === 795.7528076171875) {
                console.log('Funciona')
                // tableGame[2].push('R')
                // tab03 += 'R'
                tab03.push('R')

                // console.log(tableGame)
                console.log('TABELA 3: ' + tab03)
            }
            // COLUNA 4
            if (positionTopNow === 119.99999237060547 && positionLeftNow === 847.6988525390625) {
                console.log('Funciona')
                // tableGame[3].push('R')
                // tab04 += 'R'
                tab04.push('R')

                // console.log(tableGame)
                console.log('TABELA 4: ' + tab04)
            }
            // COLUNA 5
            if (positionTopNow === 119.99999237060547 && positionLeftNow === 899.6590576171875) {
                console.log('Funciona')
                // tableGame[4].push('R')
                // tab05 += 'R'
                tab05.push('R')

                // console.log(tableGame)
                console.log('TABELA 5: ' + tab05)
            }
            // COLUNA 6
            if (positionTopNow === 119.99999237060547 && positionLeftNow === 951.6051025390625) {
                console.log('Funciona')
                // tableGame[5].push('R')
                // tab06 += 'R'
                tab06.push('R')

                // console.log(tableGame)
                console.log('TABELA 6: ' + tab06)
            }
            // COLUNA 7
            if (positionTopNow === 119.99999237060547 && positionLeftNow === 1003.5510864257812) {
                console.log('Funciona')
                // tableGame[6].push('R')
                // tab07 += 'R'
                tab07.push('R')
                

                // console.log(tableGame)
                console.log('TABELA 7: ' + tab07)
            }
        }
    })
}



player2Button.addEventListener('click', player2)

function player2() {
    

    let checkExistsCirclePlayer1 = !!document.getElementsByClassName("circlePlayer1").length;
    console.log(checkExistsCirclePlayer1)

    if (checkExistsCirclePlayer1 === true) {

        secCircle.removeChild(circlePlayer1)
        circlePlayer2.setAttribute('class','circlePlayer2')
        secCircle.appendChild(circlePlayer2)
    }


    circlePlayer1.setAttribute('class','circlePlayer2')
    secCircle.appendChild(circlePlayer2)


    let circleStartLeft = circlePlayer2.getBoundingClientRect().left

    document.addEventListener('keydown', (event) => {
        const keyName = event.key

        if (keyName == 'ArrowLeft') {
            console.log('Left')
            circleStartLeft -= 51.95
            circlePlayer2.style.left = circleStartLeft + 'px'
            let positionTopNow = circlePlayer2.getBoundingClientRect().top
            let positionLeftNow = circlePlayer2.getBoundingClientRect().left
            console.log('Top: ' + positionTopNow)
            console.log('Left: ' + positionLeftNow)
        }

        if (keyName == 'ArrowRight') {
            console.log('Rigth')
            circleStartLeft += 51.95
            circlePlayer2.style.left = circleStartLeft + 'px'
            let positionTopNow = circlePlayer2.getBoundingClientRect().top
            let positionLeftNow = circlePlayer2.getBoundingClientRect().left
            console.log('Top: ' + positionTopNow)
            console.log('Left: ' + positionLeftNow)
        }

        if (keyName == 'Enter') {
            console.log('Enter')
            let positionTopNow = circlePlayer2.getBoundingClientRect().top
            let positionLeftNow = circlePlayer2.getBoundingClientRect().left
            
            
            
            
            // COLUNA 1
            if (positionTopNow === 119.99999237060547 && positionLeftNow === 691.8607788085938) {
                // tableGame[0].push('B')
                // tab01 += 'B'
                tab01.push('B')
                // console.log(tableGame)
                console.log('TABELA 1: ' + tab01)
            }





            // COLUNA 2
            if (positionTopNow === 119.99999237060547 && positionLeftNow === 743.8067626953125) {
                // tableGame[1].push('B')
                // tab02 += 'B'
                tab02.push('B')
                // console.log(tableGame)
                console.log('TABELA 2: ' + tab02)
            }
            // COLUNA 3
            if (positionTopNow === 119.99999237060547 && positionLeftNow === 795.7528076171875) {
                // tableGame[2].push('B')
                // tab03 += 'B'
                tab03.push('B')

                // console.log(tableGame)
                console.log('TABELA 3: ' + tab03)
            }
            // COLUNA 4
            if (positionTopNow === 119.99999237060547 && positionLeftNow === 847.6988525390625) {
                // tableGame[3].push('B')
                // tab04 += 'B'
                tab04.push('B')

                // console.log(tableGame)
                console.log('TABELA 4: ' + tab04)
            }
            // COLUNA 5
            if (positionTopNow === 119.99999237060547 && positionLeftNow === 899.6590576171875) {
                // tableGame[4].push('B')
                // tab05 += 'B'
                tab05.push('B')

                // console.log(tableGame)
                console.log('TABELA 5: ' + tab05)
            }
            // COLUNA 6
            if (positionTopNow === 119.99999237060547 && positionLeftNow === 951.6051025390625) {
                // tableGame[5].push('B')
                // tab06 += 'B'
                tab06.push('B')

                // console.log(tableGame)
                console.log('TABELA 6: ' + tab06)
            }
            // COLUNA 7
            if (positionTopNow === 119.99999237060547 && positionLeftNow === 1003.5510864257812) {
                // tableGame[6].push('B')
                // tab07 += 'B'
                tab07.push('B')

                // console.log(tableGame)
                console.log('TABELA 7: ' + tab07)
            }
            // console.log(tab01)
            // console.log(tab02)
            // console.log(tab03)
            // console.log(tab04)
            // console.log(tab05)
            // console.log(tab06)
            // console.log(tab07)
        }



    })
}