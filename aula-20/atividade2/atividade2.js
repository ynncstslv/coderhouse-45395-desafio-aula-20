function calcular(operacao) {
	const num1 = parseFloat(document.getElementById('inputNum1').value);
	const num2 = parseFloat(document.getElementById('inputNum2').value);

	let resultado;

	switch (operacao) {
		case '+':
			resultado = num1 + num2;
			break;
		case '-':
			resultado = num1 - num2;
			break;
		case '*':
			resultado = num1 * num2;
			break;
		case '/':
			resultado = num1 / num2;
			break;
		default:
			resultado = 'Operação inválida!';
			break;
	}

	document.getElementById('resultado').textContent = `Resultado: ${resultado}`;
}
