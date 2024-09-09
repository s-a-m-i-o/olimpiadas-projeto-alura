function pesquisar() {
    // Seleciona a seção onde os resultados serão exibidos
    let section = document.getElementById("resultados-pesquisa");

    let campoPesquisa = document.getElementById("campo-pesquisa").value

    //se o pampo campoPesquisa for uma string sem nada
    if(campoPesquisa == "") {
        section.innerHTML = "<h3>Digite o nome do atleta ou esporte</h3>"
        return
    }
    campoPesquisa = campoPesquisa.toLowerCase()

    // Cria uma string vazia para armazenar o HTML dos resultados
    let resultados = "";
    let titulo = "";
    let descricao = "";
    let tags = "";

    // Itera sobre cada dado da pesquisa e constrói o HTML
    for(let dado of dados) {
        titulo = dado.titulo.toLocaleLowerCase()
        descricao = dado.descricao.toLocaleLowerCase()
        tags = dado.tags.toLocaleLowerCase()
        // se titulo includes campoPesquisa
        if (titulo.includes(campoPesquisa) || dado.descricao.includes(campoPesquisa) || tags.includes(campoPesquisa)) {
            //cria um novo elemento
            resultados += `
            <div class="item-resultado">
                <h2><a href="#" target="_blank">${dado.titulo}</a></h2>
                <p class="descricao-meta">${dado.descricao}</p>
                <a href="${dado.link}" target="_blank">Mais informações</a>
            </div>
        `;
        }
    }

    if (!resultados){
        resultados = "<h3>Esse atleta / esporte não se encontra no nosso banco de dados!</h3>"
    }
    // Insere o HTML dos resultados na seção
    section.innerHTML = resultados;
}