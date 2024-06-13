const botaoMenuMobile = document.querySelector('#botaoMenuMobile')
const offcanvas = document.querySelector('#offcanvas')
const btnFecharOffcanvas = document.querySelector('#fecharOffcanvas')

botaoMenuMobile.addEventListener('click', (e) => {
    e.preventDefault()
    offcanvas.setAttribute('style', 'display: grid; left: 20%; transition: .6s ease;')
    btnFecharOffcanvas.addEventListener('click', (e) => {
        e.preventDefault()
        offcanvas.setAttribute('style', 'left: 100%; transition: .6s ease;')
    })
})