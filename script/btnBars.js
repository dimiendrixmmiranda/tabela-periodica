export function btnBars(linkHistoria, linkExercicios, linkImprimirTabela, linkCompararElementos) {
    const btnBars = document.querySelector('#btn-bars')
    const offcanvas = criarOffCanvas(linkHistoria, linkExercicios, linkImprimirTabela, linkCompararElementos)
    btnBars.addEventListener('click', (e) => {
        document.body.appendChild(offcanvas)
    })
}

function criarOffCanvas(linkHistoria, linkExercicios, linkImprimirTabela, linkCompararElementos) {
    const offcanvas = document.createElement('div')
    offcanvas.classList.add('btn-bars-offcanvas')

    const titulo = document.createElement('h3')
    titulo.innerHTML = 'Menu'
    titulo.classList.add('btn-bars-offcanvas-titulo')

    const btnFechar = document.createElement('button')
    btnFechar.innerHTML = '<i class="fa-solid fa-xmark"></i>'
    btnFechar.classList.add('btn-bars-offcanvas-fechar')
    btnFechar.addEventListener('click', (e) => {
        e.preventDefault()
        e.target.closest('.btn-bars-offcanvas').remove()
    })

    const menu = document.createElement('ul')
    menu.classList.add('btn-bars-offcanvas-lista')
    // ./pages/historiaTabelaPeriodica.html
    const historia = criarItemMenu('../assets/imgs/icone-historia.png', 'Historia', linkHistoria)
    const exercicios = criarItemMenu('../assets/imgs/icone-exercicios.png', 'Exercícios', linkExercicios)
    const imprimirTabela = criarItemMenu('../assets/imgs/icone-imprimir.png', 'Imprimir Tabela', linkImprimirTabela)
    const compararElementos = criarItemMenu('../assets/imgs/icone-comparar.png', 'Comparar Elementos', linkCompararElementos)

    const containerToggleMudarModo = document.createElement('div')
    containerToggleMudarModo.classList.add('btn-bars-offcanvas-toggle')

    const toggleMudarModo = document.createElement('input')
    toggleMudarModo.type = 'checkbox'
    toggleMudarModo.name = 'alterarModo'
    toggleMudarModo.id = 'alterarModo'

    const tituloToggleMudarModo = document.createElement('h3')
    tituloToggleMudarModo.innerHTML = 'Alterar Modo'

    const reportarErro = document.createElement('a')
    reportarErro.classList.add('btn-bars-offcanvas-erro')
    reportarErro.href = 'https://wa.me/5543988252886?text=Reportar+erro+no+projeto+Tabela+Peri%C3%B3dica'
    reportarErro.innerHTML = `Reportar erro! <i class="fa-solid fa-triangle-exclamation"></i>`

    containerToggleMudarModo.appendChild(toggleMudarModo)
    containerToggleMudarModo.appendChild(tituloToggleMudarModo)

    menu.appendChild(historia)
    menu.appendChild(exercicios)
    menu.appendChild(imprimirTabela)
    menu.appendChild(compararElementos)
    
    offcanvas.appendChild(btnFechar)
    offcanvas.appendChild(titulo)
    offcanvas.appendChild(menu)
    offcanvas.appendChild(containerToggleMudarModo)
    offcanvas.appendChild(reportarErro)

    return offcanvas
}

function criarItemMenu(url, nomeItemMenu, linkDaPagina){
    const itemMenu = document.createElement('li')
    itemMenu.classList.add('btn-bars-offcanvas-lista-item')

    const link = document.createElement('a')
    link.setAttribute('href', linkDaPagina)

    const img = document.createElement('img')
    img.setAttribute('src', url)

    const p = document.createElement('p')
    p.innerHTML = nomeItemMenu

    link.appendChild(img)
    link.appendChild(p)

    itemMenu.appendChild(link)
    return itemMenu
}