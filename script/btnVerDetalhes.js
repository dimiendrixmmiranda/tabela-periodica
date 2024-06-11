const btnVerDetalhes = document.querySelector('#btnVerDetalhes')
const visorMaisInformacoes = document.querySelector('.visor-mais-informacoes')

function toggleBtnVerDetalhes() {
    btnVerDetalhes.addEventListener('click', (e) => {
        e.preventDefault()
        e.target.classList.toggle('active')

        if (e.target.classList.contains('active')) {
            visorMaisInformacoes.style.display = 'grid'
        } else {
            visorMaisInformacoes.style.display = 'none'
        }
    })
}

toggleBtnVerDetalhes()