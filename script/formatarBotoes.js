const divElementos = document.querySelector('.elementos')

export function formatarBotoes() { 
    const quebraDeLinha = criarElemento('div', 'quebra')
    const seta1 = criarElemento('div', 'seta1', '57-71')
    const seta2 = criarElemento('div', 'seta2', '89-103')

    const listaDeBtns = divElementos.querySelectorAll('button')
    const elemento2 = listaDeBtns[1]
    elemento2.style.gridColumn = '18/19'

    const elemento5 = listaDeBtns[4]
    elemento5.style.gridColumn = '13/14'

    const elemento13 = listaDeBtns[12]
    elemento13.style.gridColumn = '13/14'

    const elementos57_71 = []
    listaDeBtns.forEach((elemento, i) => {
        if (i > 55 && i < 71) {
            elementos57_71.push(elemento)
        }
    })

    const arrayGridCollunm = [
        '4/5', '5/6', '6/7', '7/8', '8/9', '9/10', '10/11', '11/12', '12/13', '13/14', '14/15', '15/16', '16/17', '17/18', '18/19'
    ]
    elementos57_71.forEach((elemento, i) => {
        elemento.style.gridRow = '9/10'
        elemento.style.gridColumn = arrayGridCollunm[i]
    })

    const elemento72 = listaDeBtns[71]
    elemento72.style.gridColumn = '4/5'

    const elementos89_103 = []
    listaDeBtns.forEach((elemento, i) => {
        if (i > 87 && i < 103) {
            elementos89_103.push(elemento)
        }
    })
    elementos89_103.forEach((elemento, i) => {
        elemento.style.gridRow = '10/11'
        elemento.style.gridColumn = arrayGridCollunm[i]
    })

    const elemento104 = listaDeBtns[103]
    elemento104.style.gridColumn = '4/5'

    divElementos.appendChild(quebraDeLinha)
    divElementos.appendChild(seta1)
    divElementos.appendChild(seta2)
}

function criarElemento(tag, classe, texto = ''){
    const elemento = document.createElement(tag)
    elemento.classList.add(classe)
    elemento.innerHTML = texto
    return elemento
}