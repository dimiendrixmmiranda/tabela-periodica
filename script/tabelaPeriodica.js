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
        categoria: "halogenios",
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
        grupo: 8,
        periodo: 5,
        sigla: "Ru",
        decomposicao: {
            protons: 44,
            eletrons: 44,
            neutrons: 57
        },
        numeroAtomico: 44,
        massaAtomica: 101.07,
        categoria: "metal-de-transicao",
        configuracaoEletronica: "[Kr] 4d⁷ 5s¹",
        cor: 'Prata',
        radioativo: false,
        estadoNatural: "Sólido",
        densidade: 12.37,
        pontoDeFusao: 2334,
        pontoDeEbulicao: 4150,
        etalpiaDeFusao: 25.7, // kJ/mol
        etalpiaDeVaporizacao: 580, // kJ/mol
        calorEspecifico: 0.238, // J/g·K
        abundanciaNaCrostaTerrestre: 0.000000099,
        abundanciaNoUniverso: 0.0000004,
        raioAtomico: 134,
        raioCovalente: 146,
        eletronegatividade: 2.2, // Escala de Pauling
        volumeAtomico: 8.3, // cm3/mol
        condutividadeTermica: 1.17, // W/cm·K
        aplicacoesComuns: ["Catalisador", "Eletrônicos", "Jóias"],
        historia: `
        Jędrzej Śniadecki isolou o elemento, em 1807, mas o seu trabalho não foi ratificado.Jöns Berzelius e Gottfried Osann estiveram perto de descobrir o Ruténio, em 1827. Em 1844, Karl Ernst Claus confirmou a existência de um novo elemento e isolou o Ruténio de resíduos de platina, da produção de rublos, quando trabalhava na Universidade de Kazan, em Kazan.`,
        endereçoImagemElemento: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/Ruthenium_crystals.jpg/689px-Ruthenium_crystals.jpg?20200410064943',
        curiosidade: 'O Ruténio não é afetado pelo ar, pela água, nem por ácidos'
    },
    {
        nome: "Ródio",
        grupo: 9,
        periodo: 5,
        sigla: "Rh",
        decomposicao: {
            protons: 45,
            eletrons: 45,
            neutrons: 58
        },
        numeroAtomico: 45,
        massaAtomica: 102.9055,
        categoria: "metal-de-transicao",
        configuracaoEletronica: "[Kr] 4d₈ 5s¹",
        cor: 'Prata',
        radioativo: false,
        estadoNatural: "Sólido",
        densidade: 12.41,
        pontoDeFusao: 1964,
        pontoDeEbulicao: 3695,
        etalpiaDeFusao: 21.7, // kJ/mol
        etalpiaDeVaporizacao: 495, // kJ/mol
        calorEspecifico: 0.243, // J/g·K
        abundanciaNaCrostaTerrestre: 0.00000007,
        abundanciaNoUniverso: 0.00000006,
        raioAtomico: 134,
        raioCovalente: 142,
        eletronegatividade: 2.28, // Escala de Pauling
        volumeAtomico: 8.3, // cm3/mol
        condutividadeTermica: 1.5, // W/cm·K
        aplicacoesComuns: ["Conversores catalíticos", "Jóias", "Eletrônicos"],
        historia: `
        O Ródio foi descoberto em 1803, por William Hyde Wollaston, em Londres. Ele usou minério de platina em bruto, possivelmente, provindo da América do Sul. A introdução do catalisador de três vias, pela Volvo, em 1976, aumentou a procura do Ródio.`,
        endereçoImagemElemento: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/Rhodium_powder_pressed_melted.jpg/800px-Rhodium_powder_pressed_melted.jpg?20101011180342',
        curiosidade: 'O metal ródio normalmente não forma óxido, mesmo quando aquecido'
    },
    {
        nome: "Paládio",
        grupo: 10,
        periodo: 5,
        sigla: "Pd",
        decomposicao: {
            protons: 46,
            eletrons: 46,
            neutrons: 60
        },
        numeroAtomico: 46,
        massaAtomica: 106.42,
        categoria: "metal-de-transicao",
        configuracaoEletronica: "[Kr] 4d¹⁰",
        cor: 'Prata',
        radioativo: false,
        estadoNatural: "Sólido",
        densidade: 12.02,
        pontoDeFusao: 1554.9,
        pontoDeEbulicao: 2963,
        etalpiaDeFusao: 16.7, // kJ/mol
        etalpiaDeVaporizacao: 380, // kJ/mol
        calorEspecifico: 0.244, // J/g·K
        abundanciaNaCrostaTerrestre: 0.00000063,
        abundanciaNoUniverso: 0.0000002,
        raioAtomico: 137,
        raioCovalente: 139,
        eletronegatividade: 2.2, // Escala de Pauling
        volumeAtomico: 8.9, // cm3/mol
        condutividadeTermica: 0.718, // W/cm·K
        aplicacoesComuns: ["Catalisadores", "Jóias", "Odontologia"],
        historia: `
        O Paládio foi descoberto pelo químico inglês William Hyde Wollaston, em 1803, em Londres. Após dissolver a platina em água-régia - uma solução concentrada de ácido nítrico, com cloreto de hidrogénio - ele examinou os resíduos. Posteriormente, isolou o Paládio, através de uma série de reações químicas.`,
        endereçoImagemElemento: 'https://images-of-elements.com/s/palladium.jpg',
        curiosidade: 'Nos finais de 1800, o Paládio era mais caro que a platina'
    },
    {
        nome: "Prata",
        grupo: 11,
        periodo: 5,
        sigla: "Ag",
        decomposicao: {
            protons: 47,
            eletrons: 47,
            neutrons: 61
        },
        numeroAtomico: 47,
        massaAtomica: 107.8682,
        categoria: "metal-de-transicao",
        configuracaoEletronica: "[Kr] 4d¹⁰ 5s¹",
        cor: 'Prata',
        radioativo: false,
        estadoNatural: "Sólido",
        densidade: 10.49,
        pontoDeFusao: 961.78,
        pontoDeEbulicao: 2162,
        etalpiaDeFusao: 11.3, // kJ/mol
        etalpiaDeVaporizacao: 255, // kJ/mol
        calorEspecifico: 0.235, // J/g·K
        abundanciaNaCrostaTerrestre: 0.0000079,
        abundanciaNoUniverso: 0.00000006,
        raioAtomico: 144,
        raioCovalente: 145,
        eletronegatividade: 1.93, // Escala de Pauling
        volumeAtomico: 10.3, // cm3/mol
        condutividadeTermica: 4.29, // W/cm·K
        aplicacoesComuns: ["Jóias", "Moedas", "Eletrônicos"],
        historia: `
        A prata tem sido usada durante milhares de anos em ornamentos e utensílios, com fins comerciais, tendo estado na base de muitos sistemas monetários. O seu valor como metal precioso foi, desde há muito, considerado apenas inferior ao do ouro. Depósitos de cinzas vulcânicas na Ásia Menor e em ilhas do Mar Egeu indicam que o Home aprendeu a separar a prata do chumbo, por volta de 3000 AC.`,
        endereçoImagemElemento: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/55/Silver_crystal.jpg/765px-Silver_crystal.jpg?20090726191728',
        curiosidade: 'No antigo Egito e na Europa medieval, a Prata era frequentemente, mais cara que o ouro'
    },
    {
        nome: "Cádmio",
        grupo: 12,
        periodo: 5,
        sigla: "Cd",
        decomposicao: {
            protons: 48,
            eletrons: 48,
            neutrons: 64
        },
        numeroAtomico: 48,
        massaAtomica: 112.411,
        categoria: "metal-de-transicao",
        configuracaoEletronica: "[Kr] 4d¹⁰ 5s²",
        cor: 'Prata',
        radioativo: false,
        estadoNatural: "Sólido",
        densidade: 8.69,
        pontoDeFusao: 321.07,
        pontoDeEbulicao: 767,
        etalpiaDeFusao: 6.3, // kJ/mol
        etalpiaDeVaporizacao: 100, // kJ/mol
        calorEspecifico: 0.232, // J/g·K
        abundanciaNaCrostaTerrestre: 0.000015,
        abundanciaNoUniverso: 0.0000002,
        raioAtomico: 151,
        raioCovalente: 144,
        eletronegatividade: 1.69, // Escala de Pauling
        volumeAtomico: 13.1, // cm3/mol
        condutividadeTermica: 0.968, // W/cm·K
        aplicacoesComuns: ["Baterias recarregáveis", "Pigmentos", "Eletrodeposição"],
        historia: `
        O cádmio foi descoberto pelo químico alemão Friedrich Stromeyer, em 1817, como uma impureza do carbonato de zinco. Stromeyer observou que algumas impurezas da calamina (carbonato de zinco), mudavam de cor quando aquecidas, ao contrário da calamina pura. Karl Hermann, outro químico alemão, descobriu também o cádmio, em 1818, independentemente de Friedrich Stromeyer.`,
        endereçoImagemElemento: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/Cadmium-crystal_bar.jpg/800px-Cadmium-crystal_bar.jpg?20101104021800',
        curiosidade: 'O Cádmio é um metal macio que pode ser cortado facilmente, com uma faca'
    },
    {
        nome: "Índio",
        grupo: 13,
        periodo: 5,
        sigla: "In",
        decomposicao: {
            protons: 49,
            eletrons: 49,
            neutrons: 66
        },
        numeroAtomico: 49,
        massaAtomica: 114.818,
        categoria: "outros-metais",
        configuracaoEletronica: "[Kr] 4d¹⁰ 5s² 5p¹",
        cor: 'Prata',
        radioativo: false,
        estadoNatural: "Sólido",
        densidade: 7.31,
        pontoDeFusao: 156.6,
        pontoDeEbulicao: 2072,
        etalpiaDeFusao: 3.26, // kJ/mol
        etalpiaDeVaporizacao: 230, // kJ/mol
        calorEspecifico: 0.233, // J/g·K
        abundanciaNaCrostaTerrestre: 0.000016,
        abundanciaNoUniverso: 0.00000003,
        raioAtomico: 167,
        raioCovalente: 142,
        eletronegatividade: 1.78, // Escala de Pauling
        volumeAtomico: 15.7, // cm3/mol
        condutividadeTermica: 0.816, // W/cm·K
        aplicacoesComuns: ["Telas sensíveis ao toque", "Soldas", "Semicondutores"],
        historia: `
        Ferdinand Reich e Hieronymous Theodor Richter identificaram o Irídio na esfalerite, pela sua linha espetral azulada e brilhante. Como não era conhecido qualquer elemento que emitisse essa luz azul brilhante, concluiu-se existir um novo elemento nos minerais.Richter isolou o metal, em 1864.`,
        endereçoImagemElemento: 'https://images-of-elements.com/s/indium.jpg',
        curiosidade: 'Quando é dobrado, o índio emite um "grito" estridente'
    },
    {
        nome: "Estanho",
        grupo: 14,
        periodo: 5,
        sigla: "Sn",
        decomposicao: {
            protons: 50,
            eletrons: 50,
            neutrons: 69
        },
        numeroAtomico: 50,
        massaAtomica: 118.71,
        categoria: "outros-metais",
        configuracaoEletronica: "[Kr] 4d¹⁰ 5s² 5p²",
        cor: 'Prata',
        radioativo: false,
        estadoNatural: "Sólido",
        densidade: 7.287,
        pontoDeFusao: 231.93,
        pontoDeEbulicao: 2602,
        etalpiaDeFusao: 7, // kJ/mol
        etalpiaDeVaporizacao: 290, // kJ/mol
        calorEspecifico: 0.228, // J/g·K
        abundanciaNaCrostaTerrestre: 0.00022,
        abundanciaNoUniverso: 0.0000007,
        raioAtomico: 140,
        raioCovalente: 139,
        eletronegatividade: 1.96, // Escala de Pauling
        volumeAtomico: 16.3, // cm3/mol
        condutividadeTermica: 0.666, // W/cm·K
        aplicacoesComuns: ["Embalagens de alimentos", "Soldas", "Revestimentos"],
        historia: `
        O estanho foi extraído pela primeira vez, por volta do ano 3500 AC, juntamente com o cobre, para a produção de bromze. Os artefactos mais antigos remontam a 2000 AC. A cassiterite, a forma oxidada do estanho, foi, provavelmente, a primeira fonte de estanho na antiguidade. O cientista britânico, Robert Boyle, publicou uma descrição das suas experiências sobre a oxidação do estanho, em 1673.`,
        endereçoImagemElemento: 'https://images-of-elements.com/s/tin.jpg',
        curiosidade: 'Quando uma barra de estanho é dobrada, um som crepitante conhecido como grito de estanho pode ser ouvido'
    },
    {
        nome: "Antimônio",
        grupo: 15,
        periodo: 5,
        sigla: "Sb",
        decomposicao: {
            protons: 51,
            eletrons: 51,
            neutrons: 71
        },
        numeroAtomico: 51,
        massaAtomica: 121.76,
        categoria: "semimetal",
        configuracaoEletronica: "[Kr] 4d¹⁰ 5s² 5p³",
        cor: 'Prata',
        radioativo: false,
        estadoNatural: "Sólido",
        densidade: 6.685,
        pontoDeFusao: 630.63,
        pontoDeEbulicao: 1587,
        etalpiaDeFusao: 19.7, // kJ/mol
        etalpiaDeVaporizacao: 68, // kJ/mol
        calorEspecifico: 0.228, // J/g·K
        abundanciaNaCrostaTerrestre: 0.00002,
        abundanciaNoUniverso: 0.00000004,
        raioAtomico: 140,
        raioCovalente: 139,
        eletronegatividade: 2.05, // Escala de Pauling
        volumeAtomico: 18.22, // cm3/mol
        condutividadeTermica: 0.243, // W/cm·K
        aplicacoesComuns: ["Baterias", "Pigmentos", "Semicondutores"],
        historia: `
        Um dos minerais do Antimónio, a estibina foi identificada no Egito pré-dinástico e utilizada como cosmético para os olhos, por volta de 3100 AC. A Primeira descrição europeia de um procedimento para isolar o Antimónio encontra-se no livro De La Pirotechnia, de Vannoccio Biringuccio. A primeira presença natural de Antimónio puro, na crosta terrestre foi descrita pelo cientista sueco e engenheiro de minas da região, Anton von Swab, em 1783.`,
        endereçoImagemElemento: 'https://images-of-elements.com/s/antimony.jpg',
        curiosidade: 'O Antimónio é um mau condutor de calor e eletricidade'
    },
    {
        nome: "Telúrio",
        grupo: 16,
        periodo: 5,
        sigla: "Te",
        decomposicao: {
            protons: 52,
            eletrons: 52,
            neutrons: 76
        },
        numeroAtomico: 52,
        massaAtomica: 127.6,
        categoria: "semimetal",
        configuracaoEletronica: "[Kr] 4d¹⁰ 5s² 5p⁴",
        cor: 'Prata',
        radioativo: false,
        estadoNatural: "Sólido",
        densidade: 6.232,
        pontoDeFusao: 449.51,
        pontoDeEbulicao: 988,
        etalpiaDeFusao: 17.5, // kJ/mol
        etalpiaDeVaporizacao: 48, // kJ/mol
        calorEspecifico: 0.202, // J/g·K
        abundanciaNaCrostaTerrestre: 0.0000000099,
        abundanciaNoUniverso: 0.0000009,
        raioAtomico: 140,
        raioCovalente: 138,
        eletronegatividade: 2.1, // Escala de Pauling
        volumeAtomico: 20.5, // cm3/mol
        condutividadeTermica: 0.0235, // W/cm·K
        aplicacoesComuns: ["Semicondutores", "Células solares", "Catalisadores"],
        historia: `
        O Telúrio foi descoberto foi descoberto por Franz-Joseph Müller von Reichenstein, num mineral contendo Telúrio e ouro, em 1782, na Transilvânia, então Hungria. Em 1789, outro cientista húngaro, Pál Kitaibel, descobriu o elemento de forma independente, num minério oriundo de Deutsch-Pilsen, tido como molibdenite argentífero. Em 1798, Martin Heinrich Klaproth deu-lhe o nome, depois de isolá-lo, a partir da calaverite.`,
        endereçoImagemElemento: 'https://images-of-elements.com/s/tellurium.jpg',
        curiosidade: 'No ar, o telúrio queima com chamas azul-esverdeadas, formando o dióxido'
    },
    {
        nome: "Iodo",
        grupo: 17,
        periodo: 5,
        sigla: "I",
        decomposicao: {
            protons: 53,
            eletrons: 53,
            neutrons: 74
        },
        numeroAtomico: 53,
        massaAtomica: 126.90447,
        categoria: "halogenios",
        configuracaoEletronica: "[Kr] 4d¹⁰ 5s² 5p⁵",
        cor: 'Cinza',
        radioativo: false,
        estadoNatural: "Sólido",
        densidade: 4.93,
        pontoDeFusao: 113.7,
        pontoDeEbulicao: 184.25,
        etalpiaDeFusao: 7.76, // kJ/mol
        etalpiaDeVaporizacao: 20.9, // kJ/mol
        calorEspecifico: 0.214, // J/g·K
        abundanciaNaCrostaTerrestre: 0.000049,
        abundanciaNoUniverso: 0.0000001,
        raioAtomico: 140,
        raioCovalente: 139,
        eletronegatividade: 2.66, // Escala de Pauling
        volumeAtomico: 25.74, // cm3/mol
        condutividadeTermica: 0.00449, // W/cm·K
        aplicacoesComuns: ["Tratamento de água", "Antissépticos", "Corantes"],
        historia: `
        O Iodo foi descoberto pelo químico francês Bernard Courtois, em 1811. Ele tratou o licor obtido da extração de algas, com ácido sulfúrico, produzindo um vapor de cor violeta. Em 1812, Joseph Louis Gay-Lussac demonstrou que o Iodo era um elemento e a sua relação com o cloro.`,
        endereçoImagemElemento: 'https://images-of-elements.com/s/iodine.jpg',
        curiosidade: 'A soda era a principal fonte natural de Iodo, nos séculos XVIII e XIX'
    },
    {
        nome: "Xenônio",
        grupo: 18,
        periodo: 5,
        sigla: "Xe",
        decomposicao: {
            protons: 54,
            eletrons: 54,
            neutrons: 77
        },
        numeroAtomico: 54,
        massaAtomica: 131.293,
        categoria: "gas-nobre",
        configuracaoEletronica: "[Kr] 4d¹⁰ 5s² 5p⁶",
        cor: null,
        radioativo: false,
        estadoNatural: "Gasoso",
        densidade: 0.005887,
        pontoDeFusao: -111.7,
        pontoDeEbulicao: -108.12,
        etalpiaDeFusao: 2.3, // kJ/mol
        etalpiaDeVaporizacao: 12.64, // kJ/mol
        calorEspecifico: 0.158, // J/g·K
        abundanciaNaCrostaTerrestre: 0.000000002,
        abundanciaNoUniverso: 0.000001,
        raioAtomico: 108,
        raioCovalente: 140,
        eletronegatividade: 2.6, // Escala de Pauling
        volumeAtomico: 37.3, // cm3/mol
        condutividadeTermica: 0.0000569, // W/cm·K
        aplicacoesComuns: ["Iluminação", "Imagem médica", "Propulsão de satélites"],
        historia: `
        O Xênonio foi descoberto em Inglaterra, pelo químico escocês William Ramsay e o químico inglês Morris Travers, em 1898. Eles encontraram Xénon no resíduo seco, resultante da evaporação dos componentes de ar líquido. A análise espetroscópica mostrou as belas linhas azuis, nunca antes vista, indicadoras da presença de um novo elemento.`,
        endereçoImagemElemento: 'https://images-of-elements.com/s/xenon.jpg',
        curiosidade: 'Quando inalado, o Xénon pode tornar a voz mais grave.'
    },
    {
        nome: "Césio",
        grupo: 1,
        periodo: 6,
        sigla: "Cs",
        decomposicao: {
            protons: 55,
            eletrons: 55,
            neutrons: 78
        },
        numeroAtomico: 55,
        massaAtomica: 132.9054519,
        categoria: "metal-alcalino",
        configuracaoEletronica: "[Xe] 6s¹",
        cor: 'Prata',
        radioativo: true,
        estadoNatural: "Sólido",
        densidade: 1.873,
        pontoDeFusao: 28.44,
        pontoDeEbulicao: 671,
        etalpiaDeFusao: 2.09, // kJ/mol
        etalpiaDeVaporizacao: 65, // kJ/mol
        calorEspecifico: 0.242, // J/g·K
        abundanciaNaCrostaTerrestre: 0.00019,
        abundanciaNoUniverso: 0.00000008,
        raioAtomico: 265,
        raioCovalente: 244,
        eletronegatividade: 0.79, // Escala de Pauling
        volumeAtomico: 71.07, // cm3/mol
        condutividadeTermica: 0.359, // W/cm·K
        aplicacoesComuns: ["Relógios atômicos", "Produção de vidro especial", "Propulsão espacial"],
        historia: `
        Robert Bunsen e Gustav Kirchhoff foram os primeiros a sugerir a descoberta do Césio, em 1860, através de análise espetral. Descobriram o Césio graças às suas duas linhas azuis, numa amostra de água mineral de Dürkheim. O metal puro acabou por ser isolado pelo químico alemão Carl Setterberg, durante o seu trabalho de doutoramento com Kekulé and Bunsen.`,
        endereçoImagemElemento: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3d/Cesium.jpg/800px-Cesium.jpg?20080310205753',
        curiosidade: 'O Césio foi o primeiro elemento a ser descoberto, com recurso ao espetroscópio'
    },
    {
        nome: "Bário",
        grupo: 2,
        periodo: 6,
        sigla: "Ba",
        decomposicao: {
            protons: 56,
            eletrons: 56,
            neutrons: 81
        },
        numeroAtomico: 56,
        massaAtomica: 137.327,
        categoria: "metal-alcalino-terroso",
        configuracaoEletronica: "[Xe] 6s²",
        cor: 'Prata',
        radioativo: false,
        estadoNatural: "Sólido",
        densidade: 3.594,
        pontoDeFusao: 727,
        pontoDeEbulicao: 1897,
        etalpiaDeFusao: 8, // kJ/mol
        etalpiaDeVaporizacao: 140, // kJ/mol
        calorEspecifico: 0.204, // J/g·K
        abundanciaNaCrostaTerrestre: 0.034,
        abundanciaNoUniverso: 0.000001,
        raioAtomico: 222,
        raioCovalente: 215,
        eletronegatividade: 0.89, // Escala de Pauling
        volumeAtomico: 39.24, // cm3/mol
        condutividadeTermica: 0.184, // W/cm·K
        aplicacoesComuns: ["Produção de materiais para radiologia", "Vidros especiais", "Emissores de radiação em TV"],
        historia: `
        O Bário foi identificado como novo elemento, por Carl Wilhelm Scheele, em 1774. O Bário foi isolado, pela eletrólise de sais de Bário dissolvidos, em 1808, por Sir Humphry Davy, na Inglaterra. Robert Bunsen e Augustus Matthiessen obtiveram Bário puro, através da eletrólise de uma solução de cloreto de Bário e cloreto de amónio.`,
        endereçoImagemElemento: 'https://images-of-elements.com/s/barium.jpg',
        curiosidade: 'Em doses baixas, o Bário atua como um estimulante muscular.'
    },
    {
        nome: "Lantânio",
        grupo: null,
        periodo: 6,
        sigla: "Ba",
        decomposicao: {
            protons: 57,
            eletrons: 57,
            neutrons: 82
        },
        numeroAtomico: 57,
        massaAtomica: 138.90547,
        categoria: "lantanideos",
        configuracaoEletronica: "[Xe] 5d¹ 6s²",
        cor: 'Prata',
        radioativo: false,
        estadoNatural: "Sólido",
        densidade: 6.145,
        pontoDeFusao: 920,
        pontoDeEbulicao: 3464,
        etalpiaDeFusao: 6.2, // kJ/mol
        etalpiaDeVaporizacao: 400, // kJ/mol
        calorEspecifico: 0.195, // J/g·K
        abundanciaNaCrostaTerrestre: 0.034,
        abundanciaNoUniverso: 0.0000002,
        raioAtomico: 187,
        raioCovalente: 207,
        eletronegatividade: 1.1, // Escala de Pauling
        volumeAtomico: 22.5, // cm3/mol
        condutividadeTermica: 0.135, // W/cm·K
        aplicacoesComuns: ["Catalisadores", "Lâmpadas de arco de carboneto", "Híbridos de níquel-metal-hidreto"],
        historia: `
        O Lantâneo foi descoberto em 1839 pelo químico sueco Carl Gustav Mosander. Ele decompôs parcialmente uma amostra de Nitrato de Cério, aquecendo-o e tratando o sal resultante com Ácido Nítrico diluído. Da solução resultante, obteve um bloco colorido esbranquiçado de óxido, da nova terra rara. O Lantâneo foi isolado na sua forma relativamente pura, em 1923.`,
        endereçoImagemElemento: 'https://images-of-elements.com/s/lanthanum.jpg',
        curiosidade: 'O Lantânio é o metal raro mais reativo.'
    },
    {
        nome: "Cério",
        grupo: null,
        periodo: 6,
        sigla: "Ce",
        decomposicao: {
            protons: 58,
            eletrons: 58,
            neutrons: 82
        },
        numeroAtomico: 58,
        massaAtomica: 140.116,
        categoria: "lantanideos",
        configuracaoEletronica: "[Xe] 4f¹ 5d¹ 6s²",
        cor: 'Prata',
        radioativo: false,
        estadoNatural: "Sólido",
        densidade: 6.77,
        pontoDeFusao: 795,
        pontoDeEbulicao: 3443,
        etalpiaDeFusao: 5.5, // kJ/mol
        etalpiaDeVaporizacao: 350, // kJ/mol
        calorEspecifico: 0.192, // J/g·K
        abundanciaNaCrostaTerrestre: 0.006,
        abundanciaNoUniverso: 0.000001,
        raioAtomico: 182,
        raioCovalente: 204,
        eletronegatividade: 1.12, // Escala de Pauling
        volumeAtomico: 22.5, // cm3/mol
        condutividadeTermica: 0.114, // W/cm·K
        aplicacoesComuns: ["Polimento de vidro", "Catalisadores", "Materiais cerâmicos"],
        historia: `
        Jöns Jakob Berzelius e Wilhelm Hisinger descobriram o Cério na cerite, em 1803, na Suécia. Klaproth descobriu-o em simultâneo, mas independentemente, em amostras de tâsntalo, na Alemanha. Carl Gustaf Mosander que colaborara extensamente, com Berzelius, preparou Cério metálico, em 1825.`,
        endereçoImagemElemento: 'https://images-of-elements.com/s/cerium.jpg',
        curiosidade: 'A água doce contém 1,5 partes por bilião, de Cério'
    },
    {
        nome: "Praseodímio",
        grupo: null,
        periodo: 6,
        sigla: "Pr",
        decomposicao: {
            protons: 59,
            eletrons: 59,
            neutrons: 82
        },
        numeroAtomico: 59,
        massaAtomica: 140.90765,
        categoria: "lantanideos",
        configuracaoEletronica: "[Xe] 4f³ 6s²",
        cor: 'Prata',
        radioativo: false,
        estadoNatural: "Sólido",
        densidade: 6.773,
        pontoDeFusao: 935,
        pontoDeEbulicao: 3520,
        etalpiaDeFusao: 6.9, // kJ/mol
        etalpiaDeVaporizacao: 330, // kJ/mol
        calorEspecifico: 0.193, // J/g·K
        abundanciaNaCrostaTerrestre: 0.00086,
        abundanciaNoUniverso: 0.0000002,
        raioAtomico: 182,
        raioCovalente: 203,
        eletronegatividade: 1.13, // Escala de Pauling
        volumeAtomico: 20.8, // cm3/mol
        condutividadeTermica: 0.125, // W/cm·K
        aplicacoesComuns: ["Ímãs permanentes", "Lâmpadas de arco de carboneto", "Materiais cerâmicos"],
        historia: `
        O Praseodímio foi identificado pela primeira vez, em 1885, em Viena, pelo químico austríaco Carl Auer von Welsbach. Foi descoberto no Didímio, uma substância que Carl Gustav Mosander julgou erradamente tratar-se de um novo elemento, em 1841. O Praseodímio metálico puro foi produzido pela primeira vez, em 1931.`,
        endereçoImagemElemento: 'https://images-of-elements.com/s/praseodymium.jpg',
        curiosidade: 'O praseodímio é geralmente armazenado sob um óleo mineral leve ou selado em vidro'
    },
    {
        nome: "Neodímio",
        grupo: null,
        periodo: 6,
        sigla: "Nd",
        decomposicao: {
            protons: 60,
            eletrons: 60,
            neutrons: 84
        },
        numeroAtomico: 60,
        massaAtomica: 144.242,
        categoria: "lantanideos",
        configuracaoEletronica: "[Xe] 4f⁴ 6s²",
        cor: 'Prata',
        radioativo: false,
        estadoNatural: "Sólido",
        densidade: 7.007,
        pontoDeFusao: 1024,
        pontoDeEbulicao: 3074,
        etalpiaDeFusao: 7.1, // kJ/mol
        etalpiaDeVaporizacao: 285, // kJ/mol
        calorEspecifico: 0.19, // J/g·K
        abundanciaNaCrostaTerrestre: 0.0033,
        abundanciaNoUniverso: 0.000001,
        raioAtomico: 181,
        raioCovalente: 201,
        eletronegatividade: 1.14, // Escala de Pauling
        volumeAtomico: 20.6, // cm3/mol
        condutividadeTermica: 0.165, // W/cm·K
        aplicacoesComuns: ["Ímãs de neodímio-ferro-boro", "Laser de estado sólido", "Motores elétricos"],
        historia: `
        O Neodímio foi identificado pela primeira vez, em 1885, em Viena, pelo químico austríaco Carl Auer von Welsbach. Foi descoberto no Didímio, uma substância que Carl Gustav Mosander julgou erradamente tratar-se de um novo elemento, em 1841. O Neodímio metálico puro foi isolado pela primeira vez, em 1925.`,
        endereçoImagemElemento: 'https://images-of-elements.com/s/neodymium.jpg',
        curiosidade: 'A maioria do Neodímio mundial é extraído na China.'
    },
    {
        nome: "Promécio",
        grupo: null,
        periodo: 6,
        sigla: "Pm",
        decomposicao: {
            protons: 61,
            eletrons: 61,
            neutrons: 84
        },
        numeroAtomico: 61,
        massaAtomica: 145,
        categoria: "lantanideos",
        configuracaoEletronica: "[Xe] 4f⁵ 6s²",
        cor: 'Prata',
        radioativo: true,
        estadoNatural: "Sólido",
        densidade: 7.26,
        pontoDeFusao: 1042,
        pontoDeEbulicao: 3000,
        etalpiaDeFusao: 7.7, // kJ/mol
        etalpiaDeVaporizacao: 290, // kJ/mol
        calorEspecifico: null, // J/g·K
        abundanciaNaCrostaTerrestre: null,
        abundanciaNoUniverso: null,
        raioAtomico: 183,
        raioCovalente: 199,
        eletronegatividade: null, // Escala de Pauling
        volumeAtomico: 22.39, // cm3/mol
        condutividadeTermica: 0.179, // W/cm·K
        aplicacoesComuns: ["Usado como fonte de radiação em marcadores de raios-X industriais", "Pesquisas científicas"],
        historia: `
        A existência de um elemento entre o Neodímio e o Samário foi prevista pela primeira vez pelo químico checo Czech chemist Bohuslav Brauner, em 1902. O Prométio foi produzido caracterizado no Laboratório Nacional de Oak Ridge, em 1945 por Jacob A.Marinsky, Lawrence E.Glendenin e Charles D.Coryell.O Prométio foi produzido através da separação e análise dos produtos da fissão do combustível de Urânio num reator de Grafite.`,
        endereçoImagemElemento: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Pitchblende_schlema-alberoda.JPG/800px-Pitchblende_schlema-alberoda.JPG?20130906173125',
        curiosidade: 'O Promécio é o único lantanídeo que não possui isótopos estáveis.'
    },
    {
        nome: "Sumário",
        grupo: null,
        periodo: 6,
        sigla: "Sm",
        decomposicao: {
            protons: 62,
            eletrons: 62,
            neutrons: 88
        },
        numeroAtomico: 62,
        massaAtomica: 150.36,
        categoria: "lantanideos",
        configuracaoEletronica: "[Xe] 4f⁵ 6s²",
        cor: 'Prata',
        radioativo: false,
        estadoNatural: "Sólido",
        densidade: 7.52,
        pontoDeFusao: 1072,
        pontoDeEbulicao: 1794,
        etalpiaDeFusao: 8.6, // kJ/mol
        etalpiaDeVaporizacao: 175, // kJ/mol
        calorEspecifico: 0.197, // J/g·K
        abundanciaNaCrostaTerrestre: 0.0006,
        abundanciaNoUniverso: 0.0000005,
        raioAtomico: 180,
        raioCovalente: 198,
        eletronegatividade: 1.17, // Escala de Pauling
        volumeAtomico: 20, // cm3/mol
        condutividadeTermica: 0.133, // W/cm·K
        aplicacoesComuns: ["Catalisadores", "Materiais magnéticos", "Vidros especiais"],
        historia: `
        Em 1853, Charles Galissard de Marignac descobriu o Samário, quando encontrou linhas no espetro mineral. Paul Émile Lecoq de Boisbaudran isolou um sal de Samário, em Paris, em 1879 a partir da Samarskite e nela identificou um novo elemento, através de linhas nítidas na espetroscopia de absorção. O elemento puro foi produzido apenas em 1901 por Eugène-Anatole Demarçay.`,
        endereçoImagemElemento: 'https://images-of-elements.com/s/samarium.jpg',
        curiosidade: 'O Promécio é o único lantanídeo que não possui isótopos estáveis.'
    },
    {
        nome: "Európio",
        grupo: null,
        periodo: 6,
        sigla: "Eu",
        decomposicao: {
            protons: 63,
            eletrons: 63,
            neutrons: 89
        },
        numeroAtomico: 63,
        massaAtomica: 151.964,
        categoria: "lantanideos",
        configuracaoEletronica: "[Xe] 4f⁷ 6s²",
        cor: 'Prata',
        radioativo: false,
        estadoNatural: "Sólido",
        densidade: 5.243,
        pontoDeFusao: 826,
        pontoDeEbulicao: 1529,
        etalpiaDeFusao: 9.2, // kJ/mol
        etalpiaDeVaporizacao: 175, // kJ/mol
        calorEspecifico: 0.182, // J/g·K
        abundanciaNaCrostaTerrestre: 0.00018,
        abundanciaNoUniverso: 0.00000005,
        raioAtomico: 180,
        raioCovalente: 198,
        eletronegatividade: 1.2, // Escala de Pauling
        volumeAtomico: 20.8, // cm3/mol
        condutividadeTermica: 0.139, // W/cm·K
        aplicacoesComuns: ["Fósforos em tubo de TV", "Materiais luminescentes", "Reatores nucleares"],
        historia: `
        O Európio foi descoberto pela primeira vez por Paul Émile Lecoq de Boisbaudran, em 1890. Em 1896, o químico francês Eugène-Antole Demarçay identificou linhas espetroscópicas, no Samário, devidas ao Európio.Ele isolou o Európio em 1901, através da destilação fracionada do Nitrato de Magnésio e Samário`,
        endereçoImagemElemento: 'https://images-of-elements.com/s/europium.jpg',
        curiosidade: 'Európio é o elemento de terras raras mais reativo'
    },
    {
        nome: "Gadolíneo",
        grupo: null,
        periodo: 6,
        sigla: "Gd",
        decomposicao: {
            protons: 64,
            eletrons: 64,
            neutrons: 93
        },
        numeroAtomico: 64,
        massaAtomica: 157.25,
        categoria: "lantanideos",
        configuracaoEletronica: "[Xe] 4f⁷ 5d¹ 6s²",
        cor: 'Prata',
        radioativo: false,
        estadoNatural: "Sólido",
        densidade: 7.895,
        pontoDeFusao: 1312,
        pontoDeEbulicao: 3273,
        etalpiaDeFusao: 10, // kJ/mol
        etalpiaDeVaporizacao: 305, // kJ/mol
        calorEspecifico: 0.236, // J/g·K
        abundanciaNaCrostaTerrestre: 0.00052,
        abundanciaNoUniverso: 0.0000002,
        raioAtomico: 180,
        raioCovalente: 196,
        eletronegatividade: 1.2, // Escala de Pauling
        volumeAtomico: 19.9, // cm3/mol
        condutividadeTermica: 0.106, // W/cm·K
        aplicacoesComuns: ["Materiais para reatores nucleares", "Agentes de contraste em ressonância magnética", "Filmes de fósforo"],
        historia: `
        O Gadolínio foi detetado espetroscopicamente, em 1880, pelo químico suíço Jean Charles Galissard de Marignac que separou o seu óxido. Ele observou linhas espetroscópicas devidas ao Gadolínio em amostras de Gadolinite no mineral separados Cerite. O metal foi isolado por Paul Emile Lecoq de Boisbaudran, em 1886.`,
        endereçoImagemElemento: 'https://images-of-elements.com/s/gadolinium.jpg',
        curiosidade: 'O gadolínio tem a maior seção transversal de nêutrons entre quaisquer nuclídeos estáveis'
    },
    {
        nome: "Térbio",
        grupo: null,
        periodo: 6,
        sigla: "Tb",
        decomposicao: {
            protons: 65,
            eletrons: 65,
            neutrons: 94
        },
        numeroAtomico: 65,
        massaAtomica: 158.92535,
        categoria: "lantanideos",
        configuracaoEletronica: "[Xe] 4f⁹ 6s²",
        cor: 'Prata',
        radioativo: false,
        estadoNatural: "Sólido",
        densidade: 8.229,
        pontoDeFusao: 1356,
        pontoDeEbulicao: 3230,
        etalpiaDeFusao: 10.8, // kJ/mol
        etalpiaDeVaporizacao: 295, // kJ/mol
        calorEspecifico: 0.182, // J/g·K
        abundanciaNaCrostaTerrestre: 0.000093,
        abundanciaNoUniverso: 0.00000005,
        raioAtomico: 177,
        raioCovalente: 194,
        eletronegatividade: 1.2, // Escala de Pauling
        volumeAtomico: 19.2, // cm3/mol
        condutividadeTermica: 0.111, // W/cm·K
        aplicacoesComuns: ["Fósforos em tubos de TV", "Filmes magneto-ópticos", "Materiais luminescentes"],
        historia: `
        O Térbio foi descoberto em 1843, pelo químico sueco Carl Gustaf Mosander que o detetou como uma impureza do Ítrio. Ele precipitou no Ítrio, partes de Hidróxido de Amónio de diferente basicidade. Ele observou que estas partes eram essencialmente incolores na solução, mas davam origem a um óxido acastanhado que era o Térbio.`,
        endereçoImagemElemento: 'https://images-of-elements.com/s/terbium.jpg',
        curiosidade: 'O Térbio é suficientemente mole para ser cortado com uma faca.'
    },
    {
        nome: "Diprósio",
        grupo: null,
        periodo: 6,
        sigla: "Dy",
        decomposicao: {
            protons: 66,
            eletrons: 66,
            neutrons: 97
        },
        numeroAtomico: 66,
        massaAtomica: 162.5,
        categoria: "lantanideos",
        configuracaoEletronica: "[Xe] 4f¹⁰ 6s²",
        cor: 'Prata',
        radioativo: false,
        estadoNatural: "Sólido",
        densidade: 8.55,
        pontoDeFusao: 1407,
        pontoDeEbulicao: 2567,
        etalpiaDeFusao: 11.1, // kJ/mol
        etalpiaDeVaporizacao: 280, // kJ/mol
        calorEspecifico: 0.17, // J/g·K
        abundanciaNaCrostaTerrestre: 0.00062,
        abundanciaNoUniverso: 0.0000002,
        raioAtomico: 178,
        raioCovalente: 192,
        eletronegatividade: 1.22, // Escala de Pauling
        volumeAtomico: 19, // cm3/mol
        condutividadeTermica: 0.107, // W/cm·K
        aplicacoesComuns: ["Materiais para reatores nucleares", "Ímãs de alta resistência", "Lasers"],
        historia: `
        O químico francês Paul Émile Lecoq de Boisbaudran separou o Óxido de Disprósio, enquanto trabalhava com o Óxido de Hólmio, em París, em 1886. Este processo consistia em dissolver o Óxido de Disprósio em ácido, acrescentando Amónia para precipitar o hidróxido. O elemento só foi isolado na sua forma pura, com o desenvolvimento de técnicas de permuta iónica na década de 1950.`,
        endereçoImagemElemento: 'https://images-of-elements.com/s/dysprosium-2.jpg',
        curiosidade: 'O disprósio que ocorre naturalmente é composto por 7 isótopos.'
    },
    {
        nome: "Hólmio",
        grupo: null,
        periodo: 6,
        sigla: "Ho",
        decomposicao: {
            protons: 67,
            eletrons: 67,
            neutrons: 98
        },
        numeroAtomico: 67,
        massaAtomica: 164.93032,
        categoria: "lantanideos",
        configuracaoEletronica: "[Xe] 4f¹¹ 6s²",
        cor: 'Prata',
        radioativo: false,
        estadoNatural: "Sólido",
        densidade: 8.795,
        pontoDeFusao: 1461,
        pontoDeEbulicao: 2720,
        etalpiaDeFusao: 17, // kJ/mol
        etalpiaDeVaporizacao: 265, // kJ/mol
        calorEspecifico: 0.165, // J/g·K
        abundanciaNaCrostaTerrestre: 0.00012,
        abundanciaNoUniverso: 0.00000005,
        raioAtomico: 176,
        raioCovalente: 192,
        eletronegatividade: 1.23, // Escala de Pauling
        volumeAtomico: 18.7, // cm3/mol
        condutividadeTermica: 0.162, // W/cm·K
        aplicacoesComuns: ["Lasers", "Materiais para reatores nucleares", "Dopagem em dispositivos magneto-ópticos"],
        historia: `
        O Hólmio foi descoberto pelo químicos suíços Marc Delafontaine e Jacques-Louis Soret, em 1878. Eles observaram as bandas aberrantes na espetroscopia de absorção do elemento, então desconhecido. Mais tarde, nesse mesmo ano, Per Teodor Cleve desobriu o elemento, enquanto trabalhava com o Érbio.`,
        endereçoImagemElemento: 'https://images-of-elements.com/s/holmium.jpg',
        curiosidade: 'Hólmio tem a maior força magnética de qualquer elemento natural.'
    },
    {
        nome: "Érbio",
        grupo: null,
        periodo: 6,
        sigla: "Er",
        decomposicao: {
            protons: 68,
            eletrons: 68,
            neutrons: 99
        },
        numeroAtomico: 68,
        massaAtomica: 167.259,
        categoria: "lantanideos",
        configuracaoEletronica: "[Xe] 4f¹² 6s²",
        cor: 'Prata',
        radioativo: false,
        estadoNatural: "Sólido",
        densidade: 9.066,
        pontoDeFusao: 1529,
        pontoDeEbulicao: 2868,
        etalpiaDeFusao: 19.9, // kJ/mol
        etalpiaDeVaporizacao: 285, // kJ/mol
        calorEspecifico: 0.168, // J/g·K
        abundanciaNaCrostaTerrestre: 0.0003,
        abundanciaNoUniverso: 0.0000002,
        raioAtomico: 176,
        raioCovalente: 189,
        eletronegatividade: 1.24, // Escala de Pauling
        volumeAtomico: 18.4, // cm3/mol
        condutividadeTermica: 0.143, // W/cm·K
        aplicacoesComuns: ["Lasers", "Materiais para reatores nucleares", "Dopagem em dispositivos magneto-ópticos"],
        historia: `
        O Érbio foi descoberto em 1843 pelo químico suíço Carl Gustaf Mosander que o detetou como uma impureza do Ítrio. Ele precipitou no Ítrio, partes de Hidróxido de Amónio de diferente basicidade. Ele observou que a parte com cor rosa era o Érbio.`,
        endereçoImagemElemento: 'https://images-of-elements.com/s/erbium.jpg',
        curiosidade: 'A concentração mais alta de Érbio no ser humano, encontra-se nos ossos.'
    },
    {
        nome: "Túlio",
        grupo: null,
        periodo: 6,
        sigla: "Tm",
        decomposicao: {
            protons: 69,
            eletrons: 69,
            neutrons: 100
        },
        numeroAtomico: 69,
        massaAtomica: 168.93421,
        categoria: "lantanideos",
        configuracaoEletronica: "[Xe] 4f¹³ 6s²",
        cor: 'Prata',
        radioativo: false,
        estadoNatural: "Sólido",
        densidade: 9.321,
        pontoDeFusao: 1545,
        pontoDeEbulicao: 1950,
        etalpiaDeFusao: 16.8, // kJ/mol
        etalpiaDeVaporizacao: 250, // kJ/mol
        calorEspecifico: 0.16, // J/g·K
        abundanciaNaCrostaTerrestre: 0.000045,
        abundanciaNoUniverso: 0.00000001,
        raioAtomico: 176,
        raioCovalente: 190,
        eletronegatividade: 1.25, // Escala de Pauling
        volumeAtomico: 18.1, // cm3/mol
        condutividadeTermica: 0.168, // W/cm·K
        aplicacoesComuns: ["Lasers de estado sólido", "Dispositivos optoeletrônicos", "Pesquisas científicas"],
        historia: `
        O Túlio foi descoberto pelo químico sueco Per Teodor Cleve, em 1879, ao observar impurezas dos óxido de outros Lantanídeos. O primeiro investigador a obter o Túlio quase puro foi Charles James, um expatriado britânico, a trabalhar em larga escala, no colégio de New Hampshire em Durham. O Óxido de Túlio de alto grau de pureza foi comercializado pela primeira vez, na década de 1950.`,
        endereçoImagemElemento: 'https://images-of-elements.com/s/thulium.jpg',
        curiosidade: 'O minério de Túlio encontra-se mais frequentemente na China.'
    },
    {
        nome: "Itérbio",
        grupo: null,
        periodo: 6,
        sigla: "Yb",
        decomposicao: {
            protons: 70,
            eletrons: 70,
            neutrons: 103
        },
        numeroAtomico: 70,
        massaAtomica: 173.054,
        categoria: "lantanideos",
        configuracaoEletronica: "[Xe] 4f¹⁴ 6s²",
        cor: 'Prata',
        radioativo: false,
        estadoNatural: "Sólido",
        densidade: 6.965,
        pontoDeFusao: 824,
        pontoDeEbulicao: 1196,
        etalpiaDeFusao: 7.7, // kJ/mol
        etalpiaDeVaporizacao: 160, // kJ/mol
        calorEspecifico: 0.155, // J/g·K
        abundanciaNaCrostaTerrestre: 0.00028,
        abundanciaNoUniverso: 0.0000002,
        raioAtomico: 176,
        raioCovalente: 187,
        eletronegatividade: 1.1, // Escala de Pauling
        volumeAtomico: 24.79, // cm3/mol
        condutividadeTermica: 0.349, // W/cm·K
        aplicacoesComuns: ["Lasers", "Relógios atômicos", "Estudos sobre cristalografia"],
        historia: `
        O Itérbio foi descoberto pelo químico suíço Jean Charles Galissard de Marignac, no ano de 1878. Em 1907, George Urbain separou a Itérbia em dois constituintes: a neoitérbia e a lutécia. O metal Itérbio foi preparado pela primeira vez, em 1937, por Klemm e Bonner, aquecendo o Cloreto de Itérbio, juntamente com Potássio. Uma amostra relativamente pura do metal foi obtida, apenas em 1953.`,
        endereçoImagemElemento: 'https://images-of-elements.com/s/ytterbium.jpg',
        curiosidade: 'O itérbio é recuperado comercialmente da areia monazita.'
    },
    {
        nome: "Lutécio",
        grupo: null,
        periodo: 6,
        sigla: "Lu",
        decomposicao: {
            protons: 71,
            eletrons: 71,
            neutrons: 104
        },
        numeroAtomico: 71,
        massaAtomica: 174.9668,
        categoria: "lantanideos",
        configuracaoEletronica: "[Xe] 4f¹⁴ 5d1 6s²",
        cor: 'Prata',
        radioativo: false,
        estadoNatural: "Sólido",
        densidade: 9.84,
        pontoDeFusao: 1652,
        pontoDeEbulicao: 3402,
        etalpiaDeFusao: 22, // kJ/mol
        etalpiaDeVaporizacao: 415, // kJ/mol
        calorEspecifico: 0.154, // J/g·K
        abundanciaNaCrostaTerrestre: 0.000056,
        abundanciaNoUniverso: 0.00000001,
        raioAtomico: 174,
        raioCovalente: 187,
        eletronegatividade: 1.27, // Escala de Pauling
        volumeAtomico: 17.78, // cm3/mol
        condutividadeTermica: 0.164, // W/cm·K
        aplicacoesComuns: ["Catalisadores", "Propulsores em aviões", "Materiais para dispositivos eletrônicos"],
        historia: `
        O químico francês Georges Urbain conseguiu separar o Lutécio do Itérbio, em Paris, em 1907. Nesse mesmo ano, o cientista austríaco Carl Auer von Welsbach e o químico americano Charles James também foram bem sucedidos no isolamento do Lutécio, independentemente. O metal puro de Lutécio foi produzido pela primeira vez, em 1953.`,
        endereçoImagemElemento: 'https://images-of-elements.com/s/lutetium.jpg',
        curiosidade: 'O lutécio foi o último elemento natural de terras raras a ser descoberto.'
    },
    {
        nome: "Háfnio",
        grupo: 4,
        periodo: 6,
        sigla: "Hf",
        decomposicao: {
            protons: 72,
            eletrons: 72,
            neutrons: 106
        },
        numeroAtomico: 72,
        massaAtomica: 178.49,
        categoria: "metal-de-transicao",
        configuracaoEletronica: "[Xe] 4f¹⁴ 5d² 6s²",
        cor: 'Cinza',
        radioativo: false,
        estadoNatural: "Sólido",
        densidade: 13.31,
        pontoDeFusao: 2233,
        pontoDeEbulicao: 4603,
        etalpiaDeFusao: 25.5, // kJ/mol
        etalpiaDeVaporizacao: 630, // kJ/mol
        calorEspecifico: 0.144, // J/g·K
        abundanciaNaCrostaTerrestre: 0.00033,
        abundanciaNoUniverso: 0.0000007,
        raioAtomico: 159,
        raioCovalente: 175,
        eletronegatividade: 1.2, // Escala de Pauling
        volumeAtomico: 13.6, // cm3/mol
        condutividadeTermica: 0.23, // W/cm·K
        aplicacoesComuns: ["Fabricação de barras de controle nuclear", "Revestimentos resistentes à corrosão", "Componentes de reatores nucleares"],
        historia: `
        Em 1911, Georges Urbain afirmou ter descoberto um elemento em resíduos de terras raras que mais tarde se revelou ser uma mistura de Lantanídeos já descobertos. Dirk Coster e George de Hevesy descobriram-no através de análise espetroscópica de raios X do Zircão norueguês, em 1922. Anton Eduard van Arkel e Jan Hendrik de Boer foram os primeiros a preparar Háfnio metálico ao decompor o vapor de Tetraiodeto de Háfnio num filamento de Tungsténio incandescente.`,
        endereçoImagemElemento: 'https://images-of-elements.com/s/hafnium.jpg',
        curiosidade: 'Na forma de pó, o háfnio é pirofórico e pode inflamar-se espontaneamente no ar.'
    },
    {
        nome: "Tântalo",
        grupo: 5,
        periodo: 6,
        sigla: "Hf",
        decomposicao: {
            protons: 73,
            eletrons: 73,
            neutrons: 108
        },
        numeroAtomico: 73,
        massaAtomica: 180.94788,
        categoria: "metal-de-transicao",
        configuracaoEletronica: "[Xe] 4f¹⁴ 5d³ 6s²",
        cor: 'Cinza',
        radioativo: false,
        estadoNatural: "Sólido",
        densidade: 16.654,
        pontoDeFusao: 3017,
        pontoDeEbulicao: 5458,
        etalpiaDeFusao: 36, // kJ/mol
        etalpiaDeVaporizacao: 735, // kJ/mol
        calorEspecifico: 0.14, // J/g·K
        abundanciaNaCrostaTerrestre: 0.00017,
        abundanciaNoUniverso: 0.000000008,
        raioAtomico: 146,
        raioCovalente: 170,
        eletronegatividade: 1.5, // Escala de Pauling
        volumeAtomico: 10.90, // cm3/mol
        condutividadeTermica: 0.575, // W/cm·K
        aplicacoesComuns: ["Capacitores eletrolíticos", "Componentes de equipamentos médicos", "Revestimentos de metais preciosos"],
        historia: `
        O Tântalo foi descoberto na Suécia, por Anders Ekeberg, em 1802, em minerais de tantalite, provindos da Finlândia e de Itrotantalite, provindo da Suécia. Infelizmente, William Hyde Wollaston alegou que o elemento tratava-se, na realidade, de nióbio, também descoberto no mesmo ano. Em 1846, o químico alemão Heinrich Rose conseguiu, finalmente, provar, sem margem para dúvidas que o Tãntalo e o nióbio eram elementos distintos.`,
        endereçoImagemElemento: 'https://images-of-elements.com/tantalum.jpg',
        curiosidade: 'O Tãntalo exite principalmente no mineral Columbite-Tantalite.'
    },
    {
        nome: "Tungstênio",
        grupo: 6,
        periodo: 6,
        sigla: "W",
        decomposicao: {
            protons: 74,
            eletrons: 74,
            neutrons: 110
        },
        numeroAtomico: 74,
        massaAtomica: 183.84,
        categoria: "metal-de-transicao",
        configuracaoEletronica: "[Xe] 4f¹⁴ 5d⁴ 6s²",
        cor: 'Cinza',
        radioativo: false,
        estadoNatural: "Sólido",
        densidade: 19.25,
        pontoDeFusao: 3422,
        pontoDeEbulicao: 5555,
        etalpiaDeFusao: 35, // kJ/mol
        etalpiaDeVaporizacao: 800, // kJ/mol
        calorEspecifico: 0.132, // J/g·K
        abundanciaNaCrostaTerrestre: 0.00011,
        abundanciaNoUniverso: 0.00000005,
        raioAtomico: 139,
        raioCovalente: 162,
        eletronegatividade: 2.36, // Escala de Pauling
        volumeAtomico: 9.53, // cm3/mol
        condutividadeTermica: 1.74, // W/cm·K
        aplicacoesComuns: ["Filamentos de lâmpadas incandescentes", "Elétrodos de soldagem", "Componentes de equipamentos de raio-X"],
        historia: `
        Em 1781, Torbern Bergman obteve um óxido de um novo elemento, a partir da scheelite. Em 1783, José e Fausto Elhuyar descobriram um ácido feito a partir de volframite idêntico ao ácido túngstico. Mais tarde, nesse ano, em Espanha, os irmãos conseguiram isolar o Tungsténio pela redução do seu ácido com carvão, tendo-lhe sido atribuída a descoberta do elemento.`,
        endereçoImagemElemento: 'https://images-of-elements.com/tungsten-rod.jpg',
        curiosidade: 'O símbolo químico - W - advém do nome orignial do elemento: Wolfrâmio.'
    },
    {
        nome: "Rênio",
        grupo: 7,
        periodo: 6,
        sigla: "Re",
        decomposicao: {
            protons: 75,
            eletrons: 75,
            neutrons: 111
        },
        numeroAtomico: 75,
        massaAtomica: 186.207,
        categoria: "metal-de-transicao",
        configuracaoEletronica: "[Xe] 4f¹⁴ 5d⁵ 6s²",
        cor: 'Cinza',
        radioativo: false,
        estadoNatural: "Sólido",
        densidade: 21.02,
        pontoDeFusao: 3186,
        pontoDeEbulicao: 5596,
        etalpiaDeFusao: 33, // kJ/mol
        etalpiaDeVaporizacao: 705, // kJ/mol
        calorEspecifico: 0.137, // J/g·K
        abundanciaNaCrostaTerrestre: 0.00000026,
        abundanciaNoUniverso: 0.00000002,
        raioAtomico: 137,
        raioCovalente: 151,
        eletronegatividade: 1.9, // Escala de Pauling
        volumeAtomico: 8.85, // cm3/mol
        condutividadeTermica: 4.79, // W/cm·K
        aplicacoesComuns: ["Filamentos em lâmpadas de flash", "Catalisador em refinarias de petróleo", "Componente em superligas para turbinas de avião"],
        historia: `
        Em 1908, o químico japonês Masataka Ogawa afirmou ter descoberto o 43.º elemento. Contudo, análise posterior revelou a presença do Rénio (elemento 75) e não do elemento 43. Em 1922, Walter Noddack, Ida Eva Tacke e Otto Berg anunciaram a separação do Rénio da Gandolinite e deram-lhe o nome atual.`,
        endereçoImagemElemento: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/Rhenium_single_crystal_bar_and_1cm3_cube.jpg/800px-Rhenium_single_crystal_bar_and_1cm3_cube.jpg?20100925203014',
        curiosidade: 'O Chile possui as maiores reservas mundiais de Rénio.'
    },
    {
        nome: "Ósmio",
        grupo: 8,
        periodo: 6,
        sigla: "Os",
        decomposicao: {
            protons: 76,
            eletrons: 76,
            neutrons: 114
        },
        numeroAtomico: 76,
        massaAtomica: 190.23,
        categoria: "metal-de-transicao",
        configuracaoEletronica: "[Xe] 4f¹⁴ 5d⁶ 6s²",
        cor: 'Cinza',
        radioativo: false,
        estadoNatural: "Sólido",
        densidade: 22.31,
        pontoDeFusao: 3033,
        pontoDeEbulicao: 5012,
        etalpiaDeFusao: 31, // kJ/mol
        etalpiaDeVaporizacao: 630, // kJ/mol
        calorEspecifico: 0.13, // J/g·K
        abundanciaNaCrostaTerrestre: 0.00000018,
        abundanciaNoUniverso: 0.0000003,
        raioAtomico: 135,
        raioCovalente: 144,
        eletronegatividade: 2.2, // Escala de Pauling
        volumeAtomico: 8.49, // cm3/mol
        condutividadeTermica: 0.876, // W/cm·K
        aplicacoesComuns: ["Agulhas em microscópios eletrônicos", "Catalisador em processos químicos", "Componente em ligas de platina-osmio"],
        historia: `
        O Ósmio foi descoberto pelo químico inglês, Smithson Tennant, em 1803, em Londres. Os químicos que estudavam a platina, dissolveram-na em água-régia, para criar sais solúveis e observaram uma pequena quantidade de resíduos escuros insolúveis. Smithson Tennant analisou esses resíduos e concluiu que deveriam conter um novo metal.`,
        endereçoImagemElemento: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/Osmium_crystals.jpg/800px-Osmium_crystals.jpg?20100216221302',
        curiosidade: 'O Ósmio é o elemento estável menos abundante, na crosta terrestre.'
    },
    {
        nome: "Íridio",
        grupo: 9,
        periodo: 6,
        sigla: "Ir",
        decomposicao: {
            protons: 77,
            eletrons: 77,
            neutrons: 115
        },
        numeroAtomico: 77,
        massaAtomica: 192.217,
        categoria: "metal-de-transicao",
        configuracaoEletronica: "[Xe] 4f¹⁴ 5d⁷ 6s²",
        cor: 'Prata',
        radioativo: false,
        estadoNatural: "Sólido",
        densidade: 22.56,
        pontoDeFusao: 2466,
        pontoDeEbulicao: 4428,
        etalpiaDeFusao: 26, // kJ/mol
        etalpiaDeVaporizacao: 560, // kJ/mol
        calorEspecifico: 0.131, // J/g·K
        abundanciaNaCrostaTerrestre: 0.00000004,
        abundanciaNoUniverso: 0.0000002,
        raioAtomico: 136,
        raioCovalente: 141,
        eletronegatividade: 2.2, // Escala de Pauling
        volumeAtomico: 8.54, // cm3/mol
        condutividadeTermica: 1.47, // W/cm·K
        aplicacoesComuns: ["Eletrodos em velas de ignição", "Fabricação de utensílios de laboratório", "Componente em ligas de platina-irídio"],
        historia: `
        O Irídio foi descoberto, juntamente com o Ósmio e através do mesmo processo, pelo químico inglês, Smithson Tennant, em 1803, em Londres. Os químicos que estudavam a platina, dissolveram-na em água-régia, para criar sais solúveis e observaram uma pequena quantidade de resíduos escuros insolúveis. Smithson Tennant analisou esses resíduos e concluiu que deveriam conter um novo metal.`,
        endereçoImagemElemento: 'https://images-of-elements.com/s/iridium.jpg',
        curiosidade: 'O Irídio é o metal mais resistente à corrosão conhecido.'
    },
    {
        nome: "Platina",
        grupo: 10,
        periodo: 6,
        sigla: "Pt",
        decomposicao: {
            protons: 78,
            eletrons: 78,
            neutrons: 117
        },
        numeroAtomico: 78,
        massaAtomica: 195.084,
        categoria: "metal-de-transicao",
        configuracaoEletronica: "[Xe] 4f¹⁴ 5d⁹ 6s¹",
        cor: 'Cinza',
        radioativo: false,
        estadoNatural: "Sólido",
        densidade: 21.45,
        pontoDeFusao: 1768.3,
        pontoDeEbulicao: 3825,
        etalpiaDeFusao: 20, // kJ/mol
        etalpiaDeVaporizacao: 490, // kJ/mol
        calorEspecifico: 0.133, // J/g·K
        abundanciaNaCrostaTerrestre: 0.0000037,
        abundanciaNoUniverso: 0.0000005,
        raioAtomico: 139,
        raioCovalente: 136,
        eletronegatividade: 2.28, // Escala de Pauling
        volumeAtomico: 9.10, // cm3/mol
        condutividadeTermica: 0.716, // W/cm·K
        aplicacoesComuns: ["Joalheria", "Catalisadores em reações químicas", "Eletrodos em dispositivos médicos"],
        historia: `
        A platina foi utilizada pela primeira vez, por nativos da America do Sul, na era pré-colombiana, na produção de artefactos. Antonio de Ulloa publicou as suas descobertas sobre a platina, em 1749, embora Sir Charles Wood também tivesse estudado o metal em 1741. A primeira referência à platina, como um novo metal, foi feita por William Brownrigg, em 1750.`,
        endereçoImagemElemento: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/Platinum-nugget.jpg/800px-Platinum-nugget.jpg?20100303221510',
        curiosidade: 'A Platina existe em grande abundância, na Lua e nos meteoritos'
    },
    {
        nome: "Ouro",
        grupo: 11,
        periodo: 6,
        sigla: "Au",
        decomposicao: {
            protons: 79,
            eletrons: 79,
            neutrons: 118
        },
        numeroAtomico: 79,
        massaAtomica: 196.966569,
        categoria: "metal-de-transicao",
        configuracaoEletronica: "[Xe] 4f¹⁴ 5d¹⁰ 6s¹",
        cor: 'Dourado',
        radioativo: false,
        estadoNatural: "Sólido",
        densidade: 19.282,
        pontoDeFusao: 1064.2,
        pontoDeEbulicao: 2856,
        etalpiaDeFusao: 12.5, // kJ/mol
        etalpiaDeVaporizacao: 330, // kJ/mol
        calorEspecifico: 0.129, // J/g·K
        abundanciaNaCrostaTerrestre: 0.00000031,
        abundanciaNoUniverso: 0.00000006,
        raioAtomico: 144,
        raioCovalente: 136,
        eletronegatividade: 2.54, // Escala de Pauling
        volumeAtomico: 10.2, // cm3/mol
        condutividadeTermica: 3.17, // W/cm·K
        aplicacoesComuns: ["Joalheria", "Eletrônicos", "Componentes em dispositivos médicos"],
        historia: `
        O ouro é conhecido desde a pré-história e foi o primeiro metal usado pelo ser humano. Foram encontrados artefactos de ouro que remontam a 5000 anos atrás, em túmulos egípcios. Cerca de 6000 anos atrás, foi descoberto ouro com 98% de pureza foi descoberto em Natal Qunah, no antigo reino de Israel.`,
        endereçoImagemElemento: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/Gold-crystals.jpg/800px-Gold-crystals.jpg?20090820211617',
        curiosidade: 'A Índia é o maior consumidor mundial de Ouro'
    },
    {
        nome: "Mercúrio",
        grupo: 12,
        periodo: 6,
        sigla: "Hg",
        decomposicao: {
            protons: 80,
            eletrons: 80,
            neutrons: 121
        },
        numeroAtomico: 80,
        massaAtomica: 200.59,
        categoria: "metal-de-transicao",
        configuracaoEletronica: "[Xe] 4f¹⁴ 5d¹⁰ 6s²",
        cor: 'Prata',
        radioativo: false,
        estadoNatural: "Líquido",
        densidade: 13.5336,
        pontoDeFusao: -38.83,
        pontoDeEbulicao: 357,
        etalpiaDeFusao: 2.29, // kJ/mol
        etalpiaDeVaporizacao: 59.2, // kJ/mol
        calorEspecifico: 0.14, // J/g·K
        abundanciaNaCrostaTerrestre: 0.0000067,
        abundanciaNoUniverso: 0.0000001,
        raioAtomico: 151,
        raioCovalente: 132,
        eletronegatividade: 2.00, // Escala de Pauling
        volumeAtomico: 14.82, // cm3/mol
        condutividadeTermica: 0.0834, // W/cm·K
        aplicacoesComuns: ["Instrumentos de medição", "Lâmpadas fluorescentes", "Processos industriais"],
        historia: `
        O mercúrio era conhecido dos chineses e indianos. Foi encontrando em túmulos egípcios, datados de 1500 BC. Os alquimistas consideravam o mercúrio como a matéria prima a parir da qual todos os metais eram feitos. Estes, acreditavam que diferentes metais poderiam ser obtidos, variando a qualidade e a quantidade de enxofre, contida no mercúrio.`,
        endereçoImagemElemento: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Pouring_liquid_mercury_bionerd.jpg/553px-Pouring_liquid_mercury_bionerd.jpg?20120513070648',
        curiosidade: 'O Mercúrio é o único metal líquido, à temperatura ambiente.'
    },
    {
        nome: "Tálio",
        grupo: 13,
        periodo: 6,
        sigla: "Tl",
        decomposicao: {
            protons: 81,
            eletrons: 81,
            neutrons: 123
        },
        numeroAtomico: 81,
        massaAtomica: 204.3833,
        categoria: "outros-metais",
        configuracaoEletronica: "[Xe] 4f¹⁴ 5d¹⁰ 6s² 6p¹",
        cor: 'Prata',
        radioativo: false,
        estadoNatural: "Sólido",
        densidade: 11.85,
        pontoDeFusao: 304,
        pontoDeEbulicao: 1473,
        etalpiaDeFusao: 4.2, // kJ/mol
        etalpiaDeVaporizacao: 165, // kJ/mol
        calorEspecifico: 0.129, // J/g·K
        abundanciaNaCrostaTerrestre: 0.000053,
        abundanciaNoUniverso: 0.00000005,
        raioAtomico: 170,
        raioCovalente: 145,
        eletronegatividade: 1.62, // Escala de Pauling
        volumeAtomico: 17.2, // cm3/mol
        condutividadeTermica: 0.461, // W/cm·K
        aplicacoesComuns: ["Dopante em semicondutores", "Produção de vidros especiais", "Em medicina nuclear"],
        historia: `
        O Tálio foi descoberto através de espetroscopia por Sir William Crookes, em 1861, em Londres. Em 1862, Claude-Auguste Lamy utilizou um espetrómetro para determinar a composição de uma substância, contendo Selénio que se depositara, durante a produção de Ácido Sulfúrico a partir da Pirite. Ele observou a nova linha verde no espetro e concluiu tratar-se de um novo elemento.`,
        endereçoImagemElemento: 'https://images-of-elements.com/s/thallium.jpg',
        curiosidade: 'Agatha Christie empregou as propriedades tóxicas do Tálio, no seu romance: O Cavalo Amarelo.'
    },
    {
        nome: "Chumbo",
        grupo: 14,
        periodo: 6,
        sigla: "Pb",
        decomposicao: {
            protons: 82,
            eletrons: 82,
            neutrons: 125
        },
        numeroAtomico: 82,
        massaAtomica: 207.2,
        categoria: "outros-metais",
        configuracaoEletronica: "[Xe] 4f¹⁴ 5d¹⁰ 6s² 6p²",
        cor: 'Cinza',
        radioativo: false,
        estadoNatural: "Sólido",
        densidade: 11.342,
        pontoDeFusao: 327.46,
        pontoDeEbulicao: 1749,
        etalpiaDeFusao: 4.77, // kJ/mol
        etalpiaDeVaporizacao: 178, // kJ/mol
        calorEspecifico: 0.129, // J/g·K
        abundanciaNaCrostaTerrestre: 0.00099,
        abundanciaNoUniverso: 0.000001,
        raioAtomico: 175,
        raioCovalente: 146,
        eletronegatividade: 2.33, // Escala de Pauling
        volumeAtomico: 18.17, // cm3/mol
        condutividadeTermica: 0.353, // W/cm·K
        aplicacoesComuns: ["Baterias de chumbo-ácido", "Proteção contra radiação", "Munição e projéteis"],
        historia: `
        Contas metálicas de chumbo, datadas de 6400 AC, foram encontradas em Çatal Huyuk, na atual Turquia. Os romanos também utilizaram o chumbo, na sua forma fundida, para fixar cavilhas de ferro que sustentavam grandes blocos de calcário, em certos monumentos. Na alquimia, acreditava-se que o chumbo era o metal mais antigo e que estava associado ao planeta Saturno.`,
        endereçoImagemElemento: 'https://images-of-elements.com/s/lead.jpg',
        curiosidade: 'As grafites dos lápis de madeira nunca foram feitas de grafite.'
    },
    {
        nome: "Bismuto",
        grupo: 15,
        periodo: 6,
        sigla: "Bi",
        decomposicao: {
            protons: 83,
            eletrons: 83,
            neutrons: 126
        },
        numeroAtomico: 83,
        massaAtomica: 208.9804,
        categoria: "outros-metais",
        configuracaoEletronica: "[Xe] 4f¹⁴ 5d¹⁰ 6s² 6p³",
        cor: 'Cinza',
        radioativo: false,
        estadoNatural: "Sólido",
        densidade: 9.78,
        pontoDeFusao: 271.5,
        pontoDeEbulicao: 1564,
        etalpiaDeFusao: 10.9, // kJ/mol
        etalpiaDeVaporizacao: 160, // kJ/mol
        calorEspecifico: 0.122, // J/g·K
        abundanciaNaCrostaTerrestre: 0.0000025,
        abundanciaNoUniverso: 0.00000007,
        raioAtomico: 156,
        raioCovalente: 148,
        eletronegatividade: 2.02, // Escala de Pauling
        volumeAtomico: 21.3, // cm3/mol
        condutividadeTermica: 0.0797, // W/cm·K
        aplicacoesComuns: ["Ligas metálicas", "Pigmentos em cosméticos", "Medicina nuclear"],
        historia: `
        O Bismuto é conhecido desde a antiguidade, portanto ninguém é creditado pela sua descoberta. Em tempos antigos, o elemento foi confundido com o estanho e com o chumbo, devido à sua semelhança com estes. Em 1753, o químico francês Claude François Geoffroy demonstrou que este metal é diferente do chumbo e do estanho.`,
        endereçoImagemElemento: 'https://images-of-elements.com/s/bismuth.jpg',
        curiosidade: 'O Bismuto tem uma resistência elétrica invulgarmente elevada, para um metal.'
    },
    {
        nome: "Polônio",
        grupo: 16,
        periodo: 6,
        sigla: "Po",
        decomposicao: {
            protons: 84,
            eletrons: 84,
            neutrons: 126
        },
        numeroAtomico: 84,
        massaAtomica: 210,
        categoria: "semimetal",
        configuracaoEletronica: "[Xe] 4f¹⁴ 5d¹⁰ 6s² 6p⁴",
        cor: 'Prata',
        radioativo: true,
        estadoNatural: "Sólido",
        densidade: 9.196,
        pontoDeFusao: 254,
        pontoDeEbulicao: 962,
        etalpiaDeFusao: 13, // kJ/mol
        etalpiaDeVaporizacao: 100, // kJ/mol
        calorEspecifico: null, // J/g·K
        abundanciaNaCrostaTerrestre: null,
        abundanciaNoUniverso: null,
        raioAtomico: 168,
        raioCovalente: 140,
        eletronegatividade: 2, // Escala de Pauling
        volumeAtomico: 22.23, // cm3/mol
        condutividadeTermica: 0.2, // W/cm·K
        aplicacoesComuns: ["Fonte de calor em dispositivos termoelétricos", "Pesquisas em física nuclear", "Como fonte de radiação alfa"],
        historia: `
        O Polónio foi descoberto por Marie e Pierre Curie, em 1898. Este foi o primeiro elemento a ser descoberto pelos Curie, enquanto investigavam a causa da radioatividade da pecheblenda. Os riscos do trabalho com elementos radioativos eram desconhecidos, quando os Curie fizeram as suas descobertas.`,
        endereçoImagemElemento: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Pierre_and_Marie_Curie.jpg/745px-Pierre_and_Marie_Curie.jpg?20140514080109',
        curiosidade: 'O Polónio obtém-se, irradiando Bismuto, com neutrões, ou protões, de alta energia.'
    },
    {
        nome: "Ástato",
        grupo: 17,
        periodo: 6,
        sigla: "At",
        decomposicao: {
            protons: 85,
            eletrons: 85,
            neutrons: 125
        },
        numeroAtomico: 85,
        massaAtomica: 210,
        categoria: "halogenios",
        configuracaoEletronica: "[Xe] 4f¹⁴ 5d¹⁰ 6s² 6p⁵",
        cor: 'Prata',
        radioativo: true,
        estadoNatural: "Sólido",
        densidade: 7,
        pontoDeFusao: 302,
        pontoDeEbulicao: 337,
        etalpiaDeFusao: 6, // kJ/mol
        etalpiaDeVaporizacao: 40, // kJ/mol
        calorEspecifico: null, // J/g·K
        abundanciaNaCrostaTerrestre: null,
        abundanciaNoUniverso: null,
        raioAtomico: null,
        raioCovalente: 150,
        eletronegatividade: 2.2, // Escala de Pauling
        volumeAtomico: 30, // cm3/mol
        condutividadeTermica: 0.017, // W/cm·K
        aplicacoesComuns: ["Pesquisas científicas", "Fonte de partículas alfa em experimentos nucleares", "Como traçador radioativo"],
        historia: `
        Em 1869, a existência do astato foi prevista pela primeira vez pelo químico russo Dmitri Mendeleev e chamou o elemento de eka-iodo. Em 1940, Dale R. Corson, Kenneth Ross MacKenzie e Emilio Segrè isolaram o elemento na Universidade da Califórnia, Berkeley. Em vez de procurar o elemento na natureza, os cientistas o criaram bombardeando o bismuto-209 com partículas alfa.`,
        endereçoImagemElemento: 'https://static.wixstatic.com/media/d0b07d_ae3f7c6d38214c35a7395c71df6a450c.jpg/v1/fill/w_420,h_315,al_c,lg_1,q_80,enc_auto/d0b07d_ae3f7c6d38214c35a7395c71df6a450c.jpg',
        curiosidade: 'o Ástato concentra-se sobretudo, na glândula Tiroide.'
    },
    {
        nome: "Radônio",
        grupo: 18,
        periodo: 6,
        sigla: "Rn",
        decomposicao: {
            protons: 86,
            eletrons: 86,
            neutrons: 136
        },
        numeroAtomico: 86,
        massaAtomica: 222,
        categoria: "gas-nobre",
        configuracaoEletronica: "[Xe] 4f¹⁴ 5d¹⁰ 6s² 6p⁶",
        cor: null,
        radioativo: true,
        estadoNatural: "Gasoso",
        densidade: 0.00973,
        pontoDeFusao: -71.15,
        pontoDeEbulicao: -61.85,
        etalpiaDeFusao: 3, // kJ/mol
        etalpiaDeVaporizacao: 17, // kJ/mol
        calorEspecifico: 0.094, // J/g·K
        abundanciaNaCrostaTerrestre: null,
        abundanciaNoUniverso: null,
        raioAtomico: 120,
        raioCovalente: 150,
        eletronegatividade: null, // Escala de Pauling
        volumeAtomico: 50.5, // cm3/mol
        condutividadeTermica: 0.0000364, // W/cm·K
        aplicacoesComuns: ["Usado em terapias contra o câncer", "Como traçador em estudos de vazamento de gás", "Em técnicas de radiografia industrial"],
        historia: `
        O Radônio foi descoberto por Friedrich Ernst Dorn, em 1900, em Halle, na Alemanha. Ele relatou algumas experiências em que observou que alguns compostos de rádio emanavam um gás radioativo. Em 1910, Sir William Ramsay e Robert Whytlaw-Gray isolaram o Rádon, determinaram a sua densidade e que era o gás mais pesado, então conhecido.`,
        endereçoImagemElemento: 'https://images-of-elements.com/s/radon.jpg',
        curiosidade: 'Ao condensar, o Rádon brilha, devido à intensa radiação produzida'
    },
    {
        nome: "Frâncio",
        grupo: 1,
        periodo: 7,
        sigla: "Fr",
        decomposicao: {
            protons: 87,
            eletrons: 87,
            neutrons: 136
        },
        numeroAtomico: 87,
        massaAtomica: 223,
        categoria: "metal-alcalino",
        configuracaoEletronica: "[Rn] 7s¹",
        cor: 'Prata',
        radioativo: true,
        estadoNatural: "Sólido",
        densidade: 1.87,
        pontoDeFusao: 23,
        pontoDeEbulicao: 677,
        etalpiaDeFusao: 2, // kJ/mol
        etalpiaDeVaporizacao: 65, // kJ/mol
        calorEspecifico: null, // J/g·K
        abundanciaNaCrostaTerrestre: null,
        abundanciaNoUniverso: null,
        raioAtomico: 260,
        raioCovalente: 348,
        eletronegatividade: 0.7, // Escala de Pauling
        volumeAtomico: 71.07, // cm3/mol
        condutividadeTermica: 0.15, // W/cm·K
        aplicacoesComuns: ["Não possui aplicações comerciais devido à sua raridade e radioatividade"],
        historia: `
        Francium foi descoberto em 1939 por Marguerite Perey do Instituto Curie em Paris, França. Foi descoberto quando ela pesquisava o decaimento radioativo do actínio-227. Marguerite Perey descobriu que o frâncio-223 é produzido naturalmente quando o actínio-227 emite uma partícula alfa.`,
        endereçoImagemElemento: 'https://images-of-elements.com/s/francium.jpg',
        curiosidade: 'O Frâncio foi último elemento a ser descoberto na natureza, sem recurso à síntese'
    },
    {
        nome: "Rádio",
        grupo: 2,
        periodo: 7,
        sigla: "Ra",
        decomposicao: {
            protons: 88,
            eletrons: 88,
            neutrons: 138
        },
        numeroAtomico: 88,
        massaAtomica: 226,
        categoria: "metal-alcalino-terroso",
        configuracaoEletronica: "[Rn] 7s²",
        cor: 'Prata',
        radioativo: true,
        estadoNatural: "Sólido",
        densidade: 5.5,
        pontoDeFusao: 700,
        pontoDeEbulicao: 1737,
        etalpiaDeFusao: 8, // kJ/mol
        etalpiaDeVaporizacao: 125, // kJ/mol
        calorEspecifico: null, // J/g·K
        abundanciaNaCrostaTerrestre: 0.0000000000099,
        abundanciaNoUniverso: null,
        raioAtomico: null,
        raioCovalente: 221,
        eletronegatividade: 0.9, // Escala de Pauling
        volumeAtomico: 45.20, // cm3/mol
        condutividadeTermica: 0.186, // W/cm·K
        aplicacoesComuns: ["Utilizado em radioterapia para tratamento de câncer", "Em dispositivos de detecção de radiação", "Produção de relógios e instrumentos de medição de precisão"],
        historia: `
        O Rádio foi descoberto por Marie Curie e Pierre Curie e 1898. Ambos extraíram um composto de rádio, duma amostra de uraninite. O rádio foi isolado no seu estado metálico por Marie Curie e André-Louis Debierne, em 1910, através da eletrólise do cloreto de rádio, empregando um cátodo de mercúrio e destilando numa atmosfera de gás hidrogénio.`,
        endereçoImagemElemento: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Pierre_and_Marie_Curie.jpg/745px-Pierre_and_Marie_Curie.jpg?20140514080109',
        curiosidade: 'O Rádio confere uma cor carmim às chamas'
    },
    {
        nome: "Actínio",
        grupo: null,
        periodo: 7,
        sigla: "Ac",
        decomposicao: {
            protons: 89,
            eletrons: 89,
            neutrons: 138
        },
        numeroAtomico: 89,
        massaAtomica: 227,
        categoria: "actinidios",
        configuracaoEletronica: "[Rn] 6d¹ 7s²",
        cor: 'Prata',
        radioativo: true,
        estadoNatural: "Sólido",
        densidade: 10.07,
        pontoDeFusao: 1050,
        pontoDeEbulicao: 3198,
        etalpiaDeFusao: 14, // kJ/mol
        etalpiaDeVaporizacao: 400, // kJ/mol
        calorEspecifico: 0.12, // J/g·K
        abundanciaNaCrostaTerrestre: null,
        abundanciaNoUniverso: null,
        raioAtomico: null,
        raioCovalente: 215,
        eletronegatividade: 1.1, // Escala de Pauling
        volumeAtomico: 22.54, // cm3/mol
        condutividadeTermica: 0.12, // W/cm·K
        aplicacoesComuns: ["Utilizado em terapia de radioterapia", "Em fontes de nêutrons para pesquisas nucleares", "Na produção de isótopos radioativos para pesquisa científica"],
        historia: `
        André-Louis Debierne, um químico francês, descobriu o Actínio, em 1899. Ele separou-o de resíduos de pecheblenda, deixados por Marie e Pierre Curie, após a extração de rádio. Friedrich Oskar Giesel descobriu, por seu lado, o Actínio em 1902, como uma substância similar ao Lantânio.`,
        endereçoImagemElemento: 'https://images-of-elements.com/s/actinium-225.jpg',
        curiosidade: 'O Actínio brilha no escuro, com uma luz azul pálida'
    },
    {
        nome: "Tório",
        grupo: null,
        periodo: 7,
        sigla: "Th",
        decomposicao: {
            protons: 90,
            eletrons: 90,
            neutrons: 142
        },
        numeroAtomico: 90,
        massaAtomica: 232.03806,
        categoria: "actinidios",
        configuracaoEletronica: "[Rn] 6d² 7s²",
        cor: 'Prata',
        radioativo: true,
        estadoNatural: "Sólido",
        densidade: 11.7,
        pontoDeFusao: 1842,
        pontoDeEbulicao: 4788,
        etalpiaDeFusao: 16, // kJ/mol
        etalpiaDeVaporizacao: 530, // kJ/mol
        calorEspecifico: 0.113, // J/g·K
        abundanciaNaCrostaTerrestre: 0.0006,
        abundanciaNoUniverso: 0.00000004,
        raioAtomico: 179,
        raioCovalente: 206,
        eletronegatividade: 1.3, // Escala de Pauling
        volumeAtomico: 19.9, // cm3/mol
        condutividadeTermica: 0.54, // W/cm·K
        aplicacoesComuns: ["Utilizado em reatores nucleares como combustível", "Na produção de lentes ópticas de alta qualidade", "Em ligas metálicas devido à sua resistência à corrosão"],
        historia: `
        O tório foi descoberto por Jöns Jacob Berzelius em 1828, em Estocolmo, Suécia. O tório foi observado pela primeira vez como radioativo em 1898, de forma independente, pela física polonesa-francesa Marie Curie e pelo químico alemão Gerhard Carl Schmidt. O processo da barra de cristal foi descoberto por Anton Eduard van Arkel e Jan Hendrik de Boer em 1925 para produzir tório metálico de alta pureza.`,
        endereçoImagemElemento: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Keplers_supernova.jpg/600px-Keplers_supernova.jpg?20200109204325',
        curiosidade: 'A investigação de combustíveis à base de Tório prossegue, em diversos países, incluindo os EUA e a Índia'
    },
    {
        nome: "Protactínio",
        grupo: null,
        periodo: 7,
        sigla: "Pa",
        decomposicao: {
            protons: 91,
            eletrons: 91,
            neutrons: 140
        },
        numeroAtomico: 91,
        massaAtomica: 231.03588,
        categoria: "actinidios",
        configuracaoEletronica: "[Rn] 5f² 6d¹ 7s²",
        cor: 'Prata',
        radioativo: true,
        estadoNatural: "Sólido",
        densidade: 15.37,
        pontoDeFusao: 1568,
        pontoDeEbulicao: 4027,
        etalpiaDeFusao: 15, // kJ/mol
        etalpiaDeVaporizacao: 470, // kJ/mol
        calorEspecifico: null, // J/g·K
        abundanciaNaCrostaTerrestre: 0.00000000000099,
        abundanciaNoUniverso: null,
        raioAtomico: 163,
        raioCovalente: 200,
        eletronegatividade: 1.5, // Escala de Pauling
        volumeAtomico: 15, // cm3/mol
        condutividadeTermica: 0.47, // W/cm·K
        aplicacoesComuns: ["Utilizado em reatores nucleares como combustível e em bombas de nêutrons", "Na datação de rochas e minerais por técnicas radiométricas", "Em pesquisa científica para produção de isótopos radioativos"],
        historia: `
        Em 1900, William Crookes isolou o protactínio como um material intensamente radioativo do urânio. O protactínio foi identificado pela primeira vez em 1913 por Kasimir Fajans e Oswald Helmuth Göhring na Alemanha. Um isótopo mais estável do protactínio foi descoberto em 1917 por Otto Hahn e Lise Meitner no Instituto Kaiser Wilhelm em Berlim.`,
        endereçoImagemElemento: 'https://images-of-elements.com/s/protactinium-231.jpg',
        curiosidade: 'O Protactínio é um dos elementos naturais mais raros e caros'
    },
    {
        nome: "Urânio",
        grupo: null,
        periodo: 7,
        sigla: "U",
        decomposicao: {
            protons: 92,
            eletrons: 92,
            neutrons: 146
        },
        numeroAtomico: 92,
        massaAtomica: 238.02891,
        categoria: "actinidios",
        configuracaoEletronica: "[Rn] 5f³ 6d¹ 7s²",
        cor: 'Prata',
        radioativo: true,
        estadoNatural: "Sólido",
        densidade: 18.85,
        pontoDeFusao: 1132.2,
        pontoDeEbulicao: 4131,
        etalpiaDeFusao: 14, // kJ/mol
        etalpiaDeVaporizacao: 420, // kJ/mol
        calorEspecifico: 0.116, // J/g·K
        abundanciaNaCrostaTerrestre: 0.00018,
        abundanciaNoUniverso: 0.00000002,
        raioAtomico: 156,
        raioCovalente: 196,
        eletronegatividade: 1.38, // Escala de Pauling
        volumeAtomico: 12.59, // cm3/mol
        condutividadeTermica: 0.276, // W/cm·K
        aplicacoesComuns: ["Utilizado em reatores nucleares para produção de energia elétrica", "Na fabricação de armas nucleares", "Em dispositivos de medição de idade como datação por urânio"],
        historia: `
        O Urânio foi descoberto em 1789 pelo químico alemão Martin Heinrich Klaproth. Em 1841, Eugène-Melchior Péligot isolou a primeira amostra de metal Urânio, aquecendo tetracloreto de urânio, com pote. Em 1896, Antoine Henri Becquerel descobriu uma radioatividade, com recurso ao Urânio.`,
        endereçoImagemElemento: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d8/HEUraniumC.jpg/750px-HEUraniumC.jpg?20070623161753',
        curiosidade: 'O Urânio-235 foi o primeiro isótopo que foi descoberto ser físsil'
    },
    {
        nome: "Neptúnio",
        grupo: null,
        periodo: 7,
        sigla: "Np",
        decomposicao: {
            protons: 93,
            eletrons: 93,
            neutrons: 144
        },
        numeroAtomico: 93,
        massaAtomica: 237,
        categoria: "actinidios",
        configuracaoEletronica: "[Rn] 5f⁴ 6d¹ 7s²",
        cor: 'Prata',
        radioativo: true,
        estadoNatural: "Sólido",
        densidade: 20.45,
        pontoDeFusao: 637,
        pontoDeEbulicao: 4000,
        etalpiaDeFusao: 10, // kJ/mol
        etalpiaDeVaporizacao: 335, // kJ/mol
        calorEspecifico: null, // J/g·K
        abundanciaNaCrostaTerrestre: null,
        abundanciaNoUniverso: null,
        raioAtomico: 155,
        raioCovalente: 190,
        eletronegatividade: 1.36, // Escala de Pauling
        volumeAtomico: 11.62, // cm3/mol
        condutividadeTermica: 0.063, // W/cm·K
        aplicacoesComuns: ["Utilizado em pesquisas nucleares e na produção de isótopos radioativos", "Em fontes de nêutrons para pesquisa científica", "Na fabricação de armas nucleares"],
        historia: `
        O Neptúnio foi o primeiro elemento transuraniano sintético, do grupo dos actinídeos, a ser descoberto. O Neptúnio foi produzido pela primeira vez, por Edwin McMillan e Philip H. Abelson, em 1940, no então, Laboratório de Radiação de Berkeley, da Universidade da Califórnia. A equipa produziu o isótopo Neptúnio 239Np, através do bombardeamento de urânio, com neutrões lentos.`,
        endereçoImagemElemento: 'https://upload.wikimedia.org/wikipedia/commons/e/e5/Neptunium2.jpg',
        curiosidade: 'Netúnio é obtido como subproduto de reatores nucleares'
    },
    {
        nome: "Plutônio",
        grupo: null,
        periodo: 7,
        sigla: "Pu",
        decomposicao: {
            protons: 94,
            eletrons: 94,
            neutrons: 150
        },
        numeroAtomico: 94,
        massaAtomica: 244,
        categoria: "actinidios",
        configuracaoEletronica: "[Rn] 5f⁶ 7s²",
        cor: 'Prata',
        radioativo: true,
        estadoNatural: "Sólido",
        densidade: 19.816,
        pontoDeFusao: 639.4,
        pontoDeEbulicao: 3228,
        etalpiaDeFusao: null, // kJ/mol
        etalpiaDeVaporizacao: 325, // kJ/mol
        calorEspecifico: null, // J/g·K
        abundanciaNaCrostaTerrestre: null,
        abundanciaNoUniverso: null,
        raioAtomico: 159,
        raioCovalente: 187,
        eletronegatividade: 1.28, // Escala de Pauling
        volumeAtomico: 12.32, // cm3/mol
        condutividadeTermica: 0.0674, // W/cm·K
        aplicacoesComuns: ["Utilizado em reatores nucleares para produção de energia", "Na fabricação de armas nucleares", "Em dispositivos de marcação e alimentação de fontes de energia"],
        historia: `
        O Plutónio foi produzido pela primeira vez em 1940, por Glenn T. Seaborg, Edwin M. McMillan, Joseph W. Kennedy e Arthur Wahl. O Pultónio-238 foi produzido, através do bombardeamento do deuterão de urânio-238 no ciclotrão de 152 cm, da Univerisdade da Califórnia, em Berkeley. A equipa de Berkley produziu neptúnio-238 que decaiu para Pultónio-238.`,
        endereçoImagemElemento: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0f/Plutonium_ring.jpg/631px-Plutonium_ring.jpg?20160214221938',
        curiosidade: 'A bomba atómica largada em Nagasaki, no Japão, em 1945, tinha um núcleo de plutónio'
    },
    {
        nome: "Amerício",
        grupo: null,
        periodo: 7,
        sigla: "Am",
        decomposicao: {
            protons: 95,
            eletrons: 95,
            neutrons: 148
        },
        numeroAtomico: 95,
        massaAtomica: 243,
        categoria: "actinidios",
        configuracaoEletronica: "[Rn] 5f⁷ 7s²",
        cor: 'Prata',
        radioativo: true,
        estadoNatural: "Sólido",
        densidade: 13.69,
        pontoDeFusao: 1176,
        pontoDeEbulicao: 2148.8,
        etalpiaDeFusao: null, // kJ/mol
        etalpiaDeVaporizacao: null, // kJ/mol
        calorEspecifico: null, // J/g·K
        abundanciaNaCrostaTerrestre: null,
        abundanciaNoUniverso: null,
        raioAtomico: 173,
        raioCovalente: 180,
        eletronegatividade: 1.3, // Escala de Pauling
        volumeAtomico: 17.78, // cm3/mol
        condutividadeTermica: 0.1   , // W/cm·K
        aplicacoesComuns: ["Utilizado em dispositivos de detecção de fumaça em detectores de incêndio", "Em fontes de nêutrons para pesquisa e em terapia de radioterapia", "Na fabricação de dispositivos médicos para tratamento de câncer"],
        historia: `
        O Amerício-241 foi identificado pela primeira vez, em 1944 por Glenn T. Seaborg, Ralph A. James, Leon O. Morgan e Albert Ghiorso no laboratório metalúrgico da Universidade de Chicago. Foi obtido, submetendo o Plutónio a radiação de Neutrões, durante o Projeto Manhattan! O Amerício foi isolado pela primeira vez, como composto puro por Burris Cunningham, em 1945, na Universidade de Chicago.`,
        endereçoImagemElemento: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ee/Americium_microscope.jpg/626px-Americium_microscope.jpg?20100828190212',
        curiosidade: 'O amerício frequentemente entra em aterros sanitários a partir de detectores de fumaça descartados.'
    },
    {
        nome: "Cúrio",
        grupo: null,
        periodo: 7,
        sigla: "Cm",
        decomposicao: {
            protons: 96,
            eletrons: 96,
            neutrons: 151
        },
        numeroAtomico: 96,
        massaAtomica: 247,
        categoria: "actinidios",
        configuracaoEletronica: "[Rn] 5f⁷ 6d¹ 7s²",
        cor: 'Prata',
        radioativo: true,
        estadoNatural: "Sólido",
        densidade: 13.51,
        pontoDeFusao: 1340,
        pontoDeEbulicao: 3110,
        etalpiaDeFusao: null, // kJ/mol
        etalpiaDeVaporizacao: null, // kJ/mol
        calorEspecifico: null, // J/g·K
        abundanciaNaCrostaTerrestre: null,
        abundanciaNoUniverso: null,
        raioAtomico: 174,
        raioCovalente: 169,
        eletronegatividade: 1.3, // Escala de Pauling
        volumeAtomico: 18.28, // cm3/mol
        condutividadeTermica: 0.1, // W/cm·K
        aplicacoesComuns: ["Utilizado em fontes de energia para dispositivos espaciais e pacemakers", "Em detectores de umidade e sensores de temperatura", "Na produção de isótopos radioativos para pesquisa científica"],
        historia: `
        O Cúrio foi descoberto por Glenn T. Seaborg, Ralph A. James and Albert Ghiorso, em 1944, na Universidade de Califórnia, em Berkeley. Foi produzido, através do bombardeamento de plutónio com partículas alfa, durante o Projeto Manhattan. O metal Cúrio apenas foi produzido em 1951, pela redução de fluoreto de Cúrio, com bário.`,
        endereçoImagemElemento: 'https://images-of-elements.com/s/curium-glow.jpg',
        curiosidade: 'O Cúrio deposita-se nos ossos, nos pulmões e no fígado, podendo provocar cancro.'
    },
    {
        nome: "Berquélio",
        grupo: null,
        periodo: 7,
        sigla: "Bk",
        decomposicao: {
            protons: 97,
            eletrons: 97,
            neutrons: 150
        },
        numeroAtomico: 97,
        massaAtomica: 247,
        categoria: "actinidios",
        configuracaoEletronica: "[Rn] 5f⁹ 7s²",
        cor: null,
        radioativo: true,
        estadoNatural: "Sólido",
        densidade: 14.78,
        pontoDeFusao: 986,
        pontoDeEbulicao: 2900,
        etalpiaDeFusao: null, // kJ/mol
        etalpiaDeVaporizacao: null, // kJ/mol
        calorEspecifico: null, // J/g·K
        abundanciaNaCrostaTerrestre: null,
        abundanciaNoUniverso: null,
        raioAtomico: 170,
        raioCovalente: null,
        eletronegatividade: 1.3, // Escala de Pauling
        volumeAtomico: 16.7, // cm3/mol
        condutividadeTermica: 0.1, // W/cm·K
        aplicacoesComuns: ["Utilizado em pesquisas nucleares e em experimentos científicos", "Na produção de isótopos radioativos para estudos biológicos e químicos", "Em sistemas de detecção de radiação"],
        historia: `
        O berquélio foi descoberto por Glenn T. Seaborg, Albert Ghiorso e Stanley G. Thompson em 1949 na Universidade da Califórnia, Berkeley. Foi produzido pelo bombardeio de amerício com partículas alfa. O berquélio foi isolado em maiores quantidades pela primeira vez por Burris Cunningham e Stanley Thompson em 1958.`,
        endereçoImagemElemento: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/Berkeley_60-inch_cyclotron.jpg/747px-Berkeley_60-inch_cyclotron.jpg?20091020182723   ',
        curiosidade: 'Foi produzido pouco mais de um grama de Berkélio, nos Estados Unidos, desde 1967.'
    },
    {
        nome: "Califórnio",
        grupo: null,
        periodo: 7,
        sigla: "Cf",
        decomposicao: {
            protons: 98,
            eletrons: 98,
            neutrons: 153
        },
        numeroAtomico: 98,
        massaAtomica: 251,
        categoria: "actinidios",
        configuracaoEletronica: "[Rn] 5f¹⁰ 7s²",
        cor: null,
        radioativo: true,
        estadoNatural: "Sólido",
        densidade: 15.1,
        pontoDeFusao: 900,
        pontoDeEbulicao: null,
        etalpiaDeFusao: null, // kJ/mol
        etalpiaDeVaporizacao: null, // kJ/mol
        calorEspecifico: null, // J/g·K
        abundanciaNaCrostaTerrestre: null,
        abundanciaNoUniverso: null,
        raioAtomico: null,
        raioCovalente: null,
        eletronegatividade: 1.3, // Escala de Pauling
        volumeAtomico: 18.4, // cm3/mol
        condutividadeTermica: 0.1, // W/cm·K
        aplicacoesComuns: ["Utilizado em pesquisas nucleares e experimentos científicos avançados", "Na produção de isótopos radioativos para estudos médicos e industriais", "Em sistemas de detecção de partículas nucleares"],
        historia: `
        O Californium foi descoberto por Stanley G. Thompson, Kenneth Street, Jr., Albert Ghiorso e Glenn T. Seaborg em 1950 na Universidade da Califórnia, Berkeley. Foi produzido pelo bombardeio de cúrio com partículas alfa. Californium foi isolado em macroquantidades pela primeira vez por Burris Cunningham e Stanley Thompson em 1958.`,
        endereçoImagemElemento: 'https://images-of-elements.com/s/californium-disc.jpg',
        curiosidade: 'O Califórnio é produzido em reatores nucleares e aceleradores de partículas'
    },
    {
        nome: "Einstênio",
        grupo: null,
        periodo: 7,
        sigla: "Es",
        decomposicao: {
            protons: 99,
            eletrons: 99,
            neutrons: 153
        },
        numeroAtomico: 99,
        massaAtomica: 252,
        categoria: "actinidios",
        configuracaoEletronica: "[Rn] 5f¹¹ 7s²",
        cor: null,
        radioativo: true,
        estadoNatural: "Sólido",
        densidade: 8.84,
        pontoDeFusao: 860,
        pontoDeEbulicao: null,
        etalpiaDeFusao: null, // kJ/mol
        etalpiaDeVaporizacao: null, // kJ/mol
        calorEspecifico: null, // J/g·K
        abundanciaNaCrostaTerrestre: null,
        abundanciaNoUniverso: null,
        raioAtomico: null,
        raioCovalente: null,
        eletronegatividade: 1.3, // Escala de Pauling
        volumeAtomico: 28.5, // cm3/mol
        condutividadeTermica: 0.1, // W/cm·K
        aplicacoesComuns: ["Utilizado em pesquisas nucleares e experimentos científicos avançados", "Na produção de isótopos radioativos para estudos médicos e industriais", "Em pesquisas sobre a estrutura do núcleo atômico"],
        historia: `
        O Einstênio foi descoberto como um componente dos destroços da primeira explosão da bomba de hidrogênio em 1952. Foi identificado por Albert Ghiorso e colegas de trabalho da Universidade da Califórnia, Berkeley, em colaboração com os Laboratórios Nacionais de Argonne e Los Alamos, nas consequências do teste nuclear Ivy Mike. O novo elemento foi produzido pela explosão nuclear em quantidades minúsculas pela adição de 15 nêutrons ao urânio-238.`,
        endereçoImagemElemento: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Ivy_Mike_-_mushroom_cloud.jpg/753px-Ivy_Mike_-_mushroom_cloud.jpg?20051202051541',
        curiosidade: 'O Einsténio é o primeiro metal bivalente, do grupo dos actinídeos.'
    },
    {
        nome: "Férmio",
        grupo: null,
        periodo: 7,
        sigla: "Fm",
        decomposicao: {
            protons: 100,
            eletrons: 100,
            neutrons: 157
        },
        numeroAtomico: 100,
        massaAtomica: 257,
        categoria: "actinidios",
        configuracaoEletronica: "[Rn] 5f¹² 7s²",
        cor: null,
        radioativo: true,
        estadoNatural: "Sólido",
        densidade: null,
        pontoDeFusao: 1527,
        pontoDeEbulicao: null,
        etalpiaDeFusao: null, // kJ/mol
        etalpiaDeVaporizacao: null, // kJ/mol
        calorEspecifico: null, // J/g·K
        abundanciaNaCrostaTerrestre: null,
        abundanciaNoUniverso: null,
        raioAtomico: null,
        raioCovalente: null,
        eletronegatividade: 1.3, // Escala de Pauling
        volumeAtomico: 29.1, // cm3/mol
        condutividadeTermica: 0.1, // W/cm·K
        aplicacoesComuns: ["Utilizado em pesquisas nucleares e experimentos científicos avançados", "Na produção de isótopos radioativos para estudos médicos e industriais", "Em estudos sobre a estrutura do núcleo atômico"],
        historia: `
        O férmio foi descoberto como um componente dos destroços da primeira explosão da bomba de hidrogênio em 1952. Foi identificado por Albert Ghiorso e colegas de trabalho da Universidade da Califórnia, Berkeley, em colaboração com os Laboratórios Nacionais de Argonne e Los Alamos, nas consequências do teste nuclear Ivy Mike. O novo elemento foi produzido pela fissão nuclear de 17 nêutrons com urânio-238.`,
        endereçoImagemElemento: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Ivy_Mike_-_mushroom_cloud.jpg/753px-Ivy_Mike_-_mushroom_cloud.jpg?20051202051541',
        curiosidade: 'São conhecidos dezasseis isótopos do Férmio'
    },
    {
        nome: "Mendelévio",
        grupo: null,
        periodo: 7,
        sigla: "Md",
        decomposicao: {
            protons: 101,
            eletrons: 101,
            neutrons: 157
        },
        numeroAtomico: 101,
        massaAtomica: 258,
        categoria: "actinidios",
        configuracaoEletronica: "[Rn] 5f¹³ 7s²",
        cor: null,
        radioativo: true,
        estadoNatural: "Sólido",
        densidade: null,
        pontoDeFusao: 826.85,
        pontoDeEbulicao: null,
        etalpiaDeFusao: null, // kJ/mol
        etalpiaDeVaporizacao: null, // kJ/mol
        calorEspecifico: null, // J/g·K
        abundanciaNaCrostaTerrestre: null,
        abundanciaNoUniverso: null,
        raioAtomico: null,
        raioCovalente: null,
        eletronegatividade: 1.3, // Escala de Pauling
        volumeAtomico: null, // cm3/mol
        condutividadeTermica: 0.1, // W/cm·K
        aplicacoesComuns: ["Utilizado em pesquisas nucleares e experimentos científicos avançados", "Na produção de isótopos radioativos para estudos médicos e industriais", "Em estudos sobre a estrutura do núcleo atômico"],
        historia: `
        O mendelévio foi descoberto por Albert Ghiorso, Glenn T. Seaborg, Gregory R. Choppin, Bernard G. Harvey e Stanley G. Thompson em 1955 na Universidade da Califórnia, Berkeley. Foi produzido pelo bombardeio de einstênio com hélio. O mendelévio foi identificado por análise química em um experimento de troca iônica.`,
        endereçoImagemElemento: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/DIMendeleevCab.jpg/427px-DIMendeleevCab.jpg?20190301024649',
        curiosidade: 'O Mendelévio foi o primeiro elemento a ser produzido átomo a átomo'
    },
    {
        nome: "Nobélio",
        grupo: null,
        periodo: 7,
        sigla: "No",
        decomposicao: {
            protons: 102,
            eletrons: 102,
            neutrons: 157
        },
        numeroAtomico: 102,
        massaAtomica: 259,
        categoria: "actinidios",
        configuracaoEletronica: "[Rn] 5f¹⁴ 7s²",
        cor: null,
        radioativo: true,
        estadoNatural: "Sólido",
        densidade: null,
        pontoDeFusao: 827,
        pontoDeEbulicao: null,
        etalpiaDeFusao: null, // kJ/mol
        etalpiaDeVaporizacao: null, // kJ/mol
        calorEspecifico: null, // J/g·K
        abundanciaNaCrostaTerrestre: null,
        abundanciaNoUniverso: null,
        raioAtomico: null,
        raioCovalente: null,
        eletronegatividade: 1.3, // Escala de Pauling
        volumeAtomico: null, // cm3/mol
        condutividadeTermica: 0.1, // W/cm·K
        aplicacoesComuns: ["Utilizado em pesquisas nucleares e experimentos científicos avançados", "Na produção de isótopos radioativos para estudos médicos e industriais", "Em estudos sobre a estrutura do núcleo atômico"],
        historia: `
        O Nobelium foi descoberto por Albert Ghiorso, Glenn T. Seaborg, John R. Walton e Torbjørn Sikkeland em 1958 na Universidade da Califórnia, Berkeley. Foi produzido pelo bombardeio de cúrio com átomos de carbono. Foi corretamente identificado em 1966 por cientistas do Laboratório Flerov de Reações Nucleares em Dubna, União Soviética.`,
        endereçoImagemElemento: 'https://images-of-elements.com/s/nobelium.jpg',
        curiosidade: 'O Nobélio é um ião bivalente, em solução aquosa'
    },
    {
        nome: "Laurêncio",
        grupo: null,
        periodo: 7,
        sigla: "Lr",
        decomposicao: {
            protons: 103,
            eletrons: 103,
            neutrons: 159
        },
        numeroAtomico: 103,
        massaAtomica: 262,
        categoria: "actinidios",
        configuracaoEletronica: "[Rn] 5f¹⁴ 7s² 7p¹",
        cor: null,
        radioativo: true,
        estadoNatural: "Sólido",
        densidade: null,
        pontoDeFusao: 1626.85,
        pontoDeEbulicao: null,
        etalpiaDeFusao: null, // kJ/mol
        etalpiaDeVaporizacao: null, // kJ/mol
        calorEspecifico: null, // J/g·K
        abundanciaNaCrostaTerrestre: null,
        abundanciaNoUniverso: null,
        raioAtomico: null,
        raioCovalente: null,
        eletronegatividade: 1.3, // Escala de Pauling
        volumeAtomico: null, // cm3/mol
        condutividadeTermica: 0.1, // W/cm·K
        aplicacoesComuns: ["Utilizado em pesquisas nucleares e experimentos científicos avançados", "Na produção de isótopos radioativos para estudos médicos e industriais", "Em estudos sobre a estrutura do núcleo atômico"],
        historia: `
        Laurêncio foi descoberto por Albert Ghiorso, Torbjørn Sikkeland, Almon Larsh e Robert M. Latimer em 1961 na Universidade da Califórnia, Berkeley. Foi produzido pelo bombardeio da Califórnia com átomos de boro. Laurêncio foi o último membro da série dos actinídeos a ser descoberto.`,
        endereçoImagemElemento: 'https://images-of-elements.com/s/lawrencium.jpg',
        curiosidade: 'O Laurêncio é um ião trivalente, em solução aquosa.'
    },
    {
        nome: "Rutherfórdio",
        grupo: 4,
        periodo: 7,
        sigla: "Rf",
        decomposicao: {
            protons: 104,
            eletrons: 104,
            neutrons: 157
        },
        numeroAtomico: 104,
        massaAtomica: 267,
        categoria: "metal-de-transicao",
        configuracaoEletronica: "[Rn] 5f¹⁴ 6d² 7s²",
        cor: null,
        radioativo: true,
        estadoNatural: "Sólido",
        densidade: 23,
        pontoDeFusao: 2100,
        pontoDeEbulicao: 5500,
        etalpiaDeFusao: null, // kJ/mol
        etalpiaDeVaporizacao: null, // kJ/mol
        calorEspecifico: null, // J/g·K
        abundanciaNaCrostaTerrestre: null,
        abundanciaNoUniverso: null,
        raioAtomico: null,
        raioCovalente: 157,
        eletronegatividade: null, // Escala de Pauling
        volumeAtomico: null, // cm3/mol
        condutividadeTermica: 0.23, // W/cm·K
        aplicacoesComuns: ["Utilizado em pesquisas nucleares e experimentos científicos avançados", "Em estudos sobre a estrutura do núcleo atômico"],
        historia: `
        O Rutherfórdio foi detectado pela primeira vez em 1964 no Instituto Conjunto de Pesquisa Nuclear em Dubna. O elemento foi sintetizado por Albert Ghiorso, Matti Nurmia, James Andrew Harris, Kari Eskola e Pirkko Eskola em 1968 na Universidade da Califórnia, Berkeley. Foi produzido pelo bombardeio da Califórnia com átomos de carbono.`,
        endereçoImagemElemento: 'https://live.staticflickr.com/7017/6414995177_1671c93fc9.jpg',
        curiosidade: 'O Rutherfórdio é o primeiro elemento transactinídeo.'
    },
    {
        nome: "Dúbnio",
        grupo: 5,
        periodo: 7,
        sigla: "Db",
        decomposicao: {
            protons: 105,
            eletrons: 105,
            neutrons: 157
        },
        numeroAtomico: 105,
        massaAtomica: 268,
        categoria: "metal-de-transicao",
        configuracaoEletronica: "[Rn] 5f¹⁴ 6d² 7s²",
        cor: null,
        radioativo: true,
        estadoNatural: "Sólido",
        densidade: 39,
        pontoDeFusao: null,
        pontoDeEbulicao: null,
        etalpiaDeFusao: null, // kJ/mol
        etalpiaDeVaporizacao: null, // kJ/mol
        calorEspecifico: null, // J/g·K
        abundanciaNaCrostaTerrestre: null,
        abundanciaNoUniverso: null,
        raioAtomico: null,
        raioCovalente: 149,
        eletronegatividade: null, // Escala de Pauling
        volumeAtomico: null, // cm3/mol
        condutividadeTermica: 0.58, // W/cm·K
        aplicacoesComuns: ["Utilizado em pesquisas nucleares e experimentos científicos avançados", "Em estudos sobre a estrutura do núcleo atômico"],
        historia: `
        O Dubnium foi descoberto pela primeira vez em 1968 no Instituto Conjunto de Pesquisa Nuclear em Dubna. Os pesquisadores bombardearam um alvo de amerício-243 com íons neon-22. No mesmo ano, uma equipe liderada por Albert Ghiorso trabalhando na Universidade da Califórnia, Berkeley sintetizou conclusivamente o elemento bombardeando um alvo californium-249 com íons nitrogênio-15.`,
        endereçoImagemElemento: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Dubna.house_of_scientiests.jpg/450px-Dubna.house_of_scientiests.jpg?20071227175325   ',
        curiosidade: 'A equipa de Berkeley propôs o nome Hâhnio, para o elemento.'
    },
    {
        nome: "Seabórgio",
        grupo: 6,
        periodo: 7,
        sigla: "Sg",
        decomposicao: {
            protons: 106,
            eletrons: 106,
            neutrons: 156
        },
        numeroAtomico: 106,
        massaAtomica: 269,
        categoria: "metal-de-transicao",
        configuracaoEletronica: "[Rn] 5f¹⁴ 6d² 7s²",
        cor: null,
        radioativo: true,
        estadoNatural: "Sólido",
        densidade: 35,
        pontoDeFusao: null,
        pontoDeEbulicao: null,
        etalpiaDeFusao: null, // kJ/mol
        etalpiaDeVaporizacao: null, // kJ/mol
        calorEspecifico: null, // J/g·K
        abundanciaNaCrostaTerrestre: null,
        abundanciaNoUniverso: null,
        raioAtomico: null,
        raioCovalente: 143,
        eletronegatividade: null, // Escala de Pauling
        volumeAtomico: null, // cm3/mol
        condutividadeTermica: null, // W/cm·K
        aplicacoesComuns: ["Utilizado em pesquisas nucleares e experimentos científicos avançados", "Em estudos sobre a estrutura do núcleo atômico"],
        historia: `
        Cientistas que trabalham no Instituto Conjunto de Pesquisa Nuclear em Dubna, na URSS, relataram a descoberta do elemento 106 em junho de 1974. A síntese também foi relatada em setembro de 1974 no Laboratório Lawrence Berkeley pelos trabalhadores dos Laboratórios Lawrence Berkeley e Livermore liderados por Albert Ghiorso e E. Kenneth Hulet. Foi produzido por colisões do califórnio-249 com átomos de oxigênio.`,
        endereçoImagemElemento: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/Glenn_Seaborg_-_1964.jpg/485px-Glenn_Seaborg_-_1964.jpg?20091019221842',
        curiosidade: 'Existem doze isótopos conhecidos de Seabórgio.'
    },
    {
        nome: "Bóhrio",
        grupo: 7,
        periodo: 7,
        sigla: "Bh",
        decomposicao: {
            protons: 107,
            eletrons: 107,
            neutrons: 157
        },
        numeroAtomico: 107,
        massaAtomica: 270,
        categoria: "metal-de-transicao",
        configuracaoEletronica: "[Rn] 5f¹⁴ 6d⁵ 7s²",
        cor: null,
        radioativo: true,
        estadoNatural: "Sólido",
        densidade: 37,
        pontoDeFusao: null,
        pontoDeEbulicao: null,
        etalpiaDeFusao: null, // kJ/mol
        etalpiaDeVaporizacao: null, // kJ/mol
        calorEspecifico: null, // J/g·K
        abundanciaNaCrostaTerrestre: null,
        abundanciaNoUniverso: null,
        raioAtomico: null,
        raioCovalente: 141,
        eletronegatividade: null, // Escala de Pauling
        volumeAtomico: null, // cm3/mol
        condutividadeTermica: null, // W/cm·K
        aplicacoesComuns: ["Utilizado em pesquisas nucleares e experimentos científicos avançados", "Em estudos sobre a estrutura do núcleo atômico"],
        historia: `
        O Bohrium foi sintetizado de forma convincente pela primeira vez em 1981 por uma equipe de pesquisa alemã liderada por Peter Armbruster e Gottfried Münzenberg no Instituto de Pesquisa de Íons Pesados (Gesellschaft für Schwerionenforschung) em Darmstadt. A equipe bombardeou um alvo de bismuto-209 com núcleos acelerados de cromo-54 para produzir 5 átomos do isótopo bohrium-262.`,
        endereçoImagemElemento: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRiRaqnLrv9Bxo4ysmYla7eh6qfDpE8gP7YZfk9heeevJ4lFyfq',
        curiosidade: 'O único exemplo confirmado de isomerismo no bohrium está no isótopo Bh262.'
    },
    {
        nome: "Hássio",
        grupo: 8,
        periodo: 7,
        sigla: "Hs",
        decomposicao: {
            protons: 108,
            eletrons: 108,
            neutrons: 161
        },
        numeroAtomico: 108,
        massaAtomica: 269,
        categoria: "metal-de-transicao",
        configuracaoEletronica: "[Rn] 5f¹⁴ 6d⁶ 7s²",
        cor: null,
        radioativo: true,
        estadoNatural: "Sólido",
        densidade: 41,
        pontoDeFusao: null,
        pontoDeEbulicao: null,
        etalpiaDeFusao: null, // kJ/mol
        etalpiaDeVaporizacao: null, // kJ/mol
        calorEspecifico: null, // J/g·K
        abundanciaNaCrostaTerrestre: null,
        abundanciaNoUniverso: null,
        raioAtomico: null,
        raioCovalente: 134,
        eletronegatividade: null, // Escala de Pauling
        volumeAtomico: null, // cm3/mol
        condutividadeTermica: null, // W/cm·K
        aplicacoesComuns: ["Utilizado em pesquisas nucleares e experimentos científicos avançados", "Em estudos sobre a estrutura do núcleo atômico"],
        historia: `
        O Hássio foi sintetizado pela primeira vez em 1984 por uma equipe de pesquisa alemã liderada por Peter Armbruster e Gottfried Münzenberg no Instituto de Pesquisa de Íons Pesados (Gesellschaft für Schwerionenforschung) em Darmstadt. A equipe bombardeou um alvo de chumbo-208 com núcleos acelerados de ferro-58 para produzir 3 átomos do isótopo hássio-265.`,
        endereçoImagemElemento: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5b/GSI-Darmstadt-S%C3%BCdbau.jpg/800px-GSI-Darmstadt-S%C3%BCdbau.jpg?20111125093846',
        curiosidade: 'Até à data, foram sintetizados mais de cem átomos de Hássio'
    },
    {
        nome: "Meitnério",
        grupo: 9,
        periodo: 7,
        sigla: "Mt",
        decomposicao: {
            protons: 109,
            eletrons: 109,
            neutrons: 159
        },
        numeroAtomico: 109,
        massaAtomica: 278,
        categoria: "metal-de-transicao",
        configuracaoEletronica: "[Rn] 5f¹⁴ 6d⁷ 7s²",
        cor: null,
        radioativo: true,
        estadoNatural: "Sólido",
        densidade: 35,
        pontoDeFusao: null,
        pontoDeEbulicao: null,
        etalpiaDeFusao: null, // kJ/mol
        etalpiaDeVaporizacao: null, // kJ/mol
        calorEspecifico: null, // J/g·K
        abundanciaNaCrostaTerrestre: null,
        abundanciaNoUniverso: null,
        raioAtomico: null,
        raioCovalente: 129,
        eletronegatividade: null, // Escala de Pauling
        volumeAtomico: null, // cm3/mol
        condutividadeTermica: null, // W/cm·K
        aplicacoesComuns: ["Utilizado em pesquisas nucleares e experimentos científicos avançados", "Em estudos sobre a estrutura do núcleo atômico"],
        historia: `
        O meitnério foi sintetizado pela primeira vez em 1982 por uma equipe de pesquisa alemã liderada por Peter Armbruster e Gottfried Münzenberg no Instituto de Pesquisa de Íons Pesados (Gesellschaft für Schwerionenforschung) em Darmstadt. A equipe bombardeou um alvo de bismuto-209 com núcleos acelerados de ferro-58 e detectou um único átomo do isótopo meitnério-266.`,
        endereçoImagemElemento: 'https://tabelaperiodicaifspcatanduva.files.wordpress.com/2018/04/meitnc3a9rio-2.jpg?w=344&h=342',
        curiosidade: 'Meitnério possui 7 isótopos cujas meias-vidas são conhecidas'
    },
    {
        nome: "Darmstácio",
        grupo: 10,
        periodo: 7,
        sigla: "Mt",
        decomposicao: {
            protons: 110,
            eletrons: 110,
            neutrons: 171
        },
        numeroAtomico: 110,
        massaAtomica: 281,
        categoria: "metal-de-transicao",
        configuracaoEletronica: "[Rn] 5f¹⁴ 6d⁸ 7s²",
        cor: null,
        radioativo: true,
        estadoNatural: null,
        densidade: null,
        pontoDeFusao: null,
        pontoDeEbulicao: null,
        etalpiaDeFusao: null, // kJ/mol
        etalpiaDeVaporizacao: null, // kJ/mol
        calorEspecifico: null, // J/g·K
        abundanciaNaCrostaTerrestre: null,
        abundanciaNoUniverso: null,
        raioAtomico: null,
        raioCovalente: 128,
        eletronegatividade: null, // Escala de Pauling
        volumeAtomico: null, // cm3/mol
        condutividadeTermica: null, // W/cm·K
        aplicacoesComuns: ["Utilizado em pesquisas nucleares e experimentos científicos avançados", "Em estudos sobre a estrutura do núcleo atômico"],
        historia: `
        O Darmstácio foi criado pela primeira vez em 1994, no Instituto de Pesquisa de Íons Pesados (Gesellschaft für Schwerionenforschung) em Darmstadt, Alemanha, por Peter Armbruster e Gottfried Münzenberg, sob a direção de Sigurd Hofmann. A equipe bombardeou um alvo de chumbo-208 com núcleos acelerados de níquel-62 e detectou um único átomo do isótopo darmstadtium-269.`,
        endereçoImagemElemento: 'https://tabelaperiodicaifspcatanduva.files.wordpress.com/2018/04/meitnc3a9rio-2.jpg?w=344&h=342',
        curiosidade: 'Não existem isótopos naturais, nem estáveis, de Darmstádio'
    },
    {
        nome: "Roentgênio",
        grupo: 11,
        periodo: 7,
        sigla: "Rg",
        decomposicao: {
            protons: 111,
            eletrons: 111,
            neutrons: 170
        },
        numeroAtomico: 111,
        massaAtomica: 281,
        categoria: "metal-de-transicao",
        configuracaoEletronica: "[Rn] 5f¹⁴ 6d⁹ 7s²",
        cor: null,
        radioativo: true,
        estadoNatural: "Sólido",
        densidade: null,
        pontoDeFusao: null,
        pontoDeEbulicao: null,
        etalpiaDeFusao: null, // kJ/mol
        etalpiaDeVaporizacao: null, // kJ/mol
        calorEspecifico: null, // J/g·K
        abundanciaNaCrostaTerrestre: null,
        abundanciaNoUniverso: null,
        raioAtomico: null,
        raioCovalente: 121,
        eletronegatividade: null, // Escala de Pauling
        volumeAtomico: null, // cm3/mol
        condutividadeTermica: null, // W/cm·K
        aplicacoesComuns: ["Não aplicável (ainda não foi isolado na natureza)"],
        historia: `
        O Roentgênio foi sintetizado pela primeira vez por uma equipe internacional liderada por Sigurd Hofmann no Instituto de Pesquisa de Íons Pesados (Gesellschaft für Schwerionenforschung) em Darmstadt, Alemanha, em 1994. A equipe bombardeou um alvo de bismuto-209 com núcleos acelerados de níquel-64 e detectou um único átomo do isótopo roentgênio-272.`,
        endereçoImagemElemento: 'https://clubedaquimica.com/wp-content/uploads/2021/09/roentgenio.jpg',
        curiosidade: 'Não existem isótopos naturais, nem estáveis, de Roentgénio.'
    },
    {
        nome: "Copernício",
        grupo: 12,
        periodo: 7,
        sigla: "Cn",
        decomposicao: {
            protons: 112,
            eletrons: 112,
            neutrons: 173
        },
        numeroAtomico: 112,
        massaAtomica: 285,
        categoria: "metal-de-transicao",
        configuracaoEletronica: "[Rn] 5f¹⁴ 6d¹⁰ 7s²",
        cor: null,
        radioativo: true,
        estadoNatural: "Líquido",
        densidade: null,
        pontoDeFusao: null,
        pontoDeEbulicao: null,
        etalpiaDeFusao: null, // kJ/mol
        etalpiaDeVaporizacao: null, // kJ/mol
        calorEspecifico: null, // J/g·K
        abundanciaNaCrostaTerrestre: null,
        abundanciaNoUniverso: null,
        raioAtomico: null,
        raioCovalente: 122,
        eletronegatividade: null, // Escala de Pauling
        volumeAtomico: null, // cm3/mol
        condutividadeTermica: null, // W/cm·K
        aplicacoesComuns: ["Utilizado em pesquisas nucleares e experimentos científicos avançados", "Em estudos sobre a estrutura do núcleo atômico"],
        historia: `
        O Copernício foi criado pela primeira vez em 9 de fevereiro de 1996, no Instituto de Pesquisa de Íons Pesados (Gesellschaft für Schwerionenforschung) em Darmstadt, Alemanha, por Sigurd Hofmann, Victor Ninov et al. Este elemento foi criado disparando núcleos acelerados de zinco-70 contra um alvo feito de núcleos de chumbo-208 em um acelerador de íons pesados. Um único átomo de copernicium foi produzido com um número de massa de 277.`,
        endereçoImagemElemento: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR42hD8GpEfnpEQt3O0-ANAGf85d2xWXEm95NgBkQ7AVQ&s',
        curiosidade: 'Não existem isótopos naturais, nem estáveis, de Copernício.'
    },
    {
        nome: "Nihônio",
        grupo: 13,
        periodo: 7,
        sigla: "Nh",
        decomposicao: {
            protons: 113,
            eletrons: 113,
            neutrons: 173
        },
        numeroAtomico: 113,
        massaAtomica: 286,
        categoria: "outros-metais",
        configuracaoEletronica: "[Rn] 5f¹⁴ 6d¹⁰ 7s² 7p¹",
        cor: null,
        radioativo: true,
        estadoNatural: "Sólido",
        densidade: 16,
        pontoDeFusao: 430,
        pontoDeEbulicao: 1100,
        etalpiaDeFusao: null, // kJ/mol
        etalpiaDeVaporizacao: null, // kJ/mol
        calorEspecifico: null, // J/g·K
        abundanciaNaCrostaTerrestre: null,
        abundanciaNoUniverso: null,
        raioAtomico: null,
        raioCovalente: 136,
        eletronegatividade: null, // Escala de Pauling
        volumeAtomico: null, // cm3/mol
        condutividadeTermica: null, // W/cm·K
        aplicacoesComuns: ["Utilizado em pesquisas nucleares e experimentos científicos avançados", "Em estudos sobre a estrutura do núcleo atômico"],
        historia: `
        O nicônio foi identificado em 2003 como um produto do decaimento alfa do elemento 115, moscovium, por uma equipe composta por cientistas russos do Instituto Conjunto de Pesquisa Nuclear, Dubna e cientistas americanos do Laboratório Nacional Lawrence Livermore. A colaboração Dubna-Livermore reforçou a sua reivindicação pela descoberta do niónio através da realização de experiências químicas no produto final de decaimento Db268.`,
        endereçoImagemElemento: 'https://images.uncyc.org/pt/thumb/3/32/Nihonium.jpg/1200px-Nihonium.jpg',
        curiosidade: 'O Nihônio é historicamente conhecido como Ela-Thallium.'
    },
    {
        nome: "Fleróvio",
        grupo: 14,
        periodo: 7,
        sigla: "Fl",
        decomposicao: {
            protons: 114,
            eletrons: 114,
            neutrons: 173
        },
        numeroAtomico: 114,
        massaAtomica: 289,
        categoria: "outros-metais",
        configuracaoEletronica: "[Rn] 5f¹⁴ 6d¹⁰ 7s² 7p²",
        cor: null,
        radioativo: true,
        estadoNatural: "Sólido",
        densidade: 14,
        pontoDeFusao: 70,
        pontoDeEbulicao: 150,
        etalpiaDeFusao: null, // kJ/mol
        etalpiaDeVaporizacao: null, // kJ/mol
        calorEspecifico: null, // J/g·K
        abundanciaNaCrostaTerrestre: null,
        abundanciaNoUniverso: null,
        raioAtomico: null,
        raioCovalente: 143,
        eletronegatividade: null, // Escala de Pauling
        volumeAtomico: null, // cm3/mol
        condutividadeTermica: null, // W/cm·K
        aplicacoesComuns: ["Utilizado em pesquisas nucleares e experimentos científicos avançados", "Em estudos sobre a estrutura do núcleo atômico"],
        historia: `
        Ununquadium (Uuq) era o nome temporário do elemento sistemático da IUPAC. Em 1998, uma equipe liderada por Yuri Oganessian e Vladimir Utyonkov do Instituto Conjunto de Pesquisa Nuclear de Dubna produziu fleróvio bombardeando plutônio com cálcio. Em um experimento que durou 40 dias, 5 x 1018 átomos de cálcio foram disparados contra o plutônio para produzir um único átomo de fleróvio.`,
        endereçoImagemElemento: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwGPp4lIIiz9_TTk7OfhMXky55rPNetG3UL4v1MwpIQw&s',
        curiosidade: 'O isótopo de vida mais longa conhecido atualmente é Fl289'
    },
    {
        nome: "Moscóvio",
        grupo: 15,
        periodo: 7,
        sigla: "Mc",
        decomposicao: {
            protons: 115,
            eletrons: 115,
            neutrons: 173
        },
        numeroAtomico: 115,
        massaAtomica: 288,
        categoria: "outros-metais",
        configuracaoEletronica: "[Rn] 5f¹⁴ 6d¹⁰ 7s² 7p³",
        cor: null,
        radioativo: true,
        estadoNatural: "Sólido",
        densidade: null,
        pontoDeFusao: null,
        pontoDeEbulicao: null,
        etalpiaDeFusao: null, // kJ/mol
        etalpiaDeVaporizacao: null, // kJ/mol
        calorEspecifico: null, // J/g·K
        abundanciaNaCrostaTerrestre: null,
        abundanciaNoUniverso: null,
        raioAtomico: null,
        raioCovalente: 162,
        eletronegatividade: null, // Escala de Pauling
        volumeAtomico: null, // cm3/mol
        condutividadeTermica: null, // W/cm·K
        aplicacoesComuns: ["Utilizado em pesquisas nucleares e experimentos científicos avançados", "Em estudos sobre a estrutura do núcleo atômico"],
        historia: `
        O Moscovium foi identificado em 2004 por uma equipe composta por cientistas russos do Instituto Conjunto de Pesquisa Nuclear em Dubna e cientistas americanos do Laboratório Nacional Lawrence Livermore. A equipe relatou que bombardearam o amerício-243 com íons cálcio-48 para produzir quatro átomos de moscóvio Esses átomos decaíram pela emissão de partículas alfa em niônio em aproximadamente 100 milissegundos.`,
        endereçoImagemElemento: 'https://escolaeducacao.com.br/wp-content/uploads/2019/08/Mosc%C3%B3vio-Elemento-Qu%C3%ADmico-Mc.jpg',
        curiosidade: 'O Moscóvio é historicamente conhecido como Eka-Bismuto.'
    },
    {
        nome: "Livermório",
        grupo: 16,
        periodo: 7,
        sigla: "Lv",
        decomposicao: {
            protons: 116,
            eletrons: 116,
            neutrons: 175
        },
        numeroAtomico: 116,
        massaAtomica: 293,
        categoria: "outros-metais",
        configuracaoEletronica: "[Rn] 5f¹⁴ 6d¹⁰ 7s² 7p⁴",
        cor: null,
        radioativo: true,
        estadoNatural: "Sólido",
        densidade: null,
        pontoDeFusao: null,
        pontoDeEbulicao: null,
        etalpiaDeFusao: null, // kJ/mol
        etalpiaDeVaporizacao: null, // kJ/mol
        calorEspecifico: null, // J/g·K
        abundanciaNaCrostaTerrestre: null,
        abundanciaNoUniverso: null,
        raioAtomico: null,
        raioCovalente: 175,
        eletronegatividade: null, // Escala de Pauling
        volumeAtomico: null, // cm3/mol
        condutividadeTermica: null, // W/cm·K
        aplicacoesComuns: ["Utilizado em pesquisas nucleares e experimentos científicos avançados", "Em estudos sobre a estrutura do núcleo atômico"],
        historia: `
        Ununhexium (Uuh) era o nome temporário do elemento sistemático da IUPAC. Livermório foi identificado em 2000 por uma equipe composta por cientistas russos do Instituto Conjunto de Pesquisa Nuclear, Dubna e cientistas americanos do Laboratório Nacional Lawrence Livermore liderados por Yuri Oganessian e Ken Moody.`,
        endereçoImagemElemento: 'https://escolhttps://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQc305HJrIidVHUdLulIeIrYqIs5cH2DXuHSpbP3GbqdA&saeducacao.com.br/wp-content/uploads/2019/08/Mosc%C3%B3vio-Elemento-Qu%C3%ADmico-Mc.jpg',
        curiosidade: 'O Livermório é historicamente conhecido como Eka-Polónio'
    },
    {
        nome: "Tenessínio",
        grupo: 17,
        periodo: 7,
        sigla: "Ts",
        decomposicao: {
            protons: 117,
            eletrons: 117,
            neutrons: 177
        },
        numeroAtomico: 117,
        massaAtomica: 294,
        categoria: "halogenios",
        configuracaoEletronica: "[Rn] 5f¹⁴ 6d¹⁰ 7s² 7p⁵",
        cor: null,
        radioativo: true,
        estadoNatural: "Sólido",
        densidade: null,
        pontoDeFusao: null,
        pontoDeEbulicao: null,
        etalpiaDeFusao: null, // kJ/mol
        etalpiaDeVaporizacao: null, // kJ/mol
        calorEspecifico: null, // J/g·K
        abundanciaNaCrostaTerrestre: null,
        abundanciaNoUniverso: null,
        raioAtomico: null,
        raioCovalente: 165,
        eletronegatividade: null, // Escala de Pauling
        volumeAtomico: null, // cm3/mol
        condutividadeTermica: null, // W/cm·K
        aplicacoesComuns: ["Utilizado em pesquisas nucleares e experimentos científicos avançados", "Em estudos sobre a estrutura do núcleo atômico"],
        historia: `
        Tennessine foi identificado em 2010 por uma equipe composta por cientistas russos do Instituto Conjunto de Pesquisa Nuclear, Dubna e cientistas americanos do Laboratório Nacional Lawrence Livermore. Foi produzido pelo bombardeio de berquélio com cálcio. Ununseptium era o nome temporário do elemento sistemático da IUPAC.`,
        endereçoImagemElemento: 'https://s1.static.brasilescola.uol.com.br/be/2022/04/tenesso.jpg',
        curiosidade: 'O Tenesso é historicamente conhecido como Eka-Ástato'
    },
    {
        nome: "Organessônio",
        grupo: 18,
        periodo: 7,
        sigla: "Og",
        decomposicao: {
            protons: 118,
            eletrons: 118,
            neutrons: 176
        },
        numeroAtomico: 118  ,
        massaAtomica: 294,
        categoria: "gas-nobre",
        configuracaoEletronica: "[Rn] 5f¹⁴ 6d¹⁰ 7s² 7p⁶",
        cor: null,
        radioativo: true,
        estadoNatural: "Sólido",
        densidade: 13.65,
        pontoDeFusao: null,
        pontoDeEbulicao: null,
        etalpiaDeFusao: null, // kJ/mol
        etalpiaDeVaporizacao: null, // kJ/mol
        calorEspecifico: null, // J/g·K
        abundanciaNaCrostaTerrestre: null,
        abundanciaNoUniverso: null,
        raioAtomico: 152,
        raioCovalente: 157,
        eletronegatividade: null, // Escala de Pauling
        volumeAtomico: null, // cm3/mol
        condutividadeTermica: null, // W/cm·K
        aplicacoesComuns: ["Utilizado em pesquisas nucleares e experimentos científicos avançados", "Em estudos sobre a estrutura do núcleo atômico"],
        historia: `
        Organessônio foi identificado em 2002 por uma equipe composta por cientistas russos do Instituto Conjunto de Pesquisa Nuclear, Dubna e cientistas americanos do Laboratório Nacional Lawrence Livermore. Foi produzido pelo bombardeio do califórnio com cálcio. Ununoctium era o nome temporário do elemento sistemático da IUPAC.`,
        endereçoImagemElemento: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRP_WX4X5TdofQ2seAQ6zr1UcOYC3NRTOdmFh1VPav0_g&s',
        curiosidade: 'O Organossônio é historicamente conhecido como Eka-Rádon.'
    }
];