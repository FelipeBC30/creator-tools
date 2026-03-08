const afiliados = [

{
nome:"Editor de Vídeo",
link:"https://link-afiliado.com",
texto:"Melhore seus vídeos com esse editor profissional"
},

{
nome:"Curso Instagram",
link:"https://link-afiliado2.com",
texto:"Aprenda a crescer no Instagram"
}

]

function mostrarAfiliado(){

let random = afiliados[Math.floor(Math.random()*afiliados.length)]

document.getElementById("afiliado").innerHTML =

`<a href="${random.link}" target="_blank">

${random.texto}

</a>`

}
