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
 * FALTA COLOCAR OS OUTROS DADOS E REVER OS MESMOS POIS TEM ALGUMAS DIVERGENCIAS ENTRE ELES
 * REVER O ESTILO DO CABEÇALHO
 * */