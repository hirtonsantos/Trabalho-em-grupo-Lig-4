

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
            linha.classList.add("tupla","tupla"+a)


 
            linha.innerHTML = "teste"

            coluna.appendChild(linha)
        }

        coluna.classList.add("column","coluna"+(i+1))
        table.appendChild(coluna)
        
        
    }
}
initial_table()