export function determinarCoresDosElementos(){
    const listaDeBtns = document.querySelectorAll('.elementos button')
    listaDeBtns.forEach(btn => {
        if(btn.dataset.categoria == 'nao-metal'){
            btn.style.backgroundColor = '#90D26D'
        }
        if(btn.dataset.categoria == 'semimetal'){
            btn.style.backgroundColor = '#2C7865'
        }
        if(btn.dataset.categoria == 'metal-alcalino'){
            btn.style.backgroundColor = '#E8751A'
        }
        if(btn.dataset.categoria == 'outros-metais'){
            btn.style.backgroundColor = '#496989'
        }
        if(btn.dataset.categoria == 'lantanideos'){
            btn.style.backgroundColor = '#97E7E1'
        }
        if(btn.dataset.categoria == 'gas-nobre'){
            btn.style.backgroundColor = '#008DDA'
        }
        if(btn.dataset.categoria == 'metal-alcalino-terroso'){
            btn.style.backgroundColor = '#FCDC2A'
        }
        if(btn.dataset.categoria == 'halogenios'){
            btn.style.backgroundColor = '#59D5E0'
        }
        if(btn.dataset.categoria == 'metal-de-transicao'){
            btn.style.backgroundColor = '#FF8E8F'
        }
        if(btn.dataset.categoria == 'actinidios'){
            btn.style.backgroundColor = '#D875C7'
        }
    })
}