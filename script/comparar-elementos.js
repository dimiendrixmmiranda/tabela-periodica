import { tabelaPeriodica } from "./tabelaPeriodica.js"

function criarSelectCompararElemento() {
    const selects = document.querySelectorAll('.comparar-elementos-selecionar select')
    selects[0].appendChild(criarOption('Selecione'))
    selects[1].appendChild(criarOption('Selecione'))
    
    selects.forEach(select => {
        tabelaPeriodica.forEach(objetoTabela => select.appendChild(criarOption(objetoTabela.nome)))
    })

    document.querySelectorAll('.propriedades-item').forEach(item => {
        const listaSpans = item.querySelectorAll('span')
        listaSpans.forEach(span => span.innerHTML = 'Não selecionado    ')
    })

    const select1 = document.querySelector('#selecionarElemento1')
    const select2 = document.querySelector('#selecionarElemento2')

    select1.addEventListener('change', (e) => {
        e.preventDefault()
        const elementoSelecionado = e.target.value
        const informacoesObjetoSelecionado = tabelaPeriodica.filter(elemento => elemento.nome === elementoSelecionado)[0]

        selecionarElemento("propriedades-nome-1", informacoesObjetoSelecionado.nome)
        compararElemento(document.querySelector('.propriedades-nome-1'), document.querySelector('.propriedades-nome-2'))

        selecionarElemento("propriedades-simbolo-1", informacoesObjetoSelecionado.sigla)
        compararElemento(document.querySelector('.propriedades-simbolo-1'), document.querySelector('.propriedades-simbolo-2'))

        selecionarElemento("propriedades-numero-atomico-1", informacoesObjetoSelecionado.numeroAtomico)
        compararElemento(document.querySelector('.propriedades-numero-atomico-1'), document.querySelector('.propriedades-numero-atomico-2'))

        selecionarElemento("propriedades-grupo-1", informacoesObjetoSelecionado.grupo)
        compararElemento(document.querySelector('.propriedades-grupo-1'), document.querySelector('.propriedades-grupo-2'))

        selecionarElemento("propriedades-periodo-1", informacoesObjetoSelecionado.periodo)
        compararElemento(document.querySelector('.propriedades-periodo-1'), document.querySelector('.propriedades-periodo-2'))

        selecionarElemento("propriedades-terra-1", informacoesObjetoSelecionado.abundanciaNaCrostaTerrestre, '%')
        compararElemento(document.querySelector('.propriedades-terra-1'), document.querySelector('.propriedades-terra-2'))

        selecionarElemento("propriedades-universo-1", informacoesObjetoSelecionado.abundanciaNoUniverso, '%')
        compararElemento(document.querySelector('.propriedades-universo-1'), document.querySelector('.propriedades-universo-2'))

        selecionarElemento("propriedades-gerais-massa-atomica-1", informacoesObjetoSelecionado.massaAtomica)
        compararElemento(document.querySelector('.propriedades-gerais-massa-atomica-1'), document.querySelector('.propriedades-gerais-massa-atomica-2'))

        selecionarElemento("propriedades-gerais-massa-atomica-relativa-1", informacoesObjetoSelecionado.massaAtomica)
        compararElemento(document.querySelector('.propriedades-gerais-massa-atomica-relativa-1'), document.querySelector('.propriedades-gerais-massa-atomica-relativa-2'))

        const categoriaFormatada = informacoesObjetoSelecionado.categoria.split('-').map(palavra => palavra.charAt(0).toUpperCase() + palavra.slice(1)).join(' ')

        selecionarElemento("propriedades-gerais-categoria-1", categoriaFormatada)
        compararElemento(document.querySelector('.propriedades-gerais-categoria-1'), document.querySelector('.propriedades-gerais-categoria-2'))

        selecionarElemento("propriedades-cor-1", informacoesObjetoSelecionado.cor)
        compararElemento(document.querySelector('.propriedades-cor-1'), document.querySelector('.propriedades-cor-2'))

        selecionarElemento("propriedades-radioativo-1", informacoesObjetoSelecionado.radioativo ? 'Sim': 'Não')
        compararElemento(document.querySelector('.propriedades-radioativo-1'), document.querySelector('.propriedades-radioativo-2'))

        selecionarElemento("propriedades-fisicas-densidade-1", informacoesObjetoSelecionado.densidade, 'kg/m³')
        compararElemento(document.querySelector('.propriedades-fisicas-densidade-1'), document.querySelector('.propriedades-fisicas-densidade-2'))

        selecionarElemento("propriedades-fisicas-estado-da-materia-1", informacoesObjetoSelecionado.estadoNatural)
        compararElemento(document.querySelector('.propriedades-fisicas-estado-da-materia-1'), document.querySelector('.propriedades-fisicas-estado-da-materia-2'))

        selecionarElemento("propriedades-fisicas-ponto-de-fusao-1", informacoesObjetoSelecionado.pontoDeFusao, 'ºC')
        compararElemento(document.querySelector('.propriedades-fisicas-ponto-de-fusao-1'), document.querySelector('.propriedades-fisicas-ponto-de-fusao-2'))

        selecionarElemento("propriedades-fisicas-ponto-de-ebulicao-1", informacoesObjetoSelecionado.pontoDeEbulicao, 'ºC')
        compararElemento(document.querySelector('.propriedades-fisicas-ponto-de-ebulicao-1'), document.querySelector('.propriedades-fisicas-ponto-de-ebulicao-2'))

        selecionarElemento("propriedades-fisicas-entalpia-de-fusao-1", informacoesObjetoSelecionado.etalpiaDeFusao, 'kJ/mol')
        compararElemento(document.querySelector('.propriedades-fisicas-entalpia-de-fusao-1'), document.querySelector('.propriedades-fisicas-entalpia-de-fusao-2'))

        selecionarElemento("propriedades-fisicas-entalpia-de-vaporizacao-1", informacoesObjetoSelecionado.etalpiaDeVaporizacao, 'kJ/mol')
        compararElemento(document.querySelector('.propriedades-fisicas-entalpia-de-vaporizacao-1'), document.querySelector('.propriedades-fisicas-entalpia-de-vaporizacao-2'))

        selecionarElemento("propriedades-fisicas-calor-especifico-1", informacoesObjetoSelecionado.calorEspecifico, 'J/g·K')
        compararElemento(document.querySelector('.propriedades-fisicas-calor-especifico-1'), document.querySelector('.propriedades-fisicas-calor-especifico-2'))

        selecionarElemento("propriedades-atomicas-raio-atomico-1", informacoesObjetoSelecionado.raioAtomico, 'pm')
        compararElemento(document.querySelector('.propriedades-atomicas-raio-atomico-1'), document.querySelector('.propriedades-atomicas-raio-atomico-2'))

        selecionarElemento("propriedades-atomicas-raio-covalente-1", informacoesObjetoSelecionado.raioCovalente, 'pm')
        compararElemento(document.querySelector('.propriedades-atomicas-raio-covalente-1'), document.querySelector('.propriedades-atomicas-raio-covalente-2'))

        selecionarElemento("propriedades-atomicas-eletronegatividade-1", informacoesObjetoSelecionado.eletronegatividade, '(Escala de Pauling)')
        compararElemento(document.querySelector('.propriedades-atomicas-eletronegatividade-1'), document.querySelector('.propriedades-atomicas-eletronegatividade-2'))

        selecionarElemento("propriedades-atomicas-volume-atomico-1", informacoesObjetoSelecionado.volumeAtomico, 'cm³/mol')
        compararElemento(document.querySelector('.propriedades-atomicas-volume-atomico-1'), document.querySelector('.propriedades-atomicas-volume-atomico-2'))

        selecionarElemento("propriedades-atomicas-condutividade-termica-1", informacoesObjetoSelecionado.condutividadeTermica, 'W/cm·K')
        compararElemento(document.querySelector('.propriedades-atomicas-condutividade-termica-1'), document.querySelector('.propriedades-atomicas-condutividade-termica-2'))

        selecionarElemento("propriedades-atomicas-configuracao-eletronica-1", informacoesObjetoSelecionado.configuracaoEletronica)
        compararElemento(document.querySelector('.propriedades-atomicas-configuracao-eletronica-1'), document.querySelector('.propriedades-atomicas-configuracao-eletronica-2'))

    })

    select2.addEventListener('change', (e) => {
        e.preventDefault()
        const elementoSelecionado = e.target.value
        const informacoesObjetoSelecionado = tabelaPeriodica.filter(elemento => elemento.nome === elementoSelecionado)[0]
        selecionarElemento("propriedades-nome-2", informacoesObjetoSelecionado.nome)
        compararElemento(document.querySelector('.propriedades-nome-1'), document.querySelector('.propriedades-nome-2'))

        selecionarElemento("propriedades-simbolo-2", informacoesObjetoSelecionado.sigla)
        compararElemento(document.querySelector('.propriedades-simbolo-1'), document.querySelector('.propriedades-simbolo-2'))

        selecionarElemento("propriedades-numero-atomico-2", informacoesObjetoSelecionado.numeroAtomico)
        compararElemento(document.querySelector('.propriedades-numero-atomico-1'), document.querySelector('.propriedades-numero-atomico-2'))

        selecionarElemento("propriedades-grupo-2", informacoesObjetoSelecionado.grupo)
        compararElemento(document.querySelector('.propriedades-grupo-1'), document.querySelector('.propriedades-grupo-2'))

        selecionarElemento("propriedades-periodo-2", informacoesObjetoSelecionado.periodo)
        compararElemento(document.querySelector('.propriedades-periodo-1'), document.querySelector('.propriedades-periodo-2'))

        selecionarElemento("propriedades-terra-2", informacoesObjetoSelecionado.abundanciaNaCrostaTerrestre, '%')
        compararElemento(document.querySelector('.propriedades-terra-1'), document.querySelector('.propriedades-terra-2'))

        selecionarElemento("propriedades-universo-2", informacoesObjetoSelecionado.abundanciaNoUniverso, '%')
        compararElemento(document.querySelector('.propriedades-universo-1'), document.querySelector('.propriedades-universo-2'))

        selecionarElemento("propriedades-gerais-massa-atomica-2", informacoesObjetoSelecionado.massaAtomica)
        compararElemento(document.querySelector('.propriedades-gerais-massa-atomica-1'), document.querySelector('.propriedades-gerais-massa-atomica-2'))

        selecionarElemento("propriedades-gerais-massa-atomica-relativa-2", informacoesObjetoSelecionado.massaAtomica)
        compararElemento(document.querySelector('.propriedades-gerais-massa-atomica-relativa-1'), document.querySelector('.propriedades-gerais-massa-atomica-relativa-2'))

        const categoriaFormatada = informacoesObjetoSelecionado.categoria.split('-').map(palavra => palavra.charAt(0).toUpperCase() + palavra.slice(1)).join(' ')

        selecionarElemento("propriedades-gerais-categoria-2", categoriaFormatada)
        compararElemento(document.querySelector('.propriedades-gerais-categoria-1'), document.querySelector('.propriedades-gerais-categoria-2'))

        selecionarElemento("propriedades-cor-2", informacoesObjetoSelecionado.cor)
        compararElemento(document.querySelector('.propriedades-cor-1'), document.querySelector('.propriedades-cor-2'))

        selecionarElemento("propriedades-radioativo-2", informacoesObjetoSelecionado.radioativo ? 'Sim': 'Não')
        compararElemento(document.querySelector('.propriedades-radioativo-1'), document.querySelector('.propriedades-radioativo-2'))

        console.log(informacoesObjetoSelecionado.densidade)
        selecionarElemento("propriedades-fisicas-densidade-2", informacoesObjetoSelecionado.densidade, 'g/cm³')
        compararElemento(document.querySelector('.propriedades-fisicas-densidade-1'), document.querySelector('.propriedades-fisicas-densidade-2'))

        selecionarElemento("propriedades-fisicas-estado-da-materia-2", informacoesObjetoSelecionado.estadoNatural)
        compararElemento(document.querySelector('.propriedades-fisicas-estado-da-materia-1'), document.querySelector('.propriedades-fisicas-estado-da-materia-2'))

        selecionarElemento("propriedades-fisicas-ponto-de-fusao-2", informacoesObjetoSelecionado.pontoDeFusao, 'ºC')
        compararElemento(document.querySelector('.propriedades-fisicas-ponto-de-fusao-1'), document.querySelector('.propriedades-fisicas-ponto-de-fusao-2'))

        selecionarElemento("propriedades-fisicas-ponto-de-ebulicao-2", informacoesObjetoSelecionado.pontoDeEbulicao, 'ºC')
        compararElemento(document.querySelector('.propriedades-fisicas-ponto-de-ebulicao-1'), document.querySelector('.propriedades-fisicas-ponto-de-ebulicao-2'))

        selecionarElemento("propriedades-fisicas-entalpia-de-fusao-2", informacoesObjetoSelecionado.etalpiaDeFusao, 'kJ/mol')
        compararElemento(document.querySelector('.propriedades-fisicas-entalpia-de-fusao-1'), document.querySelector('.propriedades-fisicas-entalpia-de-fusao-2'))

        selecionarElemento("propriedades-fisicas-entalpia-de-vaporizacao-2", informacoesObjetoSelecionado.etalpiaDeVaporizacao, 'kJ/mol')
        compararElemento(document.querySelector('.propriedades-fisicas-entalpia-de-vaporizacao-1'), document.querySelector('.propriedades-fisicas-entalpia-de-vaporizacao-2'))

        selecionarElemento("propriedades-fisicas-calor-especifico-2", informacoesObjetoSelecionado.calorEspecifico, 'J/g·K')
        compararElemento(document.querySelector('.propriedades-fisicas-calor-especifico-1'), document.querySelector('.propriedades-fisicas-calor-especifico-2'))

        selecionarElemento("propriedades-atomicas-raio-atomico-2", informacoesObjetoSelecionado.raioAtomico, 'pm')
        compararElemento(document.querySelector('.propriedades-atomicas-raio-atomico-1'), document.querySelector('.propriedades-atomicas-raio-atomico-2'))

        selecionarElemento("propriedades-atomicas-raio-covalente-2", informacoesObjetoSelecionado.raioCovalente, 'pm')
        compararElemento(document.querySelector('.propriedades-atomicas-raio-covalente-1'), document.querySelector('.propriedades-atomicas-raio-covalente-2'))

        selecionarElemento("propriedades-atomicas-eletronegatividade-2", informacoesObjetoSelecionado.eletronegatividade, '(Escala de Pauling)')
        compararElemento(document.querySelector('.propriedades-atomicas-eletronegatividade-1'), document.querySelector('.propriedades-atomicas-eletronegatividade-2'))

        selecionarElemento("propriedades-atomicas-volume-atomico-2", informacoesObjetoSelecionado.volumeAtomico, 'cm³/mol')
        compararElemento(document.querySelector('.propriedades-atomicas-volume-atomico-1'), document.querySelector('.propriedades-atomicas-volume-atomico-2'))

        selecionarElemento("propriedades-atomicas-condutividade-termica-2", informacoesObjetoSelecionado.condutividadeTermica, 'W/cm·K')
        compararElemento(document.querySelector('.propriedades-atomicas-condutividade-termica-1'), document.querySelector('.propriedades-atomicas-condutividade-termica-2'))

        selecionarElemento("propriedades-atomicas-configuracao-eletronica-2", informacoesObjetoSelecionado.configuracaoEletronica)
        compararElemento(document.querySelector('.propriedades-atomicas-configuracao-eletronica-1'), document.querySelector('.propriedades-atomicas-configuracao-eletronica-2'))
    })
}

function compararElemento(elemento1, elemento2) {
    const valor1 = parseFloat(elemento1.dataset.valor)
    const valor2 = parseFloat(elemento2.dataset.valor)

    if (valor1 > valor2) {
        elemento1.style.backgroundColor = '#8DECB4'
        elemento2.style.backgroundColor = '#FF6969'
    } else if (valor1 < valor2) {
        elemento1.style.backgroundColor = '#FF6969'
        elemento2.style.backgroundColor = '#8DECB4'
    } else {
        elemento1.style.backgroundColor = '#F6E9B2'
        elemento2.style.backgroundColor = '#F6E9B2'
    }
}

function selecionarElemento(classe, valorPropriedade, unidadeDeMedida = '') {
    const elemento = document.querySelector(`.${classe}`)
    if (valorPropriedade != null) {
        elemento.innerHTML = `${valorPropriedade} ${unidadeDeMedida}`
        elemento.dataset.valor = valorPropriedade
    } else {
        elemento.innerHTML = 'Valor Inexistente'
        elemento.dataset.valor = 0
    }
}

function criarOption(nomeElemento) {
    const option = document.createElement('option')
    option.value = nomeElemento
    option.innerHTML = nomeElemento
    return option
}

criarSelectCompararElemento()