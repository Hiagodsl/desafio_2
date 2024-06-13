function  calculoRank(vitorias,derrotas){

    rankCal = vitorias - derrotas  
    return rankCal

}

let derrotas = 5
let vitorias = 10
let rank = calculoRank(vitorias,derrotas)

if(rank <10){
    console.log (`O heroi tem de saldo ${rank} está no nível de ferro`)
}else if (rank => 11 || rank <= 20){
    console.log (`O heroi tem de saldo ${rank} está no nível de Bronze`)
}else if (rank => 21 || rank <= 50){
    console.log (`O heroi tem de saldo ${rank} está no nível de Prata`)
}else if (rank => 51 || rank <= 80){
    console.log (`O heroi tem de saldo ${rank} está no nível de Ouro`)
}else if (rank => 81 || rank <= 90){
    console.log (`O heroi tem de saldo ${rank} está no nível de Diamante`)
}else if (rank => 91 || rank <= 100){
    console.log (`O heroi tem de saldo ${rank} está no nível de Lendário`)
}else if (rank => 101){
    console.log (`O heroi tem de saldo ${rank} está no nível de Imortal`)
}

