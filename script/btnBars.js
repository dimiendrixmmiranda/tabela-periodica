export function btnBars() {
    const btnBars = document.querySelector('#btn-bars')
    const offcanvas = criarOffCanvas()
    btnBars.addEventListener('click', (e) => {
        document.body.appendChild(offcanvas)
    })
}

function criarOffCanvas() {
    const offcanvas = document.createElement('div')
    offcanvas.classList.add('btn-bars-offcanvas')

    const btnExcluir = document.createElement('button')
    btnExcluir.innerHTML = 'x'
    btnExcluir.addEventListener('click', (e) => {
        e.preventDefault()
        e.target.closest('.btn-bars-offcanvas').remove()
    })

    const menu = document.createElement('ul')
    menu.classList.add('btn-bars-offcanvas-lista')

    const historia = criarItemMenu('../assets/imgs/icone-historia.png', 'Historia')
    
    offcanvas.appendChild(btnExcluir)
    offcanvas.appendChild(menu)
    offcanvas.appendChild(historia)

    return offcanvas
}

function criarItemMenu(url, nomeItemMenu){
    const itemMenu = document.createElement('li')
    itemMenu.classList.add('btn-bars-offcanvas-lista')

    const img = document.createElement('img')
    img.setAttribute('src', url)

    const p = document.createElement('p')
    p.innerHTML = nomeItemMenu

    itemMenu.appendChild(img)
    itemMenu.appendChild(p)
    return itemMenu
}