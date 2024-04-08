const divElementos = document.querySelector('.elementos')

export function criarBotao(elemento) {
    const button = document.createElement('button')
    const numeroAtomico = document.createElement('span')
    numeroAtomico.innerHTML = elemento.numeroAtomico
    button.innerHTML = elemento.sigla
    button.dataset.categoria = elemento.categoria
    button.dataset.elemento = elemento.nome
    button.appendChild(numeroAtomico)
    divElementos.appendChild(button)
}