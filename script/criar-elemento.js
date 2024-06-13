export function criarElemento(tag, classe, texto = ''){
    const elemento = document.createElement(tag)
    if(classe != ''){
        elemento.classList.add(classe)
    }
    elemento.innerHTML = texto
    return elemento
}