const afiliados = [

{
texto:"Edite seus videos como profissional",
link:"https://seulink.com"
},

{
texto:"Aprenda a crescer no Instagram",
link:"https://seulink.com"
}

]

function mostrarAfiliado(){

let random = afiliados[Math.floor(Math.random()*afiliados.length)]

const el = document.getElementById("afiliado")
if(!el){
  return
}

el.innerHTML =

`<a href="${random.link}" target="_blank" rel="nofollow sponsored noopener">

${random.texto}

</a>`

}
