// DESAFIO: CALCULADORA DE PARTIDAS RANKEADAS

// 1. FUNÇÃO: Recebe vitórias e derrotas, calcula o saldo e define o nível
	function calcularRank(vitorias, derrotas) {
   	 let saldoVitorias = vitorias - derrotas;
   	 let nivel = "";

    // 2. ESTRUTURA DE DECISÃO: baseada na quantidade de VITÓRIAS
    if (vitorias <= 10) {
        nivel = "Ferro";
    } else if (vitorias >= 11 && vitorias <= 20) {
        nivel = "Bronze";
    } else if (vitorias >= 21 && vitorias <= 50) {
        nivel = "Prata";
    } else if (vitorias >= 51 && vitorias <= 80) {
        nivel = "Ouro";
    } else if (vitorias >= 81 && vitorias <= 90) {
        nivel = "Diamante";
    } else if (vitorias >= 91 && vitorias <= 100) {
        nivel = "Lendário";
    } else {
        nivel = "Imortal"; // Para 101 ou mais vitórias
    }

    // Retorna o saldo e o nível para serem armazenados em uma variável fora da função
    return {
        saldo: saldoVitorias,
        nivel: nivel
    };
}

// 3. MATRIZ
// Uma lista de jogadores para testar diferentes cenários usando um laço
const dadosJogadores = [
    { vitorias: 45, derrotas: 15 },  // Exemplo Prata
    { vitorias: 105, derrotas: 20 }, // Exemplo Imortal
    { vitorias: 8, derrotas: 2 }     // Exemplo Ferro
];

// O laço de repetição percorre a lista de testes
for (let i = 0; i < dadosJogadores.length; i++) {
    let jogadorAtual = dadosJogadores[i];

    // O resultado da função é retornado e armazenado nesta variável
    let resultadoDoCalculo = calcularRank(jogadorAtual.vitorias, jogadorAtual.derrotas);

    // 4. SAÍDA: Exibe a mensagem no formato solicitado
    console.log(`O Herói tem de saldo de ${resultadoDoCalculo.saldo} está no nível de ${resultadoDoCalculo.nivel}`);
}