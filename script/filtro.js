const listaCheckboxFiltro = document.querySelectorAll('.filtro input')

function validacaoFiltroCategoria() {
    verificarCheckboxChecado()
    listaCheckboxFiltro.forEach(elementoCheckbox => {
        elementoCheckbox.addEventListener('click', () => {
            const arrayCategorias = []

            const listaDeElementos = document.querySelectorAll('.conteudo-tabela-elemento button')

            listaDeElementos.forEach(elemento => {
                elemento.style.opacity = '.4'
                elemento.classList.remove('elemento-checado')
            })

            const listaElementosChecados = document.querySelectorAll('.checado')
            listaElementosChecados.forEach(elementoCheckboxChecado => {
                const categoria = elementoCheckboxChecado.dataset.categoria
                arrayCategorias.push(categoria)
            })

            arrayCategorias.forEach(categoria => {
                const btnsCategoria = document.querySelectorAll(`.conteudo-tabela-elemento [data-categoria="${categoria}"]`)
                btnsCategoria.forEach(btn => {
                    btn.classList.add('elemento-checado')
                })
            })

            if (arrayCategorias.length < 1) {
                listaDeElementos.forEach(elemento => {
                    elemento.style.opacity = '1'
                })
            }
        })
    })
}

function verificarCheckboxChecado() {
    listaCheckboxFiltro.forEach(elementoCheckbox => {
        elementoCheckbox.addEventListener('click', () => {
            if (elementoCheckbox.parentElement.classList.contains('checado')) {
                elementoCheckbox.parentElement.classList.remove('checado')
            } else {
                elementoCheckbox.parentElement.classList.add('checado')
            }
        })
    })
}

validacaoFiltroCategoria()