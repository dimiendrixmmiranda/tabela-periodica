import { formatarBotoes } from "./formatar-botoes-tabela.js"
import { tabelaPeriodica } from "./tabelaPeriodica.js"

const conteudoElementosTabela = document.querySelector('#conteudoElementosTabela')

tabelaPeriodica.forEach(elementoDaTabela => {
    const elemento = criarBotaoElemento(elementoDaTabela)
    conteudoElementosTabela.appendChild(elemento)
})

const listaDeBotoesElemento = conteudoElementosTabela.querySelectorAll('button')
formatarBotoes(listaDeBotoesElemento)

listaDeBotoesElemento.forEach(elemento => {
    elemento.classList.remove('active')
    elemento.addEventListener('click', e => {
        e.preventDefault()
        const nomeElemento = e.target.dataset.elemento
        const elementoSelecionado = tabelaPeriodica.filter(elemento => elemento.nome === nomeElemento)[0]
        const pHistoria = document.querySelector('.conteudo-tabela-elemento-historia-texto')
        const imagemHistoria = document.querySelector('.conteudo-tabela-elemento-historia-img')
        const tituloElemento = document.querySelector('.conteudo-tabela-elemento-historia-titulo-elemento')
        pHistoria.innerHTML = elementoSelecionado.historia
        tituloElemento.innerHTML = elementoSelecionado.nome
        imagemHistoria.setAttribute('src', elementoSelecionado.endereçoImagemElemento)
        selecionarElementoInformacoes(elementoSelecionado)

        listaDeBotoesElemento.forEach(elemento => elemento.classList.remove('active'))
        elemento.classList.add('active')
    })
})

selecionarPrimeiroElemento()

function criarBotaoElemento(elemento) {
    const button = document.createElement('button')
    const numeroAtomico = document.createElement('span')
    numeroAtomico.innerHTML = elemento.numeroAtomico
    numeroAtomico.classList.add('numero-atomico-elemento')

    const nomeElemento = document.createElement('span')
    nomeElemento.innerHTML = elemento.nome
    nomeElemento.classList.add('nome-elemento')
    nomeElemento.classList.add('cor')

    button.innerHTML = elemento.sigla
    button.dataset.categoria = elemento.categoria
    button.dataset.elemento = elemento.nome

    if (elemento.radioativo === true) {
        const divRadioativo = document.createElement('div')
        divRadioativo.classList.add('radioativo')
        button.appendChild(divRadioativo)
    }

    button.appendChild(numeroAtomico)
    button.appendChild(nomeElemento)
    return button
}

function selecionarPrimeiroElemento() {
    const containerHistoria = document.querySelector('.conteudo-tabela-elemento-historia')
    containerHistoria.querySelector('.conteudo-tabela-elemento-historia-titulo-elemento').innerHTML = tabelaPeriodica[0].nome
    containerHistoria.querySelector('.conteudo-tabela-elemento-historia-img').setAttribute('src', tabelaPeriodica[0].endereçoImagemElemento)
    containerHistoria.querySelector('.conteudo-tabela-elemento-historia-texto').innerHTML = tabelaPeriodica[0].historia
    // Setando o primeiro elemento active
    listaDeBotoesElemento[0].classList.add('active')
    selecionarElementoInformacoes(tabelaPeriodica[0])
}

function selecionarElementoInformacoes(elementoSelecionado) {
    inserirDadosNaTabela('sigla', elementoSelecionado.sigla, '')
    inserirDadosNaTabela('numeroAtomico', elementoSelecionado.numeroAtomico, '')
    inserirDadosNaTabela('massaAtomica', elementoSelecionado.massaAtomica.toFixed(3), '')
    inserirDadosNaTabela('nome', elementoSelecionado.nome, '')
    const categoriaFormatada = elementoSelecionado.categoria.split('-').map(palavra => palavra.charAt(0).toUpperCase() + palavra.slice(1)).join(' ')
    inserirDadosNaTabela('categoria', categoriaFormatada, '')
    inserirDadosNaTabela('radioativo', elementoSelecionado.radioativo ? 'Sim' : 'Não', '')
    inserirDadosNaTabela('estadoNatural', elementoSelecionado.estadoNatural, '')
    inserirDadosNaTabela('pontoDeFusao', elementoSelecionado.pontoDeFusao, 'ºC')
    inserirDadosNaTabela('pontoDeEbulicao', elementoSelecionado.pontoDeEbulicao, 'ºC')
    inserirDadosNaTabela('densidade', elementoSelecionado.densidade, 'g/cm3')
    inserirDadosNaTabela('raioAtomico', elementoSelecionado.raioAtomico, 'pm')
    inserirDadosNaTabela('raioCovalente', elementoSelecionado.raioCovalente, 'pm')
    inserirDadosNaTabela('grupo', elementoSelecionado.grupo, '')
    inserirDadosNaTabela('periodo', elementoSelecionado.periodo, '')
    inserirDadosNaTabela('decomposicao', `Protons: ${elementoSelecionado.decomposicao.protons}, Eletrons: ${elementoSelecionado.decomposicao.eletrons}, Neutrons: ${elementoSelecionado.decomposicao.neutrons}`, '')
    inserirDadosNaTabela('configuracaoEletronica', elementoSelecionado.configuracaoEletronica, '')
    inserirDadosNaTabela('cor', elementoSelecionado.cor, '')
    inserirDadosNaTabela('entalpiaDeFusao', elementoSelecionado.etalpiaDeFusao, 'ºC')
    inserirDadosNaTabela('entalpiaDeVaporizacao', elementoSelecionado.etalpiaDeVaporizacao, 'ºC')
    inserirDadosNaTabela('calorEspecifico', elementoSelecionado.calorEspecifico, 'J/g·K')
    inserirDadosNaTabela('abundanciaTerra', elementoSelecionado.abundanciaNaCrostaTerrestre, '%')
    inserirDadosNaTabela('abundanciaUniverso', elementoSelecionado.abundanciaNoUniverso, '%')
    inserirDadosNaTabela('eletronegatividade', elementoSelecionado.eletronegatividade, '(Escala de Pauling)')
    inserirDadosNaTabela('condutividadeTermica', elementoSelecionado.condutividadeTermica, 'W/cm·K')
    inserirDadosNaTabela('aplicacoesComuns', elementoSelecionado.aplicacoesComuns.join(', '), '')


    const containerConteudoInformacoesElemento = document.querySelector('.conteudo-informacoes-elemento')
    selecionarCorContainer(containerConteudoInformacoesElemento, elementoSelecionado)
}

function selecionarCorContainer(containerConteudoInformacoesElemento, elementoSelecionado) {
    const container = containerConteudoInformacoesElemento.querySelector('.container-quadrado-elemento')
    const botao = containerConteudoInformacoesElemento.querySelector('.botao-ver-detalhes')

    container.setAttribute('style', 'background-color: rgba(0, 0, 0, 0.4);')
    botao.setAttribute('style', 'background-color: rgba(0, 0, 0, 0.4);')
    if (elementoSelecionado.categoria == 'nao-metal') {
        containerConteudoInformacoesElemento.setAttribute('style', 'background-color: #90D26D')
    } else if (elementoSelecionado.categoria == 'semimetal') {
        containerConteudoInformacoesElemento.setAttribute('style', 'background-color: #2C7865')
    } else if (elementoSelecionado.categoria == 'metal-alcalino') {
        containerConteudoInformacoesElemento.setAttribute('style', 'background-color: #E8751A')
    } else if (elementoSelecionado.categoria == 'outros-metais') {
        containerConteudoInformacoesElemento.setAttribute('style', 'background-color: #496989')
    } else if (elementoSelecionado.categoria == 'lantanideos') {
        containerConteudoInformacoesElemento.setAttribute('style', 'background-color: #97E7E1')
    } else if (elementoSelecionado.categoria == 'gas-nobre') {
        containerConteudoInformacoesElemento.setAttribute('style', 'background-color: #008DDA')
    } else if (elementoSelecionado.categoria == 'metal-alcalino-terroso') {
        containerConteudoInformacoesElemento.setAttribute('style', 'background-color: #FCDC2A')
    } else if (elementoSelecionado.categoria == 'halogenios') {
        containerConteudoInformacoesElemento.setAttribute('style', 'background-color: #59D5E0')
    } else if (elementoSelecionado.categoria == 'metal-de-transicao') {
        containerConteudoInformacoesElemento.setAttribute('style', 'background-color: #FF8E8F')
    } else if (elementoSelecionado.categoria == 'actinidios') {
        containerConteudoInformacoesElemento.setAttribute('style', 'background-color: #D875C7')
    }
}

function inserirDadosNaTabela(idElemento, dado, unidadeDeMedida) {
    const elemento = document.querySelectorAll(`.conteudo-informacoes-elemento #${idElemento}`)
    if (dado != null) {
        elemento.forEach(el => el.innerHTML = `${dado} ${unidadeDeMedida}`)
    } else {
        elemento.forEach(el => el.innerHTML = 'Não disponível')
    }
}