import { toggleBtnVerDetalhes } from "./script/btnVerDetalhes.js";
import { criarBotao } from "./script/criarBotao.js";
import { determinarCoresDosElementos } from "./script/determinarCoresBtns.js";
import { validacaoFiltroCategoria } from "./script/filtro.js";
import { formatarBotoes } from "./script/formatarBotoes.js"
import { selecionarElemento } from "./script/selecionarElemento.js";
import { tabelaPeriodica } from "./script/tabelaPeriodica.js";

tabelaPeriodica.forEach(elemento => criarBotao(elemento))
formatarBotoes()
determinarCoresDosElementos()
validacaoFiltroCategoria()
toggleBtnVerDetalhes()

const listaDeBotoes = document.querySelectorAll('.elementos button').forEach(btn => selecionarElemento(btn))

/**
 * Falta implementar os ultimos 18 elementos (ponto de fusão, ebulição e raio atomico)
 * Fazer a lógica de selecionar o primeiro elemento
 * Elaborar uma especie de introdução ao site, como no pomodoro ou no buywise
 * */