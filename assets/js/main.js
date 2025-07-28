const toggleTheme = document.getElementById("toggleTheme")
const rootHtml = document.documentElement
const accordionHeaders = document.querySelectorAll(".accordion__header")
const menuLinks = document.querySelectorAll(".menu__link")

function changeTheme(){ // Função para mudar o tema do site
    const currentTheme = rootHtml.getAttribute("data-theme")

    currentTheme === "dark" ? rootHtml.setAttribute("data-theme", "light"): rootHtml.setAttribute("data-theme", "dark")
    // Fazendo a pergunta usando o operador ternário

    toggleTheme.classList.toggle("bi-piggy-bank") // Ao clicar ele muda o tema
    toggleTheme.classList.toggle("bi-piggy-bank") // Ao clicar ele muda o tema
}

toggleTheme.addEventListener('click', changeTheme) // Executando a função com o clique

accordionHeaders.forEach(header =>{ // Lista de cabeçalhos de seções de acordeão
    header.addEventListener("click", () =>{ // Evento de clique
      const accordionItem = header.parentElement // Pega o elemento pai do cabeçalho
      const accordionActive = accordionItem.classList.contains("active")
      // Verifica se o item já está ativo

      accordionActive ? accordionItem.classList.remove("active") : accordionItem.classList.add("active") // Fazendo a pergunta usando o operador ternário
  })
})

menuLinks.forEach(item =>{ // Itera sobre todos os itens de menu 
    item.addEventListener("click", () =>{ // Evento de clique
      menuLinks.forEach(i => i.classList.remove("active")) // Remove a classe "active"
      item.classList.add("active") // Adiciona a classe "active" ao item que foi clicado
      })
})