const btnVerDetalhes = document.querySelector('#btnVerDetalhes')
const visorMaisInformacoes = document.querySelector('.visor-mais-informacoes')

export function toggleBtnVerDetalhes(){
    btnVerDetalhes.addEventListener('click', (e) => {
        e.preventDefault()
        e.target.classList.toggle('active')

        if(e.target.classList.contains('active')){
            visorMaisInformacoes.style.display = 'grid'
            console.log('tem que deixar display grid')
        }else{
            visorMaisInformacoes.style.display = 'none'
            console.log('tem que deixar display none')
        }
    })
}