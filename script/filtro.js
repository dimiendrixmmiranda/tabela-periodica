const listaCheckboxFiltro = document.querySelectorAll('.filtro input')

export function validacaoFiltroCategoria() {
    verificarCheckboxChecado()

    listaCheckboxFiltro.forEach(elementoCheckbox => {
        elementoCheckbox.addEventListener('click', () => {
            const arrayCategorias = []

            const listaDeElementos = document.querySelectorAll('.elementos button')
            listaDeElementos.forEach(elemento => {
                elemento.style.opacity = '.6'
                elemento.classList.remove('elemento-checado')
            })

            const listaElementosChecados = document.querySelectorAll('.checado')
            listaElementosChecados.forEach(elementoCheckboxChecado => {
                const categoria = elementoCheckboxChecado.dataset.categoria
                arrayCategorias.push(categoria)
            })

            arrayCategorias.forEach(categoria => {
                const btnsCategoria = document.querySelectorAll(`.elementos [data-categoria="${categoria}"]`)
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

    // listaCheckboxFiltro.forEach(elemento => {
    //     elemento.addEventListener('click', () => {
    //         const categoria = elemento.parentElement.dataset.categoria
    //         const listaDeElementos = document.querySelectorAll('.elementos button')
    //         const listaElementosDaCategoria = document.querySelectorAll(`.elementos [data-categoria="${categoria}"]`)

    //         if (elemento.checked) {
    //             listaDeElementos.forEach(elemento => elemento.style.opacity = '.6')
    //             listaElementosDaCategoria.forEach(elemento => elemento.style.opacity = '1')
    //         } else {
    //             listaDeElementos.forEach(elemento => elemento.style.opacity = '1')
    //         }
    //     })
    // })
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