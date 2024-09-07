let dados = [

    {
        nome: "Mousse de Chocolate Light",
        ingredientes: "Leite desnatado, chocolate em pó, adoçante culinário, gelatina em pó sem sabor, água, leite condensado light, cacau em pó",
        tipo: "doce",
        medidas: ["1 xícara de leite desnatado", "3 colheres de sopa de chocolate em pó", "2 colheres de sopa de adoçante culinário", "1 envelope de gelatina em pó sem sabor", "1/2 xícara de água", "1 lata de leite condensado light", "2 colheres de sopa de cacau em pó"],
        preparo: ["Hidrate a gelatina na água.", "Leve ao fogo o leite, o chocolate em pó e o adoçante até ferver.", "Adicione a gelatina hidratada e misture bem.", "Misture o leite condensado light e o cacau em pó.", "Leve à geladeira por pelo menos 2 horas."],
        porcao: "1 porção",
        kcal: 120,
        tags: "Light geladeira"
    },
    {
        nome: "Muffins de Banana com Aveia",
        ingredientes: "Bananas maduras, ovo, óleo, açúcar mascavo, farinha de aveia, fermento em pó, bicarbonato de sódio, passas ou gotas de chocolate",
        tipo: "doce",
        medidas: ["2 bananas maduras amassadas", "1 ovo", "1/2 xícara de óleo", "1 xícara de açúcar mascavo", "1 xícara de farinha de aveia", "1 colher de chá de fermento em pó", "1/2 colher de chá de bicarbonato de sódio", "1/2 xícara de passas ou gotas de chocolate"],
        preparo: ["Pré-aqueça o forno a 180°C.", "Misture todos os ingredientes em uma tigela.", "Divida a massa em forminhas de muffin.", "Asse por 20-25 minutos."],
        porcao: "1 muffin",
        kcal: 150,
        tags: "assar"
    },
    {
        nome: "Picolé de Frutas Vermelhas",
        ingredientes: "Frutas vermelhas mistas (morango, framboesa, mirtilo), iogurte natural desnatado, mel",
        tipo: "doce",
        medidas: ["2 xícaras de frutas vermelhas mistas (morango, framboesa, mirtilo)", "1/2 xícara de iogurte natural desnatado", "1 colher de sopa de mel"],
        preparo: ["Bata todos os ingredientes no liquidificador.", "Distribua em forminhas para picolé e leve ao freezer por pelo menos 4 horas."],
        porcao: "1 picolé",
        kcal: 80,
        tags: "freezer gelado geladeira picole"
    },
    {
        nome: "Bolo de Cenoura com Cobertura de Iogurte",
        ingredientes: "Cenouras, ovos, açúcar, óleo, farinha de trigo, fermento em pó, iogurte natural desnatado, extrato de baunilha, adoçante",
        tipo: "doce",
        medidas: ["2 cenouras médias raladas", "3 ovos", "1 xícara de açúcar", "1/2 xícara de óleo", "1 xícara de farinha de trigo", "1 colher de chá de fermento em pó", "1/2 xícara de iogurte natural desnatado para a cobertura", "1 colher de chá de extrato de baunilha", "Adoçante a gosto"],
        preparo: ["Pré-aqueça o forno a 180°C.", "Bata os ovos com o açúcar até obter um creme claro.", "Adicione o óleo, a cenoura ralada e a farinha com o fermento.", "Asse por 30-35 minutos.", "Para a cobertura, misture o iogurte, a baunilha e o adoçante."],
        porcao: "1 fatia",
        kcal: 200,
        tags: "fatia forno"
    },
    {
        nome: "Mousse de Maracujá Light",
        ingredientes: "Polpas de maracujá, leite condensado light, gelatina em pó sem sabor, água",
        tipo: "doce",
        medidas: ["2 polpas de maracujá", "1 lata de leite condensado light", "1 envelope de gelatina em pó sem sabor", "1/4 de xícara de água"],
        preparo: ["Hidrate a gelatina na água.", "Leve ao fogo a polpa de maracujá e a gelatina hidratada até dissolver.", "Misture o leite condensado light.", "Leve à geladeira por pelo menos 2 horas."],
        porcao: "1 porção",
        kcal: 130,
        tags: "light fogo geladeira"
    },
    {
        nome: "Brownie de Chocolate",
        ingredientes: "Chocolate meio amargo, manteiga, açúcar, ovos, farinha de trigo, cacau em pó",
        tipo: "doce",
        medidas: ["200g de chocolate meio amargo", "100g de manteiga", "1 xícara de açúcar", "2 ovos", "1/2 xícara de farinha de trigo", "1/4 xícara de cacau em pó"],
        preparo: ["Derreta o chocolate e a manteiga em banho-maria.", "Bata os ovos com o açúcar. Adicione o chocolate derretido e misture.", "Envolva a farinha e o cacau em pó.", "Asse em forma untada por 25-30 minutos."],
        porcao: "1 fatia",
        kcal: 350,
        tags: "banho-maria banho maria assar forno"
    },
    {
        nome: "Bolo de Cenoura com Cobertura",
        ingredientes: "Cenouras, ovos, açúcar, óleo, farinha de trigo, fermento em pó, canela em pó, cobertura de chocolate",
        tipo: "doce",
        medidas: ["3 cenouras médias raladas", "3 ovos", "1 xícara de açúcar", "1/2 xícara de óleo", "1 xícara de farinha de trigo", "1 colher de chá de fermento em pó", "1 colher de chá de canela em pó", "cobertura de chocolate pronta"],
        preparo: ["Pré-aqueça o forno a 180°C.", "Bata os ovos com o açúcar. Adicione os demais ingredientes e misture.", "Asse por 30-35 minutos.", "Cubra com a cobertura de chocolate após esfriar."],
        porcao: "1 fatia",
        kcal: 300,
        tags: "fatia assar forno"
    },
    {
        nome: "Cheesecake de Morango",
        ingredientes: "Biscoito maisena, manteiga, cream cheese, açúcar, ovos, extrato de baunilha, morangos",
        tipo: "doce",
        medidas: ["200g de biscoito maisena", "100g de manteiga", "500g de cream cheese", "1 xícara de açúcar", "3 ovos", "1 colher de chá de extrato de baunilha", "3 xícaras de morangos picados"],
        preparo: ["Triture os biscoitos e misture com a manteiga derretida. Forre o fundo de uma forma.", "Bata o cream cheese com o açúcar e os ovos. Adicione a baunilha.", "Despeje sobre a base de biscoito e asse em banho-maria por 1 hora.", "Decore com os morangos."],
        porcao: "1 fatia",
        kcal: 400,
        tags: "banho-maria banho maria"
    },
    {
        nome: "Pudim de Leite Condensado",
        ingredientes: "Leite condensado, leite integral, ovos, açúcar",
        tipo: "doce",
        medidas: ["1 lata de leite condensado", "1 lata de leite integral (use a lata de leite condensado como medida)", "6 ovos", "1/2 xícara de açúcar"],
        preparo: ["Bata todos os ingredientes no liquidificador.", "Coloque em uma forma caramelizada e leve ao forno em banho-maria por 1 hora.", "Leve à geladeira por algumas horas antes de servir."],
        porcao: "1 fatia",
        kcal: 320,
        tags: "liquidificador forno geladeira"
    },
    {
        nome: "Torta de Limão",
        ingredientes: "Biscoito maisena, manteiga, leite condensado, suco de limão, ovos, raspas de limão",
        tipo: "doce",
        medidas: ["200g de biscoito maisena", "100g de manteiga", "1 lata de leite condensado", "1 xícara de suco de limão", "3 ovos", "raspas de 1 limão"],
        preparo: ["Triture os biscoitos e misture com a manteiga derretida. Forre o fundo de uma forma.", "Bata o leite condensado, o suco de limão, os ovos e as raspas de limão.", "Despeje sobre a base de biscoito e asse em forno pré-aquecido por 30-35 minutos."],
        porcao: "1 fatia",
        kcal: 380,
        tags: "forno"
    },
    {
        nome: "Salada Caprese",
        ingredientes: "Tomates cereja, mussarela de búfala, manjericão fresco, azeite extra virgem, sal e pimenta do reino",
        tipo: "salgado",
        medidas: ["10 tomates cereja cortados ao meio", "125g de mussarela de búfala fatiada", "1 maço de manjericão fresco", "2 colheres de sopa de azeite extra virgem", "sal e pimenta do reino a gosto"],
        preparo: ["Em um prato, alterne as fatias de tomate e mussarela.", "Regue com azeite, tempere com sal e pimenta.", "Decore com folhas de manjericão."],
        porcao: "1 porção",
        kcal: 200,
        tags: "fácil facil rápido rapido"
    },
    {
        nome: "Salmão Grelhado com Legumes",
        ingredientes: "Salmão fresco, brócolis, cenoura, azeite extra virgem, limão, sal e pimenta do reino",
        tipo: "salgado",
        medidas: ["2 filés de salmão", "1 maço de brócolis", "1 cenoura média", "2 colheres de sopa de azeite extra virgem", "suco de 1 limão", "sal e pimenta do reino a gosto"],
        preparo: ["Tempere o salmão com sal, pimenta e limão.", "Cozinhe o brócolis e a cenoura no vapor.", "Grelhe o salmão em uma frigideira antiaderente.", "Sirva o salmão com os legumes."],
        porcao: "1 porção",
        kcal: 250,
        tags: "salgada vapor frigideira"
    },
    {
        nome: "Omelete de Espinafre",
        ingredientes: "Ovos, espinafre, queijo cottage, leite, sal e pimenta do reino",
        tipo: "salgado",
        medidas: ["3 ovos", "1 xícara de espinafre picado", "1/2 xícara de queijo cottage", "2 colheres de sopa de leite", "sal e pimenta do reino a gosto"],
        preparo: ["Bata os ovos com o leite, sal e pimenta.", "Refogue o espinafre.", "Misture o espinafre e o queijo cottage aos ovos batidos.", "Cozinhe em uma frigideira antiaderente."],
        porcao: "1 omelete",
        kcal: 220,
        tags: "salgada refogar refogue"
    },
    {
        nome: "Sopa de Legumes",
        ingredientes: "Cenoura, batata, abobrinha, cebola, alho, caldo de legumes, azeite extra virgem, sal e pimenta do reino",
        tipo: "salgado",
        medidas: ["1 cenoura picada", "1 batata picada", "1 abobrinha picada", "1 cebola picada", "2 dentes de alho picados", "1 litro de caldo de legumes", "2 colheres de sopa de azeite extra virgem, sal e pimenta do reino a gosto"],
        preparo: ["Refogue a cebola e o alho no azeite. Adicione os legumes e refogue por mais alguns minutos.", "Cubra com o caldo de legumes e cozinhe até os legumes estarem macios.", "Tempere com sal e pimenta."],
        porcao: "1 prato fundo",
        kcal: 280,
        tags: "salgada refogar refogue"
    },
    {
        nome: "Sanduíche de Atum Light",
        ingredientes: "Pão integral, atum em água, maionese light, alface, tomate",
        tipo: "salgado",
        medidas: ["2 fatias de pão integral", "1 lata de atum em água", "2 colheres de sopa de maionese light", "alface e tomate a gosto"],
        preparo: ["Misture o atum com a maionese light.", "Monte o sanduíche com o pão integral, o atum e os legumes."],
        porcao: "1 sanduíche",
        kcal: 250,
        tags: "salgada fácil facil light"
    },
    {
        nome: "Wrap de Frango com Vegetais",
        ingredientes: "Tortilha de trigo integral, frango grelhado desfiado, alface, tomate, pepino, azeite extra virgem, limão",
        tipo: "salgado",
        medidas: ["1 tortilla de trigo integral", "100g de frango grelhado desfiado", "1 folha de alface", "1/2 tomate picado", "1/4 pepino picado", "1 colher de sopa de azeite extra virgem, suco de 1/2 limão"],
        preparo: ["Misture o frango desfiado com o azeite e o suco de limão.", "Monte o wrap com a tortilla, o frango, os legumes e tempere a gosto."],
        porcao: "1 wrap",
        kcal: 180,
        tags: "salgada desfie desfiar"
    }

];