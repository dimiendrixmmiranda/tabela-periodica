import { tabelaPeriodica } from "./tabelaPeriodica.js"

function criarSelectCompararElemento() {
    const selects = document.querySelectorAll('.comparar-elementos-selecionar select')
    selects.forEach(select => {
        tabelaPeriodica.forEach(objetoTabela => select.appendChild(criarOption(objetoTabela.nome)))
    })
    const select1 = document.querySelector('#selecionarElemento1')
    const select2 = document.querySelector('#selecionarElemento2')
    select1.addEventListener('change', (e) => {
        e.preventDefault()
        const elementoSelecionado = e.target.value
        const dadosDoElementoSelecionado = tabelaPeriodica.filter(elemento => elemento.nome === elementoSelecionado)[0]

        document.querySelector('.propriedades-nome-1').innerHTML = dadosDoElementoSelecionado.nome
        document.querySelector('.propriedades-simbolo-1').innerHTML = dadosDoElementoSelecionado.sigla
        document.querySelector('.propriedades-numero-atomico-1').innerHTML = dadosDoElementoSelecionado.numeroAtomico
        document.querySelector('.propriedades-grupo-1').innerHTML = dadosDoElementoSelecionado.grupo
        document.querySelector('.propriedades-periodo-1').innerHTML = dadosDoElementoSelecionado.periodo
        document.querySelector('.propriedades-terra-1').innerHTML = dadosDoElementoSelecionado.abundanciaNaCrostaTerrestre ? `${dadosDoElementoSelecionado.abundanciaNaCrostaTerrestre}%`: 'Não disponivel'
        document.querySelector('.propriedades-universo-1').innerHTML = dadosDoElementoSelecionado.abundanciaNoUniverso ? `${dadosDoElementoSelecionado.abundanciaNoUniverso}%`: 'Não disponivel'
        document.querySelector('.propriedades-gerais-massa-atomica-1').innerHTML = Math.round(parseFloat(dadosDoElementoSelecionado.massaAtomica))
        document.querySelector('.propriedades-gerais-massa-atomica-relativa-1').innerHTML = parseFloat(dadosDoElementoSelecionado.massaAtomica).toFixed(4)
        document.querySelector('.propriedades-gerais-categoria-1').innerHTML = dadosDoElementoSelecionado.categoria
        document.querySelector('.propriedades-cor-1').innerHTML = dadosDoElementoSelecionado.cor ? dadosDoElementoSelecionado.cor : 'Não disponível'
        document.querySelector('.propriedades-radioativo-1').innerHTML = dadosDoElementoSelecionado.radioativo ? 'Sim' : 'Não'
        document.querySelector('.propriedades-fisicas-densidade-1').innerHTML = dadosDoElementoSelecionado.densidade ? `${dadosDoElementoSelecionado.densidade}g/cm3`: 'Não disponível'
        document.querySelector('.propriedades-fisicas-estado-da-materia-1').innerHTML = dadosDoElementoSelecionado.estadoNatural
        document.querySelector('.propriedades-fisicas-ponto-de-fusao-1').innerHTML = dadosDoElementoSelecionado.pontoDeFusao ? `${dadosDoElementoSelecionado.pontoDeFusao}ºC`: 'Não disponível'
        document.querySelector('.propriedades-fisicas-ponto-de-ebulicao-1').innerHTML = dadosDoElementoSelecionado.pontoDeEbulicao ? `${dadosDoElementoSelecionado.pontoDeEbulicao}ºC`: 'Não disponível'
        document.querySelector('.propriedades-fisicas-entalpia-de-fusao-1').innerHTML = dadosDoElementoSelecionado.etalpiaDeFusao ? `${dadosDoElementoSelecionado.etalpiaDeFusao}kJ/mol`: 'Não disponível'
        document.querySelector('.propriedades-fisicas-entalpia-de-vaporizacao-1').innerHTML = dadosDoElementoSelecionado.etalpiaDeVaporizacao ? `${dadosDoElementoSelecionado.etalpiaDeVaporizacao}kJ/mol`: 'Não disponível'
        document.querySelector('.propriedades-fisicas-calor-especifico-1').innerHTML = dadosDoElementoSelecionado.calorEspecifico ? `${dadosDoElementoSelecionado.calorEspecifico}J/g·K`: 'Não disponível'
        document.querySelector('.propriedades-atomicas-raio-atomico-1').innerHTML = dadosDoElementoSelecionado.raioAtomico ? `${dadosDoElementoSelecionado.raioAtomico}pm`: 'Não disponível'
        document.querySelector('.propriedades-atomicas-raio-covalente-1').innerHTML = dadosDoElementoSelecionado.raioCovalente ? `${dadosDoElementoSelecionado.raioCovalente}pm`: 'Não disponível'
        document.querySelector('.propriedades-atomicas-eletronegatividade-1').innerHTML = dadosDoElementoSelecionado.eletronegatividade ? `${dadosDoElementoSelecionado.eletronegatividade} (escala de Pauling)`: 'Não disponível'
        document.querySelector('.propriedades-atomicas-volume-atomico-1').innerHTML = dadosDoElementoSelecionado.volumeAtomico ? `${dadosDoElementoSelecionado.volumeAtomico}cm³/mol`: 'Não disponível'
        document.querySelector('.propriedades-atomicas-condutividade-termica-1').innerHTML = dadosDoElementoSelecionado.volumeAtomico ? `${dadosDoElementoSelecionado.condutividadeTermica}W/cm·K`: 'Não disponível'
        document.querySelector('.propriedades-atomicas-configuracao-eletronica-1').innerHTML = dadosDoElementoSelecionado.configuracaoEletronica ? dadosDoElementoSelecionado.configuracaoEletronica: 'Não disponível'
    })
    select2.addEventListener('change', (e) => {
        e.preventDefault()
        const elementoSelecionado = e.target.value
        const dadosDoElementoSelecionado = tabelaPeriodica.filter(elemento => elemento.nome === elementoSelecionado)[0]

        document.querySelector('.propriedades-nome-2').innerHTML = dadosDoElementoSelecionado.nome
        document.querySelector('.propriedades-simbolo-2').innerHTML = dadosDoElementoSelecionado.sigla
        document.querySelector('.propriedades-numero-atomico-2').innerHTML = dadosDoElementoSelecionado.numeroAtomico
        document.querySelector('.propriedades-grupo-2').innerHTML = dadosDoElementoSelecionado.grupo
        document.querySelector('.propriedades-periodo-2').innerHTML = dadosDoElementoSelecionado.periodo
        document.querySelector('.propriedades-terra-2').innerHTML = dadosDoElementoSelecionado.abundanciaNaCrostaTerrestre ? `${dadosDoElementoSelecionado.abundanciaNaCrostaTerrestre}%`: 'Não disponivel'
        document.querySelector('.propriedades-universo-2').innerHTML = dadosDoElementoSelecionado.abundanciaNoUniverso ? `${dadosDoElementoSelecionado.abundanciaNoUniverso}%`: 'Não disponivel'
        document.querySelector('.propriedades-gerais-massa-atomica-2').innerHTML = Math.round(parseFloat(dadosDoElementoSelecionado.massaAtomica))
        document.querySelector('.propriedades-gerais-massa-atomica-relativa-2').innerHTML = parseFloat(dadosDoElementoSelecionado.massaAtomica).toFixed(4)
        document.querySelector('.propriedades-gerais-categoria-2').innerHTML = dadosDoElementoSelecionado.categoria
        document.querySelector('.propriedades-cor-2').innerHTML = dadosDoElementoSelecionado.cor ? dadosDoElementoSelecionado.cor : 'Não disponível'
        document.querySelector('.propriedades-radioativo-2').innerHTML = dadosDoElementoSelecionado.radioativo ? 'Sim' : 'Não'
        document.querySelector('.propriedades-fisicas-densidade-2').innerHTML = dadosDoElementoSelecionado.densidade ? `${dadosDoElementoSelecionado.densidade}g/cm3`: 'Não disponível'
        document.querySelector('.propriedades-fisicas-estado-da-materia-2').innerHTML = dadosDoElementoSelecionado.estadoNatural
        document.querySelector('.propriedades-fisicas-ponto-de-fusao-2').innerHTML = dadosDoElementoSelecionado.pontoDeFusao ? `${dadosDoElementoSelecionado.pontoDeFusao}ºC`: 'Não disponível'
        document.querySelector('.propriedades-fisicas-ponto-de-ebulicao-2').innerHTML = dadosDoElementoSelecionado.pontoDeEbulicao ? `${dadosDoElementoSelecionado.pontoDeEbulicao}ºC`: 'Não disponível'
        document.querySelector('.propriedades-fisicas-entalpia-de-fusao-2').innerHTML = dadosDoElementoSelecionado.etalpiaDeFusao ? `${dadosDoElementoSelecionado.etalpiaDeFusao}kJ/mol`: 'Não disponível'
        document.querySelector('.propriedades-fisicas-entalpia-de-vaporizacao-2').innerHTML = dadosDoElementoSelecionado.etalpiaDeVaporizacao ? `${dadosDoElementoSelecionado.etalpiaDeVaporizacao}kJ/mol`: 'Não disponível'
        document.querySelector('.propriedades-fisicas-calor-especifico-2').innerHTML = dadosDoElementoSelecionado.calorEspecifico ? `${dadosDoElementoSelecionado.calorEspecifico}J/g·K`: 'Não disponível'
        document.querySelector('.propriedades-atomicas-raio-atomico-2').innerHTML = dadosDoElementoSelecionado.raioAtomico ? `${dadosDoElementoSelecionado.raioAtomico}pm`: 'Não disponível'
        document.querySelector('.propriedades-atomicas-raio-covalente-2').innerHTML = dadosDoElementoSelecionado.raioCovalente ? `${dadosDoElementoSelecionado.raioCovalente}pm`: 'Não disponível'
        document.querySelector('.propriedades-atomicas-eletronegatividade-2').innerHTML = dadosDoElementoSelecionado.eletronegatividade ? `${dadosDoElementoSelecionado.eletronegatividade} (escala de Pauling)`: 'Não disponível'
        document.querySelector('.propriedades-atomicas-volume-atomico-2').innerHTML = dadosDoElementoSelecionado.volumeAtomico ? `${dadosDoElementoSelecionado.volumeAtomico}cm³/mol`: 'Não disponível'
        document.querySelector('.propriedades-atomicas-condutividade-termica-2').innerHTML = dadosDoElementoSelecionado.volumeAtomico ? `${dadosDoElementoSelecionado.condutividadeTermica}W/cm·K`: 'Não disponível'
        document.querySelector('.propriedades-atomicas-configuracao-eletronica-2').innerHTML = dadosDoElementoSelecionado.configuracaoEletronica ? dadosDoElementoSelecionado.configuracaoEletronica: 'Não disponível'
    })
}

function criarOption(nomeElemento) {
    const option = document.createElement('option')
    option.value = nomeElemento
    option.innerHTML = nomeElemento
    return option
}

criarSelectCompararElemento()