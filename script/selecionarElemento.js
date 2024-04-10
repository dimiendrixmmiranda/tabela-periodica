import { tabelaPeriodica } from "./tabelaPeriodica.js"
const dadosDoVisor = document.querySelector('.visor')

export function selecionarElemento(btn) {
    btn.addEventListener('click', (e) => {
        e.preventDefault()
        console.log(btn)
        const corElemento = e.target.style.backgroundColor
        const nomeElemento = btn.dataset.elemento
        const dadosDoElemento = tabelaPeriodica.filter(elemento => elemento.nome == nomeElemento)
        substituirElemento(dadosDoElemento[0], corElemento)
    })
}

export function substituirElemento(dadosDoElemento, corElemento) {
    // parte da cor
    const cor = document.querySelectorAll('.cor').forEach(elemento => elemento.style.backgroundColor = corElemento)

    const nome = dadosDoVisor.querySelector('#nomeElemento').innerHTML = dadosDoElemento.nome
    const simbolo = dadosDoVisor.querySelectorAll('.simboloElemento').forEach(elemento => elemento.innerHTML = dadosDoElemento.sigla)
    const numeroAtomico = dadosDoVisor.querySelector('.numeroAtomico').innerHTML = dadosDoElemento.numeroAtomico
    const massaAtomica = dadosDoVisor.querySelectorAll('.massaAtomicaElemento').forEach(elemento => {
        if (typeof dadosDoElemento.massaAtomica == 'string') {
            elemento.innerHTML = dadosDoElemento.massaAtomica
        } else {
            elemento.innerHTML = (dadosDoElemento.massaAtomica).toFixed(3)
        }
    })
    const configuracaoEletronica = dadosDoVisor.querySelector('.configuracaoEletronica').innerHTML = dadosDoElemento.configuracaoEletronica

    const grupoPeriodo = document.querySelectorAll('.grupoPeriodo').forEach(elemento => elemento.innerHTML = `Grupo ${dadosDoElemento.grupo}, Período ${dadosDoElemento.periodo}`)
    const raioAtomico = document.querySelectorAll('.raioAtomico').forEach(elemento => {
        if(dadosDoElemento.raioAtomico === null){
            elemento.innerHTML = 'Desconhecido'
        }else{
            elemento.innerHTML = `${dadosDoElemento.raioAtomico} pm`
        }
    })
    const estadoNatural = document.querySelectorAll('.estadoNatural').forEach(elemento => elemento.innerHTML = dadosDoElemento.estadoNatural)
    const pontoDeFusao = document.querySelectorAll('.pontoDeFusao').forEach(elemento => {
        if(dadosDoElemento.pontoDeFusao === null){
            elemento.innerHTML = `Desconhecido`
        }else{
            elemento.innerHTML = `${dadosDoElemento.pontoDeFusao} ºC`
        }
    })
    const pontoDeEbulicao = document.querySelectorAll('.pontoDeEbulicao').forEach(elemento => {
        if(dadosDoElemento.pontoDeEbulicao == null){
            elemento.innerHTML = `Desconhecido`
        }else{
            elemento.innerHTML = `${dadosDoElemento.pontoDeEbulicao} ºC`
        }
    })
    const densidade = document.querySelectorAll('.densidade').forEach(elemento => elemento.innerHTML = `${dadosDoElemento.densidade} g/cm³`)
    const eletronegatividade = document.querySelectorAll('.eletronegatividade').forEach(elemento => {
        if (dadosDoElemento.eletronegatividade === null) {
            elemento.innerHTML = 'Não disponivel'
        } else {
            elemento.innerHTML = `${dadosDoElemento.eletronegatividade}`
        }
    })
    const aplicacoesComuns = document.querySelectorAll('.aplicacoesComuns').forEach(elemento => elemento.innerHTML = dadosDoElemento.aplicacoesComuns)
}