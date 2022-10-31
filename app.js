
const dados = [
  "dado1",
  "dado2",
  "dado3",
  "dado4",
  "dado5",
  "dado6"
 ]

const img1 = document.getElementById("dado1")
const img2 = document.getElementById("dado2")
const img3 = document.getElementById("dado3")
const img4 = document.getElementById("dado4")
const img5 = document.getElementById("dado5")

let daditos = []

const tirar = document.getElementById("tirar")

tirar.addEventListener("click", iniciar)

function iniciar () {

randomIndex = Math.floor(Math.random() * dados.length)
random = dados[randomIndex]

randomIndex1 = Math.floor(Math.random() * dados.length)
random1 = dados[randomIndex1]

randomIndex2 = Math.floor(Math.random() * dados.length)
random2 = dados[randomIndex2]

randomIndex3 = Math.floor(Math.random() * dados.length)
random3 = dados[randomIndex3]

randomIndex4 = Math.floor(Math.random() * dados.length)
random4 = dados[randomIndex4]

img1.style.backgroundImage = `url('./imagenes/${random}.png')`;
img2.style.backgroundImage = `url('./imagenes/${random1}.png')`;
img3.style.backgroundImage = `url('./imagenes/${random2}.png')`;
img4.style.backgroundImage = `url('./imagenes/${random3}.png')`;
img5.style.backgroundImage = `url('./imagenes/${random4}.png')`;

daditos.push(random)
daditos.push(random1)
daditos.push(random2)
daditos.push(random3)
daditos.push(random4)








daditos.sort()

let unicosElementos = [];
let duplicados = [];
let contador = 1;

for(let i = 0; i < daditos.length; i++){
  if (daditos[i+1] === daditos[i]) {
contador++;
} else {
  unicosElementos.push(daditos[i])
  duplicados.push(contador)
  contador = 1;
 }
}

console.log(unicosElementos)
console.log(duplicados)

const info = document.getElementById("info")

for(let j = 0; j < unicosElementos.length; j++){
  let hola = unicosElementos[j]
  let cuenta = duplicados[j]
  chau = hola + " " + cuenta
}
 }






const restart = document.getElementById("restart")
restart.addEventListener("click", function(){
  location.reload()
})

const borrar = document.getElementById("reiniciar")
borrar.addEventListener("click", function(){
  img1.style.backgroundImage = ""
  img2.style.backgroundImage = ""
  img3.style.backgroundImage = ""
  img4.style.backgroundImage = ""
  img5.style.backgroundImage = ""
  daditos.splice(0, 5)
  console.log(daditos)
})

const añadir = document.getElementById("añadir")
añadir.addEventListener("click", function(){
let table = document.getElementById("formTask")
let row = table.insertRow(-1)
let newcell = row.insertCell(1)
newcell.textContent = "hola"
})





