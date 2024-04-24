import { definirElementoSelecionado, selecionarElementoDom } from "./selecionarPrimeiroElemento.js"
import { tabelaPeriodica } from "./tabelaPeriodica.js"
const dadosDoVisor = document.querySelector('.visor')

export function selecionarElemento(btn) {
    btn.addEventListener('click', (e) => {
        e.preventDefault()
        const nomeElemento = btn.dataset.elemento
        const dadosDoElemento = tabelaPeriodica.filter(elemento => elemento.nome == nomeElemento)
        substituirElemento(dadosDoElemento[0])
        
        const corElemento = e.target.style.backgroundColor
        document.querySelectorAll('.cor').forEach(elementoCor => elementoCor.style.backgroundColor = corElemento)
    })
}

export function substituirElemento(dadosDoElemento) {
    // parte da cor
    // document.querySelectorAll('.cor').forEach(elemento => elemento.style.backgroundColor = corElemento)

    selecionarElementoDom('#nomeElemento', dadosDoElemento.nome)
    selecionarElementoDom('.simboloElemento', dadosDoElemento.sigla)
    selecionarElementoDom('.numeroAtomico', dadosDoElemento.numeroAtomico)
    selecionarElementoDom('.massaAtomicaElemento', parseFloat(dadosDoElemento.massaAtomica).toFixed(3))
    selecionarElementoDom('.configuracaoEletronica', dadosDoElemento.configuracaoEletronica)
    selecionarElementoDom('.grupo', dadosDoElemento.grupo)
    selecionarElementoDom('.periodo', dadosDoElemento.periodo)
    selecionarElementoDom('.raioAtomico', dadosDoElemento.raioAtomico, 'pm')
    selecionarElementoDom('.estadoNatural', dadosDoElemento.estadoNatural)
    selecionarElementoDom('.pontoDeFusao', dadosDoElemento.pontoDeFusao, 'ºC')
    selecionarElementoDom('.pontoDeEbulicao', dadosDoElemento.pontoDeEbulicao, 'ºC')
    selecionarElementoDom('.densidade', dadosDoElemento.densidade, 'g/cm³')
    selecionarElementoDom('.eletronegatividade', dadosDoElemento.eletronegatividade, '(escala de Pauling)')
    selecionarElementoDom('.aplicacoesComuns', dadosDoElemento.aplicacoesComuns)
    selecionarElementoDom('.abundanciaTerra', dadosDoElemento.abundanciaNaCrostaTerrestre, '%')
    selecionarElementoDom('.abundanciaUniverso', dadosDoElemento.abundanciaNoUniverso, '%')
    selecionarElementoDom('.raioAtomico', dadosDoElemento.raioAtomico, 'pm')
    selecionarElementoDom('.raioCovalente', dadosDoElemento.raioCovalente, 'pm')
    selecionarElementoDom('.etalpiaDeFusao', dadosDoElemento.etalpiaDeFusao, 'kJ/mol')
    selecionarElementoDom('.etalpiaDeVaporizacao', dadosDoElemento.etalpiaDeVaporizacao, 'kJ/mol')
    selecionarElementoDom('.calorEspecifico', dadosDoElemento.calorEspecifico, 'J/g·K')
    selecionarElementoDom('.volumeAtomico', dadosDoElemento.volumeAtomico, 'cm³/mol')
    selecionarElementoDom('.condutividadeTermica', dadosDoElemento.condutividadeTermica, 'W/cm·K')
    selecionarElementoDom('.container-historia-texto', dadosDoElemento.historia)
    
    const containerHistoria = document.querySelector('.container-historia')
    containerHistoria.querySelector('.container-historia-img').setAttribute('src', dadosDoElemento.endereçoImagemElemento)
    definirElementoSelecionado(dadosDoElemento.nome)
}