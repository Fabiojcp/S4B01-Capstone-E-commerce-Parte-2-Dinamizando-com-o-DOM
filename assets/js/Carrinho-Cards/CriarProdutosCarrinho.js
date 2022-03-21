function criarCarrinho (arrayProdutos) {
    const aside = document.getElementById('carrinho_items')

    for (let i = 0; i < arrayProdutos.length; i++) {
        const div = document.createElement('div')
        div.classList = 'carrinho_items_show'
        div.id = 'div-' + arrayProdutos[i].id

        const img = document.createElement('div')
        img.classList = 'carrinho_items_imagem'
        const imgCreat = "url(" + arrayProdutos[i].img + ')'
        img.style.backgroundImage = ''+ imgCreat

        const propriedades = document.createElement('div')
        propriedades.classList = 'carrinho_items_descricao'

        const titulo = document.createElement('p')
        titulo.classList = 'carrinho_items_descricao_titulo'
        titulo.innerText = arrayProdutos[i].titulo

        const descricao = document.createElement('div')
        descricao.classList = 'carrinho_items_descricao_descricao'

        const textos = document.createElement('div')
        textos.classList = 'carrinho_items_descricao_descricao_textos'

        const custo = document.createElement('p')
        custo.classList = 'carrinho_items_descricao_descricao_textos_valor'
        custo.innerText = 'R$ ' + arrayProdutos[i].custo + ',00'
        custo.id = 'custo-' + arrayProdutos[i].id

        const btnRemover = document.createElement('button')
        btnRemover.classList = 'carrinho_items_descricao_descricao_textos_botao'
        btnRemover.innerText = 'Remover produto'
        btnRemover.id = 'remover-' + arrayProdutos[i].id

        const acoes = document.createElement('div')
        acoes.classList = 'carrinho_items_descricao_descricao_botao_quantidade'

        const btnMais = document.createElement('button')
        btnMais.classList = 'carrinho_items_descricao_descricao_botao_quantidade_menos'
        btnMais.innerText = '-'
        btnMais.id = 'menos-' + arrayProdutos[i].id

        const quantidade = document.createElement('p')
        quantidade.classList = 'carrinho_items_descricao_descricao_botao_quantidade_texto'
        quantidade.innerText = 1
        quantidade.id = 'quantidade-' + arrayProdutos[i].id

        const btnMenos = document.createElement('button')
        btnMenos.classList = 'carrinho_items_descricao_descricao_botao_quantidade_menos'
        btnMenos.innerText = '+'
        btnMenos.id = 'mais-' + arrayProdutos[i].id

        aside.appendChild(div)
        div.appendChild(img)
        div.appendChild(propriedades)
        propriedades.appendChild(titulo)
        propriedades.appendChild(descricao)
        descricao.appendChild(textos)
        textos.appendChild(custo)
        textos.appendChild(btnRemover)
        descricao.appendChild(acoes)
        acoes.appendChild(btnMais)
        acoes.appendChild(quantidade)
        acoes.appendChild(btnMenos)
    }
}