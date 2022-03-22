let pesoPeca = 180
let listaPecas = "Cabeçote, vela, tombo do freio, freio, filtro de combustivel, filtro de oleo"
let nomePeca = "vela"

if (pesoPeca > 100) {
    console.log ("Podemos cadastras a peça")
} else {
   console.log ("Peso abaixo de 100 gramas, inviavel para cadastra")
}
if (listaPecas.length >= 10) {
    console.log ("Capacidade máxima atingida, pode continuar o cadastro")
} else {
    console.log ("Numero de peças abaixo da capaciade de segurança")
}
if (nomePeca.length > 3) {
    console.log("Nome correto, finalize o cadastro")
} else {
    console.log("Nome inválido, renome essa peça")
}

