import { criarBotao } from "./script/criarBotao.js";
import { determinarCoresDosElementos } from "./script/determinarCoresBtns.js";
import { validacaoFiltroCategoria } from "./script/filtro.js";
import { formatarBotoes } from "./script/formatarBotoes.js";
import { selecionarElemento } from "./script/selecionarElemento.js";
import { definirPrimeiroElemento} from "./script/selecionarPrimeiroElemento.js";
import { tabelaPeriodica } from "./script/tabelaPeriodica.js";


tabelaPeriodica.forEach(elemento => criarBotao(elemento))
formatarBotoes()
determinarCoresDosElementos()
validacaoFiltroCategoria()

// Selecionando o elemento
document.querySelectorAll('.elementos button').forEach(btn => selecionarElemento(btn))

definirPrimeiroElemento()

/**
 * 
 * Olhar esse video https://www.youtube.com/watch?v=cgSWQGx5S7Q
 * */