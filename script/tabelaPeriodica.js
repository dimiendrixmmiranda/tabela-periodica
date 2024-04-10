export const tabelaPeriodica = [
    {
        nome: "Hidrogênio",
        categoria: "nao-metal",
        sigla: "H",
        numeroAtomico: 1,
        massaAtomica: 1.008,
        configuracaoEletronica: "1s¹",
        grupo: 1,
        periodo: 1,
        raioAtomico: 53, // Valor aproximado em pm
        estadoNatural: "Gasoso",
        pontoDeFusao: -259.14, // Em °C
        pontoDeEbulicao: -252.87, // Em °C
        densidade: 0.08988, // Em g/L
        eletronegatividade: 2.20, // Valor aproximado
        aplicacoesComuns: ["Produção de amônia", "Hidrogenação de óleos", "Propulsão de foguetes"],
        decomposicao: {
            protons: 1,
            eletrons: 1,
            neutrons: 0 // No hidrogênio, número de nêutrons é geralmente 0
        }
    },
    {
        nome: 'Hélio',
        categoria: "gas-nobre",
        sigla: "He",
        numeroAtomico: 2,
        massaAtomica: 4.0026,
        configuracaoEletronica: "1s²",
        grupo: 18,
        periodo: 1,
        raioAtomico: 31, // Valor aproximado em pm
        estadoNatural: "Gasoso",
        pontoDeFusao: -272.2, // Em °C
        pontoDeEbulicao: -268.9, // Em °C
        densidade: 0.1786, // Em g/L
        eletronegatividade: null, // Não disponível para gases nobres
        aplicacoesComuns: ["Enchimento de balões", "Ar de proteção em soldagem"],
        decomposicao: {
            protons: 2,
            eletrons: 2,
            neutrons: 2 // Para o hélio, o número de nêutrons é geralmente igual ao número de prótons
        },
    },
    {
        nome: 'Lítio',
        categoria: "metal-alcalino",
        sigla: "Li",
        numeroAtomico: 3,
        massaAtomica: 6.94,
        configuracaoEletronica: "[He] 2s¹",
        grupo: 1,
        periodo: 2,
        raioAtomico: 145, // Valor aproximado em pm
        estadoNatural: "Sólido",
        pontoDeFusao: 180.54, // Em °C
        pontoDeEbulicao: 1347, // Em °C
        densidade: 0.534, // Em g/cm³
        eletronegatividade: 0.98, // Valor aproximado
        aplicacoesComuns: ["Baterias de íon-lítio", "Ligas metálicas"],
        decomposicao: {
            protons: 3,
            eletrons: 3,
            neutrons: 4 // O número de nêutrons pode variar, mas geralmente é próximo ao número de prótons
        },
    },
    {
        nome: "Berílio",
        categoria: "metal-alcalino-terroso",
        sigla: "Be",
        numeroAtomico: 4,
        massaAtomica: 9.0121831,
        configuracaoEletronica: "[He] 2s²",
        grupo: 2,
        periodo: 2,
        raioAtomico: 112, // Valor aproximado em pm
        estadoNatural: "Sólido",
        pontoDeFusao: 1287, // Em °C
        pontoDeEbulicao: 2470, // Em °C
        densidade: 1.85, // Em g/cm³
        eletronegatividade: 1.57, // Valor aproximado
        aplicacoesComuns: ["Ligas de metal para aeroespacial", "Componentes eletrônicos"],
        decomposicao: {
            protons: 4,
            eletrons: 4,
            neutrons: 5 // O número de nêutrons pode variar, mas geralmente é próximo ao número de prótons
        },
    },
    {
        nome: "Boro",
        categoria: "semimetal",
        sigla: "B",
        numeroAtomico: 5,
        massaAtomica: 10.81,
        configuracaoEletronica: "[He] 2s² 2p¹",
        grupo: 13,
        periodo: 2,
        raioAtomico: 87, // Valor aproximado em pm
        estadoNatural: "Sólido",
        pontoDeFusao: 2075, // Em °C
        pontoDeEbulicao: 4000, // Em °C
        densidade: 2.34, // Em g/cm³
        eletronegatividade: 2.04, // Valor aproximado
        aplicacoesComuns: ["Fibras de vidro", "Borossilicato de vidro (ex: pirex)", "Reforço em materiais compostos"],
        decomposicao: {
            protons: 5,
            eletrons: 5,
            neutrons: 6 // O número de nêutrons pode variar, mas geralmente é próximo ao número de prótons
        },
    },
    {
        nome: "Carbono",
        categoria: "nao-metal",
        sigla: "C",
        numeroAtomico: 6,
        massaAtomica: 12.011,
        configuracaoEletronica: "[He] 2s² 2p²",
        grupo: 14,
        periodo: 2,
        raioAtomico: 67, // Valor aproximado em pm
        estadoNatural: "Sólido",
        pontoDeFusao: 3550, // Em °C
        pontoDeEbulicao: 4027, // Em °C
        densidade: 2.267, // Em g/cm³
        eletronegatividade: 2.55, // Valor aproximado
        aplicacoesComuns: ["Construção de materiais compostos (ex: fibra de carbono)", "Baterias de íon-lítio", "Catálise"],
        decomposicao: {
            protons: 6,
            eletrons: 6,
            neutrons: 6 // O número de nêutrons pode variar, mas geralmente é próximo ao número de prótons
        },
    },
    {
        nome: 'Nitrogênio',
        categoria: "nao-metal",
        sigla: "N",
        numeroAtomico: 7,
        massaAtomica: 14.007,
        configuracaoEletronica: "[He] 2s² 2p³",
        grupo: 15,
        periodo: 2,
        raioAtomico: 56, // Valor aproximado em pm
        estadoNatural: "Gasoso",
        pontoDeFusao: -210.1, // Em °C
        pontoDeEbulicao: -195.79, // Em °C
        densidade: 0.001251, // Em g/cm³
        eletronegatividade: 3.04, // Valor aproximado
        aplicacoesComuns: ["Produção de amônia", "Fertilizantes", "Indústria alimentícia"],
        decomposicao: {
            protons: 7,
            eletrons: 7,
            neutrons: 7 // O número de nêutrons pode variar, mas geralmente é próximo ao número de prótons
        },
    },
    {
        nome: 'Oxigênio',
        categoria: "nao-metal",
        sigla: "O",
        numeroAtomico: 8,
        massaAtomica: 15.999,
        configuracaoEletronica: "[He] 2s² 2p⁴",
        grupo: 16,
        periodo: 2,
        raioAtomico: 48, // Valor aproximado em pm
        estadoNatural: "Gasoso",
        pontoDeFusao: -218.79, // Em °C
        pontoDeEbulicao: -182.95, // Em °C
        densidade: 0.001429, // Em g/cm³
        eletronegatividade: 3.44, // Valor aproximado
        aplicacoesComuns: ["Respiração", "Oxigenoterapia", "Combustíveis e oxidantes"],
        decomposicao: {
            protons: 8,
            eletrons: 8,
            neutrons: 8 // O número de nêutrons pode variar, mas geralmente é próximo ao número de prótons
        },
    },
    {
        nome: "Flúor",
        categoria: "halogenios",
        sigla: "F",
        numeroAtomico: 9,
        massaAtomica: 18.998403163,
        configuracaoEletronica: "[He] 2s² 2p⁵",
        grupo: 17,
        periodo: 2,
        raioAtomico: 42, // Valor aproximado em pm
        estadoNatural: "Gasoso",
        pontoDeFusao: -219.62, // Em °C
        pontoDeEbulicao: -188.12, // Em °C
        densidade: 0.001696, // Em g/cm³
        eletronegatividade: 3.98, // Valor aproximado
        aplicacoesComuns: ["Odontologia", "Tratamento de água", "Produção de compostos químicos"],
        decomposicao: {
            protons: 9,
            eletrons: 9,
            neutrons: 10 // O número de nêutrons pode variar, mas geralmente é próximo ao número de prótons
        },
    },
    {
        nome: "Neônio",
        categoria: "gas-nobre",
        sigla: "Ne",
        numeroAtomico: 10,
        massaAtomica: 20.1797,
        configuracaoEletronica: "[He] 2s² 2p⁶",
        grupo: 18,
        periodo: 2,
        raioAtomico: 38, // Valor aproximado em pm
        estadoNatural: "Gasoso",
        pontoDeFusao: -248.59, // Em °C
        pontoDeEbulicao: -246.08, // Em °C
        densidade: 0.0009, // Em g/cm³
        eletronegatividade: null, // Não disponível para gases nobres
        aplicacoesComuns: ["Lâmpadas de néon", "Indicadores luminosos", "Enchimento de tubos de descarga"],
        decomposicao: {
            protons: 10,
            eletrons: 10,
            neutrons: 10 // Para os gases nobres, o número de nêutrons é geralmente igual ao número de prótons
        },
    },
    {
        sigla: "Na",
        nome: 'Sódio',
        numeroAtomico: 11,
        massaAtomica: 22.98976928,
        configuracaoEletronica: "[Ne] 3s¹",
        grupo: 1,
        periodo: 3,
        raioAtomico: 186, // Valor aproximado em pm
        estadoNatural: "Sólido",
        pontoDeFusao: 97.72, // Em °C
        pontoDeEbulicao: 882.9, // Em °C
        densidade: 0.97, // Em g/cm³
        eletronegatividade: 0.93, // Valor aproximado
        aplicacoesComuns: ["Produção de ligas metálicas", "Indústria alimentícia", "Baterias de sódio"],
        decomposicao: {
            protons: 11,
            eletrons: 11,
            neutrons: 12 // O número de nêutrons pode variar, mas geralmente é próximo ao número de prótons
        },
        categoria: "metal-alcalino"
    },
    {
        sigla: "Mg",
        nome: "Magnésio",
        numeroAtomico: 12,
        massaAtomica: 24.305,
        configuracaoEletronica: "[Ne] 3s²",
        grupo: 2,
        periodo: 3,
        raioAtomico: 160, // Valor aproximado em pm
        estadoNatural: "Sólido",
        pontoDeFusao: 650, // Em °C
        pontoDeEbulicao: 1090, // Em °C
        densidade: 1.74, // Em g/cm³
        eletronegatividade: 1.31, // Valor aproximado
        aplicacoesComuns: ["Ligas metálicas", "Medicamentos (ex: leite de magnésia)", "Pirrotecnia"],
        decomposicao: {
            protons: 12,
            eletrons: 12,
            neutrons: 12 // O número de nêutrons pode variar, mas geralmente é próximo ao número de prótons
        },
        categoria: "metal-alcalino-terroso"
    },
    {
        sigla: "Al",
        nome: "Alumínio",
        numeroAtomico: 13,
        massaAtomica: 26.9815386,
        configuracaoEletronica: "[Ne] 3s² 3p¹",
        grupo: 13,
        periodo: 3,
        raioAtomico: 143, // Valor aproximado em pm
        estadoNatural: "Sólido",
        pontoDeFusao: 660.32, // Em °C
        pontoDeEbulicao: 2467, // Em °C
        densidade: 2.70, // Em g/cm³
        eletronegatividade: 1.61, // Valor aproximado
        aplicacoesComuns: ["Construção de estruturas", "Embalagens", "Equipamentos elétricos"],
        decomposicao: {
            protons: 13,
            eletrons: 13,
            neutrons: 14 // O número de nêutrons pode variar, mas geralmente é próximo ao número de prótons
        },
        categoria: "outros-metais"
    },
    {
        sigla: "Si",
        nome: "Silício",
        numeroAtomico: 14,
        massaAtomica: 28.085,
        configuracaoEletronica: "[Ne] 3s² 3p²",
        grupo: 14,
        periodo: 3,
        raioAtomico: 117, // Valor aproximado em pm
        estadoNatural: "Sólido",
        pontoDeFusao: 1414, // Em °C
        pontoDeEbulicao: 3265, // Em °C
        densidade: 2.3296, // Em g/cm³
        eletronegatividade: 1.90, // Valor aproximado
        aplicacoesComuns: ["Fabricação de chips e semicondutores", "Vidros (ex: vidro de janelas)"],
        decomposicao: {
            protons: 14,
            eletrons: 14,
            neutrons: 14 // O número de nêutrons pode variar, mas geralmente é próximo ao número de prótons
        },
        categoria: "semimetal"
    },
    {
        sigla: "P",
        nome: "Fósforo",
        numeroAtomico: 15,
        massaAtomica: 30.973761998,
        configuracaoEletronica: "[Ne] 3s² 3p³",
        grupo: 15,
        periodo: 3,
        raioAtomico: 110, // Valor aproximado em pm
        estadoNatural: "Sólido",
        pontoDeFusao: 44.15, // Em °C
        pontoDeEbulicao: 280.5, // Em °C
        densidade: 1.82, // Em g/cm³
        eletronegatividade: 2.19, // Valor aproximado
        aplicacoesComuns: ["Fertilizantes", "Fósforos", "Produtos químicos"],
        decomposicao: {
            protons: 15,
            eletrons: 15,
            neutrons: 16 // O número de nêutrons pode variar, mas geralmente é próximo ao número de prótons
        },
        categoria: "nao-metal"
    },
    {
        sigla: "S",
        nome: 'Enxofre',
        numeroAtomico: 16,
        massaAtomica: 32.06,
        configuracaoEletronica: "[Ne] 3s² 3p⁴",
        grupo: 16,
        periodo: 3,
        raioAtomico: 100, // Valor aproximado em pm
        estadoNatural: "Sólido",
        pontoDeFusao: 115.21, // Em °C
        pontoDeEbulicao: 444.72, // Em °C
        densidade: 2.07, // Em g/cm³
        eletronegatividade: 2.58, // Valor aproximado
        aplicacoesComuns: ["Indústria de fertilizantes", "Produção de ácido sulfúrico", "Produtos de cuidado pessoal"],
        decomposicao: {
            protons: 16,
            eletrons: 16,
            neutrons: 16 // O número de nêutrons pode variar, mas geralmente é próximo ao número de prótons
        },
        categoria: "nao-metal"
    },
    {
        nome: 'Cloro',
        sigla: "Cl",
        numeroAtomico: 17,
        massaAtomica: 35.45,
        configuracaoEletronica: "[Ne] 3s² 3p⁵",
        grupo: 17,
        periodo: 3,
        raioAtomico: 79, // Valor aproximado em pm
        estadoNatural: "Gasoso",
        pontoDeFusao: -101.5, // Em °C
        pontoDeEbulicao: -34.04, // Em °C
        densidade: 0.003214, // Em g/cm³
        eletronegatividade: 3.16, // Valor aproximado
        aplicacoesComuns: ["Desinfetante", "Produção de PVC", "Branqueamento de água"],
        decomposicao: {
            protons: 17,
            eletrons: 17,
            neutrons: 18 // O número de nêutrons pode variar, mas geralmente é próximo ao número de prótons
        },
        categoria: "halogenios"
    },
    {
        nome: "Argônio",
        sigla: "Ar",
        numeroAtomico: 18,
        massaAtomica: 39.948,
        configuracaoEletronica: "[Ne] 3s² 3p⁶",
        grupo: 18,
        periodo: 3,
        raioAtomico: 71, // Valor aproximado em pm
        estadoNatural: "Gasoso",
        pontoDeFusao: -189.36, // Em °C
        pontoDeEbulicao: -185.85, // Em °C
        densidade: 0.001784, // Em g/cm³
        eletronegatividade: null, // Não disponível para gases nobres
        aplicacoesComuns: ["Enchimento de lâmpadas incandescentes", "Ambientes de proteção em soldagem", "Preservação de amostras químicas"],
        decomposicao: {
            protons: 18,
            eletrons: 18,
            neutrons: 22 // Para os gases nobres, o número de nêutrons é geralmente igual ao número de prótons
        },
        categoria: "gas-nobre"
    },
    {
        nome: "Potássio",
        sigla: "K",
        numeroAtomico: 19,
        massaAtomica: 39.0983,
        configuracaoEletronica: "[Ar] 4s¹",
        grupo: 1,
        periodo: 4,
        raioAtomico: 243, // Valor aproximado em pm
        estadoNatural: "Sólido",
        pontoDeFusao: 63.38, // Em °C
        pontoDeEbulicao: 759.9, // Em °C
        densidade: 0.89, // Em g/cm³
        eletronegatividade: 0.82, // Valor aproximado
        aplicacoesComuns: ["Fertilizantes", "Indústria farmacêutica", "Alimentos para enriquecimento de potássio"],
        decomposicao: {
            protons: 19,
            eletrons: 19,
            neutrons: 20 // O número de nêutrons pode variar, mas geralmente é próximo ao número de prótons
        },
        categoria: "metal-alcalino"
    },
    {
        nome: "Cálcio",
        sigla: "Ca",
        numeroAtomico: 20,
        massaAtomica: 40.078,
        configuracaoEletronica: "[Ar] 4s²",
        grupo: 2,
        periodo: 4,
        raioAtomico: 194, // Valor aproximado em pm
        estadoNatural: "Sólido",
        pontoDeFusao: 842, // Em °C
        pontoDeEbulicao: 1484, // Em °C
        densidade: 1.55, // Em g/cm³
        eletronegatividade: 1, // Valor aproximado
        aplicacoesComuns: ["Produção de ligas metálicas", "Construção de estruturas", "Suplementos alimentares"],
        decomposicao: {
            protons: 20,
            eletrons: 20,
            neutrons: 20 // O número de nêutrons pode variar, mas geralmente é próximo ao número de prótons
        },
        categoria: "metal-alcalino-terroso"
    },
    {
        nome: "Escândio",
        sigla: "Sc",
        numeroAtomico: 21,
        massaAtomica: 44.955908,
        configuracaoEletronica: "[Ar] 3d¹ 4s²",
        grupo: 3,
        periodo: 4,
        raioAtomico: 162, // Valor aproximado em pm
        estadoNatural: "Sólido",
        pontoDeFusao: 1541, // Em °C
        pontoDeEbulicao: 2836, // Em °C
        densidade: 2.985, // Em g/cm³
        eletronegatividade: 1.36, // Valor aproximado
        aplicacoesComuns: ["Ligas de alumínio", "Componentes de lâmpadas de vapor de mercúrio", "Sensores"],
        decomposicao: {
            protons: 21,
            eletrons: 21,
            neutrons: 24 // O número de nêutrons pode variar, mas geralmente é próximo ao número de prótons
        },
        categoria: "metal-de-transicao"
    },
    {
        nome: "Titânio",
        sigla: "Ti",
        numeroAtomico: 22,
        massaAtomica: 47.867,
        configuracaoEletronica: "[Ar] 3d² 4s²",
        grupo: 4,
        periodo: 4,
        raioAtomico: 147, // Valor aproximado em pm
        estadoNatural: "Sólido",
        pontoDeFusao: 1668, // Em °C
        pontoDeEbulicao: 3287, // Em °C
        densidade: 4.506, // Em g/cm³
        eletronegatividade: 1.54, // Valor aproximado
        aplicacoesComuns: ["Aeronáutica", "Indústria naval", "Implantes médicos"],
        decomposicao: {
            protons: 22,
            eletrons: 22,
            neutrons: 26 // O número de nêutrons pode variar, mas geralmente é próximo ao número de prótons
        },
        categoria: "metal-de-transicao"
    },
    {
        nome: "Vanádio",
        sigla: "V",
        numeroAtomico: 23,
        massaAtomica: 50.9415,
        configuracaoEletronica: "[Ar] 3d³ 4s²",
        grupo: 5,
        periodo: 4,
        raioAtomico: 134, // Valor aproximado em pm
        estadoNatural: "Sólido",
        pontoDeFusao: 1910, // Em °C
        pontoDeEbulicao: 3407, // Em °C
        densidade: 6.11, // Em g/cm³
        eletronegatividade: 1.63, // Valor aproximado
        aplicacoesComuns: ["Ligas metálicas", "Componentes de aço", "Catalisadores químicos"],
        decomposicao: {
            protons: 23,
            eletrons: 23,
            neutrons: 28 // O número de nêutrons pode variar, mas geralmente é próximo ao número de prótons
        },
        categoria: "metal-de-transicao"
    },
    {
        nome: "Crômio",
        sigla: "Cr",
        numeroAtomico: 24,
        massaAtomica: 51.9961,
        configuracaoEletronica: "[Ar] 3d⁵ 4s¹",
        grupo: 6,
        periodo: 4,
        raioAtomico: 128, // Valor aproximado em pm
        estadoNatural: "Sólido",
        pontoDeFusao: 1907, // Em °C
        pontoDeEbulicao: 2671, // Em °C
        densidade: 7.19, // Em g/cm³
        eletronegatividade: 1.66, // Valor aproximado
        aplicacoesComuns: ["Fabricação de aço inoxidável", "Cromagem", "Pigmentos"],
        decomposicao: {
            protons: 24,
            eletrons: 24,
            neutrons: 28 // O número de nêutrons pode variar, mas geralmente é próximo ao número de prótons
        },
        categoria: "metal-de-transicao"
    },
    {
        nome: "Manganês",
        sigla: "Mn",
        numeroAtomico: 25,
        massaAtomica: 54.938044,
        configuracaoEletronica: "[Ar] 3d⁵ 4s²",
        grupo: 7,
        periodo: 4,
        raioAtomico: 127, // Valor aproximado em pm
        estadoNatural: "Sólido",
        pontoDeFusao: 1246, // Em °C
        pontoDeEbulicao: 2061, // Em °C
        densidade: 7.21, // Em g/cm³
        eletronegatividade: 1.55, // Valor aproximado
        aplicacoesComuns: ["Produção de aço", "Baterias recarregáveis", "Pigmentos para tintas"],
        decomposicao: {
            protons: 25,
            eletrons: 25,
            neutrons: 30 // O número de nêutrons pode variar, mas geralmente é próximo ao número de prótons
        },
        categoria: "metal-de-transicao"
    },
    {
        nome: "Ferro",
        sigla: "Fe",
        numeroAtomico: 26,
        massaAtomica: 55.845,
        configuracaoEletronica: "[Ar] 3d⁶ 4s²",
        grupo: 8,
        periodo: 4,
        raioAtomico: 126, // Valor aproximado em pm
        estadoNatural: "Sólido",
        pontoDeFusao: 1538, // Em °C
        pontoDeEbulicao: 2862, // Em °C
        densidade: 7.87, // Em g/cm³
        eletronegatividade: 1.83, // Valor aproximado
        aplicacoesComuns: ["Indústria metalúrgica", "Construção", "Produção de aço"],
        decomposicao: {
            protons: 26,
            eletrons: 26,
            neutrons: 30 // O número de nêutrons pode variar, mas geralmente é próximo ao número de prótons
        },
        categoria: "metal-de-transicao"
    },
    {
        nome: "Cobalto",
        sigla: "Co",
        numeroAtomico: 27,
        massaAtomica: 58.933194,
        configuracaoEletronica: "[Ar] 3d⁷ 4s²",
        grupo: 9,
        periodo: 4,
        raioAtomico: 125, // Valor aproximado em pm
        estadoNatural: "Sólido",
        pontoDeFusao: 1495, // Em °C
        pontoDeEbulicao: 2870, // Em °C
        densidade: 8.86, // Em g/cm³
        eletronegatividade: 1.88, // Valor aproximado
        aplicacoesComuns: ["Magnetos", "Baterias recarregáveis", "Produção de ligas metálicas"],
        decomposicao: {
            protons: 27,
            eletrons: 27,
            neutrons: 32 // O número de nêutrons pode variar, mas geralmente é próximo ao número de prótons
        },
        categoria: "metal-de-transicao"
    },
    {
        nome: "Níquel",
        sigla: "Ni",
        numeroAtomico: 28,
        massaAtomica: 58.6934,
        configuracaoEletronica: "[Ar] 3d⁸ 4s²",
        grupo: 10,
        periodo: 4,
        raioAtomico: 124, // Valor aproximado em pm
        estadoNatural: "Sólido",
        pontoDeFusao: 1455, // Em °C
        pontoDeEbulicao: 2913, // Em °C
        densidade: 8.91, // Em g/cm³
        eletronegatividade: 1.91, // Valor aproximado
        aplicacoesComuns: ["Revestimento metálico", "Baterias recarregáveis", "Produção de ligas de aço"],
        decomposicao: {
            protons: 28,
            eletrons: 28,
            neutrons: 31 // O número de nêutrons pode variar, mas geralmente é próximo ao número de prótons
        },
        categoria: "metal-de-transicao"
    },
    {
        nome: "Cobre",
        sigla: "Cu",
        numeroAtomico: 29,
        massaAtomica: 63.546,
        configuracaoEletronica: "[Ar] 3d¹⁰ 4s¹",
        grupo: 11,
        periodo: 4,
        raioAtomico: 128, // Valor aproximado em pm
        estadoNatural: "Sólido",
        pontoDeFusao: 1084.62, // Em °C
        pontoDeEbulicao: 2562, // Em °C
        densidade: 8.96, // Em g/cm³
        eletronegatividade: 1.90, // Valor aproximado
        aplicacoesComuns: ["Condutores elétricos", "Componentes de eletrônicos", "Construção civil"],
        decomposicao: {
            protons: 29,
            eletrons: 29,
            neutrons: 35 // O número de nêutrons pode variar, mas geralmente é próximo ao número de prótons
        },
        categoria: "metal-de-transicao"
    },
    {
        nome: "Zinco",
        sigla: "Zn",
        numeroAtomico: 30,
        massaAtomica: 65.38,
        configuracaoEletronica: "[Ar] 3d¹⁰ 4s²",
        grupo: 12,
        periodo: 4,
        raioAtomico: 131, // Valor aproximado em pm
        estadoNatural: "Sólido",
        pontoDeFusao: 419.53, // Em °C
        pontoDeEbulicao: 907, // Em °C
        densidade: 7.14, // Em g/cm³
        eletronegatividade: 1.65, // Valor aproximado
        aplicacoesComuns: ["Galvanização", "Produção de ligas metálicas", "Pilhas e baterias"],
        decomposicao: {
            protons: 30,
            eletrons: 30,
            neutrons: 35 // O número de nêutrons pode variar, mas geralmente é próximo ao número de prótons
        },
        categoria: "metal-de-transicao"
    },
    {
        nome: "Gálio",
        sigla: "Ga",
        numeroAtomico: 31,
        massaAtomica: 69.723,
        configuracaoEletronica: "[Ar] 3d¹⁰ 4s² 4p¹",
        grupo: 13,
        periodo: 4,
        raioAtomico: 136, // Valor aproximado em pm
        estadoNatural: "Sólido",
        pontoDeFusao: 29.76, // Em °C
        pontoDeEbulicao: 2204, // Em °C
        densidade: 5.904, // Em g/cm³
        eletronegatividade: 1.81, // Valor aproximado
        aplicacoesComuns: ["Semicondutores", "Lasers", "Sensores ópticos"],
        decomposicao: {
            protons: 31,
            eletrons: 31,
            neutrons: 39 // O número de nêutrons pode variar, mas geralmente é próximo ao número de prótons
        },
        categoria: "outros-metais"
    },
    {
        nome: "Germânio",
        sigla: "Ge",
        numeroAtomico: 32,
        massaAtomica: 72.63,
        configuracaoEletronica: "[Ar] 3d¹⁰ 4s² 4p²",
        grupo: 14,
        periodo: 4,
        raioAtomico: 125, // Valor aproximado em pm
        estadoNatural: "Sólido",
        pontoDeFusao: 938.25, // Em °C
        pontoDeEbulicao: 2833, // Em °C
        densidade: 5.323, // Em g/cm³
        eletronegatividade: 2.01, // Valor aproximado
        aplicacoesComuns: ["Semicondutores", "Óptica", "Células solares"],
        decomposicao: {
            protons: 32,
            eletrons: 32,
            neutrons: 41 // O número de nêutrons pode variar, mas geralmente é próximo ao número de prótons
        },
        categoria: "semimetal"
    },
    {
        nome: "Arsênio",
        sigla: "As",
        numeroAtomico: 33,
        massaAtomica: 74.92160,
        configuracaoEletronica: "[Ar] 3d¹⁰ 4s² 4p³",
        grupo: 15,
        periodo: 4,
        raioAtomico: 114, // Valor aproximado em pm
        estadoNatural: "Sólido",
        pontoDeFusao: 817, // Em °C
        pontoDeEbulicao: 613, // Em °C
        densidade: 5.776, // Em g/cm³
        eletronegatividade: 2.18, // Valor aproximado
        aplicacoesComuns: ["Veneno de rato", "Indústria de semicondutores", "Tratamento de madeira"],
        decomposicao: {
            protons: 33,
            eletrons: 33,
            neutrons: 42 // O número de nêutrons pode variar, mas geralmente é próximo ao número de prótons
        },
        categoria: "semimetal"
    },
    {
        nome: "Selênio",
        sigla: "Se",
        numeroAtomico: 34,
        massaAtomica: 78.971,
        configuracaoEletronica: "[Ar] 3d¹⁰ 4s² 4p⁴",
        grupo: 16,
        periodo: 4,
        raioAtomico: 120, // Valor aproximado em pm
        estadoNatural: "Sólido",
        pontoDeFusao: 221, // Em °C
        pontoDeEbulicao: 685, // Em °C
        densidade: 4.81, // Em g/cm³
        eletronegatividade: 2.55, // Valor aproximado
        aplicacoesComuns: ["Fotocélulas", "Indústria de vidro", "Suplementos alimentares"],
        decomposicao: {
            protons: 34,
            eletrons: 34,
            neutrons: 45 // O número de nêutrons pode variar, mas geralmente é próximo ao número de prótons
        },
        categoria: "nao-metal"
    },
    {
        nome: "Bromo",
        sigla: "Br",
        numeroAtomico: 35,
        massaAtomica: 79.904,
        configuracaoEletronica: "[Ar] 3d¹⁰ 4s² 4p⁵",
        grupo: 17,
        periodo: 4,
        raioAtomico: 114, // Valor aproximado em pm
        estadoNatural: "Líquido",
        pontoDeFusao: -7.2, // Em °C
        pontoDeEbulicao: 58.8, // Em °C
        densidade: 3.1028, // Em g/cm³
        eletronegatividade: 2.96, // Valor aproximado
        aplicacoesComuns: ["Desinfetantes", "Produtos farmacêuticos", "Retardadores de chama"],
        decomposicao: {
            protons: 35,
            eletrons: 35,
            neutrons: 45 // O número de nêutrons pode variar, mas geralmente é próximo ao número de prótons
        },
        categoria: "halogenios"
    },
    {
        nome: "Criptônio",
        sigla: "Kr",
        numeroAtomico: 36,
        massaAtomica: 83.798,
        configuracaoEletronica: "[Ar] 3d¹⁰ 4s² 4p⁶",
        grupo: 18,
        periodo: 4,
        raioAtomico: 88, // Valor aproximado em pm
        estadoNatural: "Gasoso",
        pontoDeFusao: -157.36, // Em °C
        pontoDeEbulicao: -153.22, // Em °C
        densidade: 0.003733, // Em g/cm³
        eletronegatividade: null, // Não disponível para gases nobres
        aplicacoesComuns: ["Iluminação em lasers", "Iluminação em lâmpadas", "Criptografia quântica"],
        decomposicao: {
            protons: 36,
            eletrons: 36,
            neutrons: 48 // O número de nêutrons pode variar, mas geralmente é próximo ao número de prótons
        },
        categoria: "gas-nobre"
    },
    {
        nome: "Rubídio",
        sigla: "Rb",
        numeroAtomico: 37,
        massaAtomica: 85.4678,
        configuracaoEletronica: "[Kr] 5s¹",
        grupo: 1,
        periodo: 5,
        raioAtomico: 265, // Valor aproximado em pm
        estadoNatural: "Sólido",
        pontoDeFusao: 39.31, // Em °C
        pontoDeEbulicao: 688, // Em °C
        densidade: 1.532, // Em g/cm³
        eletronegatividade: 0.82, // Valor aproximado
        aplicacoesComuns: ["Componente em relógios atômicos", "Produção de vidro especial", "Produção de ligas metálicas"],
        decomposicao: {
            protons: 37,
            eletrons: 37,
            neutrons: 48 // O número de nêutrons pode variar, mas geralmente é próximo ao número de prótons
        },
        categoria: "metal-alcalino"
    },
    {
        nome: "Estrôncio",
        sigla: "Sr",
        numeroAtomico: 38,
        massaAtomica: 87.62,
        configuracaoEletronica: "[Kr] 5s²",
        grupo: 2,
        periodo: 5,
        raioAtomico: 219, // Valor aproximado em pm
        estadoNatural: "Sólido",
        pontoDeFusao: 769, // Em °C
        pontoDeEbulicao: 1384, // Em °C
        densidade: 2.64, // Em g/cm³
        eletronegatividade: 0.95, // Valor aproximado
        aplicacoesComuns: ["Pirotecnia (fogo de artifício)", "Produção de fogos luminosos", "Ligas metálicas"],
        decomposicao: {
            protons: 38,
            eletrons: 38,
            neutrons: 50 // O número de nêutrons pode variar, mas geralmente é próximo ao número de prótons
        },
        categoria: "metal-alcalino-terroso"
    },
    {
        nome: "Ítrio",
        sigla: "Y",
        numeroAtomico: 39,
        massaAtomica: 88.90584,
        configuracaoEletronica: "[Kr] 4d¹ 5s²",
        grupo: 3,
        periodo: 5,
        raioAtomico: 212, // Valor aproximado em pm
        estadoNatural: "Sólido",
        pontoDeFusao: 1523, // Em °C
        pontoDeEbulicao: 3337, // Em °C
        densidade: 4.472, // Em g/cm³
        eletronegatividade: 1.22, // Valor aproximado
        aplicacoesComuns: ["Supercondutores", "Fósforos vermelhos", "Ligas de alumínio e magnésio"],
        decomposicao: {
            protons: 39,
            eletrons: 39,
            neutrons: 50 // O número de nêutrons pode variar, mas geralmente é próximo ao número de prótons
        },
        categoria: "metal-de-transicao"
    },
    {
        nome: "Zircônio",
        sigla: "Zr",
        numeroAtomico: 40,
        massaAtomica: 91.224,
        configuracaoEletronica: "[Kr] 4d² 5s²",
        grupo: 4,
        periodo: 5,
        raioAtomico: 206, // Valor aproximado em pm
        estadoNatural: "Sólido",
        pontoDeFusao: 1855, // Em °C
        pontoDeEbulicao: 4409, // Em °C
        densidade: 6.52, // Em g/cm³
        eletronegatividade: 1.33, // Valor aproximado
        aplicacoesComuns: ["Revestimentos de reatores nucleares", "Peças de aeronaves", "Fabricação de ligas metálicas"],
        decomposicao: {
            protons: 40,
            eletrons: 40,
            neutrons: 51 // O número de nêutrons pode variar, mas geralmente é próximo ao número de prótons
        },
        categoria: "metal-de-transicao"
    },
    {
        nome: "Nióbio",
        sigla: "Nb",
        numeroAtomico: 41,
        massaAtomica: 92.90638,
        configuracaoEletronica: "[Kr] 4d^4 5s^1",
        grupo: 5,
        periodo: 5,
        raioAtomico: 198, // Valor aproximado em pm
        estadoNatural: "Sólido",
        pontoDeFusao: 2477, // Em °C
        pontoDeEbulicao: 4744, // Em °C
        densidade: 8.57, // Em g/cm³
        eletronegatividade: 1.6, // Valor aproximado
        aplicacoesComuns: ["Superligas de alta resistência", "Componentes de motores a jato", "Equipamentos de processamento químico"],
        decomposicao: {
            protons: 41,
            eletrons: 41,
            neutrons: 52 // O número de nêutrons pode variar, mas geralmente é próximo ao número de prótons
        },
        categoria: "metal-de-transicao"
    },
    {
        nome: "Molibdênio",
        sigla: "Mo",
        numeroAtomico: 42,
        massaAtomica: 95.95,
        configuracaoEletronica: "[Kr] 4d⁵ 5s¹",
        grupo: 6,
        periodo: 5,
        raioAtomico: 190, // Valor aproximado em pm
        estadoNatural: "Sólido",
        pontoDeFusao: 2623, // Em °C
        pontoDeEbulicao: 4639, // Em °C
        densidade: 10.28, // Em g/cm³
        eletronegatividade: 2.16, // Valor aproximado
        aplicacoesComuns: ["Aço inoxidável", "Catalisadores", "Eletrônicos"],
        decomposicao: {
            protons: 42,
            eletrons: 42,
            neutrons: 54 // O número de nêutrons pode variar, mas geralmente é próximo ao número de prótons
        },
        categoria: "metal-de-transicao"
    },
    {
        nome: "Tecnécio",
        sigla: "Tc",
        numeroAtomico: 43,
        massaAtomica: "Variável",
        configuracaoEletronica: "[Kr] 4d⁵ 5s²",
        grupo: 7,
        periodo: 5,
        raioAtomico: "Desconhecido",
        estadoNatural: "Artificial",
        pontoDeFusao: "Desconhecido",
        pontoDeEbulicao: "Desconhecido",
        densidade: "Desconhecido",
        eletronegatividade: "Desconhecido",
        aplicacoesComuns: ["Medicina nuclear", "Marcadores radioativos"],
        decomposicao: {
            protons: 43,
            eletrons: 43,
            neutrons: "Variável" // Não possui isótopos estáveis
        },
        categoria: "metal-de-transicao"
    },
    {
        nome: "Rutênio",
        sigla: "Ru",
        numeroAtomico: 44,
        massaAtomica: 101.07,
        configuracaoEletronica: "[Kr] 4d^7 5s^1",
        grupo: 8,
        periodo: 5,
        raioAtomico: 207, // Valor aproximado em pm
        estadoNatural: "Sólido",
        pontoDeFusao: 2334, // Em °C
        pontoDeEbulicao: 4147, // Em °C
        densidade: 12.1, // Em g/cm³
        eletronegatividade: 2.2, // Valor aproximado
        aplicacoesComuns: ["Catalisador", "Eletrônicos", "Jóias"],
        decomposicao: {
            protons: 44,
            eletrons: 44,
            neutrons: 57 // O número de nêutrons pode variar, mas geralmente é próximo ao número de prótons
        },
        categoria: "metal-de-transicao"
    },
    {
        nome: "Ródio",
        sigla: "Rh",
        numeroAtomico: 45,
        massaAtomica: 102.90550,
        configuracaoEletronica: "[Kr] 4d^8 5s^1",
        grupo: 9,
        periodo: 5,
        raioAtomico: 195, // Valor aproximado em pm
        estadoNatural: "Sólido",
        pontoDeFusao: 1966, // Em °C
        pontoDeEbulicao: 3727, // Em °C
        densidade: 12.41, // Em g/cm³
        eletronegatividade: 2.28, // Valor aproximado
        aplicacoesComuns: ["Conversores catalíticos", "Jóias", "Eletrônicos"],
        decomposicao: {
            protons: 45,
            eletrons: 45,
            neutrons: 58 // O número de nêutrons pode variar, mas geralmente é próximo ao número de prótons
        },
        categoria: "metal-de-transicao"
    },
    {
        nome: "Paládio",
        sigla: "Pd",
        numeroAtomico: 46,
        massaAtomica: 106.42,
        configuracaoEletronica: "[Kr] 4d^10",
        grupo: 10,
        periodo: 5,
        raioAtomico: 202, // Valor aproximado em pm
        estadoNatural: "Sólido",
        pontoDeFusao: 1554.9, // Em °C
        pontoDeEbulicao: 2963, // Em °C
        densidade: 12.02, // Em g/cm³
        eletronegatividade: 2.20, // Valor aproximado
        aplicacoesComuns: ["Catalisadores", "Jóias", "Odontologia"],
        decomposicao: {
            protons: 46,
            eletrons: 46,
            neutrons: 60 // O número de nêutrons pode variar, mas geralmente é próximo ao número de prótons
        },
        categoria: "metal-de-transicao"
    },
    {
        nome: "Prata",
        sigla: "Ag",
        numeroAtomico: 47,
        massaAtomica: 107.8682,
        configuracaoEletronica: "[Kr] 4d^10 5s^1",
        grupo: 11,
        periodo: 5,
        raioAtomico: 172, // Valor aproximado em pm
        estadoNatural: "Sólido",
        pontoDeFusao: 961.8, // Em °C
        pontoDeEbulicao: 2162, // Em °C
        densidade: 10.49, // Em g/cm³
        eletronegatividade: 1.93, // Valor aproximado
        aplicacoesComuns: ["Jóias", "Moedas", "Eletrônicos"],
        decomposicao: {
            protons: 47,
            eletrons: 47,
            neutrons: 61 // O número de nêutrons pode variar, mas geralmente é próximo ao número de prótons
        },
        categoria: "metal-de-transicao"
    },
    {
        nome: "Cádmio",
        sigla: "Cd",
        numeroAtomico: 48,
        massaAtomica: 112.414,
        configuracaoEletronica: "[Kr] 4d¹⁰ 5s²",
        grupo: 12,
        periodo: 5,
        raioAtomico: 158, // Valor aproximado em pm
        estadoNatural: "Sólido",
        pontoDeFusao: 321.07, // Em °C
        pontoDeEbulicao: 767, // Em °C
        densidade: 8.65, // Em g/cm³
        eletronegatividade: 1.69, // Valor aproximado
        aplicacoesComuns: ["Baterias recarregáveis", "Pigmentos", "Eletrodeposição"],
        decomposicao: {
            protons: 48,
            eletrons: 48,
            neutrons: 64 // O número de nêutrons pode variar, mas geralmente é próximo ao número de prótons
        },
        categoria: "metal-de-transicao"
    },
    {
        nome: "Índio",
        sigla: "In",
        numeroAtomico: 49,
        massaAtomica: 114.818,
        configuracaoEletronica: "[Kr] 4d¹⁰ 5s² 5p¹",
        grupo: 13,
        periodo: 5,
        raioAtomico: 193, // Valor aproximado em pm
        estadoNatural: "Sólido",
        pontoDeFusao: 156.6, // Em °C
        pontoDeEbulicao: 2072, // Em °C
        densidade: 7.31, // Em g/cm³
        eletronegatividade: 1.78, // Valor aproximado
        aplicacoesComuns: ["Telas sensíveis ao toque", "Soldas", "Semicondutores"],
        decomposicao: {
            protons: 49,
            eletrons: 49,
            neutrons: 66 // O número de nêutrons pode variar, mas geralmente é próximo ao número de prótons
        },
        categoria: "outros-metais"
    },
    {
        nome: "Estanho",
        sigla: "Sn",
        numeroAtomico: 50,
        massaAtomica: 118.710,
        configuracaoEletronica: "[Kr] 4d¹⁰ 5s² 5p²",
        grupo: 14,
        periodo: 5,
        raioAtomico: 216, // Valor aproximado em pm
        estadoNatural: "Sólido",
        pontoDeFusao: 231.93, // Em °C
        pontoDeEbulicao: 2602, // Em °C
        densidade: 7.31, // Em g/cm³
        eletronegatividade: 1.96, // Valor aproximado
        aplicacoesComuns: ["Embalagens de alimentos", "Soldas", "Revestimentos"],
        decomposicao: {
            protons: 50,
            eletrons: 50,
            neutrons: 69 // O número de nêutrons pode variar, mas geralmente é próximo ao número de prótons
        },
        categoria: "outros-metais"
    },
    {
        nome: "Antimônio",
        sigla: "Sb",
        numeroAtomico: 51,
        massaAtomica: 121.760,
        configuracaoEletronica: "[Kr] 4d¹⁰ 5s² 5p³",
        grupo: 15,
        periodo: 5,
        raioAtomico: 159, // Valor aproximado em pm
        estadoNatural: "Sólido",
        pontoDeFusao: 630.63, // Em °C
        pontoDeEbulicao: 1587, // Em °C
        densidade: 6.68, // Em g/cm³
        eletronegatividade: 2.05, // Valor aproximado
        aplicacoesComuns: ["Baterias", "Pigmentos", "Semicondutores"],
        decomposicao: {
            protons: 51,
            eletrons: 51,
            neutrons: 71 // O número de nêutrons pode variar, mas geralmente é próximo ao número de prótons
        },
        categoria: "semimetal"
    },
    {
        nome: "Telúrio",
        sigla: "Te",
        numeroAtomico: 52,
        massaAtomica: 127.60,
        configuracaoEletronica: "[Kr] 4d¹⁰ 5s² 5p⁴",
        grupo: 16,
        periodo: 5,
        raioAtomico: 206, // Valor aproximado em pm
        estadoNatural: "Sólido",
        pontoDeFusao: 449.51, // Em °C
        pontoDeEbulicao: 990, // Em °C
        densidade: 6.24, // Em g/cm³
        eletronegatividade: 2.1, // Valor aproximado
        aplicacoesComuns: ["Semicondutores", "Células solares", "Catalisadores"],
        decomposicao: {
            protons: 52,
            eletrons: 52,
            neutrons: 76 // O número de nêutrons pode variar, mas geralmente é próximo ao número de prótons
        },
        categoria: "semimetal"
    },
    {
        nome: "Iodo",
        sigla: "I",
        numeroAtomico: 53,
        massaAtomica: 126.90447,
        configuracaoEletronica: "[Kr] 4d¹⁰ 5s² 5p⁵",
        grupo: 17,
        periodo: 5,
        raioAtomico: 198, // Valor aproximado em pm
        estadoNatural: "Sólido",
        pontoDeFusao: 113.7, // Em °C
        pontoDeEbulicao: 184.3, // Em °C
        densidade: 4.93, // Em g/cm³
        eletronegatividade: 2.66, // Valor aproximado
        aplicacoesComuns: ["Tratamento de água", "Antissépticos", "Corantes"],
        decomposicao: {
            protons: 53,
            eletrons: 53,
            neutrons: 74 // O número de nêutrons pode variar, mas geralmente é próximo ao número de prótons
        },
        categoria: "halogenios"
    },
    {
        nome: "Xenônio",
        sigla: "Xe",
        numeroAtomico: 54,
        massaAtomica: 131.293,
        configuracaoEletronica: "[Kr] 4d¹⁰ 5s² 5p⁶",
        grupo: 18,
        periodo: 5,
        raioAtomico: 108,
        estadoNatural: "Gás",
        pontoDeFusao: -111.74,
        pontoDeEbulicao: -108.09,
        densidade: 0.005887, // Em g/cm³ (a 0 °C, 1 atm)
        eletronegatividade: null, // O xenônio é um gás nobre e tem uma eletronegatividade muito baixa
        aplicacoesComuns: ["Iluminação", "Imagem médica", "Propulsão de satélites"],
        decomposicao: {
            protons: 54,
            eletrons: 54,
            neutrons: 77 // O número de nêutrons pode variar, mas geralmente é próximo ao número de prótons
        },
        categoria: "gas-nobre"
    },
    {
        nome: "Césio",
        sigla: "Cs",
        numeroAtomico: 55,
        massaAtomica: 132.90545,
        configuracaoEletronica: "[Xe] 6s¹",
        grupo: 1,
        periodo: 6,
        raioAtomico: 298, // Valor aproximado em pm
        estadoNatural: "Sólido",
        pontoDeFusao: 28.5, // Em °C
        pontoDeEbulicao: 671, // Em °C
        densidade: 1.93, // Em g/cm³
        eletronegatividade: 0.79, // Valor aproximado
        aplicacoesComuns: ["Relógios atômicos", "Produção de vidro especial", "Propulsão espacial"],
        decomposicao: {
            protons: 55,
            eletrons: 55,
            neutrons: 78 // O número de nêutrons pode variar, mas geralmente é próximo ao número de prótons
        },
        categoria: "metal-alcalino"
    },
    {
        nome: "Bário",
        sigla: "Ba",
        numeroAtomico: 56,
        massaAtomica: 137.327,
        configuracaoEletronica: "[Xe] 6s²",
        grupo: 2,
        periodo: 6,
        raioAtomico: 253, // Valor aproximado em pm
        estadoNatural: "Sólido",
        pontoDeFusao: 727, // Em °C
        pontoDeEbulicao: 1897, // Em °C
        densidade: 3.51, // Em g/cm³
        eletronegatividade: 0.89, // Valor aproximado
        aplicacoesComuns: ["Produção de materiais para radiologia", "Vidros especiais", "Emissores de radiação em TV"],
        decomposicao: {
            protons: 56,
            eletrons: 56,
            neutrons: 81 // O número de nêutrons pode variar, mas geralmente é próximo ao número de prótons
        },
        categoria: "metal-alcalino-terroso"
    },
    {
        nome: "Lantânio",
        sigla: "La",
        numeroAtomico: 57,
        massaAtomica: 138.90547,
        configuracaoEletronica: "[Xe] 5d¹ 6s²",
        grupo: 3,
        periodo: 6,
        raioAtomico: 195, // Valor aproximado em pm
        estadoNatural: "Sólido",
        pontoDeFusao: 920, // Em °C
        pontoDeEbulicao: 3464, // Em °C
        densidade: 6.15, // Em g/cm³
        eletronegatividade: 1.10, // Valor aproximado
        aplicacoesComuns: ["Catalisadores", "Lâmpadas de arco de carboneto", "Híbridos de níquel-metal-hidreto"],
        decomposicao: {
            protons: 57,
            eletrons: 57,
            neutrons: 82 // O número de nêutrons pode variar, mas geralmente é próximo ao número de prótons
        },
        categoria: "lantanideos"
    },
    {
        nome: "Cério",
        sigla: "Ce",
        numeroAtomico: 58,
        massaAtomica: 140.116,
        configuracaoEletronica: "[Xe] 4f¹ 5d¹ 6s²",
        grupo: 3,
        periodo: 6,
        raioAtomico: 185, // Valor aproximado em pm
        estadoNatural: "Sólido",
        pontoDeFusao: 798, // Em °C
        pontoDeEbulicao: 3443, // Em °C
        densidade: 6.77, // Em g/cm³
        eletronegatividade: 1.12, // Valor aproximado
        aplicacoesComuns: ["Polimento de vidro", "Catalisadores", "Materiais cerâmicos"],
        decomposicao: {
            protons: 58,
            eletrons: 58,
            neutrons: 82 // O número de nêutrons pode variar, mas geralmente é próximo ao número de prótons
        },
        categoria: "lantanideos"
    },
    {
        nome: "Praseodímio",
        sigla: "Pr",
        numeroAtomico: 59,
        massaAtomica: 140.90766,
        configuracaoEletronica: "[Xe] 4f³ 6s²",
        grupo: 3,
        periodo: 6,
        raioAtomico: 247, // Valor aproximado em pm
        estadoNatural: "Sólido",
        pontoDeFusao: 935, // Em °C
        pontoDeEbulicao: 3130, // Em °C
        densidade: 6.77, // Em g/cm³
        eletronegatividade: 1.13, // Valor aproximado
        aplicacoesComuns: ["Ímãs permanentes", "Lâmpadas de arco de carboneto", "Materiais cerâmicos"],
        decomposicao: {
            protons: 59,
            eletrons: 59,
            neutrons: 82 // O número de nêutrons pode variar, mas geralmente é próximo ao número de prótons
        },
        categoria: "lantanideos"
    },
    {
        nome: "Neodímio",
        sigla: "Nd",
        numeroAtomico: 60,
        massaAtomica: 144.242,
        configuracaoEletronica: "[Xe] 4f^4 6s^2",
        grupo: 3,
        periodo: 6,
        raioAtomico: 206, // Valor aproximado em pm
        estadoNatural: "Sólido",
        pontoDeFusao: 1016, // Em °C
        pontoDeEbulicao: 3074, // Em °C
        densidade: 7.01, // Em g/cm³
        eletronegatividade: 1.14, // Valor aproximado
        aplicacoesComuns: ["Ímãs de neodímio-ferro-boro", "Laser de estado sólido", "Motores elétricos"],
        decomposicao: {
            protons: 60,
            eletrons: 60,
            neutrons: 84 // O número de nêutrons pode variar, mas geralmente é próximo ao número de prótons
        },
        categoria: "lantanideos"
    },
    {
        nome: "Promécio",
        sigla: "Pm",
        numeroAtomico: 61,
        massaAtomica: 145,
        configuracaoEletronica: "[Xe] 4f^5 6s^2",
        grupo: 3,
        periodo: 6,
        raioAtomico: 185,
        estadoNatural: "Sintético",
        pontoDeFusao: 1042,
        pontoDeEbulicao: 3000,
        densidade: null, // Não aplicável para o promécio sintético
        eletronegatividade: null, // Não aplicável para o promécio sintético
        aplicacoesComuns: ["Usado como fonte de radiação em marcadores de raios-X industriais", "Pesquisas científicas"],
        decomposicao: {
            protons: 61,
            eletrons: 61,
            neutrons: null // Depende do isótopo específico do promécio
        },
        categoria: "lantanideos"
    },
    {
        nome: "Samário",
        sigla: "Sm",
        numeroAtomico: 62,
        massaAtomica: 150.36,
        configuracaoEletronica: "[Xe] 4f^6 6s^2",
        grupo: 3,
        periodo: 6,
        raioAtomico: 238, // Valor aproximado em pm
        estadoNatural: "Sólido",
        pontoDeFusao: 1072, // Em °C
        pontoDeEbulicao: 1794, // Em °C
        densidade: 7.52, // Em g/cm³
        eletronegatividade: 1.17, // Valor aproximado
        aplicacoesComuns: ["Catalisadores", "Materiais magnéticos", "Vidros especiais"],
        decomposicao: {
            protons: 62,
            eletrons: 62,
            neutrons: 88 // O número de nêutrons pode variar, mas geralmente é próximo ao número de prótons
        },
        categoria: "lantanideos"
    },
    {
        nome: "Európio",
        sigla: "Eu",
        numeroAtomico: 63,
        massaAtomica: 151.964,
        configuracaoEletronica: "[Xe] 4f^7 6s^2",
        grupo: 3,
        periodo: 6,
        raioAtomico: 112,
        estadoNatural: "Sólido",
        pontoDeFusao: 822,
        pontoDeEbulicao: 1597,
        densidade: 5.243, // Em g/cm³ (aproximado)
        eletronegatividade: 1.2, // Valor aproximado
        aplicacoesComuns: ["Fósforos em tubo de TV", "Materiais luminescentes", "Reatores nucleares"],
        decomposicao: {
            protons: 63,
            eletrons: 63,
            neutrons: 89 // O número de nêutrons pode variar, mas geralmente é próximo ao número de prótons
        },
        categoria: "lantanideos"
    },
    {
        nome: "Gadolínio",
        sigla: "Gd",
        numeroAtomico: 64,
        massaAtomica: 157.25,
        configuracaoEletronica: "[Xe] 4f^7 5d^1 6s^2",
        grupo: 3,
        periodo: 6,
        raioAtomico: 180,
        estadoNatural: "Sólido",
        pontoDeFusao: 1312,
        pontoDeEbulicao: 3250,
        densidade: 7.9, // Em g/cm³ (aproximado)
        eletronegatividade: 1.2, // Valor aproximado
        aplicacoesComuns: ["Materiais para reatores nucleares", "Agentes de contraste em ressonância magnética", "Filmes de fósforo"],
        decomposicao: {
            protons: 64,
            eletrons: 64,
            neutrons: 93 // O número de nêutrons pode variar, mas geralmente é próximo ao número de prótons
        },
        categoria: "lantanideos"
    },
    {
        nome: "Térbio",
        sigla: "Tb",
        numeroAtomico: 65,
        massaAtomica: 158.92535,
        configuracaoEletronica: "[Xe] 4f^9 6s^2",
        grupo: 3,
        periodo: 6,
        raioAtomico: 175,
        estadoNatural: "Sólido",
        pontoDeFusao: 1356,
        pontoDeEbulicao: 3230,
        densidade: 8.23, // Em g/cm³ (aproximado)
        eletronegatividade: 1.2, // Valor aproximado
        aplicacoesComuns: ["Fósforos em tubos de TV", "Filmes magneto-ópticos", "Materiais luminescentes"],
        decomposicao: {
            protons: 65,
            eletrons: 65,
            neutrons: 94 // O número de nêutrons pode variar, mas geralmente é próximo ao número de prótons
        },
        categoria: "lantanideos"
    },
    {
        nome: "Disprósio",
        sigla: "Dy",
        numeroAtomico: 66,
        massaAtomica: 162.500,
        configuracaoEletronica: "[Xe] 4f^10 6s^2",
        grupo: 3,
        periodo: 6,
        raioAtomico: 178,
        estadoNatural: "Sólido",
        pontoDeFusao: 1412,
        pontoDeEbulicao: 2562,
        densidade: 8.56, // Em g/cm³ (aproximado)
        eletronegatividade: 1.22, // Valor aproximado
        aplicacoesComuns: ["Materiais para reatores nucleares", "Ímãs de alta resistência", "Lasers"],
        decomposicao: {
            protons: 66,
            eletrons: 66,
            neutrons: 97 // O número de nêutrons pode variar, mas geralmente é próximo ao número de prótons
        },
        categoria: "lantanideos"
    },
    {
        nome: "Hólmio",
        sigla: "Ho",
        numeroAtomico: 67,
        massaAtomica: 164.93033,
        configuracaoEletronica: "[Xe] 4f^11 6s^2",
        grupo: 3,
        periodo: 6,
        raioAtomico: 175,
        estadoNatural: "Sólido",
        pontoDeFusao: 1461,
        pontoDeEbulicao: 2720,
        densidade: 8.80, // Em g/cm³ (aproximado)
        eletronegatividade: 1.23, // Valor aproximado
        aplicacoesComuns: ["Lasers", "Materiais para reatores nucleares", "Dopagem em dispositivos magneto-ópticos"],
        decomposicao: {
            protons: 67,
            eletrons: 67,
            neutrons: 98 // O número de nêutrons pode variar, mas geralmente é próximo ao número de prótons
        },
        categoria: "lantanideos"
    },
    {
        nome: "Érbio",
        sigla: "Er",
        numeroAtomico: 68,
        massaAtomica: 167.259,
        configuracaoEletronica: "[Xe] 4f^12 6s^2",
        grupo: 3,
        periodo: 6,
        raioAtomico: 175,
        estadoNatural: "Sólido",
        pontoDeFusao: 1529,
        pontoDeEbulicao: 2868,
        densidade: 9.07, // Em g/cm³ (aproximado)
        eletronegatividade: 1.24, // Valor aproximado
        aplicacoesComuns: ["Lasers", "Materiais para reatores nucleares", "Dopagem em dispositivos magneto-ópticos"],
        decomposicao: {
            protons: 68,
            eletrons: 68,
            neutrons: 99 // O número de nêutrons pode variar, mas geralmente é próximo ao número de prótons
        },
        categoria: "lantanideos"
    },
    {
        nome: "Túlio",
        sigla: "Tm",
        numeroAtomico: 69,
        massaAtomica: 168.93422,
        configuracaoEletronica: "[Xe] 4f^13 6s^2",
        grupo: 3,
        periodo: 6,
        raioAtomico: 'Desconhecido',
        estadoNatural: "Sólido",
        pontoDeFusao: 1545,
        pontoDeEbulicao: 1950,
        densidade: 9.32, // Em g/cm³ (aproximado)
        eletronegatividade: 1.25, // Valor aproximado
        aplicacoesComuns: ["Lasers de estado sólido", "Dispositivos optoeletrônicos", "Pesquisas científicas"],
        decomposicao: {
            protons: 69,
            eletrons: 69,
            neutrons: 100 // O número de nêutrons pode variar, mas geralmente é próximo ao número de prótons
        },
        categoria: "lantanideos"
    },
    {
        nome: "Itérbio",
        sigla: "Yb",
        numeroAtomico: 70,
        massaAtomica: 173.045,
        configuracaoEletronica: "[Xe] 4f^14 6s^2",
        grupo: 3,
        periodo: 6,
        raioAtomico: 176,
        estadoNatural: "Sólido",
        pontoDeFusao: 1530,
        pontoDeEbulicao: 3264,
        densidade: 6.90, // Em g/cm³ (aproximado)
        eletronegatividade: 1.1, // Valor aproximado
        aplicacoesComuns: ["Lasers", "Relógios atômicos", "Estudos sobre cristalografia"],
        decomposicao: {
            protons: 70,
            eletrons: 70,
            neutrons: 103 // O número de nêutrons pode variar, mas geralmente é próximo ao número de prótons
        },
        categoria: "lantanideos"
    },
    {
        nome: "Lutécio",
        sigla: "Lu",
        numeroAtomico: 71,
        massaAtomica: 174.9668,
        configuracaoEletronica: "[Xe] 4f^14 5d^1 6s^2",
        grupo: 3,
        periodo: 6,
        raioAtomico: 174,
        estadoNatural: "Sólido",
        pontoDeFusao: 1663,
        pontoDeEbulicao: 3395,
        densidade: 9.84, // Em g/cm³ (aproximado)
        eletronegatividade: 1.27, // Valor aproximado
        aplicacoesComuns: ["Catalisadores", "Propulsores em aviões", "Materiais para dispositivos eletrônicos"],
        decomposicao: {
            protons: 71,
            eletrons: 71,
            neutrons: 104 // O número de nêutrons pode variar, mas geralmente é próximo ao número de prótons
        },
        categoria: "lantanideos"
    },
    {
        nome: "Háfnio",
        sigla: "Hf",
        numeroAtomico: 72,
        massaAtomica: 178.49,
        configuracaoEletronica: "[Xe] 4f^14 5d^2 6s^2",
        grupo: 4,
        periodo: 6,
        raioAtomico: 159,
        estadoNatural: "Sólido",
        pontoDeFusao: 2233,
        pontoDeEbulicao: 4602,
        densidade: 13.31, // Em g/cm³ (aproximado)
        eletronegatividade: 1.3, // Valor aproximado
        aplicacoesComuns: ["Fabricação de barras de controle nuclear", "Revestimentos resistentes à corrosão", "Componentes de reatores nucleares"],
        decomposicao: {
            protons: 72,
            eletrons: 72,
            neutrons: 106 // O número de nêutrons pode variar, mas geralmente é próximo ao número de prótons
        },
        categoria: "metal-de-transicao"
    },
    {
        nome: "Tântalo",
        sigla: "Ta",
        numeroAtomico: 73,
        massaAtomica: 180.94788,
        configuracaoEletronica: "[Xe] 4f^14 5d^3 6s^2",
        grupo: 5,
        periodo: 6,
        raioAtomico: 200,
        estadoNatural: "Sólido",
        pontoDeFusao: 2980,
        pontoDeEbulicao: 2980,
        densidade: 16.69, // Em g/cm³ (aproximado)
        eletronegatividade: 1.5, // Valor aproximado
        aplicacoesComuns: ["Capacitores eletrolíticos", "Componentes de equipamentos médicos", "Revestimentos de metais preciosos"],
        decomposicao: {
            protons: 73,
            eletrons: 73,
            neutrons: 108 // O número de nêutrons pode variar, mas geralmente é próximo ao número de prótons
        },
        categoria: "metal-de-transicao"
    },
    {
        nome: "Tungstênio",
        sigla: "W",
        numeroAtomico: 74,
        massaAtomica: 183.84,
        configuracaoEletronica: "[Xe] 4f^14 5d^4 6s^2",
        grupo: 6,
        periodo: 6,
        raioAtomico: 193,
        estadoNatural: "Sólido",
        pontoDeFusao: 3550,
        pontoDeEbulicao: 4287,
        densidade: 19.25, // Em g/cm³ (aproximado)
        eletronegatividade: 2.36, // Valor aproximado
        aplicacoesComuns: ["Filamentos de lâmpadas incandescentes", "Elétrodos de soldagem", "Componentes de equipamentos de raio-X"],
        decomposicao: {
            protons: 74,
            eletrons: 74,
            neutrons: 110 // O número de nêutrons pode variar, mas geralmente é próximo ao número de prótons
        },
        categoria: "metal-de-transicao"
    },
    {
        nome: "Rênio",
        sigla: "Re",
        numeroAtomico: 75,
        massaAtomica: 186.207,
        configuracaoEletronica: "[Xe] 4f^14 5d^5 6s^2",
        grupo: 7,
        periodo: 6,
        raioAtomico: 137,
        estadoNatural: "Sólido",
        pontoDeFusao: 3185,
        pontoDeEbulicao: 5596,
        densidade: 21.02, // Em g/cm³ (aproximado)
        eletronegatividade: 1.9, // Valor aproximado
        aplicacoesComuns: ["Filamentos em lâmpadas de flash", "Catalisador em refinarias de petróleo", "Componente em superligas para turbinas de avião"],
        decomposicao: {
            protons: 75,
            eletrons: 75,
            neutrons: 111 // O número de nêutrons pode variar, mas geralmente é próximo ao número de prótons
        },
        categoria: "metal-de-transicao"
    },
    {
        nome: "Ósmio",
        sigla: "Os",
        numeroAtomico: 76,
        massaAtomica: 190.23,
        configuracaoEletronica: "[Xe] 4f^14 5d^6 6s^2",
        grupo: 8,
        periodo: 6,
        raioAtomico: 185,
        estadoNatural: "Sólido",
        pontoDeFusao: 3033,
        pontoDeEbulicao: 5012,
        densidade: 22.59, // Em g/cm³ (aproximado)
        eletronegatividade: 2.2, // Valor aproximado
        aplicacoesComuns: ["Agulhas em microscópios eletrônicos", "Catalisador em processos químicos", "Componente em ligas de platina-osmio"],
        decomposicao: {
            protons: 76,
            eletrons: 76,
            neutrons: 116 // O número de nêutrons pode variar, mas geralmente é próximo ao número de prótons
        },
        categoria: "metal-de-transicao"
    },
    {
        nome: "Irídio",
        sigla: "Ir",
        numeroAtomico: 77,
        massaAtomica: 192.217,
        configuracaoEletronica: "[Xe] 4f^14 5d^7 6s^2",
        grupo: 9,
        periodo: 6,
        raioAtomico: 135,
        estadoNatural: "Sólido",
        pontoDeFusao: 2446,
        pontoDeEbulicao: 4428,
        densidade: 22.56, // Em g/cm³ (aproximado)
        eletronegatividade: 2.2, // Valor aproximado
        aplicacoesComuns: ["Eletrodos em velas de ignição", "Fabricação de utensílios de laboratório", "Componente em ligas de platina-irídio"],
        decomposicao: {
            protons: 77,
            eletrons: 77,
            neutrons: 115 // O número de nêutrons pode variar, mas geralmente é próximo ao número de prótons
        },
        categoria: "metal-de-transicao"
    },
    {
        nome: "Platina",
        numeroAtomico: 78,
        sigla: "Pt",
        massaAtomica: 195.084,
        configuracaoEletronica: "[Xe] 4f^14 5d^9 6s^1",
        grupo: 10,
        periodo: 6,
        raioAtomico: 139,
        estadoNatural: "Sólido",
        pontoDeFusao: 1768.2,
        pontoDeEbulicao: 3825,
        densidade: 21.45, // Em g/cm³ (aproximado)
        eletronegatividade: 2.28, // Valor aproximado
        aplicacoesComuns: ["Joalheria", "Catalisadores em reações químicas", "Eletrodos em dispositivos médicos"],
        decomposicao: {
            protons: 78,
            eletrons: 78,
            neutrons: 117 // O número de nêutrons pode variar, mas geralmente é próximo ao número de prótons
        },
        categoria: "metal-de-transicao"
    },
    {
        nome: "Ouro",
        sigla: "Au",
        numeroAtomico: 79,
        massaAtomica: 196.96657,
        configuracaoEletronica: "[Xe] 4f^14 5d^10 6s^1",
        grupo: 11,
        periodo: 6,
        raioAtomico: 174,
        estadoNatural: "Sólido",
        pontoDeFusao: 1064,
        pontoDeEbulicao: 2856,
        densidade: 19.32, // Em g/cm³ (aproximado)
        eletronegatividade: 2.54, // Valor aproximado
        aplicacoesComuns: ["Joalheria", "Eletrônicos", "Componentes em dispositivos médicos"],
        decomposicao: {
            protons: 79,
            eletrons: 79,
            neutrons: 118 // O número de nêutrons pode variar, mas geralmente é próximo ao número de prótons
        },
        categoria: "metal-de-transicao"
    },
    {
        nome: "Mercúrio",
        sigla: "Hg",
        numeroAtomico: 80,
        massaAtomica: 200.592,
        configuracaoEletronica: "[Xe] 4f^14 5d^10 6s^2",
        grupo: 12,
        periodo: 6,
        raioAtomico: 150,
        estadoNatural: "Líquido",
        pontoDeFusao: -38.8,
        pontoDeEbulicao: 356.7,
        densidade: 13.5336, // Em g/cm³ (aproximado)
        eletronegatividade: 2.00, // Valor aproximado
        aplicacoesComuns: ["Instrumentos de medição", "Lâmpadas fluorescentes", "Processos industriais"],
        decomposicao: {
            protons: 80,
            eletrons: 80,
            neutrons: 121 // O número de nêutrons pode variar, mas geralmente é próximo ao número de prótons
        },
        categoria: "metal-de-transicao"
    },
    {
        nome: "Tálio",
        sigla: "Tl",
        numeroAtomico: 81,
        massaAtomica: 204.38,
        configuracaoEletronica: "[Xe] 4f^14 5d^10 6s^2 6p^1",
        grupo: 13,
        periodo: 6,
        raioAtomico: 156,
        estadoNatural: "Sólido",
        pontoDeFusao: 303.5,
        pontoDeEbulicao: 174,
        densidade: 11.85, // Em g/cm³ (aproximado)
        eletronegatividade: 1.62, // Valor aproximado
        aplicacoesComuns: ["Dopante em semicondutores", "Produção de vidros especiais", "Em medicina nuclear"],
        decomposicao: {
            protons: 81,
            eletrons: 81,
            neutrons: 123 // O número de nêutrons pode variar, mas geralmente é próximo ao número de prótons
        },
        categoria: "outros-metais"
    },
    {
        nome: "Chumbo",
        sigla: "Pb",
        numeroAtomico: 82,
        massaAtomica: 207.2,
        configuracaoEletronica: "[Xe] 4f^14 5d^10 6s^2 6p^2",
        grupo: 14,
        periodo: 6,
        raioAtomico: 180,
        estadoNatural: "Sólido",
        pontoDeFusao: 327,
        pontoDeEbulicao: 1740,
        densidade: 11.34, // Em g/cm³ (aproximado)
        eletronegatividade: 2.33, // Valor aproximado
        aplicacoesComuns: ["Baterias de chumbo-ácido", "Proteção contra radiação", "Munição e projéteis"],
        decomposicao: {
            protons: 82,
            eletrons: 82,
            neutrons: 125 // O número de nêutrons pode variar, mas geralmente é próximo ao número de prótons
        },
        categoria: "outros-metais"
    },
    {
        nome: "Bismuto",
        sigla: "Bi",
        numeroAtomico: 83,
        massaAtomica: 208.98040,
        configuracaoEletronica: "[Xe] 4f^14 5d^10 6s^2 6p^3",
        grupo: 15,
        periodo: 6,
        raioAtomico: 148,
        estadoNatural: "Sólido",
        pontoDeFusao: 271,
        pontoDeEbulicao: 1564,
        densidade: 9.78, // Em g/cm³ (aproximado)
        eletronegatividade: 2.02, // Valor aproximado
        aplicacoesComuns: ["Ligas metálicas", "Pigmentos em cosméticos", "Medicina nuclear"],
        decomposicao: {
            protons: 83,
            eletrons: 83,
            neutrons: 126 // O número de nêutrons pode variar, mas geralmente é próximo ao número de prótons
        },
        categoria: "outros-metais"
    },
    {
        nome: "Polônio",
        sigla: "Po",
        numeroAtomico: 84,
        massaAtomica: 209,
        configuracaoEletronica: "[Xe] 4f^14 5d^10 6s^2 6p^4",
        grupo: 16,
        periodo: 6,
        raioAtomico: 190,
        estadoNatural: "Sólido",
        pontoDeFusao: 254,
        pontoDeEbulicao: 962,
        densidade: 9.20, // Em g/cm³ (aproximado)
        eletronegatividade: 2.0, // Valor aproximado
        aplicacoesComuns: ["Fonte de calor em dispositivos termoelétricos", "Pesquisas em física nuclear", "Como fonte de radiação alfa"],
        decomposicao: {
            protons: 84,
            eletrons: 84,
            neutrons: 125 // O número de nêutrons pode variar, mas geralmente é próximo ao número de prótons
        },
        categoria: "semimetal"
    },
    {
        nome: "Astato",
        sigla: "At",
        numeroAtomico: 85,
        massaAtomica: 210,
        configuracaoEletronica: "[Xe] 4f^14 5d^10 6s^2 6p^5",
        grupo: 17,
        periodo: 6,
        raioAtomico: 200,
        estadoNatural: "Sólido",
        pontoDeFusao: 300,
        pontoDeEbulicao: 340,
        densidade: "Desconhecida", // A densidade do astato não é bem estabelecida
        eletronegatividade: 2.2, // Valor aproximado
        aplicacoesComuns: ["Pesquisas científicas", "Fonte de partículas alfa em experimentos nucleares", "Como traçador radioativo"],
        decomposicao: {
            protons: 85,
            eletrons: 85,
            neutrons: "Desconhecido" // O número de nêutrons não é bem estabelecido
        },
        categoria: "halogenios"
    },
    {
        nome: "Radônio",
        sigla: "Rn",
        numeroAtomico: 86,
        massaAtomica: 222,
        configuracaoEletronica: "[Xe] 4f^14 5d^10 6s^2 6p^6",
        grupo: 18,
        periodo: 6,
        raioAtomico: 134,
        estadoNatural: "Gasoso",
        pontoDeFusao: -71,
        pontoDeEbulicao: -61.7,
        densidade: "Desconhecida", // A densidade do radônio varia de acordo com a temperatura e pressão
        eletronegatividade: "Desconhecida", // Não tem uma eletronegatividade bem definida
        aplicacoesComuns: ["Usado em terapias contra o câncer", "Como traçador em estudos de vazamento de gás", "Em técnicas de radiografia industrial"],
        decomposicao: {
            protons: 86,
            eletrons: 86,
            neutrons: "Desconhecido" // O número de nêutrons não é bem estabelecido
        },
        categoria: "gas-nobre"
    },
    {
        nome: "Frâncio",
        sigla: "Fr",
        numeroAtomico: 87,
        massaAtomica: 223,
        configuracaoEletronica: "[Rn] 7s^1",
        grupo: 1,
        periodo: 7,
        raioAtomico: 260,
        estadoNatural: "Sólido", // Aparência metálica brilhante (predito)
        pontoDeFusao: 22,
        pontoDeEbulicao: 665,
        densidade: "Desconhecida", // A densidade do frâncio não é bem estabelecida
        eletronegatividade: 0.7, // Valor aproximado
        aplicacoesComuns: ["Não possui aplicações comerciais devido à sua raridade e radioatividade"],
        decomposicao: {
            protons: 87,
            eletrons: 87,
            neutrons: "Desconhecido" // O número de nêutrons não é bem estabelecido
        },
        categoria: "metal-alcalino"
    },
    {
        nome: "Rádio",
        sigla: "Ra",
        numeroAtomico: 88,
        massaAtomica: 226,
        configuracaoEletronica: "[Rn] 7s^2",
        grupo: 2,
        periodo: 7,
        raioAtomico: 215,
        estadoNatural: "Sólido",
        pontoDeFusao: 700,
        pontoDeEbulicao: 1140,
        densidade: 5,
        eletronegatividade: 0.9,
        aplicacoesComuns: ["Utilizado em radioterapia para tratamento de câncer", "Em dispositivos de detecção de radiação", "Produção de relógios e instrumentos de medição de precisão"],
        decomposicao: {
            protons: 88,
            eletrons: 88,
            neutrons: "Desconhecido"
        },
        categoria: "metal-alcalino-terroso"
    },
    {
        nome: "Actínio",
        sigla: "Ac",
        numeroAtomico: 89,
        massaAtomica: 227,
        configuracaoEletronica: "[Rn] 6d^1 7s^2",
        grupo: 3,
        periodo: 7,
        raioAtomico: 195,
        estadoNatural: "Sólido",
        pontoDeFusao: 1050,
        pontoDeEbulicao: 3200,
        densidade: 10.07, // Em g/cm³ (aproximado)
        eletronegatividade: 1.1, // Valor aproximado
        aplicacoesComuns: ["Utilizado em terapia de radioterapia", "Em fontes de nêutrons para pesquisas nucleares", "Na produção de isótopos radioativos para pesquisa científica"],
        decomposicao: {
            protons: 89,
            eletrons: 89,
            neutrons: "Desconhecido" // O número de nêutrons pode variar
        },
        categoria: "actinidios"
    },
    {
        nome: "Tório",
        sigla: "Th",
        numeroAtomico: 90,
        massaAtomica: 232.03806,
        configuracaoEletronica: "[Rn] 6d^2 7s^2",
        grupo: 4,
        periodo: 7,
        raioAtomico: 206,
        estadoNatural: "Sólido",
        pontoDeFusao: 1750,
        pontoDeEbulicao: 4788,
        densidade: 11.72, // Em g/cm³ (aproximado)
        eletronegatividade: 1.3, // Valor aproximado
        aplicacoesComuns: ["Utilizado em reatores nucleares como combustível", "Na produção de lentes ópticas de alta qualidade", "Em ligas metálicas devido à sua resistência à corrosão"],
        decomposicao: {
            protons: 90,
            eletrons: 90,
            neutrons: "Desconhecido" // O número de nêutrons pode variar
        },
        categoria: "actinidios"
    },
    {
        nome: "Protactínio",
        sigla: "Pa",
        numeroAtomico: 91,
        massaAtomica: 231.03588,
        configuracaoEletronica: "[Rn] 5f^2 6d^1 7s^2",
        grupo: 3,
        periodo: 7,
        raioAtomico: 163,
        estadoNatural: "Sólido",
        pontoDeFusao: 1572,
        pontoDeEbulicao: 4000,
        densidade: 15.37, // Em g/cm³ (aproximado)
        eletronegatividade: 1.5, // Valor aproximado
        aplicacoesComuns: ["Utilizado em reatores nucleares como combustível e em bombas de nêutrons", "Na datação de rochas e minerais por técnicas radiométricas", "Em pesquisa científica para produção de isótopos radioativos"],
        decomposicao: {
            protons: 91,
            eletrons: 91,
            neutrons: "Desconhecido" // O número de nêutrons pode variar
        },
        categoria: "actinidios"
    },
    {
        nome: "Urânio",
        sigla: "U",
        numeroAtomico: 92,
        massaAtomica: 238.02891,
        configuracaoEletronica: "[Rn] 5f^3 6d^1 7s^2",
        grupo: 3,
        periodo: 7,
        raioAtomico: 175,
        estadoNatural: "Sólido",
        pontoDeFusao: 1135,
        pontoDeEbulicao: 1135,
        densidade: 19.05, // Em g/cm³ (aproximado)
        eletronegatividade: 1.38, // Valor aproximado
        aplicacoesComuns: ["Utilizado em reatores nucleares para produção de energia elétrica", "Na fabricação de armas nucleares", "Em dispositivos de medição de idade como datação por urânio"],
        decomposicao: {
            protons: 92,
            eletrons: 92,
            neutrons: "Desconhecido" // O número de nêutrons pode variar
        },
        categoria: "actinidios"
    },
    {
        nome: "Netúnio",
        sigla: "Np",
        numeroAtomico: 93,
        massaAtomica: 237,
        configuracaoEletronica: "[Rn] 5f^4 6d^1 7s^2",
        grupo: 3,
        periodo: 7,
        raioAtomico: 155,
        estadoNatural: "Sólido",
        pontoDeFusao: 644,
        pontoDeEbulicao: 3902,
        densidade: "Desconhecida", // A densidade do netúnio não é bem estabelecida
        eletronegatividade: 1.36, // Valor aproximado
        aplicacoesComuns: ["Utilizado em pesquisas nucleares e na produção de isótopos radioativos", "Em fontes de nêutrons para pesquisa científica", "Na fabricação de armas nucleares"],
        decomposicao: {
            protons: 93,
            eletrons: 93,
            neutrons: "Desconhecido" // O número de nêutrons pode variar
        },
        categoria: "actinidios"
    },
    {
        nome: "Plutônio",
        sigla: "Pu",
        numeroAtomico: 94,
        massaAtomica: 244,
        configuracaoEletronica: "[Rn] 5f^6 7s^2",
        grupo: 3,
        periodo: 7,
        raioAtomico: 175,
        estadoNatural: "Sólido",
        pontoDeFusao: 640,
        pontoDeEbulicao: 3228,
        densidade: 19.86, // Em g/cm³ (aproximado)
        eletronegatividade: 1.28, // Valor aproximado
        aplicacoesComuns: ["Utilizado em reatores nucleares para produção de energia", "Na fabricação de armas nucleares", "Em dispositivos de marcação e alimentação de fontes de energia"],
        decomposicao: {
            protons: 94,
            eletrons: 94,
            neutrons: "Desconhecido" // O número de nêutrons pode variar
        },
        categoria: "actinidios"
    },
    {
        nome: "Amerício",
        sigla: "Am",
        numeroAtomico: 95,
        massaAtomica: 243,
        configuracaoEletronica: "[Rn] 5f^7 7s^2",
        grupo: 3,
        periodo: 7,
        raioAtomico: 173,
        estadoNatural: "Sólido",
        pontoDeFusao: 1176,
        pontoDeEbulicao: 2011,
        densidade: 13.67, // Em g/cm³ (aproximado)
        eletronegatividade: 1.3, // Valor aproximado
        aplicacoesComuns: ["Utilizado em dispositivos de detecção de fumaça em detectores de incêndio", "Em fontes de nêutrons para pesquisa e em terapia de radioterapia", "Na fabricação de dispositivos médicos para tratamento de câncer"],
        decomposicao: {
            protons: 95,
            eletrons: 95,
            neutrons: "Desconhecido" // O número de nêutrons pode variar
        },
        categoria: "actinidios"
    },
    {
        nome: "Cúrio",
        sigla: "Cm",
        numeroAtomico: 96,
        massaAtomica: 247,
        configuracaoEletronica: "[Rn] 5f^7 6d^1 7s^2",
        grupo: 3,
        periodo: 7,
        raioAtomico: 174,
        estadoNatural: "Sólido",
        pontoDeFusao: 1345,
        pontoDeEbulicao: 1345,
        densidade: 13.51, // Em g/cm³ (aproximado)
        eletronegatividade: 1.3, // Valor aproximado
        aplicacoesComuns: ["Utilizado em fontes de energia para dispositivos espaciais e pacemakers", "Em detectores de umidade e sensores de temperatura", "Na produção de isótopos radioativos para pesquisa científica"],
        decomposicao: {
            protons: 96,
            eletrons: 96,
            neutrons: "Desconhecido" // O número de nêutrons pode variar
        },
        categoria: "actinidios"
    },
    {
        nome: "Berquélio",
        sigla: "Bk",
        numeroAtomico: 97,
        massaAtomica: 247,
        configuracaoEletronica: "[Rn] 5f^9 7s^2",
        grupo: 3,
        periodo: 7,
        raioAtomico: 170,
        estadoNatural: "Sólido",
        pontoDeFusao: 986,
        pontoDeEbulicao: null,
        densidade: "Desconhecida", // A densidade do berquélio não é bem estabelecida
        eletronegatividade: "Desconhecida", // Não há dados confiáveis sobre a eletronegatividade do berquélio
        aplicacoesComuns: ["Utilizado em pesquisas nucleares e em experimentos científicos", "Na produção de isótopos radioativos para estudos biológicos e químicos", "Em sistemas de detecção de radiação"],
        decomposicao: {
            protons: 97,
            eletrons: 97,
            neutrons: "Desconhecido" // O número de nêutrons pode variar
        },
        categoria: "actinidios"
    },
    {
        nome: "Califórnio",
        sigla: "Cf",
        numeroAtomico: 98,
        massaAtomica: 251,
        configuracaoEletronica: "[Rn] 5f^10 7s^2",
        grupo: 3,
        periodo: 7,
        raioAtomico: null,
        estadoNatural: "Sólido",
        pontoDeFusao: 900,
        pontoDeEbulicao: 1470,
        densidade: "Desconhecida", // A densidade do califórnio não é bem estabelecida
        eletronegatividade: "Desconhecida", // Não há dados confiáveis sobre a eletronegatividade do califórnio
        aplicacoesComuns: ["Utilizado em pesquisas nucleares e experimentos científicos avançados", "Na produção de isótopos radioativos para estudos médicos e industriais", "Em sistemas de detecção de partículas nucleares"],
        decomposicao: {
            protons: 98,
            eletrons: 98,
            neutrons: "Desconhecido" // O número de nêutrons pode variar
        },
        categoria: "actinidios"
    },
    {
        nome: "Einstênio",
        sigla: "Es",
        numeroAtomico: 99,
        massaAtomica: 252,
        configuracaoEletronica: "[Rn] 5f^11 7s^2",
        grupo: 3,
        periodo: 7,
        raioAtomico: null,
        estadoNatural: "Sólido",
        pontoDeFusao: 860,
        pontoDeEbulicao: null,
        densidade: "Desconhecida", // A densidade do einstênio não é bem estabelecida
        eletronegatividade: "Desconhecida", // Não há dados confiáveis sobre a eletronegatividade do einstênio
        aplicacoesComuns: ["Utilizado em pesquisas nucleares e experimentos científicos avançados", "Na produção de isótopos radioativos para estudos médicos e industriais", "Em pesquisas sobre a estrutura do núcleo atômico"],
        decomposicao: {
            protons: 99,
            eletrons: 99,
            neutrons: "Desconhecido" // O número de nêutrons pode variar
        },
        categoria: "actinidios"
    },
    {
        nome: "Férmio",
        sigla: "Fm",
        numeroAtomico: 100,
        massaAtomica: 257,
        configuracaoEletronica: "[Rn] 5f^12 7s^2",
        grupo: "Grupo 3",
        periodo: 7,
        raioAtomico: null,
        estadoNatural: "Sólido",
        pontoDeFusao: 1527,
        pontoDeEbulicao: null,
        densidade: "Desconhecida", // A densidade do férmio não é bem estabelecida
        eletronegatividade: "Desconhecida", // Não há dados confiáveis sobre a eletronegatividade do férmio
        aplicacoesComuns: ["Utilizado em pesquisas nucleares e experimentos científicos avançados", "Na produção de isótopos radioativos para estudos médicos e industriais", "Em estudos sobre a estrutura do núcleo atômico"],
        decomposicao: {
            protons: 100,
            eletrons: 100,
            neutrons: "Desconhecido" // O número de nêutrons pode variar
        },
        categoria: "actinidios"
    },
    {
        nome: "Mendelévio",
        sigla: "Md",
        numeroAtomico: 101,
        massaAtomica: 258,
        configuracaoEletronica: "[Rn] 5f^13 7s^2",
        grupo: "Grupo 3",
        periodo: 7,
        raioAtomico: null,
        estadoNatural: "Sólido",
        pontoDeFusao: 827,
        pontoDeEbulicao: null,
        densidade: "Desconhecida", // A densidade do mendelévio não é bem estabelecida
        eletronegatividade: "Desconhecida", // Não há dados confiáveis sobre a eletronegatividade do mendelévio
        aplicacoesComuns: ["Utilizado em pesquisas nucleares e experimentos científicos avançados", "Na produção de isótopos radioativos para estudos médicos e industriais", "Em estudos sobre a estrutura do núcleo atômico"],
        decomposicao: {
            protons: 101,
            eletrons: 101,
            neutrons: "Desconhecido" // O número de nêutrons pode variar
        },
        categoria: "actinidios"
    },
    {
        nome: "Nobélio",
        sigla: "No",
        numeroAtomico: 102,
        massaAtomica: 259,
        configuracaoEletronica: "[Rn] 5f^14 7s^2",
        grupo: "Grupo 3",
        periodo: 7,
        raioAtomico: null,
        estadoNatural: "Sólido",
        pontoDeFusao: 644,
        pontoDeEbulicao: 3902,
        densidade: "Desconhecida", // A densidade do nóbelio não é bem estabelecida
        eletronegatividade: "Desconhecida", // Não há dados confiáveis sobre a eletronegatividade do nóbelio
        aplicacoesComuns: ["Utilizado em pesquisas nucleares e experimentos científicos avançados", "Na produção de isótopos radioativos para estudos médicos e industriais", "Em estudos sobre a estrutura do núcleo atômico"],
        decomposicao: {
            protons: 102,
            eletrons: 102,
            neutrons: "Desconhecido" // O número de nêutrons pode variar
        },
        categoria: "actinidios"
    },
    {
        nome: "Laurêncio",
        sigla: "Lr",
        numeroAtomico: 103,
        massaAtomica: 266,
        configuracaoEletronica: "[Rn] 5f^14 6d^1 7s^2",
        grupo: "Grupo 3",
        periodo: 7,
        raioAtomico: null,
        estadoNatural: "Sólido",
        pontoDeFusao: 1626.85,
        pontoDeEbulicao: null,
        densidade: "Desconhecida", // A densidade do laurêncio não é bem estabelecida
        eletronegatividade: "Desconhecida", // Não há dados confiáveis sobre a eletronegatividade do laurêncio
        aplicacoesComuns: ["Utilizado em pesquisas nucleares e experimentos científicos avançados", "Na produção de isótopos radioativos para estudos médicos e industriais", "Em estudos sobre a estrutura do núcleo atômico"],
        decomposicao: {
            protons: 103,
            eletrons: 103,
            neutrons: "Desconhecido" // O número de nêutrons pode variar
        },
        categoria: "actinidios"
    },
    {
        nome: "Rutherfórdio",
        sigla: "Rf",
        numeroAtomico: 104,
        massaAtomica: 267,
        configuracaoEletronica: "[Rn] 5f^14 6d^2 7s^2",
        grupo: "Grupo 4",
        periodo: 7,
        raioAtomico: null,
        estadoNatural: "Sintético",
        pontoDeFusao: 2100,
        pontoDeEbulicao: 5500,
        densidade: "Desconhecida", // A densidade do rutherfórdio não é bem estabelecida
        eletronegatividade: "Desconhecida", // Não há dados confiáveis sobre a eletronegatividade do rutherfórdio
        aplicacoesComuns: ["Utilizado em pesquisas nucleares e experimentos científicos avançados", "Em estudos sobre a estrutura do núcleo atômico"],
        decomposicao: {
            protons: 104,
            eletrons: 104,
            neutrons: "Desconhecido" // O número de nêutrons pode variar
        },
        categoria: "metal-de-transicao"
    },
    {
        nome: "Dúbnio",
        sigla: "Db",
        numeroAtomico: 105,
        massaAtomica: 268,
        configuracaoEletronica: "[Rn] 5f^14 6d^3 7s^2",
        grupo: "Grupo 5",
        periodo: 7,
        raioAtomico: null,
        estadoNatural: "Sintético",
        pontoDeFusao: null,
        pontoDeEbulicao: null,
        densidade: "Desconhecida", // A densidade do dúbnio não é bem estabelecida
        eletronegatividade: "Desconhecida", // Não há dados confiáveis sobre a eletronegatividade do dúbnio
        aplicacoesComuns: ["Utilizado em pesquisas nucleares e experimentos científicos avançados", "Em estudos sobre a estrutura do núcleo atômico"],
        decomposicao: {
            protons: 105,
            eletrons: 105,
            neutrons: "Desconhecido" // O número de nêutrons pode variar
        },
        categoria: "metal-de-transicao"
    },
    {
        nome: "Seabórgio",
        sigla: "Sg",
        numeroAtomico: 106,
        massaAtomica: 269,
        configuracaoEletronica: "[Rn] 5f^14 6d^4 7s^2",
        grupo: "Grupo 6",
        periodo: 7,
        raioAtomico: null,
        estadoNatural: "Sintético",
        pontoDeFusao: null,
        pontoDeEbulicao: null,
        densidade: "Desconhecida", // A densidade do seabórgio não é bem estabelecida
        eletronegatividade: "Desconhecida", // Não há dados confiáveis sobre a eletronegatividade do seabórgio
        aplicacoesComuns: ["Utilizado em pesquisas nucleares e experimentos científicos avançados", "Em estudos sobre a estrutura do núcleo atômico"],
        decomposicao: {
            protons: 106,
            eletrons: 106,
            neutrons: "Desconhecido" // O número de nêutrons pode variar
        },
        categoria: "metal-de-transicao"
    },
    {
        nome: "Bóhrio",
        sigla: "Bh",
        numeroAtomico: 107,
        massaAtomica: 270,
        configuracaoEletronica: "[Rn] 5f^14 6d^5 7s^2",
        grupo: "Grupo 7",
        periodo: 7,
        raioAtomico: null,
        estadoNatural: "Sintético",
        pontoDeFusao: null,
        pontoDeEbulicao: null,
        densidade: "Desconhecida", // A densidade do bóhrio não é bem estabelecida
        eletronegatividade: "Desconhecida", // Não há dados confiáveis sobre a eletronegatividade do bóhrio
        aplicacoesComuns: ["Utilizado em pesquisas nucleares e experimentos científicos avançados", "Em estudos sobre a estrutura do núcleo atômico"],
        decomposicao: {
            protons: 107,
            eletrons: 107,
            neutrons: "Desconhecido" // O número de nêutrons pode variar
        },
        categoria: "metal-de-transicao"
    },
    {
        nome: "Hássio",
        sigla: "Hs",
        numeroAtomico: 108,
        massaAtomica: 269,
        configuracaoEletronica: "[Rn] 5f^14 6d^6 7s^2",
        grupo: "Grupo 8",
        periodo: 7,
        estadoNatural: "Sintético",
        raioAtomico: null,
        pontoDeFusao: null,
        pontoDeEbulicao: null,
        densidade: "Desconhecida", // A densidade do hássio não é bem estabelecida
        eletronegatividade: "Desconhecida", // Não há dados confiáveis sobre a eletronegatividade do hássio
        aplicacoesComuns: ["Utilizado em pesquisas nucleares e experimentos científicos avançados", "Em estudos sobre a estrutura do núcleo atômico"],
        decomposicao: {
            protons: 108,
            eletrons: 108,
            neutrons: "Desconhecido" // O número de nêutrons pode variar
        },
        categoria: "metal-de-transicao"
    },
    {
        nome: "Meitnério",
        sigla: "Mt",
        numeroAtomico: 109,
        massaAtomica: 278,
        configuracaoEletronica: "[Rn] 5f^14 6d^7 7s^2",
        grupo: "Grupo 9",
        periodo: 7,
        estadoNatural: "Sintético",
        raioAtomico: null,
        pontoDeFusao: null,
        pontoDeEbulicao: null,
        densidade: "Desconhecida", // A densidade do meitnério não é bem estabelecida
        eletronegatividade: "Desconhecida", // Não há dados confiáveis sobre a eletronegatividade do meitnério
        aplicacoesComuns: ["Utilizado em pesquisas nucleares e experimentos científicos avançados", "Em estudos sobre a estrutura do núcleo atômico"],
        decomposicao: {
            protons: 109,
            eletrons: 109,
            neutrons: "Desconhecido" // O número de nêutrons pode variar
        },
        categoria: "metal-de-transicao"
    },
    {
        nome: "Darmstádio",
        sigla: "Ds",
        numeroAtomico: 110,
        massaAtomica: 281,
        configuracaoEletronica: "[Rn] 5f^14 6d^9 7s^1",
        grupo: "Grupo 10",
        periodo: 7,
        estadoNatural: "Sintético",
        raioAtomico: null,
        pontoDeFusao: null,
        pontoDeEbulicao: null,
        densidade: "Desconhecida", // A densidade do darmstádio não é bem estabelecida
        eletronegatividade: "Desconhecida", // Não há dados confiáveis sobre a eletronegatividade do darmstádio
        aplicacoesComuns: ["Utilizado em pesquisas nucleares e experimentos científicos avançados", "Em estudos sobre a estrutura do núcleo atômico"],
        decomposicao: {
            protons: 110,
            eletrons: 110,
            neutrons: "Desconhecido" // O número de nêutrons pode variar
        },
        categoria: "metal-de-transicao"
    },
    {
        nome: "Roentgênio",
        sigla: "Rg",
        numeroAtomico: 111,
        massaAtomica: "Desconhecida",
        configuracaoEletronica: "Desconhecida",
        grupo: "Grupo 11",
        periodo: 7,
        estadoNatural: "Hipotético",
        raioAtomico: null,
        pontoDeFusao: null,
        pontoDeEbulicao: null,
        densidade: "Desconhecida",
        eletronegatividade: "Desconhecida",
        aplicacoesComuns: ["Não aplicável (ainda não foi isolado na natureza)"],
        decomposicao: {
            protons: 111,
            eletrons: 111,
            neutrons: "Desconhecido"
        },
        categoria: "metal-de-transicao"
    },
    {
        nome: "Copernício",
        sigla: "Cn",
        numeroAtomico: 112,
        massaAtomica: 285,
        configuracaoEletronica: "[Rn] 5f^14 6d^10 7s^2",
        grupo: "Grupo 12",
        periodo: 7,
        estadoNatural: "Sintético",
        raioAtomico: null,
        pontoDeFusao: null,
        pontoDeEbulicao: null,
        densidade: "Desconhecida", // A densidade do copernício não é bem estabelecida
        eletronegatividade: "Desconhecida", // Não há dados confiáveis sobre a eletronegatividade do copernício
        aplicacoesComuns: ["Utilizado em pesquisas nucleares e experimentos científicos avançados", "Em estudos sobre a estrutura do núcleo atômico"],
        decomposicao: {
            protons: 112,
            eletrons: 112,
            neutrons: "Desconhecido" // O número de nêutrons pode variar
        },
        categoria: "metal-de-transicao"
    },
    {
        nome: "Nihônio",
        sigla: "Nh",
        numeroAtomico: 113,
        massaAtomica: 286,
        configuracaoEletronica: "[Rn] 5f^14 6d^10 7s^2 7p^1",
        grupo: "Grupo 13",
        periodo: 7,
        estadoNatural: "Sintético",
        raioAtomico: null,
        pontoDeFusao: 430,
        pontoDeEbulicao: 1100,
        densidade: "Desconhecida", // A densidade do nihônio não é bem estabelecida
        eletronegatividade: "Desconhecida", // Não há dados confiáveis sobre a eletronegatividade do nihônio
        aplicacoesComuns: ["Utilizado em pesquisas nucleares e experimentos científicos avançados", "Em estudos sobre a estrutura do núcleo atômico"],
        decomposicao: {
            protons: 113,
            eletrons: 113,
            neutrons: "Desconhecido" // O número de nêutrons pode variar
        },
        categoria: "outros-metais"
    },
    {
        nome: "Fleróvio",
        sigla: "Fl",
        numeroAtomico: 114,
        massaAtomica: 289,
        configuracaoEletronica: "[Rn] 5f^14 6d^10 7s^2 7p^2",
        grupo: "Grupo 14",
        periodo: 7,
        estadoNatural: "Sintético",
        raioAtomico: null,
        pontoDeFusao: 70,
        pontoDeEbulicao: 150,
        densidade: "Desconhecida", // A densidade do fleróvio não é bem estabelecida
        eletronegatividade: "Desconhecida", // Não há dados confiáveis sobre a eletronegatividade do fleróvio
        aplicacoesComuns: ["Utilizado em pesquisas nucleares e experimentos científicos avançados", "Em estudos sobre a estrutura do núcleo atômico"],
        decomposicao: {
            protons: 114,
            eletrons: 114,
            neutrons: "Desconhecido" // O número de nêutrons pode variar
        },
        categoria: "outros-metais"
    },
    {
        nome: "Moscóvio",
        sigla: "Mc",
        numeroAtomico: 115,
        massaAtomica: 290,
        configuracaoEletronica: "[Rn] 5f^14 6d^10 7s^2 7p^3",
        grupo: "Grupo 15",
        periodo: 7,
        estadoNatural: "Sintético",
        raioAtomico: null,
        pontoDeFusao: null,
        pontoDeEbulicao: null,
        densidade: "Desconhecida", // A densidade do moscóvio não é bem estabelecida
        eletronegatividade: "Desconhecida", // Não há dados confiáveis sobre a eletronegatividade do moscóvio
        aplicacoesComuns: ["Utilizado em pesquisas nucleares e experimentos científicos avançados", "Em estudos sobre a estrutura do núcleo atômico"],
        decomposicao: {
            protons: 115,
            eletrons: 115,
            neutrons: "Desconhecido" // O número de nêutrons pode variar
        },
        categoria: "outros-metais"
    },
    {
        nome: "Livermório",
        sigla: "Lv",
        numeroAtomico: 116,
        massaAtomica: 293,
        configuracaoEletronica: "[Rn] 5f^14 6d^10 7s^2 7p^4",
        grupo: "Grupo 16",
        periodo: 7,
        estadoNatural: "Sintético",
        raioAtomico: null,
        pontoDeFusao: null,
        pontoDeEbulicao: null,
        densidade: "Desconhecida", // A densidade do livermório não é bem estabelecida
        eletronegatividade: "Desconhecida", // Não há dados confiáveis sobre a eletronegatividade do livermório
        aplicacoesComuns: ["Utilizado em pesquisas nucleares e experimentos científicos avançados", "Em estudos sobre a estrutura do núcleo atômico"],
        decomposicao: {
            protons: 116,
            eletrons: 116,
            neutrons: "Desconhecido" // O número de nêutrons pode variar
        },
        categoria: "outros-metais"
    },
    {
        nome: "Tenesso",
        sigla: "Ts",
        numeroAtomico: 117,
        massaAtomica: 294,
        configuracaoEletronica: "[Rn] 5f^14 6d^10 7s^2 7p^5",
        grupo: "Grupo 17",
        periodo: 7,
        estadoNatural: "Sintético",
        raioAtomico: null,
        pontoDeFusao: null,
        pontoDeEbulicao: null,
        densidade: "Desconhecida", // A densidade do tenesso não é bem estabelecida
        eletronegatividade: "Desconhecida", // Não há dados confiáveis sobre a eletronegatividade do tenesso
        aplicacoesComuns: ["Utilizado em pesquisas nucleares e experimentos científicos avançados", "Em estudos sobre a estrutura do núcleo atômico"],
        decomposicao: {
            protons: 117,
            eletrons: 117,
            neutrons: "Desconhecido" // O número de nêutrons pode variar
        },
        categoria: "halogenios"
    },
    {
        nome: "Oganessônio",
        sigla: "Og",
        numeroAtomico: 118,
        massaAtomica: 294,
        configuracaoEletronica: "[Rn] 5f^14 6d^10 7s^2 7p^6",
        grupo: "Grupo 18",
        periodo: 7,
        estadoNatural: "Sintético",
        raioAtomico: null,
        pontoDeFusao: null,
        pontoDeEbulicao: null,
        densidade: "Desconhecida", // A densidade do oganessônio não é bem estabelecida
        eletronegatividade: "Desconhecida", // Não há dados confiáveis sobre a eletronegatividade do oganessônio
        aplicacoesComuns: ["Utilizado em pesquisas nucleares e experimentos científicos avançados", "Em estudos sobre a estrutura do núcleo atômico"],
        decomposicao: {
            protons: 118,
            eletrons: 118,
            neutrons: "Desconhecido" // O número de nêutrons pode variar
        },
        categoria: "gas-nobre"
    }
];