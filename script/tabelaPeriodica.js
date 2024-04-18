export const tabelaPeriodica = [
    {
        nome: "Hidrogênio",
        grupo: 1,
        periodo: 1,
        sigla: "H",
        decomposicao: {
            protons: 1,
            eletrons: 1,
            neutrons: 0
        },
        numeroAtomico: 1,
        massaAtomica: 1.008,
        categoria: "nao-metal",
        configuracaoEletronica: "1s¹",
        cor: null,
        radioativo: false,
        estadoNatural: "Gasoso",
        densidade: 0.08988,
        pontoDeFusao: -259.14,
        pontoDeEbulicao: -252.87,
        etalpiaDeFusao: 0.558, // kJ/mol
        etalpiaDeVaporizacao: 0.452, // kJ/mol
        calorEspecifico: 14.304, // J/g·K
        abundanciaNaCrostaTerrestre: 0.15,
        abundanciaNoUniverso: 75,
        raioAtomico: 53,
        raioCovalente: 31,
        eletronegatividade: 2.20, // Escala de Pauling
        volumeAtomico: 14.4, // cm3/mol
        condutividadeTermica: 0.001815, // W/cm·K
        aplicacoesComuns: ["Produção de amônia", "Hidrogenação de óleos", "Propulsão de foguetes"],
        historia: `Henry Cavendish foi o primeiro a distinguir o hidrogênio de outros gases em 1766, quando o preparou reagindo ácido clorídrico com zinco. Em 1670, o cientista inglês Robert Boyle havia observado sua produção reagindo ácidos fortes com metais. O cientista francês Antoine Lavoisier nomeou o elemento hidrogênio em 1783.`,
        endereçoImagemElemento: 'https://images-of-elements.com/hydrogen.jpg',
        curiosidade: 'O Hidrogénio é o principal componente de Júpiter e dos outros planetas gigantes gasosos.'
    },
    {
        nome: "Hélio",
        grupo: 18,
        periodo: 1,
        sigla: "He",
        decomposicao: {
            protons: 2,
            eletrons: 2,
            neutrons: 2
        },
        numeroAtomico: 2,
        massaAtomica: 4.002602,
        categoria: "gas-nobre",
        configuracaoEletronica: "1s²",
        cor: null,
        radioativo: false,
        estadoNatural: "Gasoso",
        densidade: 0.08988,
        pontoDeFusao: -272.2,
        pontoDeEbulicao: -268.93,
        etalpiaDeFusao: 0.02, // kJ/mol
        etalpiaDeVaporizacao: 0.083, // kJ/mol
        calorEspecifico: 5.193, // J/g·K
        abundanciaNaCrostaTerrestre: 0.00055,
        abundanciaNoUniverso: 23,
        raioAtomico: 31,
        raioCovalente: 28,
        eletronegatividade: null, // Escala de Pauling
        volumeAtomico: 27.2, // cm3/mol
        condutividadeTermica: 0.00152, // W/cm·K
        aplicacoesComuns: ["Enchimento de balões", "Ar de proteção em soldagem"],
        historia: `O astrônomo francês Jules Janssen obteve a primeira evidência de hélio durante o eclipse solar de 1868. Norman Lockyer e Edward Frankland sugeriram o nome hélio para o novo elemento. Em 1895, Sir William Ramsay descobriu o hélio na clevite mineral de urânio. Foi descoberto independentemente em cleveite por Per Teodor Cleve e Abraham Langlet.`,
        endereçoImagemElemento: 'https://images-of-elements.com/s/helium.jpg',
        curiosidade: 'Ao contrário de todos os outros elementos, o hélio permanece líquido até ao zero absoluto, a pressões normais.'
    },
    {
        nome: "Lítio",
        grupo: 1,
        periodo: 2,
        sigla: "Li",
        decomposicao: {
            protons: 3,
            eletrons: 3,
            neutrons: 4
        },
        numeroAtomico: 3,
        massaAtomica: 6.941,
        categoria: "metal-alcalino",
        configuracaoEletronica: "[He] 2s¹",
        cor: 'Prata',
        radioativo: false,
        estadoNatural: "Sólido",
        densidade: 0.534,
        pontoDeFusao: 180.54,
        pontoDeEbulicao: 1342,
        etalpiaDeFusao: 3, // kJ/mol
        etalpiaDeVaporizacao: 147, // kJ/mol
        calorEspecifico: 3.582, // J/g·K
        abundanciaNaCrostaTerrestre: 0.0017,
        abundanciaNoUniverso: 0.0000006,
        raioAtomico: 152,
        raioCovalente: 128,
        eletronegatividade: 0.98, // Escala de Pauling
        volumeAtomico: 13.10, // cm3/mol
        condutividadeTermica: 0.847, // W/cm·K
        aplicacoesComuns: ["Baterias de íon-lítio", "Ligas metálicas"],
        historia: `Foi descoberto em 1817 por Johann Arfvedson, quando estava analizando minerais da ilha Sueca Uto.
        O metal puro foi isolado no ano seguinte pelos químicos William Thomas Brande (sueco) e Sir Humphry Davy (inglês), trabalhando independentemente. em 1855, grandes quantias de lítio foram produzidas pela eletrólize do cloreto de lítio por Robert Bunsen e Augustus Matthiessen.`,
        endereçoImagemElemento: 'https://images-of-elements.com/s/lithium.jpg',
        curiosidade: 'O Lítio é o único metal que reage com o Azoto, em condições normais'
    },
    {
        nome: "Berílio",
        grupo: 2,
        periodo: 2,
        sigla: "Be",
        decomposicao: {
            protons: 4,
            eletrons: 4,
            neutrons: 5
        },
        numeroAtomico: 4,
        massaAtomica: 9.012182,
        categoria: "metal-alcalino-terroso",
        configuracaoEletronica: "[He] 2s²",
        cor: 'Cinza ',
        radioativo: false,
        estadoNatural: "Sólido",
        densidade: 1.85,
        pontoDeFusao: 1287,
        pontoDeEbulicao: 2469,
        etalpiaDeFusao: 7.95, // kJ/mol
        etalpiaDeVaporizacao: 297, // kJ/mol
        calorEspecifico: 1.825, // J/g·K
        abundanciaNaCrostaTerrestre: 0.00019,
        abundanciaNoUniverso: 0.0000001,
        raioAtomico: 112,
        raioCovalente: 96,
        eletronegatividade: 1.57, // Escala de Pauling
        volumeAtomico: 4.9, // cm3/mol
        condutividadeTermica: 2.01, // W/cm·K
        aplicacoesComuns: ["Ligas de metal para aeroespacial", "Componentes eletrônicos"],
        historia: `Louis-Nicolas Vauquelin descobriu o berílio em sua forma de oxido, beryl e esmeraldas em 1798.
        Friedrich Wöhler e Antoine Bussy independentemente isilaram berílio em 1828 no reação química de potássio metálico com cloreto de berílio.O primeiro processo comercialmente bem sucedido para produção de berílio foi desebvolvido em 1932 por Alfred Stock e Hans Goldschmidt.`,
        endereçoImagemElemento: 'https://images-of-elements.com/s/beryllium.jpg',
        curiosidade: 'A esmeralda é um composto natural de berílio'
    },
    {
        nome: "Boro",
        grupo: 13,
        periodo: 2,
        sigla: "B",
        decomposicao: {
            protons: 5,
            eletrons: 5,
            neutrons: 6
        },
        numeroAtomico: 5,
        massaAtomica: 10.811,
        categoria: "semimetal",
        configuracaoEletronica: "[He] 2s² 2p¹",
        cor: 'Preto',
        radioativo: false,
        estadoNatural: "Sólido",
        densidade: 2.34,
        pontoDeFusao: 2076,
        pontoDeEbulicao: 3927,
        etalpiaDeFusao: 50, // kJ/mol
        etalpiaDeVaporizacao: 507, // kJ/mol
        calorEspecifico: 1.026, // J/g·K
        abundanciaNaCrostaTerrestre: 0.00086,
        abundanciaNoUniverso: 0.0000001,
        raioAtomico: 90,
        raioCovalente: 84,
        eletronegatividade: 2.04, // Escala de Pauling
        volumeAtomico: 4.6, // cm3/mol
        condutividadeTermica: 0.274, // W/cm·K
        aplicacoesComuns: ["Fibras de vidro", "Borossilicato de vidro (ex: pirex)", "Reforço em materiais compostos"],
        historia: `Os compostos de boro eram conhecidos por milhares de anos, mas o elemento nao foi descoberto até 1808, quando foi isolado por Sir Humphry Davy, Gay-Lussac e Louis Jacques Thénard. Jöns Jakob Berzelius identificou o boro como um elemento em 1824.`,
        endereçoImagemElemento: 'https://images-of-elements.com/s/boron.jpg',
        curiosidade: 'O boro é um nutriente essencial a todas as plantas verdes'

    },
    {
        nome: "Carbono",
        grupo: 14,
        periodo: 2,
        sigla: "C",
        decomposicao: {
            protons: 6,
            eletrons: 6,
            neutrons: 6
        },
        numeroAtomico: 6,
        massaAtomica: 12.0107,
        categoria: "nao-metal",
        configuracaoEletronica: "[He] 2s² 2p²",
        cor: 'Preto',
        radioativo: false,
        estadoNatural: "Sólido",
        densidade: 2.267,
        pontoDeFusao: 3675,
        pontoDeEbulicao: 4027,
        etalpiaDeFusao: 105, // kJ/mol
        etalpiaDeVaporizacao: 715, // kJ/mol
        calorEspecifico: 0.709, // J/g·K
        abundanciaNaCrostaTerrestre: 0.18,
        abundanciaNoUniverso: 0.05,
        raioAtomico: 67,
        raioCovalente: 77,
        eletronegatividade: 2.55, // Escala de Pauling
        volumeAtomico: 5.31, // cm3/mol
        condutividadeTermica: 1.29, // W/cm·K
        aplicacoesComuns: ["Construção de materiais compostos (ex: fibra de carbono)", "Baterias de íon-lítio", "Catálise"],
        historia: `O carbono foi descoberto na pré-historia, conhecido nas formas de fumaça e carvão pelas civilizações mais antigas. Em 1772, Antoine Lavoisier mostrou que diamantes eram uma das formas do carbono; quando queimol amostras de carvão e diamante, e percebeu que nenhum deles produziu água. Em 1779, Carl Wihelm Scheele constatou que grafite queimado formava dioxido de carbono, o que seria mais uma forma do carbono.`,
        endereçoImagemElemento: 'https://images-of-elements.com/s/carbon.jpg',
        curiosidade: 'O carbono representa cerca de 20% do peso, dos organismos vivos'
    },
    {
        nome: "Nitrogênio",
        grupo: 15,
        periodo: 2,
        sigla: "N",
        decomposicao: {
            protons: 7,
            eletrons: 7,
            neutrons: 7
        },
        numeroAtomico: 7,
        massaAtomica: 14.0067,
        categoria: "nao-metal",
        configuracaoEletronica: "[He] 2s² 2p³",
        cor: null,
        radioativo: false,
        estadoNatural: "Gasoso",
        densidade: 0.0012506,
        pontoDeFusao: -210,
        pontoDeEbulicao: -195.79,
        etalpiaDeFusao: 0.36, // kJ/mol
        etalpiaDeVaporizacao: 2.79, // kJ/mol
        calorEspecifico: 1.04, // J/g·K
        abundanciaNaCrostaTerrestre: 0.002,
        abundanciaNoUniverso: 0.1,
        raioAtomico: 56,
        raioCovalente: 71,
        eletronegatividade: 3.04, // Escala de Pauling
        volumeAtomico: 17.3, // cm3/mol
        condutividadeTermica: 0.0002598, // W/cm·K
        aplicacoesComuns: ["Produção de amônia", "Fertilizantes", "Indústria alimentícia"],
        historia: `É considerado que o nitrogenio foi descoberto pelo físico escocês Daniel Rutherford em 1772, que chamou-o de ar nitroso ou ar fixo. Era também estudado ao mesmo tempo por Carl Wihelm Scheele, Henry Cavendish e Joseph Priestley. Em 1790 o químico francês Jean Antoine Claude Chaptal nomeou o elemento de nitrogenio.`,
        endereçoImagemElemento: 'https://images-of-elements.com/s/nitrogen.jpg',
        curiosidade: 'O azoto (ou nitrogênio) está presente em todos os organismos vivos, nas proteínas, ácidos nucleicos e noutras moléculas'
    },
    {
        nome: "Oxigênio",
        grupo: 16,
        periodo: 2,
        sigla: "O",
        decomposicao: {
            protons: 8,
            eletrons: 8,
            neutrons: 8
        },
        numeroAtomico: 8,
        massaAtomica: 15.9994,
        categoria: "nao-metal",
        configuracaoEletronica: "[He] 2s² 2p⁴",
        cor: null,
        radioativo: false,
        estadoNatural: "Gasoso",
        densidade: 0.001429,
        pontoDeFusao: -218.79,
        pontoDeEbulicao: -182.95,
        etalpiaDeFusao: 0.222, // kJ/mol
        etalpiaDeVaporizacao: 3.41, // kJ/mol
        calorEspecifico: 0.918, // J/g·K
        abundanciaNaCrostaTerrestre: 46,
        abundanciaNoUniverso: 1,
        raioAtomico: 48,
        raioCovalente: 66,
        eletronegatividade: 3.44, // Escala de Pauling
        volumeAtomico: 14, // cm3/mol
        condutividadeTermica: 0.0002674, // W/cm·K
        aplicacoesComuns: ["Respiração", "Oxigenoterapia", "Combustíveis e oxidantes"],
        historia: `Carld Wilhelm Scheele obteve oxigenio ao aquecer óxido de mercúrio e nitratos em 1771, mas não publicou suas descobertas até 1777, Joseph Priestley também obteve esse elemento com 1774. O nome foi dado em 1777 por Antoine Lavoisier, cujo esperimentos ajudaram a desmentir a crença popular de sua combustão e corrosão.`,
        endereçoImagemElemento: 'https://images-of-elements.com/s/oxygen.jpg',
        curiosidade: 'As cores verde e vermelha da Aurora Boreal são provocadas por átomos de oxigénio'
    },
    {
        nome: "Flúor",
        grupo: 17,
        periodo: 2,
        sigla: "F",
        decomposicao: {
            protons: 9,
            eletrons: 9,
            neutrons: 10
        },
        numeroAtomico: 9,
        massaAtomica: 18.9984032,
        categoria: "halogenios",
        configuracaoEletronica: "[He] 2s² 2p⁵",
        cor: null,
        radioativo: false,
        estadoNatural: "Gasoso",
        densidade: 0.001696,
        pontoDeFusao: -219.62,
        pontoDeEbulicao: -188.12,
        etalpiaDeFusao: 0.26, // kJ/mol
        etalpiaDeVaporizacao: 3.27, // kJ/mol
        calorEspecifico: 0.824, // J/g·K
        abundanciaNaCrostaTerrestre: 0.054,
        abundanciaNoUniverso: 0.00004,
        raioAtomico: 42,
        raioCovalente: 64,
        eletronegatividade: 3.98, // Escala de Pauling
        volumeAtomico: 17.1, // cm3/mol
        condutividadeTermica: 0.000279, // W/cm·K
        aplicacoesComuns: ["Odontologia", "Tratamento de água", "Produção de compostos químicos"],
        historia: `Em 1529, Georgius Agricola descreveu a aplicação da fluorite como fundente. Em 1670, Heinrich Schwandhard descobriu ser possível gravar em vidro, quando exposto à fuorite misturada com ácido. Em 1810, o cientista francês Andre-Marie Ampere propôs que o ácido fluorídrico fosse um composto formado por hidrogénio e um novo elemento. Em 1886, o elemento foi, finalmente, isolado por Henri Moissan.`,
        endereçoImagemElemento: 'https://images-of-elements.com/s/fluorine.jpg',
        curiosidade: 'O Flúor reage violentamente com a água para produzir oxigênio'
    },
    {
        nome: "Neônio",
        grupo: 18,
        periodo: 2,
        sigla: "Ne",
        decomposicao: {
            protons: 10,
            eletrons: 10,
            neutrons: 10
        },
        numeroAtomico: 10,
        massaAtomica: 20.1797,
        categoria: "gas-nobre",
        configuracaoEletronica: "[He] 2s² 2p⁶",
        cor: null,
        radioativo: false,
        estadoNatural: "Gasoso",
        densidade: 0.0008999,
        pontoDeFusao: -248.59,
        pontoDeEbulicao: -246.08,
        etalpiaDeFusao: 0.34, // kJ/mol
        etalpiaDeVaporizacao: 1.75, // kJ/mol
        calorEspecifico: 1.03, // J/g·K
        abundanciaNaCrostaTerrestre: 0.0000003,
        abundanciaNoUniverso: 0.13,
        raioAtomico: 38,
        raioCovalente: 58,
        eletronegatividade: null, // Escala de Pauling
        volumeAtomico: 16.7, // cm3/mol
        condutividadeTermica: 0.000493, // W/cm·K
        aplicacoesComuns: ["Lâmpadas de néon", "Indicadores luminosos", "Enchimento de tubos de descarga"], historia: `O Neônio foi descoberto em 1898 pelos químicos britânicos Sir William Ramsay e Morris W. Travers em Londres. Foi descoberto quando Ramsay resfriou uma amostra de ar até que se tornasse um líquido, então aqueceu o líquido e capturou os gases enquanto eles ferviam. Depois de 1902, a empresa de Georges Claude, a Air Liquide, estava produzindo quantidades industriais de neônio como um subproduto de seu negócio de liquefação de ar.`,
        endereçoImagemElemento: 'https://images-of-elements.com/s/neon.jpg',
        curiosidade: 'Numa válvula termiónica, o Neônio produz um brilho laranja avermelhado'
    },
    {
        nome: "Sódio",
        grupo: 1,
        periodo: 3,
        sigla: "Na",
        decomposicao: {
            protons: 11,
            eletrons: 11,
            neutrons: 12
        },
        numeroAtomico: 11,
        massaAtomica: 22.98976928,
        categoria: "metal-alcalino",
        configuracaoEletronica: "[Ne] 3s¹",
        cor: 'prata',
        radioativo: false,
        estadoNatural: "Sólido",
        densidade: 0.971,
        pontoDeFusao: 97.72,
        pontoDeEbulicao: 883,
        etalpiaDeFusao: 2.6, // kJ/mol
        etalpiaDeVaporizacao: 97.7, // kJ/mol
        calorEspecifico: 1.228, // J/g·K
        abundanciaNaCrostaTerrestre: 2.3,
        abundanciaNoUniverso: 0.002,
        raioAtomico: 186,
        raioCovalente: 166,
        eletronegatividade: 0.93, // Escala de Pauling
        volumeAtomico: 23.7, // cm3/mol
        condutividadeTermica: 1.41, // W/cm·K
        aplicacoesComuns: ["Produção de ligas metálicas", "Indústria alimentícia", "Baterias de sódio"],
        historia: `A abreviatura química do sódio foi publicada pela primeira vez por Jöns Jakob Berzelius em seu sistema de símbolos atômicos. É uma contração do novo nome latino do elemento natrium, que se refere ao natrão egípcio, um sal mineral natural feito principalmente de carbonato de sódio hidratado. Em 1807, Sir Humphry Davy isolou o sódio pela primeira vez por eletrólise de hidróxido de sódio seco, que havia sido levemente umedecido.`,
        endereçoImagemElemento: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/Na_%28Sodium%29.jpg/800px-Na_%28Sodium%29.jpg?20080405111018',
        curiosidade: 'O Sódio arde no ar, produzindo uma chama amarela brilhante'
    },
    {
        nome: "Magnésio",
        grupo: 2,
        periodo: 3,
        sigla: "Mg",
        decomposicao: {
            protons: 12,
            eletrons: 12,
            neutrons: 12
        },
        numeroAtomico: 12,
        massaAtomica: 24.305,
        categoria: "metal-alcalino-terroso",
        configuracaoEletronica: "[Ne] 3s2",
        cor: 'prata',
        radioativo: false,
        estadoNatural: "Sólido",
        densidade: 1.738,
        pontoDeFusao: 650,
        pontoDeEbulicao: 1090,
        etalpiaDeFusao: 8.7, // kJ/mol
        etalpiaDeVaporizacao: 128, // kJ/mol
        calorEspecifico: 1.023, // J/g·K
        abundanciaNaCrostaTerrestre: 2.9,
        abundanciaNoUniverso: 0.06,
        raioAtomico: 160,
        raioCovalente: 141,
        eletronegatividade: 1.31, // Escala de Pauling
        volumeAtomico: 13.97, // cm3/mol
        condutividadeTermica: 1.56, // W/cm·K
        aplicacoesComuns: ["Ligas metálicas", "Medicamentos (ex: leite de magnésia)", "Pirrotecnia"],
        historia: `O químico escocês Joseph Black reconheceu o magnésio como um elemento em 1755. O magnésio foi isolado pela primeira vez por Sir Humphry Davy em 1808, em Londres. Ele usou a eletrólise em uma mistura de magnésia e óxido de mercúrio. Antoine Bussy o preparou de forma coerente em 1831.`,
        endereçoImagemElemento: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/Na_%28Sodium%29.jpg/800px-Na_%28Sodium%29.jpg?20080405111018',
        curiosidade: 'Quando arde no ar, o Magnésio produz uma luz branca, brilhante'
    },
    {
        nome: "Alumínio",
        grupo: 13,
        periodo: 3,
        sigla: "Al",
        decomposicao: {
            protons: 13,
            eletrons: 13,
            neutrons: 14
        },
        numeroAtomico: 13,
        massaAtomica: 26.9815386,
        categoria: "outros-metais",
        configuracaoEletronica: "[Ne] 3s² 3p¹",
        cor: 'prata',
        radioativo: false,
        estadoNatural: "Sólido",
        densidade: 2.698,
        pontoDeFusao: 660.32,
        pontoDeEbulicao: 2519,
        etalpiaDeFusao: 10.7, // kJ/mol
        etalpiaDeVaporizacao: 293, // kJ/mol
        calorEspecifico: 0.897, // J/g·K
        abundanciaNaCrostaTerrestre: 8.1,
        abundanciaNoUniverso: 0.005,
        raioAtomico: 143,
        raioCovalente: 121,
        eletronegatividade: 1.61, // Escala de Pauling
        volumeAtomico: 9.98, // cm3/mol
        condutividadeTermica: 2.37, // W/cm·K
        aplicacoesComuns: ["Construção de estruturas", "Embalagens", "Equipamentos elétricos"],
        historia: `Em 1761, Guyton de Morveau propôs o nome alumina para a base em alúmen, e Antoine Lavoisier, em 1787, pensou que se tratava de um óxido de um metal ainda não descoberto. Sir Humphry Davy identificou a existência de uma base metálica de alúmen em 1808. Hans Christian Ørsted foi o primeiro a isolar o alumínio metálico em 1825 na forma impura. Friedrich Wöhler é geralmente creditado por ter isolado o metal em 1827.`,
        endereçoImagemElemento: 'https://images-of-elements.com/s/aluminium-4.jpg',
        curiosidade: 'Em condições normais, o Alumínio não adere aos ímans'
    },
    {
        nome: "Silício",
        grupo: 14,
        periodo: 3,
        sigla: "Si",
        decomposicao: {
            protons: 14,
            eletrons: 14,
            neutrons: 14
        },
        numeroAtomico: 14,
        massaAtomica: 28.0855,
        categoria: "semimetal",
        configuracaoEletronica: "[Ne] 3s² 3p²",
        cor: 'Cinza',
        radioativo: false,
        estadoNatural: "Sólido",
        densidade: 2.3296,
        pontoDeFusao: 1414,
        pontoDeEbulicao: 3265,
        etalpiaDeFusao: 50.2, // kJ/mol
        etalpiaDeVaporizacao: 359, // kJ/mol
        calorEspecifico: 0.705, // J/g·K
        abundanciaNaCrostaTerrestre: 27,
        abundanciaNoUniverso: 0.07,
        raioAtomico: 111,
        raioCovalente: 111,
        eletronegatividade: 1.9, // Escala de Pauling
        volumeAtomico: 12.1, // cm3/mol
        condutividadeTermica: 1.48, // W/cm·K
        aplicacoesComuns: ["Fabricação de chips e semicondutores", "Vidros (ex: vidro de janelas)"],
        historia: `Em 1800, Sir Humphry Davy pensava que a sílica era um composto e não um elemento; mas em 1811, Gay Lussac e Louis Jacques Thénard provavelmente prepararam silício amorfo impuro aquecendo o potássio com tetrafluoreto de silício. Em 1824, Jöns Jakob Berzelius preparou silício amorfo pelo mesmo método geral. Henri Deville em 1854 preparou pela primeira vez o silício cristalino, a segunda forma alotrópica do elemento.`,
        endereçoImagemElemento: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e9/SiliconCroda.jpg/800px-SiliconCroda.jpg?20080208160612',
        curiosidade: 'O Silício tem a propriedade invulgar de aumentar de volume, quando congela'
    },
    {
        nome: "Fósforo",
        grupo: 15,
        periodo: 3,
        sigla: "P",
        decomposicao: {
            protons: 15,
            eletrons: 15,
            neutrons: 16
        },
        numeroAtomico: 15,
        massaAtomica: 30.973762,
        categoria: "nao-metal",
        configuracaoEletronica: "[Ne] 3s² 3p³",
        cor: null,
        radioativo: false,
        estadoNatural: "Sólido",
        densidade: 1.82,
        pontoDeFusao: 44.1,
        pontoDeEbulicao: 279.85,
        etalpiaDeFusao: 0.64, // kJ/mol
        etalpiaDeVaporizacao: 12.4, // kJ/mol
        calorEspecifico: 0.769, // J/g·K
        abundanciaNaCrostaTerrestre: 0.099,
        abundanciaNoUniverso: 0.0007,
        raioAtomico: 98,
        raioCovalente: 107,
        eletronegatividade: 2.19, // Escala de Pauling
        volumeAtomico: 17, // cm3/mol
        condutividadeTermica: 0.00235, // W/cm·K
        aplicacoesComuns: ["Fertilizantes", "Fósforos", "Produtos químicos"],
        historia: `Hennig Brand descobriu o fósforo em 1669, em Hamburgo, na Alemanha, preparando-o a partir da urina. Em 1769, Johan Gottlieb Gahn e Carl Wilhelm Scheele mostraram que o fosfato de cálcio é encontrado nos ossos e eles obtiveram fósforo elementar da cinza óssea. Antoine Lavoisier reconheceu o fósforo como um elemento em 1777.`,
        endereçoImagemElemento: 'https://images-of-elements.com/s/red-phosphorus.jpg',
        curiosidade: 'O Fósforo natural existe maioritariamente em duas formas: branca e vermelha'
    },
    {
        nome: "Enxofre",
        grupo: 16,
        periodo: 3,
        sigla: "S",
        decomposicao: {
            protons: 16,
            eletrons: 16,
            neutrons: 16
        },
        numeroAtomico: 16,
        massaAtomica: 32.065,
        categoria: "nao-metal",
        configuracaoEletronica: "[Ne] 3s² 3p⁴",
        cor: 'Amarelo',
        radioativo: false,
        estadoNatural: "Sólido",
        densidade: 2.067,
        pontoDeFusao: 115.21,
        pontoDeEbulicao: 444.65,
        etalpiaDeFusao: 1.73, // kJ/mol
        etalpiaDeVaporizacao: 9.8, // kJ/mol
        calorEspecifico: 0.71, // J/g·K
        abundanciaNaCrostaTerrestre: 0.042,
        abundanciaNoUniverso: 0.05,
        raioAtomico: 88,
        raioCovalente: 105,
        eletronegatividade: 2.58, // Escala de Pauling
        volumeAtomico: 15.5, // cm3/mol
        condutividadeTermica: 0.00269, // W/cm·K
        aplicacoesComuns: ["Indústria de fertilizantes", "Produção de ácido sulfúrico", "Produtos de cuidado pessoal"],
        historia: `Hennig Brand descobriu o fósforo em 1669, em Hamburgo, na Alemanha, preparando-o a partir da urina. Em 1769, Johan Gottlieb Gahn e Carl Wilhelm Scheele mostraram que o fosfato de cálcio é encontrado nos ossos e eles obtiveram fósforo elementar da cinza óssea. Antoine Lavoisier reconheceu o fósforo como um elemento em 1777.`,
        endereçoImagemElemento: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Sulfur-sample.jpg/799px-Sulfur-sample.jpg?20070516165927',
        curiosidade: 'A penicilina é um antibiótico natural, à base de enxofre'
    },
    {
        nome: "Cloro",
        grupo: 17,
        periodo: 3,
        sigla: "Cl",
        decomposicao: {
            protons: 17,
            eletrons: 17,
            neutrons: 18
        },
        numeroAtomico: 17,
        massaAtomica: 35.453,
        categoria: "halogenios",
        configuracaoEletronica: "[Ne] 3s² 3p⁵",
        cor: 'Amarelo',
        radioativo: false,
        estadoNatural: "Gasoso",
        densidade: 0.003214,
        pontoDeFusao: -101.5,
        pontoDeEbulicao: -34.04,
        etalpiaDeFusao: 3.2, // kJ/mol
        etalpiaDeVaporizacao: 10.2, // kJ/mol
        calorEspecifico: 0.479, // J/g·K
        abundanciaNaCrostaTerrestre: 0.017,
        abundanciaNoUniverso: 0.0001,
        raioAtomico: 79,
        raioCovalente: 102,
        eletronegatividade: 3.16, // Escala de Pauling
        volumeAtomico: 22.7, // cm3/mol
        condutividadeTermica: 0.000089, // W/cm·K
        aplicacoesComuns: ["Desinfetante", "Produção de PVC", "Branqueamento de água"],
        historia: `Por volta de 1630, o cloro foi reconhecido como gás pelo químico e médico belga Jan Baptist van Helmont. O cloro elementar foi preparado e estudado pela primeira vez em 1774 pelo químico sueco Carl Wilhelm Scheele. Em 1810, o consenso científico era de que o cloro era na verdade um composto que continha oxigênio. Em 1811, Sir Humphry Davy concluiu que o novo gás era na verdade um novo elemento.`,
        endereçoImagemElemento: 'https://images-of-elements.com/s/chlorine.jpg',
        curiosidade: 'As rãs-arborícolas possuem um composto de Cloro na pele que é um poderosíssimo analgésico'
    },
    {
        nome: "Argônio",
        grupo: 18,
        periodo: 3,
        sigla: "Ar",
        decomposicao: {
            protons: 18,
            eletrons: 18,
            neutrons: 22
        },
        numeroAtomico: 18,
        massaAtomica: 39.948,
        categoria: "gas-nobre",
        configuracaoEletronica: "[Ne] 3s² 3p⁶",
        cor: null,
        radioativo: false,
        estadoNatural: "Gasoso",
        densidade: 0.0017837,
        pontoDeFusao: -189.35,
        pontoDeEbulicao: -185.85,
        etalpiaDeFusao: 1.18, // kJ/mol
        etalpiaDeVaporizacao: 6.5, // kJ/mol
        calorEspecifico: 0.52, // J/g·K
        abundanciaNaCrostaTerrestre: 0.00015,
        abundanciaNoUniverso: 0.02,
        raioAtomico: 71,
        raioCovalente: 106,
        eletronegatividade: null, // Escala de Pauling
        volumeAtomico: 22.4, // cm3/mol
        condutividadeTermica: 0.0001772, // W/cm·K
        aplicacoesComuns: ["Enchimento de lâmpadas incandescentes", "Ambientes de proteção em soldagem", "Preservação de amostras químicas"],
        historia: `Árgon era suspeito de estar presente no ar por Henry Cavendish em 1785. Ele não foi isolado até 1894 por Lord Rayleigh e Sir William Ramsay na Escócia. Árgon se tornou o primeiro membro dos gases nobres a ser descoberto. Em 1957, a IUPAC concordou que o símbolo deveria mudar de A para Ar.`,
        endereçoImagemElemento: 'https://images-of-elements.com/s/argon.jpg',
        curiosidade: 'O Argônio produz um gás laser azul-esverdeado'
    },
    {
        nome: "Potássio",
        grupo: 1,
        periodo: 4,
        sigla: "K",
        decomposicao: {
            protons: 19,
            eletrons: 19,
            neutrons: 20
        },
        numeroAtomico: 19,
        massaAtomica: 39.0983,
        categoria: "metal-alcalino",
        configuracaoEletronica: "[Ar] 4s¹",
        cor: 'Prata',
        radioativo: false,
        estadoNatural: "Sólido",
        densidade: 0.862,
        pontoDeFusao: 63.38,
        pontoDeEbulicao: 759,
        etalpiaDeFusao: 2.33, // kJ/mol
        etalpiaDeVaporizacao: 76.9, // kJ/mol
        calorEspecifico: 0.757, // J/g·K
        abundanciaNaCrostaTerrestre: 1.5,
        abundanciaNoUniverso: 0.0003,
        raioAtomico: 227,
        raioCovalente: 203,
        eletronegatividade: 0.82, // Escala de Pauling
        volumeAtomico: 45.46, // cm3/mol
        condutividadeTermica: 1.024, // W/cm·K
        aplicacoesComuns: ["Fertilizantes", "Indústria farmacêutica", "Alimentos para enriquecimento de potássio"],
        historia: `O símbolo K do potássio vem de 'kalium', o nome do elemento na Alemanha e na Escandinávia. O potássio metálico foi isolado pela primeira vez em 1807 por Sir Humphry Davy, que o derivou do potássio cáustico pelo uso da eletrólise do sal fundido com a pilha voltaica recém-descoberta. O potássio foi o primeiro metal isolado por eletrólise.`,
        endereçoImagemElemento: 'https://images-of-elements.com/s/potassium.jpg',
        curiosidade: 'Pessoas com dietas pobres em Potássio, poderão sofrer de hipocalemia'
    },
    {
        nome: "Cálcio",
        grupo: 2,
        periodo: 4,
        sigla: "Ca",
        decomposicao: {
            protons: 20,
            eletrons: 20,
            neutrons: 20
        },
        numeroAtomico: 20,
        massaAtomica: 40.078,
        categoria: "metal-alcalino-terroso",
        configuracaoEletronica: "[Ar] 4s²",
        cor: 'Prata',
        radioativo: false,
        estadoNatural: "Sólido",
        densidade: 1.54,
        pontoDeFusao: 842,
        pontoDeEbulicao: 1484,
        etalpiaDeFusao: 8.54, // kJ/mol
        etalpiaDeVaporizacao: 155, // kJ/mol
        calorEspecifico: 0.647, // J/g·K
        abundanciaNaCrostaTerrestre: 5,
        abundanciaNoUniverso: 0.007,
        raioAtomico: 197,
        raioCovalente: 176,
        eletronegatividade: 1, // Escala de Pauling
        volumeAtomico: 29.9, // cm3/mol
        condutividadeTermica: 2.01, // W/cm·K
        aplicacoesComuns: ["Produção de ligas metálicas", "Construção de estruturas", "Suplementos alimentares"],
        historia: `O cálcio já era conhecido no século I, quando os antigos romanos preparavam a cal como óxido de cálcio. O cálcio foi isolado pela primeira vez por Sir Humphry Davy em 1808, quando ele eletrolisou uma mistura de cal e óxido de mercúrio. Davy estava tentando isolar o cálcio; quando soube que Jöns Jakob Berzelius e Pontin preparavam amálgama de cálcio eletrolizando cal em mercúrio, ele mesmo tentou.`,
        endereçoImagemElemento: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Calcium_unter_Argon_Schutzgasatmosph%C3%A4re.jpg/800px-Calcium_unter_Argon_Schutzgasatmosph%C3%A4re.jpg?20070308094022',
        curiosidade: 'A casca do ovo é principalmente constituída por carbonato de Cálcio'
    },
    {
        nome: "Escândio",
        grupo: 3,
        periodo: 4,
        sigla: "Sc",
        decomposicao: {
            protons: 21,
            eletrons: 21,
            neutrons: 24
        },
        numeroAtomico: 21,
        massaAtomica: 44.955912,
        categoria: "metal-de-transicao",
        configuracaoEletronica: "[Ar] 3d¹ 4s²",
        cor: 'Prata',
        radioativo: false,
        estadoNatural: "Sólido",
        densidade: 2.989,
        pontoDeFusao: 2805.8,
        pontoDeEbulicao: 2836,
        etalpiaDeFusao: 16, // kJ/mol
        etalpiaDeVaporizacao: 318, // kJ/mol
        calorEspecifico: 0.568, // J/g·K
        abundanciaNaCrostaTerrestre: 0.0026,
        abundanciaNoUniverso: 0.000003,
        raioAtomico: 162,
        raioCovalente: 170,
        eletronegatividade: 1.36, // Escala de Pauling
        volumeAtomico: 15, // cm3/mol
        condutividadeTermica: 0.158, // W/cm·K
        aplicacoesComuns: ["Ligas de alumínio", "Componentes de lâmpadas de vapor de mercúrio", "Sensores"],
        historia: `Em 1879, Lars Fredrik Nilson e sua equipe detectaram escândio nos minerais euxenite e gadolinite. Nilsom então preparou 2 gramas de oxido de escândio de alta pureza. Per Teodor Cleve mostrou que o escândio tinha propriedades similares as prévistas por Mendeleev para eka-boro Escândio metálico foi preparado pela primeira vez em 1937 por Fischer e seu colegas`,
        endereçoImagemElemento: 'https://images-of-elements.com/s/scandium-2.jpg',
        curiosidade: 'A forma estável do Escândio é criada nas supernovas, no processo-r'
    },
    {
        nome: "Titânio",
        grupo: 4,
        periodo: 4,
        sigla: "Ti",
        decomposicao: {
            protons: 22,
            eletrons: 22,
            neutrons: 26
        },
        numeroAtomico: 22,
        massaAtomica: 47.867,
        categoria: "metal-de-transicao",
        configuracaoEletronica: "[Ar] 3d² 4s²",
        cor: 'Prata',
        radioativo: false,
        estadoNatural: "Sólido",
        densidade: 4.54,
        pontoDeFusao: 1668,
        pontoDeEbulicao: 3287,
        etalpiaDeFusao: 18.7, // kJ/mol
        etalpiaDeVaporizacao: 425, // kJ/mol
        calorEspecifico: 0.523, // J/g·K
        abundanciaNaCrostaTerrestre: 0.66,
        abundanciaNoUniverso: 0.0003,
        raioAtomico: 147,
        raioCovalente: 160,
        eletronegatividade: 1.54, // Escala de Pauling
        volumeAtomico: 10.64, // cm3/mol
        condutividadeTermica: 0.219, // W/cm·K
        aplicacoesComuns: ["Aeronáutica", "Indústria naval", "Implantes médicos"],
        historia: `William Gregor encontrou óxido de titanio no mineral ilmenite em 1791. Martin Heintich Klaproth descobriu independentemente o elemento no mineral rutilo em 1795 e o nomeou. a forma pura e metálica só foi obtida em 1910 por Matthew A. Hunter. Em 1936, o processo de Kroll tornou a produção comercial do titanio possivel.`,
        endereçoImagemElemento: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/db/Titan-crystal_bar.JPG/800px-Titan-crystal_bar.JPG?20090724123530',
        curiosidade: 'O Titânio é um dos poucos elementos que arde na presença de nitrogénio puro'
    },
    {
        nome: "Vanádio",
        grupo: 5,
        periodo: 4,
        sigla: "V",
        decomposicao: {
            protons: 23,
            eletrons: 23,
            neutrons: 28
        },
        numeroAtomico: 23,
        massaAtomica: 50.9415,
        categoria: "metal-de-transicao",
        configuracaoEletronica: "[Ar] 3d³ 4s²",
        cor: 'Prata',
        radioativo: false,
        estadoNatural: "Sólido",
        densidade: 6.11,
        pontoDeFusao: 1910,
        pontoDeEbulicao: 3407,
        etalpiaDeFusao: 22.8, // kJ/mol
        etalpiaDeVaporizacao: 453, // kJ/mol
        calorEspecifico: 0.489, // J/g·K
        abundanciaNaCrostaTerrestre: 0.019,
        abundanciaNoUniverso: 0.0001,
        raioAtomico: 134,
        raioCovalente: 153,
        eletronegatividade: 1.63, // Escala de Pauling
        volumeAtomico: 8.78, // cm3/mol
        condutividadeTermica: 0.307, // W/cm·K
        aplicacoesComuns: ["Ligas metálicas", "Componentes de aço", "Catalisadores químicos"],
        historia: `Vanadio foi originalmente descoberto por Andrés Manuel del Río em 1801. Em 1805, o químico frances Hippolyte Victor Collet-Descotils declarou incorretamente que o elemento descoberto por del Río era apenas uma amostra impura de cromo. Em 1831, o químico suéco Nils Gabriel Sefström redescobriu o elemento em um novo óxido encontrado durante um trabalho com minérios de ferro. No mesmo ano, Friedrish Wöhler confirmou o trabalho anterior de del Río`,
        endereçoImagemElemento: 'https://images-of-elements.com/s/vanadium-crystals-2.jpg',
        curiosidade: 'O Vanádio é menerado sobretudo, na África do Sul, no noroeste da China, e na Rússia oriental'
    },
    {
        nome: "Cromo",
        grupo: 6,
        periodo: 4,
        sigla: "Cr",
        decomposicao: {
            protons: 24,
            eletrons: 24,
            neutrons: 28
        },
        numeroAtomico: 24,
        massaAtomica: 51.9961,
        categoria: "metal-de-transicao",
        configuracaoEletronica: "[Ar] 3d⁵ 4s¹",
        cor: 'Prata',
        radioativo: false,
        estadoNatural: "Sólido",
        densidade: 7.15,
        pontoDeFusao: 1907,
        pontoDeEbulicao: 2671,
        etalpiaDeFusao: 20.5, // kJ/mol
        etalpiaDeVaporizacao: 339, // kJ/mol
        calorEspecifico: 0.449, // J/g·K
        abundanciaNaCrostaTerrestre: 0.014,
        abundanciaNoUniverso: 0.0015,
        raioAtomico: 128,
        raioCovalente: 138,
        eletronegatividade: 1.66, // Escala de Pauling
        volumeAtomico: 7.23, // cm3/mol
        condutividadeTermica: 0.937, // W/cm·K
        aplicacoesComuns: ["Fabricação de aço inoxidável", "Cromagem", "Pigmentos"],
        historia: `Em 1797, Louis Nicolas Vauquelin recebeu amostras de minério de crocoite. Em 1798, Vauquelin decobriu que era possivel isolar o cromo metálico aquecendo o oxido em um forno de carvão vegetal, fazendo dele o descobridor do elemento. Vauquelin tambem foi capas de detectar traços de cromo em pedras preciosas, como rubis e esmeraldas.`,
        endereçoImagemElemento: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Chromium_crystals_and_1cm3_cube.jpg/800px-Chromium_crystals_and_1cm3_cube.jpg?20100427224119',
        curiosidade: 'O óxido de Crómio foi utilizado pelos chineses na dinastia Qin, hão mais de 2000 anos'
    },
    {
        nome: "Manganês",
        grupo: 7,
        periodo: 4,
        sigla: "Mn",
        decomposicao: {
            protons: 25,
            eletrons: 25,
            neutrons: 30
        },
        numeroAtomico: 25,
        massaAtomica: 54.938045,
        categoria: "metal-de-transicao",
        configuracaoEletronica: "[Ar] 3d⁵ 4s²",
        cor: 'Prata',
        radioativo: false,
        estadoNatural: "Sólido",
        densidade: 7.44,
        pontoDeFusao: 1246,
        pontoDeEbulicao: 2061,
        etalpiaDeFusao: 13.2, // kJ/mol
        etalpiaDeVaporizacao: 220, // kJ/mol
        calorEspecifico: 0.479, // J/g·K
        abundanciaNaCrostaTerrestre: 0.11,
        abundanciaNoUniverso: 0.0008,
        raioAtomico: 127,
        raioCovalente: 139,
        eletronegatividade: 1.55, // Escala de Pauling
        volumeAtomico: 7.4, // cm3/mol
        condutividadeTermica: 0.0782, // W/cm·K
        aplicacoesComuns: ["Produção de aço", "Baterias recarregáveis", "Pigmentos para tintas"],
        historia: `No meio do séc XVIII, o químico suéco Carl Wilhelm Scheele usou pyrolusite para produzir cloro. Scheele e outros estavam cientes de que pyrolusite continha um novo elemento, mas não conseguiam isola-lo. Johan Gottlieb Gahn foi o primeiro a isolar um amostra impura de manganes em 1774, reduzindo o óxido com carbono.`,
        endereçoImagemElemento: 'https://images-of-elements.com/s/manganese-2.jpg',
        curiosidade: 'Pensa-se que os neandertais terão utilizado Manganês preto como cosmético, hão 50.000 anos'
    },
    {
        nome: "Ferro",
        grupo: 8,
        periodo: 4,
        sigla: "Fe",
        decomposicao: {
            protons: 26,
            eletrons: 26,
            neutrons: 30
        },
        numeroAtomico: 26,
        massaAtomica: 55.845,
        categoria: "metal-de-transicao",
        configuracaoEletronica: "[Ar] 3d⁶ 4s²",
        cor: 'Cinza',
        radioativo: false,
        estadoNatural: "Sólido",
        densidade: 7.874,
        pontoDeFusao: 1538,
        pontoDeEbulicao: 2861,
        etalpiaDeFusao: 13.8, // kJ/mol
        etalpiaDeVaporizacao: 347, // kJ/mol
        calorEspecifico: 0.449, // J/g·K
        abundanciaNaCrostaTerrestre: 6.3,
        abundanciaNoUniverso: 0.11,
        raioAtomico: 126,
        raioCovalente: 132,
        eletronegatividade: 1.83, // Escala de Pauling
        volumeAtomico: 7.1, // cm3/mol
        condutividadeTermica: 0.802, // W/cm·K
        aplicacoesComuns: ["Indústria metalúrgica", "Construção", "Produção de aço"],
        historia: `O primeiro ferro usado pelos seres humanos provavelmente veio de meteoritos. Os objetos de ferro mais velhos usados por humanos foram algumas contas ( de colares ou pulseiras ) feitas de ferro meteorico no Egito a cerca de 4000 A.C. Sua fundição foi descoberta por volta de 3000 A.C e levou ao inicio da idade do ferro por volta de 1200 A.C, iniciando o seu uso para ferramentas e armas.`,
        endereçoImagemElemento: 'https://images-of-elements.com/s/iron.jpg',
        curiosidade: 'O cor do sangue deve-se à hemoglobina, uma proteína que contém Ferro'
    },
    {
        nome: "Cobalto",
        grupo: 9,
        periodo: 4,
        sigla: "Co",
        decomposicao: {
            protons: 27,
            eletrons: 27,
            neutrons: 32
        },
        numeroAtomico: 27,
        massaAtomica: 58.933195,
        categoria: "metal-de-transicao",
        configuracaoEletronica: "[Ar] 3d⁷ 4s²",
        cor: 'Cinza',
        radioativo: false,
        estadoNatural: "Sólido",
        densidade: 8.86,
        pontoDeFusao: 1495,
        pontoDeEbulicao: 2927,
        etalpiaDeFusao: 16.2, // kJ/mol
        etalpiaDeVaporizacao: 375, // kJ/mol
        calorEspecifico: 0.421, // J/g·K
        abundanciaNaCrostaTerrestre: 0.003,
        abundanciaNoUniverso: 0.0003,
        raioAtomico: 125,
        raioCovalente: 126,
        eletronegatividade: 1.88, // Escala de Pauling
        volumeAtomico: 6.7, // cm3/mol
        condutividadeTermica: 1, // W/cm·K
        aplicacoesComuns: ["Magnetos", "Baterias recarregáveis", "Produção de ligas metálicas"],
        historia: `Compostos de cobalto são usados a gerações para dar uma rica cor azul ao vidro ou cerâmica. O elemento foi isolado pelo quimico suéco George Brandit em 1735. Segundo ele, a cor azulada no vidro era causada pelo cobalto, e não pelo bizmuto.`,
        endereçoImagemElemento: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a8/Kobalt_electrolytic_and_1cm3_cube.jpg/800px-Kobalt_electrolytic_and_1cm3_cube.jpg?20100919003247',
        curiosidade: 'O cor do sangue deve-se à hemoglobina, uma proteína que contém Ferro'
    },
    {
        nome: "Níquel",
        grupo: 10,
        periodo: 4,
        sigla: "Ni",
        decomposicao: {
            protons: 28,
            eletrons: 28,
            neutrons: 31
        },
        numeroAtomico: 28,
        massaAtomica: 58.6934,
        categoria: "metal-de-transicao",
        configuracaoEletronica: "[Ar] 3d⁸ 4s²",
        cor: 'Cinza',
        radioativo: false,
        estadoNatural: "Sólido",
        densidade: 8.912,
        pontoDeFusao: 1455,
        pontoDeEbulicao: 2913,
        etalpiaDeFusao: 17.2, // kJ/mol
        etalpiaDeVaporizacao: 378, // kJ/mol
        calorEspecifico: 0.444, // J/g·K
        abundanciaNaCrostaTerrestre: 0.0089,
        abundanciaNoUniverso: 0.006,
        raioAtomico: 124,
        raioCovalente: 124,
        eletronegatividade: 1.91, // Escala de Pauling
        volumeAtomico: 6.59, // cm3/mol
        condutividadeTermica: 0.907, // W/cm·K
        aplicacoesComuns: ["Revestimento metálico", "Baterias recarregáveis", "Produção de ligas de aço"],
        historia: `Artefatos feitos de meteoritos metalicos foram encontrados datando até antes de 5000 A.C. Em 1751, Baron Axel Fredrik Cronstedt tentava estrair cobre do mineral kupfernickel e acabou produzindo o metal branco. No inicio do séc XX, Ludwig Mond patenteou um processo utilizando carbinilo de nikel para purificar o metal.`,
        endereçoImagemElemento: 'https://images-of-elements.com/s/nickel.jpg',
        curiosidade: 'A concentração de Níquel é 100 vezes superior, abaixo da crosta terrestre, do que nela'
    },
    {
        nome: "Cobre",
        grupo: 11,
        periodo: 4,
        sigla: "Cu",
        decomposicao: {
            protons: 29,
            eletrons: 29,
            neutrons: 35
        },
        numeroAtomico: 29,
        massaAtomica: 63.546,
        categoria: "metal-de-transicao",
        configuracaoEletronica: "[Ar] 3d¹⁰ 4s¹",
        cor: 'Cobre',
        radioativo: false,
        estadoNatural: "Sólido",
        densidade: 8.96,
        pontoDeFusao: 1084.6,
        pontoDeEbulicao: 2562,
        etalpiaDeFusao: 13.1, // kJ/mol
        etalpiaDeVaporizacao: 300, // kJ/mol
        calorEspecifico: 0.385, // J/g·K
        abundanciaNaCrostaTerrestre: 0.0068,
        abundanciaNoUniverso: 0.000006,
        raioAtomico: 128,
        raioCovalente: 132,
        eletronegatividade: 1.9, // Escala de Pauling
        volumeAtomico: 7.1, // cm3/mol
        condutividadeTermica: 4.01, // W/cm·K
        aplicacoesComuns: ["Condutores elétricos", "Componentes de eletrônicos", "Construção civil"],
        historia: `Cobre reside naturalmente como um mineral nativo, e era conhecido pelas mais antigas civilizações. As mais recentes estimativas da descoberta do cobre sugerem por volta de 9000 A.C no oriente medio. Era um dos materiais mais importantes para os humanos nas eras do cobre e bronze.`,
        endereçoImagemElemento: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f0/NatCopper.jpg/633px-NatCopper.jpg?20170505225106',
        curiosidade: 'O Cobre puro tem cor laranja avermelhada e adquire manchas vermelhas, quando exposto ao ar.'
    },
    {
        nome: "Zinco",
        grupo: 12,
        periodo: 4,
        sigla: "Zn",
        decomposicao: {
            protons: 30,
            eletrons: 30,
            neutrons: 35
        },
        numeroAtomico: 30,
        massaAtomica: 65.38,
        categoria: "metal-de-transicao",
        configuracaoEletronica: "[Ar] 3d¹⁰ 4s²",
        cor: 'Cinza',
        radioativo: false,
        estadoNatural: "Sólido",
        densidade: 7.134,
        pontoDeFusao: 419.53,
        pontoDeEbulicao: 907,
        etalpiaDeFusao: 7.35, // kJ/mol
        etalpiaDeVaporizacao: 119, // kJ/mol
        calorEspecifico: 0.388, // J/g·K
        abundanciaNaCrostaTerrestre: 0.0078,
        abundanciaNoUniverso: 0.00003,
        raioAtomico: 134,
        raioCovalente: 122,
        eletronegatividade: 1.65, // Escala de Pauling
        volumeAtomico: 9.2, // cm3/mol
        condutividadeTermica: 1.16, // W/cm·K
        aplicacoesComuns: ["Galvanização", "Produção de ligas metálicas", "Pilhas e baterias"],
        historia: `Zinco metálico foi produzido no séc XIII, reduzindo calamina com substancias organicas, como lãn. O metal foi redescoberto na Europa por Andreas Sigimund em 1746. Ele aqueceu uma mistura de minério de calamina e carbono em um recipiente fechado, sem cobre para produzir o metal.`,
        endereçoImagemElemento: 'https://images-of-elements.com/s/zinc.jpg',
        curiosidade: 'Em contexto não científico, o Zinco é denominado de zinco comercial.'
    },
    {
        nome: "Gálio",
        grupo: 13,
        periodo: 4,
        sigla: "Ga",
        decomposicao: {
            protons: 31,
            eletrons: 31,
            neutrons: 39
        },
        numeroAtomico: 31,
        massaAtomica: 69.723,
        categoria: "outros-metais",
        configuracaoEletronica: "[Ar] 3d¹⁰ 4s² 4p¹",
        cor: 'Prata',
        radioativo: false,
        estadoNatural: "Sólido",
        densidade: 5.907,
        pontoDeFusao: 29.76,
        pontoDeEbulicao: 2204,
        etalpiaDeFusao: 5.59, // kJ/mol
        etalpiaDeVaporizacao: 256, // kJ/mol
        calorEspecifico: 0.371, // J/g·K
        abundanciaNaCrostaTerrestre: 0.0019,
        abundanciaNoUniverso: 0.000001,
        raioAtomico: 135,
        raioCovalente: 122,
        eletronegatividade: 1.81, // Escala de Pauling
        volumeAtomico: 11.8, // cm3/mol
        condutividadeTermica: 0.406, // W/cm·K
        aplicacoesComuns: ["Semicondutores", "Lasers", "Sensores ópticos"],
        historia: `Em 1871, a existencia do galio foi prevista pelo químico russo Dmiltri Mendeleev, que nomeou o elemento de eka-aluminio. O galio foi descoberto espectroscopcamente pelo químico frances Paul Emile Lecoq de Boisbaudran em 1875, por conta de seu espectro caracteristico durante uma analise de uma amostra de sphalerite. No mesmo ano, Lecoq obteve o metal isolado pela eletrolize de seu hidróxido, numa solução de hidróxido de potássio.`,
        endereçoImagemElemento: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/92/Gallium_crystals.jpg/800px-Gallium_crystals.jpg?20100716023404',
        curiosidade: 'O gálio tem uma forte tendência a super-resfriar abaixo do seu ponto de fusão/ponto de congelamento.'
    },
    {
        nome: "Germânio",
        grupo: 14,
        periodo: 4,
        sigla: "Ge",
        decomposicao: {
            protons: 32,
            eletrons: 32,
            neutrons: 41
        },
        numeroAtomico: 32,
        massaAtomica: 72.63,
        categoria: "semimetal",
        configuracaoEletronica: "[Ar] 3d¹⁰ 4s² 4p²",
        cor: 'Cinza',
        radioativo: false,
        estadoNatural: "Sólido",
        densidade: 5.323,
        pontoDeFusao: 938.25,
        pontoDeEbulicao: 2833,
        etalpiaDeFusao: 31.8, // kJ/mol
        etalpiaDeVaporizacao: 334, // kJ/mol
        calorEspecifico: 0.32, // J/g·K
        abundanciaNaCrostaTerrestre: 0.00014,
        abundanciaNoUniverso: 0.00002,
        raioAtomico: 122,
        raioCovalente: 122,
        eletronegatividade: 2.01, // Escala de Pauling
        volumeAtomico: 13.6, // cm3/mol
        condutividadeTermica: 0.599, // W/cm·K
        aplicacoesComuns: ["Semicondutores", "Óptica", "Células solares"],
        historia: `Em 1869, Dmitri Mendeleev previu a sua existencia e algumas de suas propriedades baseando-se na sua posição na tabela periodica, e o nomeou eka-silicio. Em 1886, Clemens Winkler encontrou o elemento junto a prata e enxofre, em um mineral raro chamado argyrodite. As primeiras ligas silicio-germanio foram feitas em 1955.`,
        endereçoImagemElemento: 'https://images-of-elements.com/s/germanium.jpg',
        curiosidade: 'O Germânio e o respetivo óxido são transparentes à radiação infravermelha.'
    },
    {
        nome: "Arsênio",
        grupo: 15,
        periodo: 4,
        sigla: "As",
        decomposicao: {
            protons: 33,
            eletrons: 33,
            neutrons: 42
        },
        numeroAtomico: 33,
        massaAtomica: 74.9216,
        categoria: "semimetal",
        configuracaoEletronica: "[Ar] 3d¹⁰ 4s² 4p³",
        cor: 'Prata',
        radioativo: false,
        estadoNatural: "Sólido",
        densidade: 5.776,
        pontoDeFusao: 817,
        pontoDeEbulicao: 603,
        etalpiaDeFusao: 27.7, // kJ/mol
        etalpiaDeVaporizacao: 32.4, // kJ/mol
        calorEspecifico: 0.329, // J/g·K
        abundanciaNaCrostaTerrestre: 0.00021,
        abundanciaNoUniverso: 0.0000008,
        raioAtomico: 119,
        raioCovalente: 119,
        eletronegatividade: 2.18, // Escala de Pauling
        volumeAtomico: 12.97, // cm3/mol
        condutividadeTermica: 0.502, // W/cm·K
        aplicacoesComuns: ["Veneno de rato", "Indústria de semicondutores", "Tratamento de madeira"],
        historia: `O historiador grego Olympiodorus de Thebes queimou sulfureto de Arsénico, obtendo Arsénico branco, no século V AC. Crê-se que foi Albertus Magnus quem primeiro isolou o elemento de um composto, em 1250, aquecendo sabão, juntamente com trissulfureto de Arsénico. Em 1649, Johann Schröder publicou dois métodos de preparação de Arsénico.`,
        endereçoImagemElemento: 'https://images-of-elements.com/s/arsenic.jpg',
        curiosidade: 'Os camarões contêm níveis elevados de Arsénico'
    },
    {
        nome: "Selênio",
        grupo: 16,
        periodo: 4,
        sigla: "Se",
        decomposicao: {
            protons: 34,
            eletrons: 34,
            neutrons: 45
        },
        numeroAtomico: 34,
        massaAtomica: 78.96,
        categoria: "nao-metal",
        configuracaoEletronica: "[Ar] 3d¹⁰ 4s² 4p⁴",
        cor: 'Cinza',
        radioativo: false,
        estadoNatural: "Sólido",
        densidade: 4.809,
        pontoDeFusao: 221,
        pontoDeEbulicao: 685,
        etalpiaDeFusao: 5.4, // kJ/mol
        etalpiaDeVaporizacao: 26, // kJ/mol
        calorEspecifico: 0.321, // J/g·K
        abundanciaNaCrostaTerrestre: 0.000005,
        abundanciaNoUniverso: 0.000003,
        raioAtomico: 120,
        raioCovalente: 120,
        eletronegatividade: 2.55, // Escala de Pauling
        volumeAtomico: 16.45, // cm3/mol
        condutividadeTermica: 0.0204, // W/cm·K
        aplicacoesComuns: ["Fotocélulas", "Indústria de vidro", "Suplementos alimentares"],
        historia: `O Selénio foi observado pela primeira vez, por volta de 1300, pelo alquimista Arnold of Villanova. Em 1817 Jöns Jacob Berzelius e Johan Gottlieb Gahn descobriram o Selénio ao repararem na semelhança do novo elemento, com o já conhecido Teúrio. Em 1873, Willoughby Smith descobriu que a resistência elétrica do Selénio cinzento-metálico varia com a luz ambiente.`,
        endereçoImagemElemento: 'https://images-of-elements.com/s/selenium.jpg',
        curiosidade: 'A carência em Selénio poderá levar ao crescimento retardado'
    },
    {
        nome: "Bromo",
        grupo: 17,
        periodo: 4,
        sigla: "Br",
        decomposicao: {
            protons: 35,
            eletrons: 35,
            neutrons: 45
        },
        numeroAtomico: 35,
        massaAtomica: 79.904,
        categoria: "halogenio",
        configuracaoEletronica: "[Ar] 3d¹⁰ 4s² 4p⁵",
        cor: 'Vermelho',
        radioativo: false,
        estadoNatural: "Líquido",
        densidade: 3.122,
        pontoDeFusao: -7.2,
        pontoDeEbulicao: 58.8,
        etalpiaDeFusao: 5.8, // kJ/mol
        etalpiaDeVaporizacao: 14.8, // kJ/mol
        calorEspecifico: 0.474, // J/g·K
        abundanciaNaCrostaTerrestre: 0.0003,
        abundanciaNoUniverso: 0.0000007,
        raioAtomico: 120,
        raioCovalente: 120,
        eletronegatividade: 2.96, // Escala de Pauling
        volumeAtomico: 23.5, // cm3/mol
        condutividadeTermica: 0.00122, // W/cm·K
        aplicacoesComuns: ["Desinfetantes", "Produtos farmacêuticos", "Retardadores de chama"],
        historia: `Carl Jacob Löwig descobriu o Bromo, quando ainda era estudante de química na Universidade de Heidelberg, na Alemanha. Antoine Balard destilou o Bromo, a partir de uma solução de cinzas de algas marinhas, saturada com cloro, em 1824. Em 1826, publicou, finalmente, os resultados, provando que a substância que descobrira se tratava de um novo elemento.`,
        endereçoImagemElemento: 'https://images-of-elements.com/s/bromine.jpg',
        curiosidade: 'O Bromo é o único elemento não metálico que é líquido a temperaturas normais'
    },
    {
        nome: "Criptônio",
        grupo: 18,
        periodo: 4,
        sigla: "Kr",
        decomposicao: {
            protons: 36,
            eletrons: 36,
            neutrons: 48
        },
        numeroAtomico: 36,
        massaAtomica: 83.798,
        categoria: "gas-nobre",
        configuracaoEletronica: "[Ar] 3d¹⁰ 4s² 4p⁶",
        cor: null,
        radioativo: false,
        estadoNatural: "Gasoso",
        densidade: 0.003733,
        pontoDeFusao: -157.33,
        pontoDeEbulicao: -153.11,
        etalpiaDeFusao: 1.64, // kJ/mol
        etalpiaDeVaporizacao: 9.02, // kJ/mol
        calorEspecifico: 0.248, // J/g·K
        abundanciaNaCrostaTerrestre: 0.000000015,
        abundanciaNoUniverso: 0.000004,
        raioAtomico: 88,
        raioCovalente: 116,
        eletronegatividade: 3, // Escala de Pauling
        volumeAtomico: 38.9, // cm3/mol
        condutividadeTermica: 0.0000949, // W/cm·K
        aplicacoesComuns: ["Iluminação em lasers", "Iluminação em lâmpadas", "Criptografia quântica"],
        historia: `O químico escocês Sir William Ramsay e o seu assistente, o químico inglês Morris Travers, descobriram o Crípton em 1898, em Londres. Eles encontraram Crípton no resíduo seco da evaporação de praticamente todos os componentes do ar líquido. William Ramsay foi laureado com o prémio Nobel da Química, em 1904, pela descoberta de uma série de gases nobres, incluindo o Crípton.`,
        endereçoImagemElemento: 'https://images-of-elements.com/s/krypton.jpg',
        curiosidade: 'Quando ionizado, o gás Crípton emite uma luz branca brilhante.'
    },
    {
        nome: "Rubídio",
        grupo: 1,
        periodo: 5,
        sigla: "Rb",
        decomposicao: {
            protons: 37,
            eletrons: 37,
            neutrons: 48
        },
        numeroAtomico: 37,
        massaAtomica: 85.4678,
        categoria: "metal-alcalino",
        configuracaoEletronica: "[Kr] 5s¹",
        cor: 'Prata',
        radioativo: false,
        estadoNatural: "Sólido",
        densidade: 1.532,
        pontoDeFusao: 39.31,
        pontoDeEbulicao: 688,
        etalpiaDeFusao: 2.19, // kJ/mol
        etalpiaDeVaporizacao: 72, // kJ/mol
        calorEspecifico: 0.363, // J/g·K
        abundanciaNaCrostaTerrestre: 0.006,
        abundanciaNoUniverso: 0.000001,
        raioAtomico: 248,
        raioCovalente: 220,
        eletronegatividade: 0.82, // Escala de Pauling
        volumeAtomico: 55.9, // cm3/mol
        condutividadeTermica: 0.582, // W/cm·K
        aplicacoesComuns: ["Componente em relógios atômicos", "Produção de vidro especial", "Produção de ligas metálicas"],
        historia: `Os químicos alemães Robert Bunsen e Gustav Kirchhoff descobriram o Rubídio, em 1861, através do recém desenvolvido método de espetroscopia de chama. Bunsen tentou isolar o metal, mas nunca encontrou amostras com mais de 18% de Rubídio. O metal só foi isolado por George de Hevesy, através da hidrólise de hidróxido de Rubídio dissolvido.`,
        endereçoImagemElemento: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/Rb5.JPG/800px-Rb5.JPG?20071220125430',
        curiosidade: 'O Rubídio arde com uma chama violeta avermelhada'
    },
    {
        nome: "Estrôncio",
        grupo: 2,
        periodo: 5,
        sigla: "Sr",
        decomposicao: {
            protons: 38,
            eletrons: 38,
            neutrons: 50
        },
        numeroAtomico: 38,
        massaAtomica: 87.62,
        categoria: "metal-alcalino-terroso",
        configuracaoEletronica: "[Kr] 5s²",
        cor: 'Prata',
        radioativo: false,
        estadoNatural: "Sólido",
        densidade: 2.64,
        pontoDeFusao: 777,
        pontoDeEbulicao: 1382,
        etalpiaDeFusao: 8, // kJ/mol
        etalpiaDeVaporizacao: 137, // kJ/mol
        calorEspecifico: 0.301, // J/g·K
        abundanciaNaCrostaTerrestre: 0.036,
        abundanciaNoUniverso: 0.000004,
        raioAtomico: 215,
        raioCovalente: 195,
        eletronegatividade: 0.95, // Escala de Pauling
        volumeAtomico: 33.7, // cm3/mol
        condutividadeTermica: 0.353, // W/cm·K
        aplicacoesComuns: ["Pirotecnia (fogo de artifício)", "Produção de fogos luminosos", "Ligas metálicas"],
        historia: `O Estrôncio foi identificado como novo elemento, em 1790, quando Adair Crawford e o seu colega William Cruickshank analisaram uma amostra mineral de uma mina de chumbo, perto de Strontian, na Escócia. O elemento acabou por ser isolado por Sir Humphry Davy, em 1808. O isolamento foi feito, através da eletrólise de uma mistura de cloreto de Estrôncio e óxido de mercúrio.`,
        endereçoImagemElemento: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/Strontium_destilled_crystals.jpg/800px-Strontium_destilled_crystals.jpg?20160404140419',
        curiosidade: 'O Estrôncio torna-se amarelo, quando exposto ao ar.'
    },
    {
        nome: "Ítrio",
        grupo: 3,
        periodo: 5,
        sigla: "Y",
        decomposicao: {
            protons: 39,
            eletrons: 39,
            neutrons: 50
        },
        numeroAtomico: 39,
        massaAtomica: 88.90585,
        categoria: "metal-de-transicao",
        configuracaoEletronica: "[Kr] 4d¹ 5s²",
        cor: 'Prata',
        radioativo: false,
        estadoNatural: "Sólido",
        densidade: 4.469,
        pontoDeFusao: 1526,
        pontoDeEbulicao: 3336,
        etalpiaDeFusao: 11.4, // kJ/mol
        etalpiaDeVaporizacao: 380, // kJ/mol
        calorEspecifico: 0.298, // J/g·K
        abundanciaNaCrostaTerrestre: 0.0029,
        abundanciaNoUniverso: 0.0000007,
        raioAtomico: 180,
        raioCovalente: 190,
        eletronegatividade: 1.22, // Escala de Pauling
        volumeAtomico: 19.8, // cm3/mol
        condutividadeTermica: 0.172, // W/cm·K
        aplicacoesComuns: ["Supercondutores", "Fósforos vermelhos", "Ligas de alumínio e magnésio"],
        historia: `Em 1787, Carl Axel Arrhenius encontrou um novo mineral, perto de Ytterby, na Suécia e chamou-o de Ytterbite, em homenagem à povoação. Johan Gadolin descobriu o óxido de Ítrio na amostra de Arrhenius, em 1789, sendo designado de Gandolinite e Anders Gustaf Ekeberg denominou o novo óxido de ítria. O Ítrio foi isolado pela primeira vez, por Friedrich Wöhler, em 1828.`,
        endereçoImagemElemento: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/Yttrium_sublimed_dendritic_and_1cm3_cube.jpg/800px-Yttrium_sublimed_dendritic_and_1cm3_cube.jpg?20100705181415',
        curiosidade: 'O ítrio finamente dividido é muito instável no ar.'
    },
    {
        nome: "Zircônio",
        grupo: 4,
        periodo: 5,
        sigla: "Zr",
        decomposicao: {
            protons: 40,
            eletrons: 40,
            neutrons: 51
        },
        numeroAtomico: 40,
        massaAtomica: 91.224,
        categoria: "metal-de-transicao",
        configuracaoEletronica: "[Kr] 4d² 5s²",
        cor: 'Prata',
        radioativo: false,
        estadoNatural: "Sólido",
        densidade: 6.506,
        pontoDeFusao: 1885,
        pontoDeEbulicao: 4409,
        etalpiaDeFusao: 21, // kJ/mol
        etalpiaDeVaporizacao: 580, // kJ/mol
        calorEspecifico: 0.278, // J/g·K
        abundanciaNaCrostaTerrestre: 0.013,
        abundanciaNoUniverso: 0.000005,
        raioAtomico: 160,
        raioCovalente: 175,
        eletronegatividade: 1.33, // Escala de Pauling
        volumeAtomico: 14, // cm3/mol
        condutividadeTermica: 0.227, // W/cm·K
        aplicacoesComuns: ["Revestimentos de reatores nucleares", "Peças de aeronaves", "Fabricação de ligas metálicas"],
        historia: `O Zircónio foi identificado como elemento, pela primeira vez, por Martin Heinrich Klaproth, em 1789, em Berlim, numa amostra de zircão, proveniente do Sri Lanka. O metal Zircónio foi obtido, pela primeira vez, em forma impura, por Jöns Jakob Berzelius, em 1824, pelo aquecimento de uma mistura de potássio e fluoreto de potássio e zircónio, num tubo de de ferro. Os cientistas holandeses Anton Eduard van Arkel e Jan Hendrik de Boer descobriram um método para produzir Zircónio de elevado grau de pureza, em 1925.`,
        endereçoImagemElemento: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/92/Zirconium_crystal_bar_and_1cm3_cube.jpg/800px-Zirconium_crystal_bar_and_1cm3_cube.jpg?20110410211011',
        curiosidade: 'O óxido mais comum é o Dióxido de Zircónio, também conhecido como Zircónio.'
    },
    {
        nome: "Nióbio",
        grupo: 5,
        periodo: 5,
        sigla: "Nb",
        decomposicao: {
            protons: 41,
            eletrons: 41,
            neutrons: 52
        },
        numeroAtomico: 41,
        massaAtomica: 92.90638,
        categoria: "metal-de-transicao",
        configuracaoEletronica: "[Kr] 4d⁴ 5s¹",
        cor: 'Cinza',
        radioativo: false,
        estadoNatural: "Sólido",
        densidade: 8.57,
        pontoDeFusao: 2477,
        pontoDeEbulicao: 4744,
        etalpiaDeFusao: 26.8, // kJ/mol
        etalpiaDeVaporizacao: 690, // kJ/mol
        calorEspecifico: 0.265, // J/g·K
        abundanciaNaCrostaTerrestre: 0.0017,
        abundanciaNoUniverso: 0.0000002,
        raioAtomico: 146,
        raioCovalente: 154,
        eletronegatividade: 1.6, // Escala de Pauling
        volumeAtomico: 10.87, // cm3/mol
        condutividadeTermica: 0.537, // W/cm·K
        aplicacoesComuns: ["Superligas de alta resistência", "Componentes de motores a jato", "Equipamentos de processamento químico"],
        historia: `O Nióbio foi descoberto pelo químico Inglês Charles Hatchet, em 1801 a que deu o nome de Columbium. Em 1846, o químico alemão Henrich Rose descobriu, por seu lado, o elemento e batizou-o de Nióbio. O metal foi isolado pela primeira vez pelo cientista sueco Christian Wilhelm Blomstran, em 1864, que reduziu o cloreto Nióbio, aquecendo-o numa atmosfera de hidrogénio.`,
        endereçoImagemElemento: 'https://images-of-elements.com/s/niobium.jpg',
        curiosidade: 'O Brasil é o principal produtor de Nióbio.'
    },
    {
        nome: "Molibdênio",
        grupo: 6,
        periodo: 5,
        sigla: "Mo",
        decomposicao: {
            protons: 42,
            eletrons: 42,
            neutrons: 54
        },
        numeroAtomico: 42,
        massaAtomica: 95.96,
        categoria: "metal-de-transicao",
        configuracaoEletronica: "[Kr] 4d⁴ 5s¹",
        cor: 'Cinza',
        radioativo: false,
        estadoNatural: "Sólido",
        densidade: 10.22,
        pontoDeFusao: 2623,
        pontoDeEbulicao: 4639,
        etalpiaDeFusao: 36, // kJ/mol
        etalpiaDeVaporizacao: 600, // kJ/mol
        calorEspecifico: 0.251, // J/g·K
        abundanciaNaCrostaTerrestre: 0.00011,
        abundanciaNoUniverso: 0.0000005,
        raioAtomico: 139,
        raioCovalente: 154,
        eletronegatividade: 2.16, // Escala de Pauling
        volumeAtomico: 9.4, // cm3/mol
        condutividadeTermica: 0.138, // W/cm·K
        aplicacoesComuns: ["Aço inoxidável", "Catalisadores", "Eletrônicos"],
        historia: `O Molibdénio era frequentemente confundido com grafite e pensava-se conter chumbo. Em 1778, o cientista sueco Carl Wilhelm Scheele provou que o Molibdénio não só não era grafite, como também não continha chumbo. Em 1781, Peter J. Hjelm, amigo e compatriota de Scheele, isolou o metal, com recurso ao carbono e ao óleo de linhaça.`,
        endereçoImagemElemento: 'https://images-of-elements.com/s/molybdenum.jpg',
        curiosidade: 'O Molbidénio é essencial para a saúde da folhagem das plantas'
    },
    {
        nome: "Tecnécio",
        grupo: 7,
        periodo: 5,
        sigla: "Tc",
        decomposicao: {
            protons: 43,
            eletrons: 43,
            neutrons: 55
        },
        numeroAtomico: 43,
        massaAtomica: 98,
        categoria: "metal-de-transicao",
        configuracaoEletronica: "[Kr] 4d⁵ 5s²",
        cor: 'Prata',
        radioativo: true,
        estadoNatural: "Sólido",
        densidade: 11.5,
        pontoDeFusao: 2157,
        pontoDeEbulicao: 4265,
        etalpiaDeFusao: 23, // kJ/mol
        etalpiaDeVaporizacao: 550, // kJ/mol
        calorEspecifico: null, // J/g·K
        abundanciaNaCrostaTerrestre: null,
        abundanciaNoUniverso: null,
        raioAtomico: 136,
        raioCovalente: 147,
        eletronegatividade: 1.9, // Escala de Pauling
        volumeAtomico: 8.5, // cm3/mol
        condutividadeTermica: 0.506, // W/cm·K
        aplicacoesComuns: ["Medicina nuclear", "Marcadores radioativos"],
        historia: `O elemento 43 foi previsto com base na tabela periódica. Foi erroneamente dado como descoberto em 1925, tendo sido designado por Masúrio. O elemento foi realmente descoberto por Carlo Perrier e Emílio Segré em 1937. Foi também encontrado numa amostra de Molibdénio enviada por Ernst Lawrence que foi bombardeada por deuterões, no ciclotrão de Berkeley.`,
        endereçoImagemElemento: 'https://s5.static.brasilescola.uol.com.br/be/2022/02/uranio.jpg',
        curiosidade: 'O tecnécio foi o primeiro elemento a ser produzido artificialmente.'
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