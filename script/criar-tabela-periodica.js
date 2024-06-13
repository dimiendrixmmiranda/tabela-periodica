import { criarElemento } from "./criar-elemento.js"
import { formatarBotoes } from "./formatar-botoes-tabela.js"
import { tabelaPeriodica } from "./tabelaPeriodica.js"

const conteudoElementosTabela = document.querySelector('#conteudoElementosTabela')

tabelaPeriodica.forEach(elementoDaTabela => {
    const elemento = criarBotaoElemento(elementoDaTabela)
    conteudoElementosTabela.appendChild(elemento)
})

const listaDeBotoesElemento = conteudoElementosTabela.querySelectorAll('button') 
formatarBotoes(listaDeBotoesElemento)


function criarBotaoElemento(elemento) {
    const button = document.createElement('button')
    const numeroAtomico = document.createElement('span')
    numeroAtomico.innerHTML = elemento.numeroAtomico
    numeroAtomico.classList.add('numero-atomico-elemento')

    const nomeElemento = document.createElement('span')
    nomeElemento.innerHTML = elemento.nome
    nomeElemento.classList.add('nome-elemento')
    nomeElemento.classList.add('cor')

    button.innerHTML = elemento.sigla
    button.dataset.categoria = elemento.categoria
    button.dataset.elemento = elemento.nome

    if (elemento.radioativo === true) {
        const divRadioativo = document.createElement('div')
        divRadioativo.classList.add('radioativo')
        button.appendChild(divRadioativo)
    }

    button.appendChild(numeroAtomico)
    button.appendChild(nomeElemento)
    return button
}