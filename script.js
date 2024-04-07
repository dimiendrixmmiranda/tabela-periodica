import { determinarCoresDosElementos } from "./script/determinarCoresBtns.js";
import { validacaoFiltroCategoria } from "./script/filtro.js";
import { formatarBotoes } from "./script/formatarBotoes.js"
import { tabelaPeriodica } from "./script/tabelaPeriodica.js";
const divElementos = document.querySelector('.elementos')

tabelaPeriodica.forEach(elemento => {
    const button = document.createElement('button')
    const numeroAtomico = document.createElement('span')
    numeroAtomico.innerHTML = elemento.numeroAtomico
    button.innerHTML = elemento.sigla
    button.dataset.categoria = elemento.categoria
    button.dataset.elemento = elemento.nome
    button.appendChild(numeroAtomico)
    divElementos.appendChild(button)
})

formatarBotoes()
determinarCoresDosElementos()
validacaoFiltroCategoria()