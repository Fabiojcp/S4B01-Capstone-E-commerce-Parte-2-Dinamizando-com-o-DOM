function criarProdutos (arrayProdutos) {
const vitrine = document.getElementById('vitrine')
vitrine.innerHTML = ""

    for(let i = 0; i < arrayProdutos.length; i++) {
        const div = document.createElement('div')
        div.classList = 'show'

        const img = document.createElement('div')
        img.classList = 'item_imagem'
        const imgCreat = "url(" + arrayProdutos[i].img + ')'
        img.style.backgroundImage = ''+ imgCreat

        const descricao = document.createElement('div')
        descricao.classList = 'item_descrição'

        const tag = document.createElement('p')
        tag.classList = 'item_tags'
        tag.innerText = arrayProdutos[i].tag
        tag.dataset.tag = arrayProdutos[i].tag

        const titulo = document.createElement('p')
        titulo.classList = 'item_descrição_titulo'
        titulo.innerText = arrayProdutos[i].titulo

        const sobre = document.createElement('p')
        sobre.classList = 'item_descrição_descricao'
        sobre.innerText = arrayProdutos[i].sobre

        const custo = document.createElement('p')
        custo.classList = 'item_descrição_valor'
        custo.innerText = 'R$ ' + arrayProdutos[i].custo + ',00'

        const btnAddCar = document.createElement('button')
        btnAddCar.classList = 'item_descrição_botao_adicionar_carrinho'
        btnAddCar.id = 'adicionar-' + arrayProdutos[i].id
        btnAddCar.innerText = 'Adicionar ao carrinho'

        vitrine.appendChild(div)
        div.appendChild(img)
        div.appendChild(descricao)
        descricao.appendChild(tag)
        descricao.appendChild(titulo)
        descricao.appendChild(sobre)
        descricao.appendChild(custo)
        descricao.appendChild(btnAddCar)

    }
}

criarProdutos (dataProdutos)

function criarSemProdutos (arrayProdutos) {
    const vitrine = document.getElementById('vitrine')
    vitrine.innerHTML = ""
    
        for(let i = 0; i < arrayProdutos.length; i++) {
            const div = document.createElement('div')
            div.classList = 'show'
    
            const img = document.createElement('div')
            img.classList = 'item_imagem'
            const imgCreat = "url(" + arrayProdutos[i].img + ')'
            img.style.backgroundImage = ''+ imgCreat
    
            const descricao = document.createElement('div')
            descricao.classList = 'item_descrição'
    
            const tag = document.createElement('p')
            tag.classList = 'item_tags'
            tag.innerText = arrayProdutos[i].tag
    
            const titulo = document.createElement('p')
            titulo.classList = 'item_descrição_titulo'
            titulo.innerText = arrayProdutos[i].titulo
    
            const sobre = document.createElement('p')
            sobre.classList = 'item_descrição_descricao'
            sobre.innerText = arrayProdutos[i].sobre
    
            const custo = document.createElement('p')
            custo.classList = 'item_descrição_valor'
            custo.innerText = arrayProdutos[i].custo
    
   
            vitrine.appendChild(div)
            div.appendChild(img)
            div.appendChild(descricao)
            descricao.appendChild(tag)
            descricao.appendChild(titulo)
            descricao.appendChild(sobre)
            descricao.appendChild(custo)
    
        }
    }
    