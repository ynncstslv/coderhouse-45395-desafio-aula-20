/**
 *  Crie um array com pelo menos 5 objetos em que cada objeto é um alimento que pode ser uma fruta, uma verdura ou um legume.
 *
 *  Cada alimento deve ter 4 propriedades: nome, cor, peso e o tipo (fruta, verdura ou legume).
 *
 *  Usando o console.log exiba no terminal o array de alimentos que foi criado.
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

console.log(Alimentos);
