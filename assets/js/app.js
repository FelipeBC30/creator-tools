const params = new URLSearchParams(window.location.search)

const toolSlug = params.get("tool")

const tool = Array.isArray(tools) ? tools.find(t => t.slug === toolSlug) : null

if(tool){

document.getElementById("tool-title").innerText = tool.nome

if(toolSlug === "baixar-reels"){
  document.title = "Baixar Reels Instagram Online Gratis"
}

if(toolSlug === "gerar-bio"){
  document.title = "Gerador de Bio Instagram"
}

if(toolSlug === "gerar-hashtags"){
  document.title = "Gerador de Hashtags Instagram"
}

}

if(toolSlug === "gerar-bio"){

document.getElementById("tool-container").innerHTML = `

<input id="tema" placeholder="Digite seu nicho">

<button onclick="gerarBio()">Gerar</button>

<p id="resultado"></p>

`

} else if(toolSlug === "baixar-reels") {

document.getElementById("tool-container").innerHTML = `
<p>Cole o link do Reels para iniciar o download (interface pronta para integrar API).</p>
<input placeholder="https://www.instagram.com/reel/...">
<button type="button">Baixar</button>
`

} else if(toolSlug === "gerar-hashtags") {

document.getElementById("tool-container").innerHTML = `
<p>Digite seu tema e gere hashtags relevantes.</p>
<input placeholder="Ex.: fitness, moda, marketing">
<button type="button">Gerar hashtags</button>
`

} else {

document.getElementById("tool-container").innerHTML = `<p>Ferramenta nao encontrada.</p>`

}

function gerarBio(){

let nicho = document.getElementById("tema").value

let bios = [

"Especialista em " + nicho,
"Conteudo diario sobre " + nicho,
"Dicas reais de " + nicho

]

let bio = bios[Math.floor(Math.random()*bios.length)]

document.getElementById("resultado").innerText = bio

}

if(typeof mostrarAfiliado === "function"){
  mostrarAfiliado()
}
