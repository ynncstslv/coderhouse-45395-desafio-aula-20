/**
 *  Usando os dados inseridos anteriormente:
 *
 *  . Crie uma função que exiba no terminal apenas o nome de cada uma das frutas:
 *      . Use o FOREACH para percorrer o array;
 *
 *  . Crie uma função que mostre no console a quantidade de alimentos de cada tipo:
 *      . Crie uma variável que funcionará como um contador para cada tipo;
 *      . Use o FOREACH para percorrer o array;
 *      . Use o IF para verificar o tipo do alimento;
 *      . Some 1 no contador referente ao tipo analisado;
 */

const Fruta1 = {
	nome: 'Banana',
	cor: 'Amarelo',
	peso: 100,
	tipo: 'Fruta',
};

const Fruta2 = {
	nome: 'Maçã',
	cor: 'Vermelho',
	peso: 100,
	tipo: 'Fruta',
};

const Verdura1 = {
	nome: 'Alface',
	cor: 'Verde',
	peso: 20,
	tipo: 'Verdura',
};

const Verdura2 = {
	nome: 'Cenoura',
	cor: 'Laranja',
	peso: 20,
	tipo: 'Verdura',
};

const Legume1 = {
	nome: 'Berinjela',
	cor: 'Roxo',
	peso: 50,
	tipo: 'Legume',
};

const Alimentos = [Fruta1, Fruta2, Verdura1, Verdura2, Legume1];

function nomeDasFrutas() {
	Alimentos.forEach((alimento) => {
		if (alimento.tipo === 'Fruta') {
			console.log(alimento.nome);
		}
	});
}

nomeDasFrutas();

function alimentosPorTipo() {
	let countFrutas = 0;
	let countVerduras = 0;
	let countLegumes = 0;

	Alimentos.forEach((alimento) => {
		if (alimento.tipo === 'Fruta') {
			countFrutas++;
		} else if (alimento.tipo === 'Verdura') {
			countVerduras++;
		} else if (alimento.tipo === 'Legume') {
			countLegumes++;
		}
	});

	console.log(`Quantidade de Frutas: ${countFrutas}`);
	console.log(`Quantidade de Verduras: ${countVerduras}`);
	console.log(`Quantidade de Legumes: ${countLegumes}`);
}

alimentosPorTipo();
