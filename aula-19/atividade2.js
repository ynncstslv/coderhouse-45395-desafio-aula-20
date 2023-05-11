/**
 *  No mesmo código criado anteriormente insira 2 funções:
 *
 *  . Uma função para fazer a subtração de 2 números. Para casos em que o primeiro número é menor que o segundo, crie uma condição que retorne a mensagem "Não foi possível subtrair";
 *  . Uma função para fazer a divisão de 2 números. Para casos em que o segundo número é menor que zero, crie uma condição que retorne a mensagem "Não foi possível dividir";
 *
 *  Faça alguns testes chamando sua função com diferentes valores para garantir seu funcionamento.
 */

function subtracao(num1, num2) {
	if (num1 < num2) {
		return 'Não foi possível subtrair';
	} else {
		return num1 - num2;
	}
}

console.log(subtracao(10, 3));
console.log(subtracao(121832, 1721));
console.log(subtracao(1, 984));

function divisao(num1, num2) {
	if (num2 < 0) {
		return 'Não foi possível dividir';
	} else {
		return num1 / num2;
	}
}

console.log(divisao(50, 5));
console.log(divisao(33, 2));
console.log(divisao(20, -2));
