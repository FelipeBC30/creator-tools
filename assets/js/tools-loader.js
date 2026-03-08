const container = document.getElementById("tools-list")

if(container && Array.isArray(tools)){

tools.forEach(tool => {

let card = document.createElement("div")

card.className = "tool"

card.innerHTML = `

<h3>${tool.nome}</h3>

<p>${tool.descricao}</p>

<a href="tools/tool.html?tool=${tool.slug}">Abrir</a>

`

container.appendChild(card)

})

}
