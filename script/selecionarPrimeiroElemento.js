import { tabelaPeriodica } from "./tabelaPeriodica.js"
const dadosDoVisor = document.querySelector('.visor')

export function definirPrimeiroElemento(){
    selecionarElementoDom('#nomeElemento', tabelaPeriodica[0].nome)
    selecionarElementoDom('.simboloElemento', tabelaPeriodica[0].sigla)
    selecionarElementoDom('.numeroAtomico', tabelaPeriodica[0].numeroAtomico)
    selecionarElementoDom('.massaAtomicaElemento', tabelaPeriodica[0].massaAtomica)
    selecionarElementoDom('.configuracaoEletronica', tabelaPeriodica[0].configuracaoEletronica)
    selecionarElementoDom('.configuracaoEletronica', tabelaPeriodica[0].configuracaoEletronica)
    selecionarElementoDom('.grupo', tabelaPeriodica[0].grupo)
    selecionarElementoDom('.periodo', tabelaPeriodica[0].periodo)
    selecionarElementoDom('.raioAtomico', tabelaPeriodica[0].raioAtomico, 'pm')
    selecionarElementoDom('.estadoNatural', tabelaPeriodica[0].estadoNatural)
    selecionarElementoDom('.pontoDeFusao', tabelaPeriodica[0].pontoDeFusao, 'ºC')
    selecionarElementoDom('.pontoDeEbulicao', tabelaPeriodica[0].pontoDeEbulicao, 'ºC')
    selecionarElementoDom('.densidade', tabelaPeriodica[0].densidade, 'g/cm³')
    selecionarElementoDom('.eletronegatividade', tabelaPeriodica[0].eletronegatividade, '(Escala de Pauling)')
    selecionarElementoDom('.aplicacoesComuns', tabelaPeriodica[0].aplicacoesComuns)
    selecionarElementoDom('.container-historia-texto', tabelaPeriodica[0].historia)
    selecionarElementoDom('.container-historia-img', tabelaPeriodica[0].historia)
    const historiaImagem = document.querySelector('.container-historia-img').setAttribute('src', tabelaPeriodica[0].endereçoImagemElemento)
    definirCorDeFundo(tabelaPeriodica[0].categoria)
    definirElementoSelecionado(tabelaPeriodica[0].nome)
}

function definirCorDeFundo(categoria){
    const elemento = document.querySelector(`[data-categoria="${categoria}"]`)
    const cor = elemento.style.backgroundColor
    document.querySelectorAll('.cor').forEach(el => el.style.backgroundColor = cor)
}

function definirElementoSelecionado(nome){
    document.querySelectorAll('.elementos button').forEach(btn => btn.classList.remove('btn-selecionado'))
    document.querySelector(`[data-elemento="${nome}"]`).classList.add('btn-selecionado')
}

// fazer a verificação se o elemento é null ou não
function selecionarElementoDom(seletor, valor, unidade = ''){
    if(valor == null){
        document.querySelectorAll(seletor).forEach(elemento => elemento.innerHTML = 'Inexistente')
    }else{
        document.querySelectorAll(seletor).forEach(elemento => elemento.innerHTML = `${valor} ${unidade}`)
    }
}