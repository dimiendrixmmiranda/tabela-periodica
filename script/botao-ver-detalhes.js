const botaoVerDetalhes = document.querySelector('#btnVerDetalhes')
const tabelaSecundaria = document.querySelector('#tabelaSecundaria')


botaoVerDetalhes.addEventListener('click', (e) => {
    e.preventDefault()
    const botao = e.target 
    if(botao.classList.contains('active')){
        console.log('tem')
        tabelaSecundaria.setAttribute('style', 'display: none;')
        botao.innerHTML = 'Ver mais detalhes <i class="fa-solid fa-arrow-turn-down"></i>'
        botao.classList.remove('active')
    }else{
        console.log('não tem')
        botao.classList.add('active')
        botao.innerHTML = 'Ver mais detalhes <i class="fa-solid fa-arrow-turn-up"></i>'
        tabelaSecundaria.setAttribute('style', 'display: grid;')
    }
})