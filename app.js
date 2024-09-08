

function buscar() {
    
 let section = document.getElementById("resultados-pesquisa");

 let campoPesquisa = document.getElementById("campo-pesquisa").value;

 if (!campoPesquisa) {
    section.innerHTML = "<p>Pesquisa Vazia. Digite o nome do atleta ou esporte!</p>"
    return
 };
  
 campoPesquisa = campoPesquisa.toLowerCase();

 let resultados = "";

 let titulo = "";
 let descricao = "";
 let tags = "";

  for (let dado of dados) {
     titulo = dado.titulo.toLocaleLowerCase();
     descricao= dado.descricao.toLocaleLowerCase();
     tags = dado.tags.toLocaleLowerCase();
    
      if (titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa) || tags.includes(campoPesquisa)) 
      {
         resultados += 
            `
            <div class="item-resultado" >
                 <h2>
                        <a href="#" target="_blank">${dado.titulo}</a>
                 </h2>
                 <p class="descricao-meta"> ${dado.descricao}</p>
                 <a href="${dado.link}" target="_blank" >Mais informações </a>
            </div>
    
                
        `;
        
     } 
     if(!resultados) { resultados = "<p>Nada encontrado</p>";};
     
    } 
  
    section.innerHTML = resultados

    
}


