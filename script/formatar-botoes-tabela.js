import { criarElemento } from "./criar-elemento.js"

const divElementos = document.querySelector('.conteudo-tabela-elemento')

export function formatarBotoes() {
    const quebraDeLinha = criarElemento('div', 'quebra')
    const elementoHistoria = criarElementoHistoria()
    const seta1 = criarElemento('div', 'seta1', '57-71')
    const seta2 = criarElemento('div', 'seta2', '89-103')
    const listaDeBtns = divElementos.querySelectorAll('button')
    const spanGrupoPeriodo = criarElemento('span', 'grupo-periodo', '<p>grupo <i class="fa-solid fa-arrow-right"></i></p><p>periodo <i class="fa-solid fa-arrow-down"></i></p>')
    const lantanideos = criarElemento('span', 'lantanoides', 'lantanideos <i class="fa-solid fa-arrow-right"></i>')
    const actinoides = criarElemento('span', 'actinoides', 'actinoides <i class="fa-solid fa-arrow-right"></i>')

    seta1.setAttribute('style', 'grid-column: 4/5; grid-row: 7/11')
    seta2.setAttribute('style', 'grid-column: 4/5; grid-row: 8/12')
    spanGrupoPeriodo.setAttribute('style', 'grid-column: 1/2; grid-row: 1/2;')
    lantanideos.setAttribute('style', 'grid-column: 1/3; grid-row: 10/11;')
    actinoides.setAttribute('style', 'grid-column: 1/4; grid-row: 11/12;')
    elementoHistoria.setAttribute('style', 'grid-column: 4/14; grid-row: 2/5;')

    const grupo = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18]
    grupo.forEach(item => {
        const grupo = criarElemento('p', `grupo`, item)
        grupo.setAttribute('style', 'grid-row: 1/2')
        divElementos.appendChild(grupo)
    })

    const periodo = [1, 2, 3, 4, 5, 6, 7]

    for (let i = 0; i < periodo.length; i++) {
        const elementoPeriodo = criarElemento('p', `periodo`, periodo[i])
        elementoPeriodo.setAttribute('style', `grid-column: 1/2; grid-row: ${i + 2}/${i + 3}`)
        divElementos.appendChild(elementoPeriodo)
    }

    const elemento2 = listaDeBtns[1]
    elemento2.style.gridColumn = '19/20'

    const elemento5 = listaDeBtns[4]
    elemento5.style.gridColumn = '14/15'

    const elemento13 = listaDeBtns[12]
    elemento13.style.gridColumn = '14/15'

    const elementos57_71 = []
    listaDeBtns.forEach((elemento, i) => {
        if (i > 55 && i < 71) {
            elementos57_71.push(elemento)
        }
    })

    const arrayGridCollunm = [
        '5/6', '6/7', '7/8', '8/9', '9/10', '10/11', '11/12', '12/13', '13/14', '14/15', '15/16', '16/17', '17/18', '18/19', '19/20'
    ]
    elementos57_71.forEach((elemento, i) => {
        elemento.style.gridRow = '10/11'
        elemento.style.gridColumn = arrayGridCollunm[i]
    })

    const elemento72 = listaDeBtns[71]
    elemento72.style.gridColumn = '5/6'

    const elementos89_103 = []
    listaDeBtns.forEach((elemento, i) => {
        if (i > 87 && i < 103) {
            elementos89_103.push(elemento)
        }
    })
    elementos89_103.forEach((elemento, i) => {
        elemento.style.gridRow = '11/12'
        elemento.style.gridColumn = arrayGridCollunm[i]
    })

    const elemento104 = listaDeBtns[103]
    elemento104.style.gridColumn = '5/6'

    divElementos.appendChild(spanGrupoPeriodo)
    divElementos.appendChild(lantanideos)
    divElementos.appendChild(actinoides)
    divElementos.appendChild(quebraDeLinha)
    divElementos.appendChild(elementoHistoria)
    divElementos.appendChild(seta1)
    divElementos.appendChild(seta2)
}

function criarElementoHistoria() {
    const containerHistoria = criarElemento('div', 'conteudo-tabela-elemento-historia')
    const titulo = criarElemento('h3', 'conteudo-tabela-elemento-historia-titulo', 'História')
    const tituloElemento = criarElemento('h4', 'conteudo-tabela-elemento-historia-titulo-elemento')
    const texto = criarElemento('p', 'conteudo-tabela-elemento-historia-texto')
    const containerEletrons = criarElemento('div', 'container-eletrons')


    containerHistoria.appendChild(titulo)
    containerHistoria.appendChild(texto)
    containerHistoria.appendChild(tituloElemento)
    containerHistoria.appendChild(containerEletrons)
    return containerHistoria
}