const divElementos = document.querySelector('.elementos')

export function criarBotao(elemento) {
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

    if(elemento.radioativo === true){
        const divRadioativo = document.createElement('div')
        divRadioativo.classList.add('radioativo')
        button.appendChild(divRadioativo)
    }

    button.appendChild(numeroAtomico)
    button.appendChild(nomeElemento)
    divElementos.appendChild(button)
}