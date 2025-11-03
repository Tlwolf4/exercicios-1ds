// CRIE UMA LÓGICA ABAIXO
const prompt = require("prompt-sync")()

console.log("Bem-vindo a TechFactory")
console.log("Aqui nós realizamos um relatório completo da produção diária")
let dias = 0 
let producao = []
let total = 0

dias++
let quantosDias = (parseInt(prompt("Quantos dias deseja simular? ")))
for(let i = 0; i < quantosDias; i++){
    producao.push(parseInt(prompt(`Digite a quantidade produzida no dia ${i + 1}:`)))
}
for(let inicio = 0; inicio < producao.length; inicio++ ){
    total += producao[inicio]
}
 
let maior = producao[0]
let menor = producao[0]
for(let maiorOuMenor = 1; maiorOuMenor < producao.length; maiorOuMenor++){
    if(producao[maiorOuMenor] > maior){
        maior = producao[maiorOuMenor]
    }
    if(producao[maiorOuMenor] < menor){
        menor = producao[maiorOuMenor]
    }
}

 let mediaDeProducao = total / producao.length

console.log(`
--- Relatório de produção ---
Produções registradas: ${producao}
Total produzido: ${total}
Média diária: ${mediaDeProducao}
Maior produção: Maior produção: ${maior} ( dia ${producao.indexOf(maior) + 1} )
Menor produção: Menor produção: ${menor} ( dia ${producao.indexOf(menor) + 1} )
Ordem crescente: ${producao.sort((a, b) => a - b)}
Ordem decrescente: ${producao.sort((a, b) => b - a)}
`)
    if( mediaDeProducao >= total / 2){
        console.log("Produção estável!")
    }else{
        console.log("Produção abaixo do ideal.")
    }
