import { tabelaPeriodica } from "./tabelaPeriodica.js"
const dadosDoVisor = document.querySelector('.visor')

export function selecionarElemento(btn) {
    btn.addEventListener('click', (e) => {
        e.preventDefault()
        const corElemento = e.target.style.backgroundColor
        const nomeElemento = btn.dataset.elemento
        const dadosDoElemento = tabelaPeriodica.filter(elemento => elemento.nome == nomeElemento)
        substituirElemento(dadosDoElemento[0], corElemento)
    })
}

function substituirElemento(dadosDoElemento, corElemento) {
    const cor = document.querySelectorAll('.cor').forEach(elemento => elemento.style.backgroundColor = corElemento)
    const nome = dadosDoVisor.querySelector('#nomeElemento').innerHTML = dadosDoElemento.nome
    const simbolo = dadosDoVisor.querySelectorAll('.simboloElemento').forEach(elemento => elemento.innerHTML = dadosDoElemento.sigla)
    const numeroAtomico = dadosDoVisor.querySelector('.numeroAtomico').innerHTML = dadosDoElemento.numeroAtomico
    const massaAtomica = dadosDoVisor.querySelectorAll('.massaAtomicaElemento').forEach(elemento => elemento.innerHTML = (dadosDoElemento.massaAtomica).toFixed(3))
    const configuracaoEletronica = dadosDoVisor.querySelector('.configuracaoEletronica').innerHTML = dadosDoElemento.configuracaoEletronica

    const grupoPeriodo = document.querySelectorAll('.grupoPeriodo').forEach(elemento => elemento.innerHTML = `Grupo ${dadosDoElemento.grupo}, Período ${dadosDoElemento.periodo}`)
    const raioAtomico = document.querySelectorAll('.raioAtomico').forEach(elemento => elemento.innerHTML = `${dadosDoElemento.raioAtomico} pm`)
    const estadoNatural = document.querySelectorAll('.estadoNatural').forEach(elemento => elemento.innerHTML = dadosDoElemento.estadoNatural)

    // FALTA COLOCAR OS OUTROS DADOS E REVER OS MESMOS POIS TEM ALGUMAS DIVERGENCIAS ENTRE ELES
}