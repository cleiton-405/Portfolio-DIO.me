const toggleTheme = document.getElementById("toggleTheme")
const rootHtml = document.documentElement
const accordionHeaders = document.querySelectorAll(".accordion__header")
const menuLinks = document.querySelectorAll(".menu__link")

function changeTheme(){ // Função para mudar o tema do site
    const currentTheme = rootHtml.getAttribute("data-theme")

    currentTheme === "dark" ? rootHtml.setAttribute("data-theme", "light"): rootHtml.setAttribute("data-theme", "dark")
    // Fazendo a pergunta, usando o operador ternário

    toggleTheme.classList.toggle("bi-piggy-bank") // Ao clicar ele muda o tema
    toggleTheme.classList.toggle("bi-piggy-bank") // Ao clicar ele muda o tema
}

toggleTheme.addEventListener('click', changeTheme) // Executando a função com o clique

accordionHeaders.forEach(header => {
  header.addEventListener("click", () => {
    const accordionItem = header.parentElement
    const accordionActive = accordionItem.classList.contains("active")

    accordionActive ? accordionItem.classList.remove("active") : accordionItem.classList.add("active")
  })
})

menuLinks.forEach(item => {
  item.addEventListener("click", () => {
    menuLinks.forEach(i => i.classList.remove("active"))
    item.classList.add("active")
  })
})