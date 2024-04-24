import { tabelaPeriodica } from "./tabelaPeriodica.js"
export function definirPrimeiroElemento(){
    selecionarElementoDom('#nomeElemento', tabelaPeriodica[0].nome)
    selecionarElementoDom('.simboloElemento', tabelaPeriodica[0].sigla)
    selecionarElementoDom('.numeroAtomico', tabelaPeriodica[0].numeroAtomico)
    selecionarElementoDom('.massaAtomicaElemento', parseFloat(tabelaPeriodica[0].massaAtomica).toFixed(3))
    selecionarElementoDom('.configuracaoEletronica', tabelaPeriodica[0].configuracaoEletronica)
    selecionarElementoDom('.grupo', tabelaPeriodica[0].grupo)
    selecionarElementoDom('.periodo', tabelaPeriodica[0].periodo)
    selecionarElementoDom('.raioAtomico', tabelaPeriodica[0].raioAtomico, 'pm')
    selecionarElementoDom('.estadoNatural', tabelaPeriodica[0].estadoNatural)
    selecionarElementoDom('.pontoDeFusao', tabelaPeriodica[0].pontoDeFusao, 'ºC')
    selecionarElementoDom('.pontoDeEbulicao', tabelaPeriodica[0].pontoDeEbulicao, 'ºC')
    selecionarElementoDom('.densidade', tabelaPeriodica[0].densidade, 'g/cm³')
    selecionarElementoDom('.eletronegatividade', tabelaPeriodica[0].eletronegatividade, '(escala de Pauling)')
    selecionarElementoDom('.aplicacoesComuns', tabelaPeriodica[0].aplicacoesComuns)
    selecionarElementoDom('.abundanciaTerra', tabelaPeriodica[0].abundanciaNaCrostaTerrestre, '%')
    selecionarElementoDom('.abundanciaUniverso', tabelaPeriodica[0].abundanciaNoUniverso, '%')
    selecionarElementoDom('.raioAtomico', tabelaPeriodica[0].raioAtomico, 'pm')
    selecionarElementoDom('.raioCovalente', tabelaPeriodica[0].raioCovalente, 'pm')
    selecionarElementoDom('.etalpiaDeFusao', tabelaPeriodica[0].etalpiaDeFusao, 'kJ/mol')
    selecionarElementoDom('.etalpiaDeVaporizacao', tabelaPeriodica[0].etalpiaDeVaporizacao, 'kJ/mol')
    selecionarElementoDom('.calorEspecifico', tabelaPeriodica[0].calorEspecifico, 'J/g·K')
    selecionarElementoDom('.volumeAtomico', tabelaPeriodica[0].volumeAtomico, 'cm³/mol')
    selecionarElementoDom('.condutividadeTermica', tabelaPeriodica[0].condutividadeTermica, 'W/cm·K')
    selecionarElementoDom('.container-historia-texto', tabelaPeriodica[0].historia)
    const historiaImagem = document.querySelector('.container-historia-img').setAttribute('src', tabelaPeriodica[0].endereçoImagemElemento)
    definirCorDeFundo(tabelaPeriodica[0].categoria)
    definirElementoSelecionado(tabelaPeriodica[0].nome)
}

function definirCorDeFundo(categoria){
    const elemento = document.querySelector(`[data-categoria="${categoria}"]`)
    const cor = elemento.style.backgroundColor
    document.querySelectorAll('.cor').forEach(el => el.style.backgroundColor = cor)
}

export function definirElementoSelecionado(nome){
    document.querySelectorAll('.elementos button').forEach(btn => btn.classList.remove('btn-selecionado'))
    document.querySelector(`[data-elemento="${nome}"]`).classList.add('btn-selecionado')
}

// fazer a verificação se o elemento é null ou não
export function selecionarElementoDom(seletor, valor, unidade = ''){
    if(valor == null){
        document.querySelectorAll(seletor).forEach(elemento => elemento.innerHTML = 'Inexistente')
    }else{
        document.querySelectorAll(seletor).forEach(elemento => elemento.innerHTML = `${valor} ${unidade}`)
    }
}