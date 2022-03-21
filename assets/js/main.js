let dataProdutos = [
    {
        img: "./assets/imgs/Men-Jacket-Front-Black.png",
        tag: 'Jaquetas',
        titulo: 'Lightweight Jacket',
        sobre: "Adicione um pouco de energia ao seu guarda-roupa de inverno com esta jaqueta vibrante...",
        custo: 100,
        quantidade: 1,
        id: 'jaqueta1',
        busca: ['preto','black','jaquetas','blusa','frio','blusa de frio','inverno','Lightweight Jacket']
    },
    {
        img: './assets/imgs/Men-Hat-Black.png',
        tag: 'Acessórios',
        titulo: 'Black Hat',
        sobre: 'O gorro Next.js chegou! Esta beldade bordada tem um ajuste confortável que garante que...',
        custo: 100,
        quantidade: 1,
        id: 'tag_acessorio1',
        busca: ['preto','black','hat','gorro','frio']
    },
    {
        img: './assets/imgs/Surgical-Mask-Black.png',
        tag: 'Acessórios',
        titulo: 'Mask',
        sobre: 'Esta máscara facial durável é feita de duas camadas de tecido tratado e possui presilhas...',
        custo: 40,
        quantidade: 1,
        id: 'tag_acessorio2',
        busca: ['preto','black','mascara','frio','máscara','saúde','Mask','facial']
    },
    {
        img: './assets/imgs/Men-TShirt-Black-Front.png',
        tag: 'Camisetas',
        titulo: 'T-Shirt',
        sobre: 'Esta t-shirt é imprescindível no seu guarda-roupa, combinando o caimento intemporal de...',
        custo: 100,
        quantidade: 1,
        id: 'tag_camiseta1',
        busca: ['preto','black','camisa','camiseta','esporte','T-Shirt','t-shirt','shirt']
    },
    {
        img: './assets/imgs/Men-TShirt-Short-White.png',
        tag: 'Camisetas',
        titulo: 'Short-Sleeve T-Shirt',
        sobre: 'Agora você encontrou a camiseta básica do seu guarda-roupa. É feito de um mais grosso...',
        custo: 100,
        quantidade: 1,
        id: 'tag_camiseta2',
        busca: ['Short-Sleeve T-Shirt','branca','básica','basica','camisa','camiseta','esporte','T-Shirt','t-shirt','shirt']
    },
    {
        img: './assets/imgs/Men-Jacket-ChampionPackable-Black.png',
        tag: 'Jaquetas',
        titulo: 'Champion Packable Jacket',
        sobre: 'Proteja-se dos elementos com esta jaqueta embalável Champion. Esta jaqueta de poliést...',
        custo: 100,
        quantidade: 1,
        id: 'tag_jaqueta2',
        busca: ['preto','black','frio','Champion Packable Jacket','jaquetas','blusa','frio','blusa de frio','inverno']
    },
    {
        img: './assets/imgs/Men-Chain-Gold.png',
        tag: 'Acessórios',
        titulo: 'Colar de ouro',
        sobre: 'Colar corrente groumet ouro 18k, para você ostentar nas festinhas...',
        custo: 299,
        quantidade: 1,
        id: 'tag_acessorio3',
        busca: ['Colar de ouro','ouro','banhado','18','ostentação','Acessórios','colar','corrente']
    },
    {
        img: './assets/imgs/Men-tenis-adidas-black.png',
        tag: 'Calçados',
        titulo: 'Tênis Ardidas',
        sobre: 'Tênis que te faz correr 80% mais rápido, com tecnologia de ponta anti-fedor...',
        custo: 699,
        quantidade: 1,
        id: 'tag_calcado1',
        busca: ['preto','black','calçados','tênis','tenis','ardidas','Tênis Ardidas','esporte','corrida','correr']
    },
    {
        img: './assets/imgs/Men-tenis-hillfinger-black.png',
        tag: 'Calçados',
        titulo: 'Tênis Baladinha',
        sobre: 'Se você quer paracer boizinho pode usar este tênis!',
        custo: 999,
        quantidade: 1,
        id: 'tag_calcado2',
        busca: ['preto','black','calçados','tenis','tênis','balada','tênis baladinha','ostentação']
    }
];




const semProdutos = [
    {
        img: "./assets/imgs/Emoji-triste.png",
    tag: 'Fora de categoria',
    titulo: 'Não há produtos compatíveis',
    sobre: "Não há produtos que coincidam com sua busca, tente outras palavras",
    custo: "",
    }
]

