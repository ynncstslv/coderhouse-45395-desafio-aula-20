// Array para armazenamento das tarefas
const tarefas = [];

// Função que adiciona tarefa
function adicionarTarefa() {
	const inputTarefa = document.getElementById('inputTarefa');
	const novaTarefa = inputTarefa.value.trim();

	if (novaTarefa !== '') {
		tarefas.push(novaTarefa);
		inputTarefa.value = '';
		console.log(`Tarefa adicionada: ${novaTarefa}`);
	}
}

// Função que exibe tarefa
function exibirTarefas() {
	console.log('Lista de Tarefas:');
	tarefas.forEach((tarefa, i) => {
		console.log(`${i + 1}. ${tarefa}`);
	});
}

// Event listener do botão Enviar
const btnEnviar = document.getElementById('btnEnviar');
btnEnviar.addEventListener('click', adicionarTarefa);

// Event listener do botão Visualizar
const btnVisualizar = document.getElementById('btnVisualizar');
btnVisualizar.addEventListener('click', exibirTarefas);
