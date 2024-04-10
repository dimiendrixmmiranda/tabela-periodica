import { tabelaPeriodica } from "./tabelaPeriodica.js"
const dadosDoVisor = document.querySelector('.visor')

export function selecionarPrimeiroElemento(){
    const nome = dadosDoVisor.querySelector('#nomeElemento').innerHTML = tabelaPeriodica[0].nome
    const simbolo = dadosDoVisor.querySelectorAll('.simboloElemento').forEach(elemento => elemento.innerHTML = tabelaPeriodica[0].sigla)
    const numeroAtomico = dadosDoVisor.querySelector('.numeroAtomico').innerHTML = tabelaPeriodica[0].numeroAtomico
    const massaAtomica = dadosDoVisor.querySelectorAll('.massaAtomicaElemento').forEach(elemento => {
        if (typeof tabelaPeriodica[0].massaAtomica == 'string') {
            elemento.innerHTML = tabelaPeriodica[0].massaAtomica
        } else {
            elemento.innerHTML = (tabelaPeriodica[0].massaAtomica).toFixed(3)
        }
    })
    const configuracaoEletronica = dadosDoVisor.querySelector('.configuracaoEletronica').innerHTML = tabelaPeriodica[0].configuracaoEletronica

    const grupoPeriodo = document.querySelectorAll('.grupoPeriodo').forEach(elemento => elemento.innerHTML = `Grupo ${tabelaPeriodica[0].grupo}, Período ${tabelaPeriodica[0].periodo}`)
    const raioAtomico = document.querySelectorAll('.raioAtomico').forEach(elemento => elemento.innerHTML = `${tabelaPeriodica[0].raioAtomico} pm`)
    const estadoNatural = document.querySelectorAll('.estadoNatural').forEach(elemento => elemento.innerHTML = tabelaPeriodica[0].estadoNatural)
    const pontoDeFusao = document.querySelectorAll('.pontoDeFusao').forEach(elemento => elemento.innerHTML = tabelaPeriodica[0].pontoDeFusao)
    const pontoDeEbulicao = document.querySelectorAll('.pontoDeEbulicao').forEach(elemento => elemento.innerHTML = tabelaPeriodica[0].pontoDeEbulicao)
    const densidade = document.querySelectorAll('.densidade').forEach(elemento => elemento.innerHTML = tabelaPeriodica[0].densidade)
    const eletronegatividade = document.querySelectorAll('.eletronegatividade').forEach(elemento => {
        if (tabelaPeriodica[0].eletronegatividade == null) {
            elemento.innerHTML = 'Não disponivel'
        } else {
            elemento.innerHTML = tabelaPeriodica[0].eletronegatividade
        }
    })
    const aplicacoesComuns = document.querySelectorAll('.aplicacoesComuns').forEach(elemento => elemento.innerHTML = tabelaPeriodica[0].aplicacoesComuns)
}