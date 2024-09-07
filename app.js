function pesquisar() {
    let section = document.getElementById('resultados-pesquisa');
    let campoPesquisaTexto = document.getElementById('campo-pesquisa-texto').value;
    let campoPesquisaKcalMin = document.getElementById('campo-pesquisa-kcal-min').value;
    let campoPesquisaKcalMax = document.getElementById('campo-pesquisa-kcal-max').value;

    if (campoPesquisaTexto == "" && campoPesquisaKcalMin == "" && campoPesquisaKcalMax == ""){
        section.innerHTML = `<p class="erro-pesquisa">Pesquisa não realizada. Preencha pelo menos um dos campos para realizar a busca.</p>`
        return
    }

    campoPesquisaTexto = campoPesquisaTexto.toLowerCase()


    if (campoPesquisaKcalMin == "") {
        campoPesquisaKcalMin = 0;
    }

    if (campoPesquisaKcalMax == "") {
        campoPesquisaKcalMax = 99999999;
    }

    let resultados = "";
    let nome = "";
    let ingredientes = "";
    let tags = "";
    let tipo = "";
    
    for (let dado of dados) {
        nome = dado.nome.toLowerCase()
        ingredientes = dado.ingredientes.toLowerCase()
        tags = dado.tags.toLowerCase()
        tipo = dado.tipo.toLowerCase()
        if ((nome.includes(campoPesquisaTexto) || ingredientes.includes(campoPesquisaTexto) || tipo.includes(campoPesquisaTexto) || tags.includes(campoPesquisaTexto)) &&
            (dado.kcal >= campoPesquisaKcalMin && dado.kcal <= campoPesquisaKcalMax)) {

            resultados += `
            <div class="item-resultado">
            <h2>${dado.nome}</h2>
            <p class="descricao-meta"><strong>Ingredientes:</strong> ${dado.ingredientes}</p>
            <p class="descricao-meta">${dado.kcal} calorias por porção (${dado.porcao}).</p>
                <div class="receita-detalhes" style="display: none;">
                <p></p>
                    <p class="descricao-meta"><strong>Medidas:</strong> ${dado.medidas}</p>
                    <p></p>
                    <p class="descricao-meta"><strong>Preparo:</strong> ${dado.preparo}</p>
                </div>
            <button class ="botao-receita" onclick="toggleReceita(this)">Ver receita</button>
            <a href="tabela.html" target="_blank"> Ver tabela nutricional</a>
            </div> ` 
            ;      
        };   
        
    if (!resultados) {
        resultados = `<p class="descricao-meta">Nenhum resultado encontrado.</p>`

    }
    section.innerHTML = resultados

    };
};

function toggleReceita(botao) {
    const itemResultado = botao.parentNode;
    const detalhesReceita = itemResultado.querySelector('.receita-detalhes');
    detalhesReceita.style.display = detalhesReceita.style.display === 'none' ? 'block' : 'none';
};

