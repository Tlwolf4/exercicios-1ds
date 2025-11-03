// CRIE UMA LÓGICA ABAIXO
const prompt = require("prompt-sync")()

console.log("=== Sistema de Controle de Produção ===")

let dias = parseInt(prompt("Quantos dias deseja registrar? "))
let producao = []
let numero = 1
while (numero <= dias) {
  let pecasDia = parseInt(prompt(`Digite a quantidade produzida no dia ${numero}: `))
  producao.push(pecasDia)
  numero++
}

let total = 0
for (let i = 0; i < producao.length; i++) {
  total += producao[i]
}

let media = total / dias

let maior = producao[0]
let menor = producao[0]

for (let i = 1; i < producao.length; i++) {
  if (producao[i] > maior){
    maior = producao[i]
  }
  if (producao[i] < menor){
    menor = producao[i]
  }
}

console.log(`Maior produção: ${maior} (dia ${producao.indexOf(maior) + 1})`)
console.log(`Menor produção: ${menor} (dia ${producao.indexOf(menor) + 1})`)
producao.sort((a, b) => a - b)
console.log(`Ordem crescente: [ ${producao} ]`)
producao.sort((a, b) => b - a)
console.log(`Ordem descrescente: [ ${producao} ]`)

let metadeDoMaior = maior / 2

if (media >= metadeDoMaior) {
  console.log("Produção estável!")
} else {
  console.log("Produção abaixo do ideal.")
}